import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dashboard from "../data/dashboard.json";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { TbDatabasePlus } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import YearlyGraph from "./OverView";
import CustomersPieChart from "./CustomersPieChart";
import ProductSell from "./ProductSell";
import { Typography } from "@mui/material";
import { PiHandWavingFill } from "react-icons/pi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoard: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: "0px 0px 0px 0px !important",
      }}
      className="dashboard-container"
    >
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography>
            Hello Sharukh <PiHandWavingFill color={"#d6ba96"} size={20} />
          </Typography>
        </Grid>
        {dashboard.data.map((val) => (
          <Grid item xs={12} sm={6} md={3} key={val.id}>
            <Item className="dashboard-items">
              <Box
                height={90}
                width={120}
                display="flex"
                alignItems="center"
                style={{ boxShadow: "0px 0px 0px 0px !important" }}
                gap={1}
                p={1}
              >
                <span
                  className={`shaded-icon ${
                    val.name === "orders"
                      ? "orders-icon"
                      : val.name === "Earning"
                      ? "earning-icon"
                      : val.name === "Balance"
                      ? "balance-icon"
                      : "sales-icon"
                  }`}
                >
                  {val.name === "orders" ? (
                    <CgNotes size={44} color={"#8900fa"} />
                  ) : val.name === "Earning" ? (
                    <RiMoneyDollarCircleLine size={44} color={"#5ba54c"} />
                  ) : val.name === "Balance" ? (
                    <TbDatabasePlus size={44} color={"#355bbc"} />
                  ) : (
                    <MdLock size={44} color={"#c7455f"} />
                  )}
                </span>

                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-around"
                  flexDirection="column"
                >
                  <Typography
                    color="lightgrey"
                    fontFamily="sans-serif"
                    fontSize="12px"
                  >
                    {val.name}
                  </Typography>
                  <Typography
                    color="black"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    {val.value}
                  </Typography>

                  <Typography
                    variant="body2"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    color="black"
                    fontFamily="sans-serif"
                    fontSize="12px"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    <span>
                      {val.increment !== "0" ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            color: "green",
                          }}
                        >
                          <FaLongArrowAltUp />
                          {val.increment}
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            color: "red",
                          }}
                        >
                          <FaLongArrowAltDown />
                          {val.decrement}
                        </span>
                      )}{" "}
                    </span>
                    &nbsp;
                    <span>{val.tenure}</span>
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}

        <Grid item xs={12} md={7}>
          <Item>
            <YearlyGraph />
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <CustomersPieChart />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <ProductSell />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
