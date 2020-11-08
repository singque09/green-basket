import {
  Card,
  CardContent,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  MenuItem,
  Select,
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import React from "react";
import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import ShopItem from "../components/ShopItem/ShopItem";

export default function Shop(props) {
  const [sortBy, setSortby] = React.useState(3);
  const [gridView, setGridView] = React.useState(["secondary",""]);
  
  return (
    <Card variant="outlined">
      <CardContent style={{ padding: "20px" }}>
        <Grid container spacing={5}>
          <Hidden smDown>
            <LeftSideBar />
          </Hidden>
          <Grid item xs>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={7} md={8}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={8}>
                        <IconButton color={gridView[0]} onClick={()=>setGridView(["secondary",""])}>
                          <AppsIcon />
                        </IconButton>
                        <IconButton color={gridView[1]} onClick={()=>setGridView(["","secondary"])}>
                          <FormatListBulletedIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs>
                        <Hidden smUp>
                          <IconButton style={{ float: "right" }}>
                            <FilterList />
                          </IconButton>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={5} md={4}>
                    <FormControl fullWidth margin="dense">
                      <Select
                        displayEmpty
                        value={sortBy}
                        onChange={(e) => setSortby(e.target.value)}
                      >
                        <MenuItem value={1}>Sort by Popularity</MenuItem>
                        <MenuItem value={2}>Sort by average rating</MenuItem>
                        <MenuItem value={3}>Sort by latest</MenuItem>
                        <MenuItem value={4}>
                          Sort by price: low to high
                        </MenuItem>
                        <MenuItem value={5}>
                          Sort by price: high to low
                        </MenuItem>
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
                  description={item.description}
                  gridView={gridView[1]}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
