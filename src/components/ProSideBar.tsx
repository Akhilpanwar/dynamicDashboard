import React, { useState } from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
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
const ProSideBar: React.FC = () => {
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
                </div>
              );
            })}
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default ProSideBar;
