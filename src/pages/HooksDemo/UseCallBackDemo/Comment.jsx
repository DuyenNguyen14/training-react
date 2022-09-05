import React, { memo } from "react";

export function Comment(props) {
  console.log("comment");
  return (
    <div>
      {props.renderLike()}
      <textarea className="w-50 form-control"></textarea> <br />
      <button className="btn btn-warning">Gửi</button>
    </div>
  );
}

// export memo để component Comment không render lại khi setLike
// khi component này nhận props like từ component cha thì setLike ở cha sẽ render lại ở child
export default memo(Comment);
