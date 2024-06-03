import React from "react";
import { realtimeDb } from "../firebase-config";
import { ref, set, remove } from "firebase/database";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usertype: "Company",
      task: "",
    };
    this.interface = this.interface.bind(this);
  }

  interface(event) {
    const id = event.target.id;

    if (id === "addBtn") {
      this.addData();
    } else if (id === "deleteBtn") {
      this.deleteData();
    }
  }

  getAllInputs() {
    return {
      username: this.state.username,
      usertype: this.state.usertype,
      task: this.state.task,
    };
  }

  addData() {
    const data = this.getAllInputs();
    set(ref(realtimeDb, `${data.usertype}/${data.username}`), {
      UserName: data.username,
      UserType: data.usertype,
      Task: data.task,
    })
      .then(() => {
        alert("Data added successfully!");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }

  deleteData() {
    const data = this.getAllInputs();
    remove(ref(realtimeDb, `${data.usertype}/${data.username}`))
      .then(() => {
        alert("Data deleted successfully!");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }

  render() {
    return (
      <div>
        <label>Enter Username: </label>
        <input
          type="text"
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
        />
        <br />
        <br />
        <label>Select User Type: </label>
        <select
          value={this.state.usertype}
          onChange={(event) => this.setState({ usertype: event.target.value })}
        >
          <option value="Company">Company</option>
          <option value="Student">Student</option>
        </select>
        <br />
        <br />
        <label>Enter Task: </label>
        <input
          type="text"
          value={this.state.task}
          onChange={(event) => this.setState({ task: event.target.value })}
        />
        <br />
        <br />
        <button id="addBtn" onClick={this.interface}>
          Add
        </button>
        <button id="deleteBtn" onClick={this.interface}>
          Delete
        </button>
      </div>
    );
  }
}
