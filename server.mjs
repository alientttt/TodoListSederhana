import { createServer } from "node:http";
import { TodoListService } from "./todolist-service.mjs";

const PORT = 3000;
const service = new TodoListService();
const server = createServer((req, res) => {
  if (req.method === "GET") {
    service.getTodoList(req,res)
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`Server running at http://localhost:${PORT}`);
