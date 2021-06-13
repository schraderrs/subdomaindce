import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";

export default function BiographyMatrix({
  isEditMode,
  question,
  onChangeTitle,
  onChangeDescription,
  onOpenMenu,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    description: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      marginTop: isEditMode ? theme.spacing(2) : 0,
      marginBottom: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          className={classes.title}
        >
          {isEditMode ? (
            <TextField
              value={question.title}
              onChange={(e) => onChangeTitle(e)}
              label="Title"
              fullWidth
            />
          ) : (
            question.title
          )}
        </Typography>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={onOpenMenu}
          question={question}
        >
          <MoreVertIcon />
        </IconButton>
      </Toolbar>

      <Typography component="h3" gutterBottom className={classes.description}>
        {isEditMode ? (
          <TextField
            value={question.description}
            onChange={(e) => onChangeDescription(e)}
            label="Description"
            fullWidth
          />
        ) : (
          question.description
        )}
      </Typography>
    </div>
  );
}
