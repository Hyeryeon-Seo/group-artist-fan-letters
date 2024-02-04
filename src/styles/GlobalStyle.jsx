import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// 전역 스타일링에서 -> 구역 사이즈 적용 (body, header, footer ..)
// 폰트 이후 수정할 수
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

	body {
        color: black;
	    background-color: #0e0d0d;
        display: flex;
  flex-direction: column; 
  align-items: center; 
  margin: 0 auto 0;
  /* width: 1000px; */
  min-height: 1000px;
  font-family: "Pretendard-Regular";
    }

    header {
        height: 20px; //videosection 떄문에 높이가 0이어도 
		padding-bottom:10px;
		background-color: #b33cb3; 
    }
	
	h1 {
		font-size: 20px;
		font-family: "Pretendard-Black";
	}

	h2 { // section의 제목 (Write&Send 등)
		font-family: "Pretendard-Black";
		font-size: 50px;
		margin: 0px auto 10px 100px;
		padding-top: 20px;
	}

	 nav > ul { // nav   
		// nav > ul  (css처럼) 적용됨! (대신 바로 하위태그마다 적용되어서, 이중하위태그?는 > > 이중 연결 아래참고)
		// 대신 nav에 속하는 ul 태그에서 이걸 적용하더라도
		// ul   만 태그 스타일링시 그것도 똑같이 적용된다.. (하지만 nav에속하지않는 ul은 이게 적용안된다)
		display: flex;
		justify-content: space-around;
	}

	nav > ul > li { // nav에 속하는 li
		padding: 20px;
		width:70px;
		display: flex;
		justify-content: center; // 글자 가운데
		font-size: 20px;
	}


	 form {
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 30px;
	background-color: #f1d5ed;
	/* margin-right: 100px; */
	margin-top: 5px;
	width: 700px;
	height: 500px;
	color: black;
	border-radius: 10px;
	} 

	input {
		width: 300px;
		height: 30px;
		margin-top: 15px;
	}

	textarea {
		width: 500px;
		height: 50px;
	}

	select {
		width: 100px;
	}

	button { // 내 toodlist버튼스타일 복붙 -> 수정하기
	background-color: rgb(253, 232, 250);
	width: 150px;
	height: 40px;
	border: none;
	margin-top: 10px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
	  font-size: medium;
	border-radius: 10px;
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
		height: 50px;
		text-align: end;
		padding-top: 50px;
		padding-right: 30px;
		padding-bottom: 30px;
		color: #a184aa;
		background-color: #25072c;
		font-family: "Pretendard-Light";
	}
    `;

export default GlobalStyle;
