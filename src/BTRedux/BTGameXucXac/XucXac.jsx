import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xiNgau, index) => {
      return (
        <img
          key={index}
          className="mx-3"
          style={{ width: "35px" }}
          src={xiNgau.hinhAnh}
          alt={xiNgau.ma}
        />
      );
    });
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BTXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
