import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <Tooltip text="Tooltip for heading">
        <h2>Hover over heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for button">
        <button>Hover over button</button>
      </Tooltip>
    </div>
  );
};

export default App;
