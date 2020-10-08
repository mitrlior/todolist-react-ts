import { observer } from "mobx-react";
import React from "react";
import TaskComponent from "../components/taskComponent";
import Task from "../models/task.models";
import rootStores from "../stores";
import { TASKS_STORE } from "../stores/storesKeys";
import "./TaskContainer.css"

interface IProps {}

interface IState {
  currentItem: {
    text: string;
    key: number;
  };
}
@observer
export default class TaskContainer extends React.Component<IProps, IState> {
  tasksStore = rootStores[TASKS_STORE];
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
      <div className="App">
          {
            //TODO: extract to external component (+ state) */
          }
          <form id="to-do-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add Task</button>
          </form>
        {this.tasksStore.reveresedTodoTasks.map((task: Task) => {
          return (
            <TaskComponent
              task={task}
              handleOnClick={() => this.handleOnClick(task)}
            />
          );
        })}
        { this.tasksStore.reveresedFinishedTasks.map((task: Task) => {
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
    var todoTasks = this.tasksStore.reveresedTodoTasks;
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
    var todoTasksFiniehed = this.tasksStore.reveresedFinishedTasks;
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
  }
  private handleOnClick(task: Task) {
    if (task.getIsDone) {
      this.tasksStore.removeTask(task);
    } else {
      this.tasksStore.doneTask(task);
    }
  }

  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (this.state.currentItem.text !== "") {
      this.tasksStore.addTask(
        new Task(this.state.currentItem.text, this.state.currentItem.key)
      );
      this.setState({
        currentItem: {
          text: "",
          key: 0,
        },
      });
    }
  }
}
