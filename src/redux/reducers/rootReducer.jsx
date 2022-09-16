import { combineReducers } from "redux";
import BTDatVeReducer from "./BTDatVeReducer";
import BTGioHangReducer from "./BTGioHangReducer";
import BTXucXacReducer from "./BTXucXacReducer";
import UserProfileReducer from "./UserProfileReducer";

// store tổng ứng dụng
const rootReducer = combineReducers({
  // Nơi sẽ chứa các reducer cho từng nghiệp vu (store con)
  stateGioHang: BTGioHangReducer, // stateGioHang
  BTXucXacReducer, // state game xuc xac
  BTDatVeReducer,
  UserProfileReducer,
});

export default rootReducer;
