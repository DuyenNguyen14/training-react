import React, { Component } from "react";
import "./UserProfile.css";
import { connect } from "react-redux";
import { getValueAction } from "../../redux/actions/UserProfileActions";
import Swal from "sweetalert2";

class UserProfile extends Component {
  handleChange = (e) => {
    let { name, value, type } = e.target;
    this.props.getValue(name, value, type);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { userProfile, errors } = this.props;

    // biến xác định
    let valid = true;

    let profileContent = "";
    // duyệt qua các key trong userProfile, nếu có trường nào rỗng thì lật biến valid thành false để không submit được
    for (let key in userProfile) {
      if (userProfile[key] === "") {
        valid = false;
      }
    }
    // duyệt qua các key trong errors, nếu có key nào khác rỗng thì lật biến cờ hiệu và không cho submit
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
      profileContent += `
        <div class="row text-left pl-3 py-2">
            <div class="col-4"><b>${key}</b></div>
            <div class="col-8">${userProfile[key]}</div>
        </div>
      `;
    }

    if (!valid) {
      console.log("Unvalid data!");
      return;
    }
    console.log("success");
    Swal.fire({
      title: "Your information!",
      html: profileContent,
      icon: "success",
      confirmButtonText: "Confirm",
    });
  };
  render() {
    const { userProfile, errors } = this.props;
    return (
      <div
        style={{
          backgroundColor: "#eee",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Form */}
        <form className="py-5" onSubmit={this.handleSubmit}>
          <div className="container py-5 my-5">
            <h2>Use Profile</h2>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="firstName"
                    required
                    onChange={this.handleChange}
                    value={userProfile.firstName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span className="text text-danger">{errors.firstName}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="lastName"
                    required
                    onChange={this.handleChange}
                    value={userProfile.lastName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span className="text text-danger">{errors.lastName}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group w-100">
                  <input
                    type="text"
                    name="userName"
                    required
                    onChange={this.handleChange}
                    value={userProfile.userName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Username</label>
                  <span className="text text-danger">{errors.userName}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="group w-100">
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={this.handleChange}
                    value={userProfile.email}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span className="text text-danger">{errors.email}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={this.handleChange}
                    value={userProfile.password}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text text-danger">{errors.password}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="password"
                    name="passwordConfirmed"
                    required
                    onChange={this.handleChange}
                    value={userProfile.passwordConfirmed}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password Comfirmed</label>
                  <span className="text text-danger">
                    {errors.passwordConfirmed}
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-dark w-100 py-3"
                  style={{ fontSize: "20px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Form */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.UserProfileReducer.userProfile,
    errors: state.UserProfileReducer.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getValue: (name, value, inputType) => {
      dispatch(getValueAction(name, value, inputType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
