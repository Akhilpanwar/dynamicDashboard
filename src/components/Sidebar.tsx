import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import path from "../data/paths.json";
import { TbSquareKey } from "react-icons/tb";
import { FaDiceD6 } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineLiveHelp, MdOutlineDashboard } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<number>(0);
  const iconMap: { [key: string]: React.FC } = {
    TbSquareKey,
    FaDiceD6,
    LuUserSquare2,
    BiSolidOffer,
    MdOutlineLiveHelp,
  };
  return (
    <div>
      <Sidebar>
        <Menu className="collapsed-side-container">
          <MenuItem
            color="white"
            className="main-title"
            icon={<MdOutlineDashboard />}
          ></MenuItem>
          <div className="left-Menu-items">
            {path.paths.map((val) => {
              var IconComponent = iconMap[val.icon];

              return (
                <div
                  key={val.id}
                  className={
                    val.id === isActive ? "sub-Menu-active" : `sub-Menu`
                  }
                  onClick={() => {
                    setIsActive(val.id);
                    navigate(val.link);
                  }}
                >
                  <MenuItem icon={IconComponent && <IconComponent />} />
                  <Typography color="white" textAlign="center">
                    {val.element}
                  </Typography>
                </div>
              );
            })}
          </div>

          <MenuItem className="user-menu-container">
            <Avatar
              alt="Evano"
              src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-260nw-1667439913.jpg"
              sx={{ mr: 1 }}
            />
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideBar;
