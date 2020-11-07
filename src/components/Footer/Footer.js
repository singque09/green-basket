import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Footer({ style }) {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      style={style}
    >
      <Grid item xs>
        <Typography>
          <Typography color="secondary" display="inline" variant="body2">
            Arlov PH
          </Typography>{" "}
          <Typography display="inline" variant="caption">
            &#169; {new Date().getFullYear()}. All Rights Reserved.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
