// rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Shoes",
      price: 1000,
      image: "https://picsum.photos/200",
    },
  ],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      // Lấy ra dữ liệu từ payload component dispatch lên
      const arrProduct = action.payload;
      // Cập nhật lại state
      state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state, action) => {
      // lấy dữ liệu từ payload
      const productDetail = action.payload;
      // cập nhật lại state.productDetail
      state.productDetail = productDetail;
    },
  },
});

export const { setArrProductAction, setProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

// -------------------- action api ------------------
export const getProductApi = async (dispatch2) => {
  // xử lý logic api trả về kết quả
  try {
    let result = await http.get("/Product");
    console.log("result", result.data.content);
    // Sau khi lấy kết quả từ api về đưa vào state arrProduct
    // setArrProduct(result.data.content);

    // dispath lên redux
    const action = setArrProductAction(result.data.content);
    dispatch2(action);
  } catch (err) {
    console.log(err);
  }
};

// closure function: mượn 1 function bên ngoài để return về một function khác mình cần gọi
export const getProductDetailActionApi = (idProduct) => {
  return async (dispatch) => {
    // logic api here
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}
        `,
        method: "GET",
      });
      // Sau khi có dữ liệu gửi lên action loại 1 đưa lên reducer
      const actionLoai1 = setProductDetailAction(result.data.content);
      dispatch(actionLoai1);
    } catch (err) {
      console.log(err);
    }
  };
};
