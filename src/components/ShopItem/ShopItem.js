import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";
import { useShopItems } from "../../hooks/ShopItemsProvider";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  mediaColumn: {
    height: 300,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  textField: {
    
    WebkitAppearance:"none"
  }
}));

export default function ShopItem(props) {
  const classes = useStyles();
  const { changeQuantity } = useShopItems();

  function ShopCounter({ style, id, quantity, index }) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={style}
      >
        <Grid item xs={12}>
          <div className={classes.controls}>
            <IconButton
              onClick={() => changeQuantity(id, Number(quantity - 1))}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
            type="number"
              value={quantity}
              onChange={(e) => changeQuantity(id, Number(e.target.value))}
              name={id}
              className={classes.textField}
              variant="outlined"
              size="small"
              margin="dense"
              style={{ width: "60px" }}
            />
            <IconButton
              onClick={() => changeQuantity(id, Number(quantity + 1))}
            >
              <AddIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ color: "white" }}
          >
            <strong>ADD TO CART</strong>
          </Button>
        </Grid>
      </Grid>
    );
  }

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
                    {props.price} PHP
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
              variant="h6"
              component="h1"
              style={{ height: "60px" }}
            >
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
          <ShopCounter {...props} style={{ marginBottom: "50px" }} />
        </Card>
      </Grid>
    </React.Fragment>
  );
}
