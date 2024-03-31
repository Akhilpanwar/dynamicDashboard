import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dashboard from "../data/dashboard.json";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { TbDatabasePlus } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import YearlyGraph from "./OverView";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const DashBoard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        {dashboard.data.map((val) => {
          return (
            <Grid item xs={3} key={val.id}>
              <Item>
                <Box
                  height={60}
                  width={100}
                  my={3}
                  display="flex"
                  alignItems="center"
                  style={{ boxShadow: "0px 0px 0px 0px !important" }}
                  gap={8}
                  p={2}
                >
                  <span className="shaded-icon">
                    {val.name === "orders" ? (
                      <CgNotes size={44} />
                    ) : val.name === "Earning" ? (
                      <MdOutlineAttachMoney
                        size={44}
                        style={{ border: "2px solid green" }}
                        color={"green"}
                      />
                    ) : val.name === "Balance" ? (
                      <TbDatabasePlus size={44} />
                    ) : (
                      <FcSalesPerformance size={44} />
                    )}
                  </span>

                  <div>
                    <h5>{val.name}</h5>
                    <h2>{val.value}</h2>
                    <h6>
                      {val.increment !== "0" ? (
                        <>
                          <FaLongArrowAltUp />
                          {val.increment}
                        </>
                      ) : (
                        <>
                          <FaLongArrowAltDown />
                          {val.decrement}
                        </>
                      )}
                      this {val.tenure}
                    </h6>
                  </div>
                </Box>
              </Item>
            </Grid>
          );
        })}

        <Grid item xs={7.9}>
          <Item>
            <Box
              height={133}
              width={700}
              my={7}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              style={{ boxShadow: "0px 0px 0px 0px !important" }}
              gap={8}
              p={2}
            >
              <YearlyGraph />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4.1}>
          <Item>
            {" "}
            <Box
              height={130}
              width={100}
              my={3}
              display="flex"
              alignItems="center"
              style={{ boxShadow: "0px 0px 0px 0px !important" }}
              gap={8}
              p={2}
            >
              This Box uses MUI System props for quick customization.
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            {" "}
            <Box
              height={130}
              width={100}
              my={3}
              display="flex"
              alignItems="center"
              style={{ boxShadow: "0px 0px 0px 0px !important" }}
              gap={8}
              p={2}
            ></Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
