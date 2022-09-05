import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

/*
  + Khi gọi các hàm hooks thì không đặt trong 1 cái gì hết (hàm, object, function), chỉ gọi trên cùng
  + Chỉ dùng hooks với rfc
*/

// tạo một biến quản trị setInterval để clear khi page khác được load
// nên khai báo biến ở bên ngoài functional component vì nếu khai báo bên trong thì mỗi lần setState, các hàm có trong component đều sẽ được gọi lại
let timeout = {};

export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);

  const [count, setCount] = useState(60);

  const getApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    promise.then((result) => {
      console.log("result", result.data.content);
      setArrProduct(result.data.content);
    });

    promise.catch((err) => {
      console.log(err);
    });
  };

  const renderProduct = () => {
    console.log(arrProduct);
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-3" key={index}>
          <div className="card">
            <img src={item.image} alt={item.alias} />
            <div
              className="card-body bg-dark text-white"
              style={{
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <h5>{item.name}</h5>
              <p>{item.price}$</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    // callback function này sẽ chạy 1 lần đầu tiên, và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm useEffect (giống DidUpdate)
    // Khi nào count thay đổi thì mới chạy hàm callback này tiếp, còn state khác thay đổi thì hàm này không chạy
  }, [count]);

  useEffect(() => {
    // hàm useEffect bao gồm 2 tham số, 1 call-back function và 1 dependency
    // Chạy 1 lần sau khi render (Giống hệt componentDidMount bên class component)
    getApi();

    timeout = setInterval(() => {
      setCount((count) => {
        return count - 1;
      });

      console.log("run");
    }, 1000);

    return () => {
      // function return trong useEffect sẽ được kích hoạt trước khi component này mất khỏi giao diện, giống componentWillUnmount bên react class
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="container">
      <h3>UseEffectDemo</h3>
      <h5>ComponentWillUnmount</h5>
      <p>
        Count:
        <span className="text-danger"> {count}</span>
      </p>
      <hr />
      <h5>ComponentDidMount (Sử dụng cho việc load 1 lần sau render)</h5>
      <hr />
      <h3>Shoes Shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
