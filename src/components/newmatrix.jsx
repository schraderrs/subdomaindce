import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import LayersIcon from "@material-ui/icons/Layers";
import React, { useState } from "react";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Settings from "./menu";
import TableContainer from "@material-ui/core/TableContainer";
import BiographyMatrix from "./biographymatrix";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

function NewMatrix({
  question,
  questionList,
  setQuestionList,
  handleEditMode,
  onDeleteTable,
  getLayer,
}) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);

  const isEditMode = question.isEditMode;
  const { questionId } = question;

  const classes = useStyles();

  const onOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  // BIOGRAPHY
  const onChangeTitle = (e) => {
    const value = e.target.value;
    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        return { ...item, title: value };
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;

    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        return { ...item, description: value };
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  const onDeleteRow = (rowi) => {
    console.log(rowi);
    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        const newRows = [...item.rows];
        newRows.splice(rowi, 1);
        return { ...item, rows: newRows };
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  const onAddRow = () => {
    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        const newRows = [...item.rows];
        newRows.push(["", "", "", ""]);
        return { ...item, rows: newRows };
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  const onChangeBody = (e, rowi, celli) => {
    const value = e.target.value;

    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        const newRows = item.rows.map((row, i) => {
          if (rowi === i) {
            const newRow = [...row];
            newRow[celli] = value;
            return newRow;
          }
          return row;
        });
        item.rows = newRows;
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  const onChangeHeader = (e, celli) => {
    const value = e.target.value;

    const newQuestions = questionList.map((item) => {
      if (item.questionId === question.questionId) {
        const newHeader = item.header.map((cell, i) => {
          if (celli === i) {
            return (cell = value);
          }
          return cell;
        });
        return { ...item, header: newHeader };
      }
      return item;
    });
    setQuestionList(newQuestions);
  };

  return (
    <>
      <Paper
        className={classes.paper}
        variant={isEditMode ? "elevation" : "outlined"}
      >
        <BiographyMatrix
          isEditMode={isEditMode}
          question={question}
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
                {question.header.map((cell, celli) => (
                  <TableCell>
                    {isEditMode ? (
                      <TextField
                        variant="outlined"
                        value={cell}
                        onChange={(e) => onChangeHeader(e, celli)}
                        key={celli}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => getLayer()}>
                                <LayersIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {question.rows.map((row, rowi) => (
                <TableRow>
                  {row.map((cell, celli) => (
                    <TableCell>
                      {isEditMode ? (
                        <TextField
                          variant="outlined"
                          value={cell}
                          onChange={(e) => onChangeBody(e, rowi, celli)}
                          key={celli}
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
            </TableBody>
          </Table>
        </TableContainer>
        {isEditMode ? (
          <IconButton onClick={() => onAddRow()}>
            <AddIcon />
          </IconButton>
        ) : null}
      </Paper>

      <Settings
        onDeleteTable={onDeleteTable}
        anchorEl={anchorEl}
        onCloseMenu={onCloseMenu}
        questionId={questionId}
      />
    </>
  );
}

export default NewMatrix;
