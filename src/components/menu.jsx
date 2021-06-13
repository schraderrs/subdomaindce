import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Settings({
  onDeleteTable,
  anchorEl,
  onCloseMenu,
  questionId,
}) {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onCloseMenu}
    >
      <MenuItem onClick={() => onDeleteTable(questionId)}>
        Delete Table
      </MenuItem>
    </Menu>
  );
}
