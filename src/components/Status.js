import React from "react";
import { statusData } from "../data/data";
import { BsPlusLg } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";
import Card from "./Card";
import useTicketsAndUser from "../hooks/useTicketsAndUser";
import { groupDataByKeys } from "../helper/helper";

export const Status = ({ groupBy, orderBy }) => {
  const { tickets } = useTicketsAndUser();
  const groupByStatus = groupDataByKeys("status", tickets);
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
            <div> {statusData["Backlog"]} </div>
            <div> Backlog </div>
            <div> {groupByStatus["Backlog"]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {statusData["Todo"]} </div>
            <div> Todo </div>
            <div> {groupByStatus["Todo"]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {statusData["In progress"]} </div>
            <div> In progress </div>
            <div> {groupByStatus["In progress"]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {statusData["Done"]} </div>
            <div> Done </div>
            <div> {groupByStatus["Done"]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
        <div className="pgriditem">
          <div className="headeritem">
            <div> {statusData["Canceled"]} </div>
            <div> Canceled </div>
            <div> {groupByStatus["Canceled"]?.length} </div>
          </div>
          <div className="headeritem">
            <BsPlusLg />
            <PiDotsThreeBold />
          </div>
        </div>
      </div>
      <div className="ptickets">
        <div className="ticitems">
          {groupByStatus["Backlog"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByStatus["Todo"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByStatus["In progress"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByStatus["Done"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
        <div className="ticitems">
          {groupByStatus["Canceled"]?.sort(compare).map((i) => (
            <Card item={i} groupBy={groupBy} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
