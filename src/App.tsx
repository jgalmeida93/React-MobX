import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import "./App.css";

class Store {
  @observable counter = 0;

  @action add = () => {
    this.counter += 1;
  };
}

const store = new Store();

@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{store.counter}</h2>
        <button onClick={store.add}>
          Clique aqui para aumentar o contador
        </button>
      </div>
    );
  }
}

export default App;
