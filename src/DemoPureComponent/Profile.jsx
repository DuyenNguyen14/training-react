import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  // Pure component kiểm tra các props đầu vào của component này có thay đổi hay không thì mới load lại
//   Không được lạm dụng pure component
  render() {
    console.log("load");
    return (
      <div className="card text-white bg-dark" style={{ width: "450px" }}>
        <img
          className="card-img-top w-100"
          src="https://i.pravatar.cc"
          alt="Title"
        />
        <div className="card-body">
          <p>Like: {this.props.like}</p>
          <h4 className="card-title">Name: Nguyen Van A</h4>
          <p className="card-text">Age: 18</p>
        </div>
      </div>
    );
  }
}
