const stateDefault = 10;

export const numberReducer = (state = stateDefault, action) => {
  // thay vì set state là một giá trị mặc định thì ở redux trả về 1 hàm với tham số state là giá trị default

  switch (action.type) {
    case "TANG_SL":
      // B1: Lấy giá trị payload từ action gửi lên
      const { payload } = action;
      // Thay đổi state
      state += payload;
      // B3: return về state mới
      return state;
  }

  return state;
};
