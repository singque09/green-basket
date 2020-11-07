import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Slider,
  Typography,
} from "@material-ui/core";
import React from "react";

function valuetext(value) {
  return value;
}

export default function LeftSideBar() {
  const productFilter = ["Fruit", "Meat", "Seafood", "Vegetable"];
  const [checked, setChecked] = React.useState([]);
  const [range, setRange] = React.useState([100, 500]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Grid item style={{ width: "240px", marginTop: "10px" }}>
      <Typography color="primary" variant="h5">
        <strong>Shopping Cart</strong>
      </Typography>
      <Typography style={{ color: "grey", margin: "50px 0px" }} variant="body1">
        No products in the cart.
      </Typography>
      <Divider style={{ margin: "30px 0", height: "2px" }} />
      <Typography color="primary" variant="h5">
        <strong>Products Filter</strong>
      </Typography>
      <List>
        {productFilter.map((value, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        color="primary"
        style={{ color: "white", margin: "10px 0", width: "100%" }}
      >
        Reset
      </Button>
      <Divider style={{ margin: "30px 0", height: "2px" }} />
      <Typography color="primary" variant="h5">
        <strong>Price Filter</strong>
      </Typography>
      <Slider
        value={range}
        onChange={handleChange}
        color="secondary"
        max={1000}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ margin: "20px 0" }}
      />
          <Typography align="center" variant="body2" color="primary">
            <span style={{ color: "grey" }}>Price: </span>{" "}
            {range[0].toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}PHP
            <span style={{ color: "grey", margin: "50px 0px" }}> - </span>
            {range[1].toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}PHP
          </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ color: "white", margin: "10px 0", width: "100%" }}
      >
        Filter Price
      </Button>
    </Grid>
  );
}
