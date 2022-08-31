const stateDefault = {
  commentInfo: {
    name: "",
    content: "",
  },
  arrComment: [
    { name: "Nguyễn Văn A", content: "like like like" },
    { name: "Trần Thị B", content: "đẹp chai nhaaaa " },
    { name: "Lê Thị C", content: "deep dzữ pồ!!!" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      // B1: Lấy ra gữ liệu action gửi lên
      const { id, value } = action.payload;
      // B2: Đối với state là object hoặc aray thì clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // B3: Thay đổi state
      commentInfoUpdate[id] = value;
      // B4: Gán state cũ = state update
      state.commentInfo = commentInfoUpdate;
      return { ...state }; // immutable: tính bất biến của redux
    }

    case "HANDLE_SUBMIT": {
      // B1: Lấy ra dữ liệu action gửi lên
      let comment = action.payload;
      // B2: Đối với state là object hoặc aray thì phải clone state ra
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.push(comment);
      // B3: Gán state cũ bằng state update
      state.arrComment = arrCommentUpdate;
      console.log("arrComment", state.arrComment);
      return { ...state };
    }

    case "DELETE_COMMENT": {
      // B1: Lấy dữ liệu action gửi lên từ payload
      let index = action.payload;
      console.log(index);
      // B2: Đối với state là object hoặc aray thì phải clone state ra
      let arrCommentAfterDelete = [...state.arrComment];
      arrCommentAfterDelete.splice(index, 1);
      // B3: Gán state cũ bằng state update
      state.arrComment = arrCommentAfterDelete;
      return { ...state };
    }

    case "EDIT_COMMENT": {
      // B1: Lấy dữ liệu action gửi lên từ payload
      let index = action.payload;
      // B2: clone state.commentInfo ra và xử lý
      let commentInfoUpdate = { ...state.commentInfo };
      commentInfoUpdate = state.arrComment[index];
      // B3: Cập nhật lại state
      state.commentInfo = commentInfoUpdate;
      return { ...state };
    }

    case "UPDATE_COMMENT": {
      // B2: clone state.arrComment
      let arrCommentUpdate = [...state.arrComment];
      // Tìm comment có name và nội dung trong mảng (dựa vào name và content của state.commentInfor)
      let comment = arrCommentUpdate.find(
        (comment) => comment.name === state.commentInfo.name
      );

      if (comment) {
        comment.content = state.commentInfo.content;
      }
      // B3: Cập nhật state
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};
