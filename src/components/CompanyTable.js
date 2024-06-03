import React from "react";
import { Table } from "react-bootstrap";
import { realtimeDb } from '../firebase-config';
import { ref, onValue } from "firebase/database";

export class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(realtimeDb, "Company");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map((row, index) => (
            <tr key={row.key}>
              <td>{index + 1}</td>
              <td>{row.key}</td>
              <td>{row.data.Task}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
