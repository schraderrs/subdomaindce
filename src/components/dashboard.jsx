import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DceList from "./dcelist";
import Copyright from "./copyright";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const [survey, setSurvey] = useState({
    title: "titel van ontwerpatelier",
    description: "Een stukje over het vragenformulier",
    questions: [
      {
        questionId: 1,
        title: "Titel van vraag1",
        description: "Een mooie tekst",
        header: ["ik", "ben", "een", "header"],
        rows: [
          ["ik", "ben", "row", "1"],
          ["ik", "ben", "row", "2"],
        ],
        isEditMode: false,
      },
      {
        questionId: 2,
        title: "Welke locatie voor het windmolenpark heeft uw voorkeur?",
        description:
          "Er zijn verschillende locaties te bedenken voor de plaatsing van het windmolenpark. ",
        header: ["Factor", "Scenario A", "Scenario B", "Geen veradering"],
        rows: [
          ["Hoeveelheid windmolens", "5", "3", "-"],
          ["Kosten per jaar", "€ 5.000.000", "€ 1.000.000", "-"],
          ["Energie opbrengst per jaar", "900.000 kWh", "200.000 kWh", "-"],
          ["Belasting per maand", "€ 30,00", "€ 5,00", "-"],
          ["Opbrengst per jaar", "€ 550.000", "€ 225.000", "-"],
          ["Formaat windmolens", "Gemiddeld", "Klein", "-"],
        ],
        isEditMode: false,
      },
    ],
    isEditMode: false,
  });

  const classes = useStyles();

  const handleSaveSurvey = () => {
    console.log(survey);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" color="white" elevation="1">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            noWrap
            className={classes.title}
          >
            Discrete Choice Experiment
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveSurvey}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <DceList survey={survey} setSurvey={setSurvey} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
