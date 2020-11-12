import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ShopCounter from "./ShopCounter";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  mediaColumn: {
    height: 300,
  },
}));

export default function ShopItem(props) {
  const classes = useStyles();

  if (props.gridView === "secondary") {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Card raised>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <CardMedia
                  className={classes.mediaColumn}
                  image={props.image}
                  title={props.name}
                />
              </Grid>
              <Grid
                item
                xs
                className={classes.details}
                style={{ padding: "20px", height: "300px" }}
              >
                <ShopCounter
                  style={{ position: "relative", top: "60%" }}
                  {...props}
                />
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ marginTop: "-100px" }}
                >
                  <Typography align="left" variant="inherit">
                    {props.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="error"
                    align="left"
                    component="p"
                  >
                  {new Intl.NumberFormat("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  }).format(props.price)}
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Hidden mdUp>{props.description.slice(0, 40) + "..."}</Hidden>
                  <Hidden lgUp smDown>
                    {props.description.slice(0, 80) + "..."}
                  </Hidden>
                  <Hidden mdDown>{props.description}</Hidden>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card raised>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent style={{ height: "120px" }}>
            <Typography
              gutterBottom
              align="center"
              variant="body1"
              component="h3"
              style={{ height: "60px" }}
            >
              <strong>{props.name}</strong>
            </Typography>
            <Typography
              variant="body2"
              color="error"
              align="center"
              component="p"
            >
            {new Intl.NumberFormat("en-PH", {
              style: "currency",
              currency: "PHP",
            }).format(props.price)}
            </Typography>
          </CardContent>
          <ShopCounter {...props} style={{ marginBottom: "50px" }} />
        </Card>
      </Grid>
    </React.Fragment>
  );
}
