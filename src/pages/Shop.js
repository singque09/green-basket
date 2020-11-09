import {
  Card,
  CardContent,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { Pagination } from "@material-ui/lab";
import React from "react";
import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import ShopItem from "../components/ShopItem/ShopItem";
import { useShopItems } from "../hooks/ShopItemsProvider";

export default function Shop() {
  const { shopItems } = useShopItems();
  const [sortBy, setSortby] = React.useState(3);
  const [gridView, setGridView] = React.useState(["secondary", ""]);
  const [page, setPage] = React.useState(1);

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
                        <IconButton
                          color={gridView[0]}
                          onClick={() => setGridView(["secondary", ""])}
                        >
                          <AppsIcon />
                        </IconButton>
                        <IconButton
                          color={gridView[1]}
                          onClick={() => setGridView(["", "secondary"])}
                        >
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
              {shopItems
                .slice((page - 1) * 12, page * 12)
                .map((item, index) => (
                  <ShopItem
                    key={item + index}
                    {...item}
                    gridView={gridView[1]}
                  />
                ))}
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Pagination
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    count={Math.ceil(shopItems.length / 12)}
                    color="secondary"
                    showFirstButton
                    showLastButton
                    defaultPage={1}
                    siblingCount={0}
                    size="large"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
