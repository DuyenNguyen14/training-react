import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    console.log(this.props);
    const { arrComment } = this.props;
    return (
      <div className="card-body w-50 pt-2">
        <div style={{ backgroundColor: "pink" }}>
          {/* binding dữ liệu ra giao diện */}
          {arrComment.map((comment, index) => {
            return (
              <div className="row mt-2" key={index}>
                <div className="col-2 ms-2">
                  <img
                    src={`https://i.pravatar.cc?u=${comment.name}`}
                    alt="..."
                    width={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div
                  className="col-9 rounded py-2"
                  style={{ backgroundColor: "#ff5072" }}
                >
                  <h5>{comment.name}</h5>
                  <p className="my-0">{comment.content}</p>
                  <div style={{ textAlign: "right" }}>
                    <button
                      className="btn text-light mt-2"
                      style={{ backgroundColor: "pink", fontSize: "12px" }}
                      onClick={() => {
                        // Tạo ra action xoá
                        const action = {
                          type: "DELETE_COMMENT",
                          payload: index,
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      <i className="fa fa-trash-alt"></i>
                    </button>
                    <button
                      className="btn text-light mt-2 ms-2"
                      style={{ backgroundColor: "pink", fontSize: "12px" }}
                      onClick={() => {
                        const action = {
                          type: "EDIT_COMMENT",
                          payload: index,
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TableComment);
