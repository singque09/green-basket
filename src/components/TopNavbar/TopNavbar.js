import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import RightIconsRender from "./RightIcons";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Home, ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RenderMobileMenu from "./RenderMobileMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navbarColor: {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function TopNavbar({ shoppingCart }) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuItems = [
    { name: "Home", icon: <Home /> },
    { name: "Shop", icon: <ShoppingCart /> },
  ];

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.navbarColor}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            color="primary"
          >
            Green Basket
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {menuItems.map((menuItem, index) => (
              <Button key={menuItem.name} color="inherit">
                {menuItem.name}
              </Button>
            ))}
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <RightIconsRender shoppingCart={shoppingCart} />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              className={classes.menuButton}
              color="primary"
              aria-label="open drawer"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <RightIconsRender shoppingCart={shoppingCart} />
          </div>
        </Toolbar>
      </AppBar>
      <RenderMobileMenu
        menuItems={menuItems}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={() => setMobileMoreAnchorEl(null)}
      />
    </div>
  );
}
