import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

export default function InfoSurvey({
  survey,
  setSurvey,
  handleSurveyEditMode,
}) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
  }));
  const classes = useStyles();

  const isEditMode = survey.isEditMode;

  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "title") {
      setSurvey({ ...survey, title: value });
    }
    if (e.target.name === "description") {
      setSurvey({ ...survey, description: value });
    }
  };

  return (
    <Grid item xs={12} style={{ marginBottom: "10px" }}>
      <Paper
        className={classes.paper}
        variant="outlined"
        onClick={handleSurveyEditMode}
      >
        <Grid item xs={12}>
          {isEditMode ? (
            <TextField
              label="Titel Vragenformulier"
              name="title"
              value={survey.title}
              onChange={(e) => onChange(e)}
              fullWidth
            />
          ) : (
            <Typography component="h1" variant="h2">
              {survey.title}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          {isEditMode ? (
            <TextField
              label="Beschrijving"
              name="description"
              value={survey.description}
              onChange={(e) => onChange(e)}
              fullWidth
            />
          ) : (
            <Typography component="h2" variant="subtitle1">
              {survey.description}
            </Typography>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
}
