// rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderTopping = (id) => {
    const { burger } = this.props;
    let toppingName = burger.find((item) => item.id === id);

    // Số lượng
    let { quantity } = toppingName;
    const arrDivJsx = [];
    for (let i = 0; i < quantity; i++) {
      // Mỗi lần duyệt tạo ra một div đưa vào array
      const divTopping = <div className={id} key={i}></div>;
      arrDivJsx.push(divTopping);
    }
    return arrDivJsx;
  };

  render() {
    return (
      <div>
        <div className="breadTop"></div>

        {/* <div className="cheese"></div> */}
        {this.renderTopping("cheese")}
        {this.renderTopping("beef")}
        {this.renderTopping("salad")}

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
