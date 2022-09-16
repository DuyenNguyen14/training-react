import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPureComponent extends Component {
  state = {
    like: 0,
  };

  likeImage = () => {
    let prevLike = this.state.like + 1;
    this.setState({
      like: prevLike,
    });
  };
  render() {
    return (
      <div className="container py-5">
        <h3 className="text-center">Profile Nguyen Van A</h3>
        <Profile like={this.state.like} />

        <div className="card text-dark bg-light p-3">
          <h4 style={{ color: "pink" }}>Rating ({this.state.like})</h4>
          <div className="card-body">
            <button
              className="text-danger p-2"
              style={{
                backgroundColor: "pink",
                border: "none",
                borderRadius: "10px",
              }}
              onClick={() => this.likeImage()}
            >
              Like
              <i className="fa fa-heart ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
