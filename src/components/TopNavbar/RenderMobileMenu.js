import React from "react";
import {
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({}));

export default function RenderMobileMenu({
  menuItems,
  isMobileMenuOpen,
  handleMobileMenuClose = (f) => f,
}) {
  const classes = useStyles();
  const handleProfileMenuOpen = (e) => handleMobileMenuClose(e.currentTarget);
  return (
    <Drawer
      anchor={"bottom"}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div
        role="presentation"
        onClick={handleMobileMenuClose}
        onKeyDown={handleMobileMenuClose}
      >
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Container>
            <ListItemText primary="" secondary={<Footer />} />
          </Container>
        </List>
      </div>
    </Drawer>
  );
}
