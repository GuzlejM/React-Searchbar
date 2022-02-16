import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }))
      .then((users) => console.log(this.state.users))
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      return Object.values(user)
        .join("")
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>NFT USERS</h1>
        <SearchBox
          placeholder="Search for Users"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
