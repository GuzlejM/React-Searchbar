import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search for users'/>
        <CardList users={this.state.users}/>
          
      </div>
    );
  }
}

export default App;

