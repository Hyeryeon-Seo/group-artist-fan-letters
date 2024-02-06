import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// 전역 스타일링에서 -> 구역 사이즈 적용 (body, header, footer ..)
/* reset.css
   http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// box-sizing (해설영상대로, BUT 이미 디자인된게있어서 수정할일많아져서 적용X하기로)
/* * {
	box-sizing: border-box;
} */

@font-face {
	font-family: "Pretendard-Light";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
		format("woff");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Regular";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
		format("woff");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Bold";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
		format("woff");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Black";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
		format("woff");
	font-weight: 900;
	font-style: normal;
}

:root {
  --maincolor : #b33cb3;
}

	body {
        color: black;
	    background-color: #0e0d0d;
        /* display: flex; 이걸 적용하면 가로넓이 제한생김 (창 모두 커버X)
  		 flex-direction: column;  */
  		/* align-items: center;  의미 X*/
 	 	/* margin: 0px; 의미 X */
		/* width: 1000px; */
		min-height: 1000px;
		font-family: "Pretendard-Regular";
    } 

	* {
		font-family: "Pretendard-Regular";
	}

    header {
		width: 100%;
        height: 20px; //videosection 떄문에 높이가 0이어도 
		margin-top: 30px;
		padding-top: 10px;
		padding-bottom:10px;
		/* padding-left: 10px; (margin도 동일) 이거때문에 창가로스크롤조금 생김 (삐져나옴)*/
		background-color: var(--maincolor);
    }
	
	h1 { // 헤더 제목
		font-size: 20px;
		font-family: "Pretendard-Black";
		padding-left: 20px;
	}

	h2 { // section의 제목 (Write&Send 등)
		font-family: "Pretendard-Black";
		font-size: 50px;
		margin: 0px auto 10px 100px;
		padding-top: 20px;
	}

	 nav > ul {   
		display: flex;
		justify-content: space-around;
	}

	nav > ul > li { // nav에 속하는 li
		display: flex;
		justify-content: center; 
		padding: 20px;
		margin: 20px auto 20px auto;
	}


	 form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 30px;
	background-color: #000000;
	/* margin-right: 100px; */
	/* box-shadow: 0px 0px 5px 2px yellow; */
	margin-top: 5dpx;
	width: 600px;
	height: 530px;
	color: yellow;
	border-radius: 3cm;
	font-size: 20px;
	} 

	input {
		background-color: black;
		color: white;
		width: 300px;
		height: 40px;
		margin-top: 15px;
		border: 3px solid #333030;
		border-radius: 10px;
		font-size: 20px;
	}

	select {
		width: 100px;
		height: 40px;
		border: none;
		border-radius: 10px;
		font-size: 20px;
		font-weight: bold;
		box-shadow: 0px 0px 10px 0px yellow;
		color:white;
		background-color: black;
		padding-left: 20px;
	}

	button { 
	background-color: rgb(0, 0, 0);
	border: none;
	margin-top: 10px;
	/* margin-left: 230px; */
	font-size: medium;
	/* font-weight: bold; */
	border-radius: 10px;
	color: white;
	font-family: "Pretendard-Regular";
	cursor: pointer;
	font-weight: bold;
	}

	form > button {
		width: 150px;
		height: 50px;
		margin-top: -5px;
		margin-bottom: 20px;
		background-color: var(--maincolor);
		&:hover {
		background-color: yellow;
		color:black;
		}
	}

	article {
		color:white;
		display: flex;
		flex-direction: column;
	}

	img {
		border-radius: 50%; // 원모양
	}

	footer {
		height: 30px;
		/* text-align: end; */
		padding-top: 50px;
		padding-bottom: 30px;
		color: #a184aa;
		font-family: "Pretendard-Light";
	}
    `;

export default GlobalStyle;
