import React, { useState, useCallback } from "react";
import Comment from "./Comment";

export default function UseCallBackDemo() {
  let [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);

  const renderLike = () => {
    return <p>Bạn đã thả {like}</p>;
  };

  // hàm useCallBack sẽ cache lại hàm renderLike sau mỗi lần setState render, chỉ tạo mới hàm renderLike khi like thay đổi
  const renderLikeCallBack = useCallback(renderLike, [like]);

  return (
    <div className="m-5">
      Like: {like} ♥ - member: {number}
      <button
        className="btn btn-success ms-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      {/* Khi setLike thì không cần phải render lại Comment */}
      <Comment renderLike={renderLikeCallBack} />
    </div>
  );
}
