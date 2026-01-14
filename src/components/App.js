import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <Tooltip text="This is a tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="This is a tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="This is a tooltip for button">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
};

export default App;
