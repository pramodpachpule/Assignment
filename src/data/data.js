import { AiFillCheckCircle } from "react-icons/ai";
import { BsDashCircleDotted } from "react-icons/bs";
import {
  PiCellSignalHighBold,
  PiCellSignalLowBold,
  PiCellSignalMediumBold,
  PiDotsThreeBold,
  PiCircleLight,
  PiXCircleLight,
  PiCaretCircleDoubleRight,
} from "react-icons/pi";

import { TbExclamationMark } from "react-icons/tb";
export const prioritydata = [
  { priority: "No priority", icon: <PiDotsThreeBold /> },
  { priority: "Urgent", icon: <TbExclamationMark /> },
  { priority: "High", icon: <PiCellSignalHighBold /> },
  { priority: "Medium", icon: <PiCellSignalMediumBold /> },
  { priority: "Low", icon: <PiCellSignalLowBold /> },
];
export const prioritydata1 = [
  { "No priority": <PiDotsThreeBold /> },
  { Urgent: <TbExclamationMark /> },
  { High: <PiCellSignalHighBold /> },
  { Medium: <PiCellSignalMediumBold /> },
  { Low: <PiCellSignalLowBold /> },
];

export const priorityData = [
  <PiDotsThreeBold size={20} />,
  <PiCellSignalLowBold size={20} />,
  <PiCellSignalMediumBold size={20} />,
  <PiCellSignalHighBold size={20} />,
  <TbExclamationMark size={20} />,
];

export const statusData = {
  Backlog: <BsDashCircleDotted color="gray" />,
  Todo: <PiCircleLight />,
  "In progress": <PiCaretCircleDoubleRight color="#cdcd0d" />,
  Done: <AiFillCheckCircle color="#474782" />,
  Canceled: <PiXCircleLight color="red" />,
};
