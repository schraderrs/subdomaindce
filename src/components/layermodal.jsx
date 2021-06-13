import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function ScenarioDialog({
  openModal,
  handleCloseModal,
  scenarios,
  handleListClick,
}) {
  const Content = () => {
    if (scenarios) {
      return (
        <List>
          {scenarios.data[0].acf.mapbox_layer_groups.map((layer) => (
            <ListItem button onClick={() => handleListClick(layer)} key={layer}>
              <ListItemText primary={layer.mapbox_layer_group}></ListItemText>
            </ListItem>
          ))}
        </List>
      );
    }
    return <></>;
  };

  return (
    <Dialog
      onClose={handleCloseModal}
      aria-labelledby="simple-dialog-title"
      open={openModal}
    >
      <DialogTitle id="simple-dialog-title">Selecteer scenario</DialogTitle>
      <Content />
    </Dialog>
  );
}
