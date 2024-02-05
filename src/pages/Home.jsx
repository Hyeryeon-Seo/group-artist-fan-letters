import React from "react";
import Header from "../components/layout/Header";
import VideoSection from "../components/layout/VideoSection";
import FormSection from "../components/layout/FormSection";
import Footer from "../components/layout/Footer";
import * as S from "styles/PagesStyle";
import CommentList from "../components/comment/CommentList";

function Home({ memberList, commentList, setCommentList }) {
	return (
		<S.LayoutDiv>
			<Header></Header>
			<VideoSection></VideoSection>
			<FormSection
				memberList={memberList}
				setCommentList={setCommentList}
			></FormSection>
			<CommentList
				commentList={commentList}
				memberList={memberList}
			></CommentList>
			<Footer></Footer>
		</S.LayoutDiv>
	);
}

export default Home;
