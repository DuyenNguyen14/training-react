import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../../redux/reducers/userReducer";
import moment from "moment";

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProfileApi();

    dispatch(action);
  }, []);

  const renderOrderHistory = () => {
    // ?: toán tử optional chaining: nếu obj có thuộc tính đó thì xử lý, nếu không thì bỏ qua
    return userLogin.ordersHistory?.map((order, index) => {
      return (
        <div className="orderDetail" key={index}>
          <h3>Order {moment(order.date).format("DD/MM/YYYY hh:mm:ss A")}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetail.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} width={50} alt="..." />
                    </td>
                    <td>{item.price}$</td>
                    <td>{item.quantity}</td>
                    <td>{(item.price * item.quantity).toLocaleString()}$</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div className="container py-5">
      <h3>Profile</h3>
      <div className="d-flex">
        <div className="w-25">
          <div className="profile">
            <img src={userLogin.avatar} alt="avatar" height={200} />
            <div>Name: {userLogin.name}</div>
            <div>Email: {userLogin.email}</div>
          </div>
        </div>
        <div className="w-75">
          <h3>Thông tin đơn hàng</h3>
          <div className="row">{renderOrderHistory()}</div>
        </div>
      </div>
    </div>
  );
}
