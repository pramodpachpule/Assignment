import { useState } from "react";
import "./App.css";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Status from "./components/Status";
import Priority from "./components/Priority";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {
  const [open, setOpen] = useState(false);
  const [orderBy, setOrderBy] = useState("priority");
  const [groupBy, setGroupBy] = useState("status");

  return (
    <>
      <nav className="navbar">
        <div className="navitem" onClick={() => setOpen(!open)}>
          <AiOutlineBars size={25} />
          <span>Display </span> <MdOutlineKeyboardArrowDown size={25} />{" "}
        </div>
      </nav>
      {open && (
        <Navbar
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          groupBy={groupBy}
          setGroupBy={setGroupBy}
        />
      )}
      {groupBy === "priority" && (
        <Priority groupBy={groupBy} orderBy={orderBy} />
      )}
      {groupBy === "status" && <Status groupBy={groupBy} orderBy={orderBy} />}
      {groupBy === "userId" && <Users groupBy={groupBy} orderBy={orderBy} />}
    </>
  );
}

export default App;
