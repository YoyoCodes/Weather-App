import React from "react";
import Titles from "./components/Titles.js"
import Form from "./components/Form.js"


class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    )
  }
}

export default App
