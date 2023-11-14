import React, { useEffect, useState } from "react";

const useTicketsAndUser = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setusers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await res.json();
      setTickets(data.tickets);
      setusers(data.users);
    };
    fetchData();
  }, []);
  return { users, tickets };
};

export default useTicketsAndUser;
