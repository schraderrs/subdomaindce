import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import DceList from "./components/dcelist";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addQuestion: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    backgroundColor: "#eceef8",
 
    margin: "40px 16px",
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
});

function App(props) {
  const { classes } = props;

  return (
    <>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
      
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item></Grid>
            <Grid item xs></Grid>
            <Grid item>
              {/* <Button
                variant="contained"
                color="primary"
                className={classes.addQuestion}
              >
                Add question
              </Button> */}
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className = {classes.main}>
        <div className={classes.contentWrapper}>
          <DceList />
        </div>
      </main>
    </>
  );
}

export default withStyles(styles)(App);
