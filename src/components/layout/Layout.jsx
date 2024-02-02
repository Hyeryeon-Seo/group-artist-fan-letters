import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	// {chilren}받아서 안 내용만 바꿔주기
	// 공통레이아웃(헤더,푸터)
	return (
		<div>
			<Header></Header>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
