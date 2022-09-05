import React, { useState } from "react";

export default function DemoChonXe() {
  const [imgCar, setImg] = useState("./img/cars/black-car.jpg");

  const handleChangeColor = (color) => {
    setImg(`./img/cars/${color}-car.jpg`);
  };
  return (
    <div>
      <h3>Demo Chọn Xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={imgCar} className="w-100" alt="car" />
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              handleChangeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn mx-2 text-white"
            style={{ backgroundColor: "silver" }}
            onClick={() => {
              handleChangeColor("silver");
            }}
          >
            Silver
          </button>
          <button
            className="btn mx-2 text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn mx-2 text-dark"
            style={{ backgroundColor: "#eee" }}
            onClick={() => {
              handleChangeColor("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
