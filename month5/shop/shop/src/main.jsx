import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={appStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
