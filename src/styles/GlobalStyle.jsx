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
        color: rgba(255, 255, 255, 0.87);
	    background-color: #242424;
        display: flex;
  flex-direction: column; 
  align-items: center; 
  margin: 0 auto 0;
  /* width: 1000px; */
  min-height: 1000px;
  font-family: "Pretendard-Regular";
    }

    header {
        background-color: #3f74a3;
        height: 30px;
    }

	h2 { // section의 제목 (Write&Send 등)
		font-family: "Pretendard-Black";
		font-size: 50px;
		margin: 20px auto 10px 100px;
	}

	 nav > ul { // nav   
		// nav > ul  (css처럼) 적용됨! (대신 바로 하위태그마다 적용되어서, 이중하위태그?는 > > 이중 연결 아래참고)
		// 대신 nav에 속하는 ul 태그에서 이걸 적용하더라도
		// ul   만 태그 스타일링시 그것도 똑같이 적용된다.. (하지만 nav에속하지않는 ul은 이게 적용안된다)
		display: flex;
		justify-content: space-around;
	}

	nav > ul > li { // nav에 속하는 li
		border: 1px solid darkmagenta;
		border-radius: 1rem;
		padding: 20px;
		width:70px;
		display: flex;
		justify-content: center; // 글자 가운데
		font-size: 20px;
	}


	form {
		border:none;
		border-radius: 10px;
		background-color: #618f1d;
		height: 400px;
	}

	input {
		width: 300px;
	}

	textarea {
		width: 500px;
		height: 50px;
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
    `;

export default GlobalStyle;
