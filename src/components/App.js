import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <Tooltip text="This is a tooltip">
        <h2>Hover over heading</h2>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <p>Hover over paragraph</p>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <button>Hover over button</button>
      </Tooltip>
    </div>
  );
};

export default App;
