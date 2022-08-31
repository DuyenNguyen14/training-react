// rcredux
import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger";
import Menu from "./Menu";

class DemoBurger extends Component {
  render() {
    return (
      <div className="container py-5">
        <h3>Demo Burger</h3>
        <div className="row">
          <div className="col-6">
            <Burger />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoBurger);
