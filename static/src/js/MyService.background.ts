import { BackgroundService } from "./webworkers/BackgroundService";

interface Todo {
	"userId": number;
	"id": number;
	"title": string;
	"completed": boolean;
}

interface Post {
	"userId": number;
	"id": number;
	"title": string;
  "body": string;
}

export const backgroundTasks = {
  async fetchTodos(): Promise<Array<Todo> | Error> {
    return await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .catch(error => error);
  },

  async fetchPosts(): Promise<Array<Post> | Error> {
    return await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .catch(error => error);
  }
} as const;

export default new BackgroundService(backgroundTasks);
