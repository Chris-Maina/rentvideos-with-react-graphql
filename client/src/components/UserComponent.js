import React, { Component } from 'react';
import { Table, Tab } from 'semantic-ui-react';
import getUsers from '../../../server/api';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const users = getUsers();
    this.setState({
      users,
    });
  }

  displayUsers = () => {
    const { users } = this.state;
    return users.map((user, index) => (
      <Table.Row key={index}>
        <Table.Cell>
          {user.name}
        </Table.Cell>
        <Table.Cell>
          {user.age}
        </Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
            <i className="fa fa-2x fa-user" aria-hidden="true"></i>&nbsp;
               Name 
            </Table.HeaderCell>
            <Table.HeaderCell> Age </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.displayUsers()}
        </Table.Body>
      </Table>
    );
  }
}

export default UserComponent;
