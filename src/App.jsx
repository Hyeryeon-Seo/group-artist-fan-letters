import { React, useState } from "react";
import "styles/reset.css";
import "./App.css";
import Router from "shared/Router";
import Layout from "components/layout/Layout";
import GlobalStyle from "styles/GlobalStyle";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router />
			<GlobalStyle />
			<Layout></Layout>
		</>
	);
}

export default App;
