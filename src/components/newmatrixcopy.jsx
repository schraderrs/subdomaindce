import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Settings from "./menu";
import TableFooter from "@material-ui/core/TableFooter";
import TableContainer from "@material-ui/core/TableContainer";
import BiographyMatrix from "./biographymatrix";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function NewMatrix({
  question,
  handleEditMode,
  onDeleteTable,
  setQuestionList,
  questionList,
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

  const currentQuestion = question;

  const newQuestions = () => {
    questionList.questions.map((question) => {
      if (question.questionId === currentQuestion.questionId) {
        return 
      } else return question
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const isEditMode = question.isEditMode;

  const { questionId } = currentQuestion;

  const onChangeTitle = (e) => {
    const value = e.target.value;

    
    // setCurrentQuestion({ ...currentQuestion, title: value });
  };

  const onDeleteRow = (rowi) => {
    const newRows = [...currentQuestion.rows];
    newRows.splice(rowi, 1);
    // setCurrentQuestion({ ...currentQuestion, rows: newRows });
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;
    // setCurrentQuestion({ ...currentQuestion, description: value });
  };

  const onOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const onChangeHeader = (e, celli) => {
    const value = e.target.value;

    const newHeader = currentQuestion.header.map((item, i) => {
      if (celli === i) {
        item = value;
        return item;
      }
      return item;
    });
    // setCurrentQuestion({ ...currentQuestion, header: newHeader });
  };

  const onAddRow = () => {
    const newRows = [...currentQuestion.rows];
    newRows.push(["", "", "", ""]);
    // setCurrentQuestion({ ...currentQuestion, rows: newRows });
  };

  const onChangeBody = (e, rowi, celli) => {
    const value = e.target.value;

    const newRows = currentQuestion.rows.map((row, i) => {
      if (rowi === i) {
        const newRow = [...row];
        newRow[celli] = value;
        return newRow;
      }
      return row;
    });
    // setCurrentQuestion({ ...currentQuestion, rows: newRows });
  };

  return (
    <>
      <Paper
        className={classes.paper}
        variant={isEditMode ? "elevation" : "outlined"}
      >
        <BiographyMatrix
          isEditMode={isEditMode}
          currentQuestion={currentQuestion}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
          onOpenMenu={onOpenMenu}
        />
        <TableContainer
          onClick={(e) => handleEditMode(e, questionId)}
          className={classes.table}
        >
          <Table>
            <TableHead>
              <TableRow>
                {currentQuestion.header.map((cell, celli) => (
                  <TableCell>
                    {isEditMode ? (
                      <TextField
                        variant="outlined"
                        value={cell}
                        onChange={(e) => onChangeHeader(e, celli)}
                      />
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentQuestion.rows.map((row, rowi) => (
                <TableRow>
                  {row.map((cell, celli) => (
                    <TableCell>
                      {isEditMode ? (
                        <TextField
                          variant="outlined"
                          value={cell}
                          onChange={(e) => onChangeBody(e, rowi, celli)}
                        />
                      ) : (
                        cell
                      )}
                    </TableCell>
                  ))}
                  {isEditMode ? (
                    <TableCell>
                      <IconButton onClick={() => onDeleteRow(rowi)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}

              {isEditMode ? (
                <TableFooter>
                  <IconButton onClick={() => onAddRow()}>
                    <AddIcon />
                  </IconButton>
                </TableFooter>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>

        <Settings
          onDeleteTable={onDeleteTable}
          anchorEl={anchorEl}
          onCloseMenu={onCloseMenu}
          questionId={questionId}
        />
      </Paper>
    </>
  );
}

export default NewMatrix;
