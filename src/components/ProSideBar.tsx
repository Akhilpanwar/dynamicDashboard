import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import path from "../data/paths.json";
import { TbSquareKey } from "react-icons/tb";
import { FaDiceD6 } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import {
  MdOutlineLiveHelp,
  MdOutlineDashboard,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "./userMenu";
import { useMediaQuery } from "@mui/material";

const ProSideBar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<number>(0);
  const [collapsed, setCollapsed] = useState(false);
  const iconMap: { [key: string]: React.FC } = {
    TbSquareKey,
    FaDiceD6,
    LuUserSquare2,
    BiSolidOffer,
    MdOutlineLiveHelp,
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div>
      <Sidebar className="sidebar-container" collapsed={collapsed}>
        <Menu className="side-container">
          <MenuItem
            color="white"
            className="main-title"
            icon={<MdOutlineDashboard />}
          >
            {path.paths.find((val) => val.id === isActive)?.element}
          </MenuItem>
          <div className="left-Menu-items">
            {path.paths.map((val) => {
              var IconComponent = iconMap[val.icon];

              return (
                <div>
                  <MenuItem
                    key={val.id}
                    className={
                      val.id === isActive ? "sub-Menu-active" : `sub-Menu`
                    }
                    icon={IconComponent && <IconComponent />}
                    onClick={() => {
                      setIsActive(val.id);
                      navigate(val.link);
                    }}
                  >
                    {val.element}

                    {isActive !== val.id && (
                      <MdKeyboardArrowRight style={{ float: "right" }} />
                    )}
                  </MenuItem>
                  <MenuItem className="user-menu-container">
                    <UserMenu />
                  </MenuItem>
                </div>
              );
            })}
          </div>
        </Menu>
      </Sidebar>
      {isSmallScreen && (
        <button
          onClick={toggleCollapsed}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 100,
            border: "none",
            background: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {collapsed ? <MdOutlineDashboard /> : <MdKeyboardArrowRight />}
        </button>
      )}
    </div>
  );
};
export default ProSideBar;
