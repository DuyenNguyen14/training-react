import React, { Component } from "react";

export default class FormProd extends Component {
  state = {
    productInfo: {
      // thuộc tính của state là 1 object
      id: "",
      name: "",
      price: "",
      img: "",
      type: "mobile",
      description: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
    },
  };

  // Tạo hàm lấy value của các thẻ input
  handleChange = (event) => {
    let { value, id } = event.target; // destructuring object

    let dataType = event.target.getAttribute("data-type");
    // this.setState({
    // [id]: value // dynamic key: ['name']: value --> thay vì lấy giá trị của id của thẻ thì lấy prop id gán vào
    // });

    // Xử lý productInfo
    let newValue = this.state.productInfo;
    newValue[id] = value; // newValue['id'], newValue['name'],...

    // Xử lý error
    let newError = this.state.error;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " cannot be empty!";
    } else {
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " can only include numbers!";
        }
      }
    }
    newError[id] = messError;

    // setState
    this.setState(
      {
        productInfo: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    // chặn sự kiện reload của browser
    event.preventDefault();
    // console.log(this.state);

    // khi người dùng bấm nút submit thì gửi dữ liệu người dùng nhập từ state ra hàm addProduct
    this.props.addProduct(this.state.productInfo);
  };

  // Can thiệp vào quá trình render props của updating
  static getDerivedStateFromProps(newProps, currentState) {
    console.log(currentState);
    // if (newProps.productEdit.id !== currentState.productInfo.if) {
    // truyền newProps là productEdit của nút chỉnh sửa cho state hiện tại của Form là productInfo
    // khi người dùng bấm nút edit thì lấy this.props.productEdit gán cho state
    currentState.productInfo = newProps.productEdit;
    return { ...currentState };
    // }
    // return null;
  }

  render() {
    let { id, name, price, description, img, type } = this.state.productInfo;

    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">
          <h4>Create Product</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p className="my-0">id</p>
                <input
                  value={id}
                  id="id"
                  type="text"
                  className="form-control"
                  placeholder="product id"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.id}</p>
              </div>
              <div className="form-group my-3">
                <p className="my-0">name</p>
                <input
                  value={name}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="product name"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.name}</p>
              </div>
              <div className="form-group">
                <p className="my-0">price</p>
                {/* 
                                    - property: bản chất thẻ html đã có sẵn và có thể gọi
                                    - attribute: bản chất thẻ html không có sẵn, do mình thêm vào thông qua thuộc tính data-; muốn lấy attribute thì phải getAttribute
                                 */}
                <input
                  value={price}
                  data-type="number"
                  id="price"
                  type="text"
                  className="form-control"
                  placeholder="product price"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p className="my-0">image</p>
                <input
                  value={img}
                  id="img"
                  type="text"
                  className="form-control"
                  placeholder="product image"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{this.state.error.img}</p>
              </div>
              <div className="form-group my-3">
                <p className="my-0">product type</p>
                <select
                  value={type}
                  id="type"
                  className="form-control"
                  onInput={this.handleChange}
                >
                  <option value="mobile">Mobile</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p className="my-0">description</p>
                <textarea
                  value={description}
                  id="description"
                  className="form-control"
                  placeholder="product description"
                  onInput={this.handleChange}
                ></textarea>
                <p className="text-danger">{this.state.error.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Create</button>
          <button type="button" className="btn btn-primary ms-2">
            Update
          </button>
        </div>
      </form>
    );
  }
}
