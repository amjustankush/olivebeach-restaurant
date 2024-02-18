import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// In React 18, concurrent mode is the default, so no explicit mode setting is needed.

ReactDOM.createRoot(document.getElementById("root")).render(<App />);