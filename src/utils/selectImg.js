import { isEmpty } from "lodash";
import emptyPicture from "assets/emptyPicture.svg";
import Profile1 from "assets/Profile1.svg";
import Profile2 from "assets/Profile2.svg";
import Profile3 from "assets/Profile3.svg";
import Profile4 from "assets/Profile4.svg";
import Profile5 from "assets/Profile5.svg";
import Profile6 from "assets/Profile6.svg";
import Profile7 from "assets/Profile7.svg";
import Profile8 from "assets/Profile8.svg";

export const SelectImg = (img) => {
  if (isEmpty(img)) return emptyPicture;
  if (img.includes(".svg")) {
    switch (img) {
      case "Profile1.svg":
        return Profile1;
      case "Profile2.svg":
        return Profile2;
      case "Profile3.svg":
        return Profile3;
      case "Profile4.svg":
        return Profile4;
      case "Profile5.svg":
        return Profile5;
      case "Profile6.svg":
        return Profile6;
      case "Profile7.svg":
        return Profile7;
      case "Profile8.svg":
        return Profile8;
      default:
        return img;
    }
  }
  return img;
};
