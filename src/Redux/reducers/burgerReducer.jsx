// rxreducer
const initialState = {
  burger: [
    { id: "salad", price: 5, quantity: 4 },
    { id: "beef", price: 20, quantity: 2 },
    { id: "cheese", price: 10, quantity: 3 },
  ],
  // Tổng tiền không nên đưa vào lưu trữ trong state vì đây là giá trị có thể tính toán được và sẽ thay đổi
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_TOPPING": {
      // B1: lấy dữ liệu từ payload gửi lên
      const { id, quantity } = payload;
      // B2: clone state.burger
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((it) => it.id === id);
      if (item) {
        item.quantity += quantity;
        if (item.quantity === 0) {
          alert("Quantity must be at least 1!");
          item.quantity = 1;
        }
      }
      // B3: update lại state
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
