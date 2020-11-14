import React from "react";
import {
  IconButton,
  Badge,
  Hidden,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCart from "../LeftSidebar/ShoppingCart";

export default function RightIconsRender({ shoppingCart }) {
  const [drawerAnchorEl, setDrawerAnchorEl] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerAnchorEl(open);
  };
  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };
  return (
    <React.Fragment>
      <IconButton
        color="secondary"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleClickOpen}
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        color="primary"
        aria-label={`show ${shoppingCart.length} new notifications`}
        onClick={toggleDrawer(true)}
      >
        <Badge badgeContent={shoppingCart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Hidden mdUp>
        <Drawer
          anchor={"bottom"}
          open={drawerAnchorEl}
          onClose={toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ShoppingCart />
          </div>
        </Drawer>
      </Hidden>
      <Dialog
        open={openLogin}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{ paddingBottom: "0px" }}>
          <Typography color="primary" variant="h5">
            <strong>Sign in</strong>
          </Typography>
        </DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="rememberMe" />}
              label="Remember Me"
            />
          </FormGroup>
        </DialogContent>
        <Button variant="contained" onClick={handleClose} color="primary" style={{margin: "10px 30px", color: "white"}}>
          <strong>Sign In</strong>
        </Button>
        <Button onClick={handleClose} color="secondary" style={{margin: "10px 30px"}}>
          Not yet a member?
        </Button>
      </Dialog>
    </React.Fragment>
  );
}
