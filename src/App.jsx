import React from "react";
import Router from "shared/Router"; // 경로설정으로 그냥 shared/Router해도됨
import "styles/reset.css";
import GlobalStyle from "styles/GlobalStyle";

function App() {
	return (
		<>
			<Router />
			<GlobalStyle />
		</>
	);
}

export default App;
