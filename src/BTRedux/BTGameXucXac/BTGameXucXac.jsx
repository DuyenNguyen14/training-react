import React, { Component } from "react";
import "./BTGameXucXac.css";
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BTGameXucXac extends Component {
  render() {
    return (
      <div className="game p-5">
        <div className="game-title text-center text-light ">
          <h3 className="display-4">Bài tập game xúc xắc</h3>
        </div>

        <div className="row text-center">
          <div className="col-4">
            <button
              className="btnGame"
              onClick={() => this.props.datCuoc(true)}
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              className="btnGame"
              onClick={() => this.props.datCuoc(false)}
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="gameInfo text-center">
          <ThongTinGame />
          <button
            className="btn btn-success display-4 mt-5"
            onClick={() => this.props.playGame()}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };

      dispatch(action);
    },

    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BTGameXucXac);
