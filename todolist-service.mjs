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
    res.writeHead(200, this.getJsonTodoList(), {
      "Content-Type": "application/json",
    });
    res.end("Berhasil");
  }
}
