import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
}));

export default function ShopItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <Card raised>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent style={{ height: "120px" }}>
            <Typography gutterBottom align="center" variant="h6" component="h1">
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color="error"
              align="center"
              component="p"
            >
              {props.price} PHP
            </Typography>
          </CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
              >
                ADD TO CART
              </Button>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "30px" }}>
              <Button size="small" color="primary">
                VIEW CART
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
