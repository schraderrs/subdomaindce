import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import questionList from './trestjson'

function TestMatrix() {
  const Matrix = ({ question, questions, setQuestions }) => {
    const setBody = (e, rowi, celli) => {
      const value = e.target.value;

      const newQuestions = questions.map((item) => {
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
      setQuestions(newQuestions);
    };

    return (
      <Table style={{ marginBottom: "50px", backgroundColor: "white" }}>
        <TableBody>
          {question.rows.map((row, rowi) => (
            <TableRow>
              {row.map((cell, celli) => (
                <TableCell>
                  <TextField
                    value={cell}
                    onChange={(e) => setBody(e, rowi, celli)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const QuestionList = ({ questionList }) => {
    const [questions, setQuestions] = useState(questionList.questions);

    const handleSubmit = () => {};

    return (
      <>
        {questions.map((question) => (
          <Matrix
            question={question}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))}
        <Button onClick={handleSubmit}>klik</Button>
        <pre>{JSON.stringify(questionList, undefined, 2)}</pre>
      </>
    );
  };

  return <QuestionList questionList={questionList} />;
}

export default TestMatrix;
