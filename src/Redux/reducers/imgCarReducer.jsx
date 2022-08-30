const stateDefault = "./img/products/black-car.jpg";

export const imgCarReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      // B1: Lấy dữ liệu gửi lên từ action
      const { payload } = action;
      // B2: Xử lý thay đổi state
      state = payload;
      return state;
    // Mặc định return về state
    default:
      return state;
  }
};
