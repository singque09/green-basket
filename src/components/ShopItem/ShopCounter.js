import { Button, Grid, IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useShopItems } from "../../hooks/ShopItemsProvider";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  textField: {
    WebkitAppearance: "none",
  },
}));

export default function ShopCounter(props) {
  const classes = useStyles();
  const { addToCart, updateCart } = useShopItems();
  const [counter, setCounter] = useState(props.quantity);

  const handleChange = (evt) => {
    setCounter(evt.target.value);
  };

  const onAddToCart = () => {
    addToCart({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      image: props.image,
      quantity: counter,
    });
    setCounter(1);
  };

  const onUpdateCart = () => {
    updateCart(props.id, counter);
    setCounter(1);
  };

  const shopItemButton = () => {
    if (props.inCart) {
      return (
        <Button
          variant="contained"
          color="secondary"
          style={{ color: "white" }}
          onClick={onUpdateCart}
        >
          <strong>UPDATE CART</strong>
        </Button>
      );
    }
    return (
      <Button
        variant="contained"
        color="primary"
        style={{ color: "white" }}
        onClick={onAddToCart}
      >
        <strong>ADD TO CART</strong>
      </Button>
    );
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={props.style}
    >
      <Grid item xs={12}>
        <div className={classes.controls}>
          <IconButton onClick={() => setCounter(Number(counter) - 1)}>
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={counter}
            onChange={handleChange}
            name={props.id}
            className={classes.textField}
            variant="outlined"
            size="small"
            margin="dense"
            style={{ width: "60px" }}
          />
          <IconButton onClick={() => setCounter(Number(counter) + 1)}>
            <AddIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={12}>
        {shopItemButton()}
      </Grid>
    </Grid>
  );
}
