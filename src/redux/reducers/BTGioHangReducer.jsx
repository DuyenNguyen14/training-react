// setup stateGioHang trên store
const stateGioHang = {
  gioHang: [],
};

const BTGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        let index = state.gioHang.findIndex(
          (spGH) => spGH.maSP === action.sanPhamGioHang.maSP
        );

        if (index !== -1) {
          state.gioHang[index].soLuong += 1;
        } else {
          state.gioHang.push(action.sanPhamGioHang);
        }

        // setState
        state.gioHang = [...state.gioHang];

        return { ...state };
      }
      break;
    case "XOA_GIO_HANG":
      {
        let gioHangCapNhat = [...state.gioHang];

        // tìm ra phần từ cần xoá dựa vào mã sp
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.maSPClicked
        );

        gioHangCapNhat.splice(index, 1);

        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    case "THAY_DOI_SL":
      {
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.maSPClicked
        );

        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          } else {
            gioHangCapNhat.splice(index, 1);
          }
        }

        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default BTGioHangReducer;
