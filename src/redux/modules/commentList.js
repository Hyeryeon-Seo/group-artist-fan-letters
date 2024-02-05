import { dummyData } from "../../shared/fakeData";

const initialState = {
	dummyData,
};

const add_comment = "add_comment";

export const addComment = (payload) => {
	return { type: add_comment, payload };
};

const commentList = (state = initialState, action) => {
	switch (action.type) {
		case add_comment:
			return [...state.dummyData, action.payload];
		default:
			return state;
	}
};

export default commentList; // 만든 리듀서함수 내보내기
