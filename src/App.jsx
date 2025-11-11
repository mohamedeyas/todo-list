// App.js
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({ userInput: value });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };

      const list = [...this.state.list, userInput];

      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = this.state.list.filter((item) => item.id !== key);
    this.setState({ list });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      todos[index].value = editedTodo;
      this.setState({ list: todos });
    }
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6">TODO LIST</h1>

        <div className="flex space-x-2 mb-6">
          <input
            type="text"
            placeholder="Add item..."
            className="px-4 py-2 w-80 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={this.state.userInput}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => this.addItem()}
          >
            ADD
          </button>
        </div>

        <ul className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-between items-center px-4 py-3 border-b last:border-none"
            >
              <span className="text-gray-800">{item.value}</span>
              <div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-red-600"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                  onClick={() => this.editItem(index)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
