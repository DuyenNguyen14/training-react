const stateDefault = {
  commentInfo: {
    name: "Nguyễn Văn E",
    content: "àdljalfjalfjla",
  },
  arrComment: [
    { name: "Nguyễn Văn A", content: "like like like" },
    { name: "Trần Thị B", content: "like like like" },
    { name: "Lê Thị C", content: "deep dzữ pồ!!!" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      // B1: Lấy ra gữ liệu action gửi lên
      const { id, value } = action.payload;
      // B2: Đối với state là object hoặc aray thì clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // B3: Thay đổi state
      commentInfoUpdate[id] = value;
      // B4: Gán state cũ = state update
      state.commentInfo = commentInfoUpdate;
      return { ...state }; // immutable: tính bất biến của redux
    default:
      return state;
  }
};
