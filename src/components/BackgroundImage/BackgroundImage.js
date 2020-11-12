import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import background from "../../assets/images/0001.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url("${background}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "700px",
    borderRadius: "20px",
    marginBottom: "-500px",
    [theme.breakpoints.down("md")]: {
      marginTop: "56px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "64px",
    },
  },
}));

export default function BackgroundImage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, .3)",
          height: "100%",
          borderRadius: "inherit",
          paddingTop: "80px",
          color: "white",
        }}
      >
        <Typography variant="h3" color="inherit" align="center" noWrap>
          Online Shop
        </Typography>
      </div>
    </div>
  );
}
