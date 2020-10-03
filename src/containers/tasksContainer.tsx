import { observer } from "mobx-react";
import React from "react";
import TaskComponent from "../components/taskComponent";
import Task from "../models/task.models";
import rootStores from "../stores";
import { TASKS_STORE } from "../stores/storesKeys";

const tasksStore = rootStores[TASKS_STORE];

interface IProps {}

interface IState {
  currentItem: {
    text: string;
    key: number;
  };
}

@observer
export default class TaskContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentItem: {
        text: "",
        key: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <header>
          {
            //TODO: extract to external component (+ state) */
          }
          <form
            id="to-do-form"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">
              Add Task
            </button>
          </form>
        </header>
        {tasksStore.reveresedTodoTasks.map((task: Task) => {
          return (
            <TaskComponent
              task={task}
              handleOnClick={() => this.handleOnClick(task)}
            />
          );
        })}
        {tasksStore.reveresedFinishedTasks.map((task: Task) => {
          return (
            <TaskComponent
              task={task}
              handleOnClick={() => this.handleOnClick(task)}
            />
          );
        })}
      </div>
    );
  }

  private displayTodo() {
    var todoTasks = tasksStore.reveresedTodoTasks;
    return todoTasks.map((task: Task) => {
      return (
        <TaskComponent
          task={task}
          handleOnClick={() => this.handleOnClick(task)}
        />
      );
    });
  }
  private displayFinished() {
    var todoTasksFiniehed = tasksStore.reveresedFinishedTasks;
    return todoTasksFiniehed.map((task: Task) => {
      return (
        <TaskComponent
          task={task}
          handleOnClick={() => this.handleOnClick(task)}
        />
      );
    });
  }

  private handleInput = (e: any) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  private handleOnClick(task: Task) {
    if (task.getIsDone) {
      tasksStore.removeTask(task);
    }else{
    tasksStore.doneTask(task);
    }
  }

  private handleSubmit= async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if(this.state.currentItem.text !== "")
      {
        tasksStore.addTask(
        new Task(this.state.currentItem.text, this.state.currentItem.key)
      );
      this.setState({
        currentItem : {
          text : "",
          key : 0
        }
      });
    }
  }
}
