import {
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import React from "react";
import ShopItem from "../components/ShopItem/ShopItem";

export default function Shop(props) {
  const [sortBy, setSortby] = React.useState(3);

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={9}>
                <IconButton>
                  <AppsIcon />
                </IconButton>
                <IconButton>
                  <FormatListBulletedIcon />
                </IconButton>
              </Grid>

              <Grid item xs={12} sm={3}>
                <FormControl
                  style={{ width: "100%" }}
                >
                  <Select
                    displayEmpty
                    value={sortBy}
                    onChange={(e) => setSortby(e.target.value)}
                  >
                    <MenuItem value={1}>Sort by Popularity</MenuItem>
                    <MenuItem value={2}>Sort by average rating</MenuItem>
                    <MenuItem value={3}>Sort by latest</MenuItem>
                    <MenuItem value={4}>Sort by price: low to high</MenuItem>
                    <MenuItem value={5}>Sort by price: high to low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          {props.generateShopItem.map((item, index) => (
            <ShopItem
              key={item.id + index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
