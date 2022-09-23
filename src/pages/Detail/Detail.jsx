import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getProductDetailActionApi } from "../../redux/reducers/productReducer";

export default function Detail(props) {
  // const [productDetail, setProductDetail] = useState({});
  const { productDetail } = useSelector((state) => state.productReducer);
  console.log(productDetail);
  const dispatch = useDispatch();

  const params = useParams();

  const navigate = useNavigate();

  const getProductDetailApi = () => {
    const actionThunk = getProductDetailActionApi(params.id);

    dispatch(actionThunk);
  };

  useEffect(() => {
    // Chạy 2 trường hợp: lần đầu load page và params.id thay đổi thì hàm này sẽ chạy
    getProductDetailApi();
  }, [params.id]);

  return (
    <div className="container py-5">
      <div className="row justify-content-between">
        <div className="col-4">
          <img src={productDetail.image} alt="..." />
        </div>
        <div className="col-7">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button className="btn btn-danger">Add to cart</button>
        </div>
        <div className="mt-3">
          <h4>Related products</h4>
          <div className="row">
            {/* ? là toán từ optional chaining: nếu có thuộc tính đó thì mới chấm tiếp phương thức hoặc thuộc tính tiếp theo được, nếu không có thì bỏ qua */}
            {productDetail.relatedProducts?.map((item) => {
              return (
                <div key={item.id} className="col-3">
                  <div className="card">
                    <img src={item.image} alt="..." />
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <p>{item.price}$</p>
                      <NavLink
                        className="btn btn-success"
                        to={`/detail/${item.id}`}
                      >
                        View detail
                      </NavLink>
                      <button
                        className="btn btn-secondary mx-2"
                        onClick={() => {
                          navigate(`/detail/${item.id}`);
                        }}
                      >
                        View detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
