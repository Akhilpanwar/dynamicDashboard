import { Typography, Avatar, Box } from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";

export const UserMenu: React.FC = () => {
  return (
    <Box className="user-menu">
      <Avatar
        alt="Evano"
        src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-260nw-1667439913.jpg"
        sx={{ mr: 1 }}
      />

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="body1" fontSize={12}>
          Evano
        </Typography>
        <Typography variant="body2" fontSize={12} color="grey">
          Project Manager
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" className="user-menu-icon">
        <RiArrowDownSLine color={"grey"} size={20} />
      </Box>
    </Box>
  );
};
