import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../../Redux/configStore";

class FormComment extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // Gửi dữ liệu lên redux
    const action = {
      type: "HANDLE_SUBMIT",
      payload: this.props.commentInfo, // dữ liệu người dùng gửi đi
    };
    // Sử dụng this.props.dispatch gửi action lên store
    this.props.dispatch(action);
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    // Gửi dữ liệu lên redux
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    const { name, content } = this.props.commentInfo;
    // console.log("state", store.getState());
    return (
      <div className="card-footer w-50">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p className="m-0">Name</p>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <p className="mb-0 mt-3">Content</p>
            <input
              type="text"
              className="form-control"
              id="content"
              value={content}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-secondary">Comment</button>
            <button
              type="button"
              className="btn btn-dark ms-2"
              onClick={() => {
                const action = {
                  type: "UPDATE_COMMENT",
                };
                this.props.dispatch(action);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// ? Không có mapStateToProps thì có thể lấy được state từ redux về không? => dùng phương thức store.getState()
const mapStateToProps = (state) => ({
  commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
