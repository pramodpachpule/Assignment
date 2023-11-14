import { FaCircle } from "react-icons/fa";
import { priorityData, statusData } from "../data/data";
import useTicketsAndUser from "../hooks/useTicketsAndUser";

const Card = ({ item, groupBy }) => {
  const { users } = useTicketsAndUser();
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
        {groupBy !== "status" && <div> {statusData[item.status]} </div>}
        <h3> {item.title.slice(0, 40)} </h3>
      </div>
      <div className="carditem2">
        {groupBy !== "priority" && (
          <div className="icon"> {priorityData[item.priority]}</div>
        )}
        <div className="tag">
          <div className="flex">
            {" "}
            <FaCircle size={15} color="#a7a6a6" />{" "}
          </div>
          <div> {item?.tag}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
