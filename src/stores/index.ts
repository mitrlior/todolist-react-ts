import { TASKS_STORE } from "./storesKeys";
import TasksStore from "./tasksStore";

const tasksStore = new TasksStore();

const rootStores = {
  [TASKS_STORE]: tasksStore,
};

export default rootStores;
