const stateDefault = {
  taiXiu: true, // true: tai (3 -> 11), false: xiu (> 12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BTXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      {
        state.taiXiu = action.taiXiu;

        return { ...state };
      }
      break;
    case "PLAY_GAME":
      {
        // B1: xử lý random xúc xắc
        let mangXucXacNgauNhien = [];
        for (let i = 0; i < 3; i++) {
          // mỗi lần lặp random ra số ngẫu nhiên từ 1 --> 6
          let soNgauNhien = Math.floor(Math.random() * 6) + 1;
          // tạo ra xúc xắc từ số ngẫu nhiên
          let xucXacNgauNhien = {
            ma: soNgauNhien,
            hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          };

          mangXucXacNgauNhien.push(xucXacNgauNhien);
        }

        state.mangXucXac = mangXucXacNgauNhien;
        state.tongSoBanChoi += 1;

        // xử lý số bàn thắng
        let tongSoDiem = state.mangXucXac.reduce(
          (tongDiem, xucXacMang, index) => {
            return (tongDiem += xucXacMang.ma);
          },
          0
        );
        // xét điều kiện để win game
        if (
          (tongSoDiem > 11 && state.taiXiu) ||
          (tongSoDiem <= 11 && !state.taiXiu)
        ) {
          state.soBanThang += 1;
        }
        
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default BTXucXacReducer;
