import React from "react";

const Navbar = ({ groupingBy, orderBy, setOrderBy, setGroupBy }) => {
  return (
    <div className="dropdown">
      <div className="ditem">
        <label>Grouping</label>
        <select value={groupingBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
          <option value="userId">Users</option>
        </select>
      </div>
      <div className="ditem">
        <label>Ordering</label>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
