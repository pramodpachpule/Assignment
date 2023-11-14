import React from "react";
import useTicketsAndUser from "../hooks/useTicketsAndUser";
import { BsPlusLg } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";

import Card from "./Card";
import { groupDataByKeys } from "../helper/helper";
const Users = ({ groupBy, orderBy }) => {
  const { users, tickets } = useTicketsAndUser();
  const groupByUsers = groupDataByKeys("userId", tickets);

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
        {users?.map((i) => (
          <div className="pgriditem">
            <div className="headeritem">
              <div id="name"> {i?.name.slice(0, 2).toUpperCase()} </div>
              <div> {i.name} </div>
              <div> {groupByUsers[i.id]?.length} </div>
            </div>
            <div className="headeritem">
              <BsPlusLg />
              <PiDotsThreeBold />
            </div>
          </div>
        ))}
      </div>
      <div className="ptickets">
        <div className="ticitems">
          {groupByUsers["usr-1"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} />
          ))}
        </div>
        <div className="ticitems">
          {groupByUsers["usr-2"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} />
          ))}
        </div>
        <div className="ticitems">
          {groupByUsers["usr-3"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} />
          ))}
        </div>
        <div className="ticitems">
          {groupByUsers["usr-4"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} />
          ))}
        </div>
        <div className="ticitems">
          {groupByUsers["usr-5"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
