import { BackgroundServiceClient } from "./webworkers/BackgroundServiceClient";
import { backgroundTasks } from "./MyService.background";
import MyBackgroundService from "./MyService.background?worker";

console.log(MyBackgroundService)
export class MyService extends BackgroundServiceClient<typeof backgroundTasks> {
  constructor() {
    super(new MyBackgroundService());
  }

  fetchTodos() {
    return this.run("fetchTodos");
  }

  fetchPosts() {
    return this.run("fetchPosts");
  }
}
