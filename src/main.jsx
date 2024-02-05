import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// index.css지웠으니 여기서도 index.css 임포트 없애주기
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
