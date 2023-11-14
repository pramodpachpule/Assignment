import React from "react";
import useTicketsAndUser from "../hooks/useTicketsAndUser";
import { priorityData, prioritydata, statusData } from "../data/data";
import { BsPlusLg } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Card from "./Card";
import { groupDataByKeys } from "../helper/helper";

const Priority = ({ groupBy, orderBy }) => {
  const { tickets } = useTicketsAndUser();
  const groupByPriority = groupDataByKeys("priority", tickets);
  function compare(a, b) {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="pcontainer">
      <div className="pheader">
        <div className="pgriditem">
          <div className="headeritem">
            <div> {prioritydata[0].icon} </div>
            <div> {prioritydata[0].priority} </div>
            <div> {groupByPriority[0]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {prioritydata[1].icon} </div>
            <div> {prioritydata[1].priority} </div>
            <div> {groupByPriority[1]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {prioritydata[2].icon} </div>
            <div> {prioritydata[2].priority} </div>
            <div> {groupByPriority[2]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {prioritydata[3].icon} </div>
            <div> {prioritydata[3].priority} </div>
            <div> {groupByPriority[3]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {prioritydata[4].icon} </div>
            <div> {prioritydata[4].priority} </div>
            <div> {groupByPriority[4]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
      </div>
      <div className="ptickets">
        <div className="ticitems">
          {groupByPriority[0]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByPriority[1]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByPriority[2]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByPriority[3]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByPriority[4]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Priority;

// const Box = ({ item }) => {
//   const { users } = useTicketsAndUser();
//   const groupBy = "priority";
//   const user = users.filter((i) => i.id === item.userId)[0];
//   return (
//     <div className="card">
//       <div className="carditem1">
//         <div>{item.id}</div>
//         <div id="name"> {user?.name.slice(0, 2).toUpperCase()} </div>
//       </div>
//       <div className="title">
//         {groupBy === "priority" && <div> {statusData[item.status]} </div>}
//         <h3> {item.title.slice(0, 59)} </h3>
//       </div>
//       <div className="carditem2">
//         {/* <div> {priorityData[item.priority]}</div> */}
//         <div className="tag">
//           <FaCircle style={{ color: "gray" }} /> <div> {item?.tag}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Box = ({ item }) => {
  const { users } = useTicketsAndUser();
  const groupBy = "priority";
  const user = users.filter((i) => i.id === item.userId)[0];
  return (
    <div className="card">
      <div className="carditem1">
        <div>{item.id}</div>
        {groupBy !== "userId" && (
          <div id="name"> {user?.name.slice(0, 2).toUpperCase()} </div>
        )}
      </div>
      <div className="title">
        {groupBy === "priority" && <div> {statusData[item.status]} </div>}
        <h3> {item.title.slice(0, 59)} </h3>
      </div>
      <div className="carditem2">
        <div className="icon"> {priorityData[item.priority]}</div>
        <div className="tag">
          <div className="flex">
            {" "}
            <FaCircle size={18} style={{ color: "gray" }} />{" "}
          </div>
          <div> {item?.tag}</div>
        </div>
      </div>
    </div>
  );
};
