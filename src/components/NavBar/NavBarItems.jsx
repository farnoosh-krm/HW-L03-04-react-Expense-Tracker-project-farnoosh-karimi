import React, { useContext, useState } from "react";
import profileIcon from "../../images/profile.png";
import settingInIcon from "../../images/setting.png";
import bellInIcon from "../../images/bell.png";
import searchInIcon from "../../images/search.png";
import calenderIcon from "../../images/calender.png";
import Inputs from "../Inputs/Inputs";
import { billContext } from "../Bills/BillsContext";

const NavBarItems = () => {
  const { setSearchQuery } = useContext(billContext);
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-row gap-2.5">
      <Inputs
        type={"text"}
        placeholder={"search..."}
        icon={searchInIcon}
        onchange={(e) => setSearchQuery(e.target.value)}
      />

      <Inputs
        type={"date"}
        placeholder={"date"}
        value={date}
        icon={calenderIcon}
        widthEnter={"120px"}
        onchange={(e) => setDate(e.target.value)}
      />
      <Inputs
        type={"date"}
        placeholder={"date"}
        value={date}
        icon={calenderIcon}
        widthEnter={"120px"}
        onchange={(e) => setDate(e.target.value)}
      />

      <a className="flex flex-row items-center" href="#">
        <img className="w-[25px] h-[25px]" src={profileIcon} />
        <p className="text-gray-700 text-sm">Sign In</p>
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={settingInIcon} />
      </a>

      <a href="#">
        <img className="w-[25px] h-[25px] mt-2" src={bellInIcon} />
      </a>
    </div>
  );
};

export default NavBarItems;
