import {
  Button,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useShopItems } from "../../hooks/ShopItemsProvider";

export default function ProductFilter() {
  const {filterProduct, filterPrice} = useShopItems();
  const productFilter = ["Fruit", "Meat", "Seafood", "Vegetable"];
  const [checked, setChecked] = React.useState([]);
  const [range, setRange] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  const resetFilter = () => {
    setChecked([])
    filterProduct([0,1,2,3])
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setRange([0,1000])
    setChecked(newChecked);
    filterProduct(newChecked)
  };
  return (
    <React.Fragment>
      <Typography color="primary" variant="h5">
        <strong>Products Filter</strong>
      </Typography>
      <List>
        {productFilter.map((value, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem
              key={value}
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
        onClick={resetFilter}
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
        style={{ margin: "20px 0" }}
      />
      <Typography align="center" variant="body2" color="primary">
        <span style={{ color: "grey" }}>Price: </span>{" "}
        {new Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(range[0])}
        <span style={{ color: "grey", margin: "50px 0px" }}> - </span>
        {new Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(range[1])}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ color: "white", margin: "10px 0", width: "100%" }}
        onClick={()=>filterPrice(range)}
      >
        Filter Price
      </Button>
    </React.Fragment>
  );
}
