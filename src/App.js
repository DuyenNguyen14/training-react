import "./App.css";
import BTChonGheXemPhim from "./BTRedux/BTChonGheXemPhim/BTChonGheXemPhim";
import BTGameXucXac from "./BTRedux/BTGameXucXac/BTGameXucXac";
import BTGioHangRedux from "./BTRedux/BTGioHangRedux/BTGioHangRedux";
import BaiTapComponent from "./components/bai-tap/BaiTapComponent/BaiTapComponent";
import BaiTapXemChiTiet from "./components/bai-tap/BaiTapTruyenFunction_(XemChiTiet)/BaiTapXemChiTiet";
import BaiTapState from "./components/CauTrucDieuKhien_ReRender/BaiTapState";
import Demo_if from "./components/CauTrucDieuKhien_ReRender/Demo_if";
import DemoVongLap from "./components/Cau_Truc_Lap/DemoVongLap";
import LayoutFilms from "./components/Cau_Truc_Lap/LayoutFilms";
import Event from "./components/Databinding/Event";
import SinhVien from "./components/Databinding/SinhVien";
import DemoProps from "./components/Props/DemoProps";
import DemoPureComponent from "./DemoPureComponent/DemoPureComponent";
import UserProfile from "./FormValidation/UserProfile/UserProfile";
import ChangeShoesColor from "./self-practice/State_setState/ChangeShoesColor";

function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent /> */}
      {/* <SinhVien /> */}
      {/* <Event /> */}
      {/* <Demo_if /> */}
      {/* <BaiTapState /> */}
      {/* <DemoVongLap /> */}
      {/* <LayoutFilms /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapXemChiTiet /> */}

      {/* Redux */}
      {/* <BTGioHangRedux /> */}
      {/* <BTGameXucXac /> */}
      {/* <BTChonGheXemPhim /> */}

      {/* Pure component */}
      {/* <DemoPureComponent /> */}

      {/* validation */}
      <UserProfile />

      {/* Self-pacticing */}
      {/* <ChangeShoesColor /> */}
    </div>
  );
}

export default App;
