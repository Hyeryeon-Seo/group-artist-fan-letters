import styled from "styled-components";

export const VideoSection = styled.section`
	margin-top: 20px;
	overflow: hidden;
	/* position: relative; */
	width: 100%;
	height: 600px;
	/* background-color: #b33cb3; */
`;

export const Iframe = styled.iframe`
	position: relative;
	top: 0px; // 마진
	bottom: 0px;
	width: 100%;
	height: 100%;
	/* 기존 calc(100% + 120px); + px해주면 가로길이도더 맞게 확장됨 */
	border: none;
	margin-top: 30px;
`;
