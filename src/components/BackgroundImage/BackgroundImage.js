import { Typography } from "@material-ui/core";
import React from "react";
import background from "../../assets/images/0001.jpg";

export default function BackgroundImage() {
  return (
    <div
      style={{
        backgroundImage: `url("${background}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "700px",
        borderRadius: "20px",
        marginBottom: "-500px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, .3)",
          height: "100%",
          borderRadius: "inherit",
          paddingTop: "80px",
          color: "white"
        }}
      >
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          noWrap
        >
          Online Shop
        </Typography>
      </div>
    </div>
  );
}
