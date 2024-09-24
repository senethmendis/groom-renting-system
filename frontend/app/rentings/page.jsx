"use client";
import React, { useEffect } from "react";
import axios from "axios";

import AddRenting from "@/components/rentings/AddRenting";
import { RentingTable } from "@/components/rentings/RentingTable";

const Renting = () => {
  const [renting, setRenting] = React.useState([]);

  const getRentingData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/rentings");
      setRenting(res.data);
    } catch (error) {
      console.log(error, "Faild Fetching renting data");
    }
  };

  useEffect(() => {
    getRentingData();
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* left side adding renting details */}
      <div className="col-span-1 md:col-span-2 gap-4">
        <AddRenting refetchData={getRentingData} />
      </div>

      {/* renting table */}
      <RentingTable renting={renting} />
    </div>
  );
};

export default Renting;
