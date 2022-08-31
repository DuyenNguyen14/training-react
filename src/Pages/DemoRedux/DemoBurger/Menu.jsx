// rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

export class Menu extends Component {
  renderMenu = () => {
    const { burger } = this.props;
    return burger.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: -1,
                  },
                };
                // Gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              -
            </button>
            {item.quantity}
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_TOPPING",
                  payload: {
                    id: item.id,
                    quantity: 1,
                  },
                };
                // Gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              +
            </button>
          </td>
          <td>{item.price}</td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    const { burger } = this.props;
    return burger.reduce((total, item, index) => {
      return (total += item.quantity * item.price);
    }, 0);
  };

  render() {
    console.log(this.props);
    const { burger } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Topping</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}
            <tr>
              <td colSpan={3} align="right">
                <b>Total: {this.tinhTongTien()}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Menu);
