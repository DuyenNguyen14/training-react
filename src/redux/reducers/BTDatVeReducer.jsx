import { DAT_GHE, HUY_GHE } from "../types/BTDatVeTypes";

const stateDefault = {
  dsGheDangDat: [{ soGhe: "A1", gia: 75000, daDat: false }],
};

const BTDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE:
      {
        let dsGheDangDatUpdate = [...state.dsGheDangDat];
        let index = dsGheDangDatUpdate.findIndex(
          (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
        );
        if (index !== -1) {
          dsGheDangDatUpdate.splice(index, 1);
        } else {
          dsGheDangDatUpdate.push(action.ghe);
        }

        state.dsGheDangDat = dsGheDangDatUpdate;
        return { ...state };
      }
      break;
    case HUY_GHE: {
      let dsGheDangDatUpdate = [...state.dsGheDangDat];
      let index = dsGheDangDatUpdate.findIndex(
        (gheHuy) => gheHuy.soGhe === action.soGhe
      );
      console.log(index);
      if (index !== -1) {
        dsGheDangDatUpdate.splice(index, 1);
      }

      state.dsGheDangDat = dsGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BTDatVeReducer;
