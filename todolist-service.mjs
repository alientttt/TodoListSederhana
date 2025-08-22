export class TodoListService {
  todolist = ["Membaca al quran", "Berenang", "Mencuci sepatu"];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodoList(req, res) {
    res.write(this.getJsonTodoList());
    res.end();
  }

  createTodo(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);

      res.write(this.getJsonTodoList());
      res.end();
    });
  }
}
