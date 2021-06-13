import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import NewMatrix from "./newmatrix";
import Grid from "@material-ui/core/Grid";
import InfoSurvey from "./info";
import ScenarioDialog from "./layermodal";

import API from "./axios";

function DceList({ survey, setSurvey }) {
  const [questionList, setQuestionList] = useState(survey.questions);
  const [scenarios, setScenarios] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const getLayer = async () => {
    setScenarios(await API.get("/layergroups?per_page=100"));
    handleOpenModal();
  };

  const handleListClick = (layer) => {
    console.log(layer);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onAddQuestion = () => {
    const newQuestions = [...questionList];
    const number = newQuestions.length + 1;

    newQuestions.push({
      questionId: number,
      title: "Titel van vraag" + number,
      description: "",
      header: ["", "", "", ""],
      rows: [["", "", "", ""]],
      isEditMode: false,
    });

    setQuestionList(newQuestions);
    setSurvey({ ...survey, questions: questionList });
  };

  const onDeleteTable = (id) => {
    const newQuestions = survey.questions.filter(
      (question) => id !== question.questionId
    );
    setQuestionList(newQuestions);
    setSurvey({ ...survey, questions: newQuestions });
  };

  const handleSurveyEditMode = () => {
    const newQuestions = questionList.map((question) => {
      return { ...question, isEditMode: false };
    });
    setQuestionList(newQuestions);
    setSurvey({
      ...survey,
      questions: questionList,
      isEditMode: true,
    });
  };

  const handleQuestionsEditMode = (e, id) => {
    const newQuestions = questionList.map((question) => {
      if (question.questionId === id) {
        return { ...question, isEditMode: true };
      }
      return { ...question, isEditMode: false };
    });
    setQuestionList(newQuestions);
    setSurvey({
      ...survey,
      questions: questionList,
      isEditMode: false,
    });
  };

  return (
    <>
      <ScenarioDialog
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        scenarios={scenarios}
        handleListClick={handleListClick}
      />
      <InfoSurvey
        survey={survey}
        setSurvey={setSurvey}
        handleSurveyEditMode={handleSurveyEditMode}
      />
      {questionList.map((question) => (
        <Grid
          item
          xs={12}
          style={{ marginBottom: "10px" }}
          key={question.questionId}
        >
          <NewMatrix
            question={question}
            questionList={questionList}
            setQuestionList={setQuestionList}
            handleEditMode={handleQuestionsEditMode}
            onDeleteTable={onDeleteTable}
            getLayer={getLayer}
          />
        </Grid>
      ))}
      <Button onClick={onAddQuestion}>Add Question</Button>
    </>
  );
}

export default DceList;
