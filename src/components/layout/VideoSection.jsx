import React from "react";
import * as S from "styles/VideoSectionStyle";

function VideoSection() {
	return (
		<S.VideoSection className="video_bg">
			<S.Iframe
				src="https://www.youtube.com/embed/Os_heh8vPfs?autoplay=1&mute=1;&loop=1&playlist=Os_heh8vPfs"
				title="aespa에스파 Spicy MV"
				// frameBorder="0" // 유튭표시할떄 외곽선값 (0) 여기서 필요 X?
				allowFullScreen // 전체화면모드 허용여부 일반 html태그처럼 모두소문자로쓰면 적용X (JSX_파스칼케이스쓰기)
			>
				{/* 해당 브라우저에서 동영상을 지원하지 않습니다. */}
			</S.Iframe>
		</S.VideoSection>
	);
}

export default VideoSection;
