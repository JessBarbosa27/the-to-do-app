import React from "react";
import Draggable from "react-draggable";
import { TaskWrapper } from "./components/TaskWrapper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: { left: 0, top: 0, right: 0, bottom: 0 },
    };
  }

  componentDidMount() {
    this.calculateBounds();
    window.addEventListener("resize", this.calculateBounds);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateBounds);
  }

  calculateBounds = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Example: Allow the draggable element to move within the visible window
    this.setState({
      bounds: {
        left: -windowWidth / 2.6,
        top: 0,
        right: windowWidth / 2.3 - 100,
        bottom: windowHeight / 1.5 - 100,
      },
    });
  };

  render() {
    const { bounds } = this.state;

    return (
      <Draggable bounds={bounds}>
        <div className="App">
          <TaskWrapper />
        </div>
      </Draggable>
    );
  }
}

export default App;
