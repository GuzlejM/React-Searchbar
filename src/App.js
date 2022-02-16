import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
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
        <input onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))} type='search' placeholder='Search for users'/>
        <CardList users={this.state.users}/>
          
      </div>
    );
  }
}

export default App;

