import React, { Component } from "react";
import { connect } from "react-redux";
import FormComment from "./FormComment";
import TableComment from "./TableComment";

class DemoFormComment extends Component {
  render() {
    return (
      <div className="container">
        <div className="py-5 px-5">
          <div
            className="card align-items-center py-5"
            style={{ backgroundColor: "pink" }}
          >
            <div className="img" style={{ position: "relative" }}>
              <img src="https://i.pravatar.cc?u=24" alt="..." height={350} />
              <div
                className="like_button d-flex align-items-center text-light"
                style={{ position: "absolute", bottom: "20px", left: "20px" }}
              >
                <button
                  className="btn text-light"
                  style={{ backgroundColor: "#ff5072", borderRadius: "50%" }}
                >
                  <i className="fa fa-heart"></i>
                </button>
                <h6 className="ms-2 mb-0">1</h6>
              </div>
            </div>
            <TableComment />
            <FormComment />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoFormComment);
