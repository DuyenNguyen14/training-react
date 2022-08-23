import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>type</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod, index) => {
            return (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>
                  <img src={prod.img} alt="..." />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.type}</td>
                <td>{prod.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      delProduct(prod.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => {
                      // vì sao sau khi truyền props là một function xuống cho component con là TableProduct thì vẫn chưa chỉnh sửa được thông tin trên form? => vì khi chỉnh sửa thông tin trên form --> gọi hàm handleChange, trong hàm này có chứa hàm setState --> diễn ra quá trình updating --> chạy lại hàm render ở component này --> lấy các thuộc tính của productEdit đè lên các value của tag input ở FormProd => lấy các dữ liệu từ state
                      editProduct(prod);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

/*
    Nút edit:
    1. TẠO STATE CHỨA CÁC THUỘC TÍNH CỦA SP CẦN CHỈNH SỬA ở component chứa button, state của product chỉnh sửa, giao diện sẽ render ra thông tin cần chỉnh sửa, GIÁ TRỊ CỦA CÁC THUỘC TÍNH LÀ RỖNG;
    2. TẠO FUNCTION editProduct ở component chứa button, state của product chỉnh sửa, giao diện sẽ render ra thông tin cần chỉnh sửa, function THỰC HIỆN setState, THUỘC TÍNH CỦA SP CHỈNH SỬA CÓ GIÁ TRỊ CỦA SP PHẨM CẦN CHỈNH SỬA ĐƯỢC CLICK VÀO;
    3. TRUYỀN PROPS là function editProduct xuống CHO COMPONENT THỰC HIỆN FUNCTION, TRUYỀN STATE CỦA SP CHỈNH SỬA CHO COMPONENT CHỨA GIAO DIỆN RENDER THÔNG TINH
    4. CAN THIỆP VÀO QUÁ TRÌNH RENDER CỦA FORM

*/
