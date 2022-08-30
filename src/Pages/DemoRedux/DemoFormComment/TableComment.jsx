import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    console.log(this.props);
    const { arrComment } = this.props;
    return (
      <div className="card d-inline-block">
        <div className="img">
          <img src="https://i.pravatar.cc?u=24" alt="..." height={350} />
        </div>
        <div className="card-body">
          {/* binding dữ liệu ra giao diện */}
          {arrComment.map((comment, index) => {
            return (
              <div className="row mt-2" key={index}>
                <div className="col-3">
                  <img
                    src={`https://i.pravatar.cc?u=${comment.name}`}
                    alt="..."
                    width={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="col-8 bg-secondary rounded py-2">
                  <h5>{comment.name}</h5>
                  <p className="my-0">{comment.content}</p>
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
