import { FcOk } from "react-icons/fc";
import {
  BsExclamationTriangleFill,
  BsFillXCircleFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";

export const colors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const bannerTypes = [
  { type: "success", icon: FcOk, title: "Congratulations!" },
  { type: "warning", icon: BsExclamationTriangleFill, title: "Attention" },
  {
    type: "error",
    icon: BsFillXCircleFill,
    title: "There is a problem with your application",
  },
  { type: "neutral", icon: BsFillInfoCircleFill, title: "Update available" },
];
