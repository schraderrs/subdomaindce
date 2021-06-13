import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";

function DceMatrix({ question }) {
  const [currentQuestion, setCurrentQuestion] = useState(question);
  console.log(currentQuestion);

  const { isEditMode } = currentQuestion;

  const CustomTableCell = ({ row, onChange, rowi }) => {
    return row.map((item, celli) => (
      <TableCell align="left" key={celli}>
        {isEditMode ? (
          <Input
            value={item}
            // name={celli}
            onChange={(e) => onChange(e, rowi, celli)}
          />
        ) : (
          item
        )}
      </TableCell>
    ));
  };

  const onChange = (e, rowi, celli) => {
    const value = e.target.value;

    const newRows = currentQuestion.rows.map((row, i) => {
      if (rowi === i) {
        const newRow = [...row];
        newRow[celli] = value;
        return newRow;
      }
      return row;
    });
    setCurrentQuestion(...currentQuestion, {rows: newRows} );
    console.log(newRows);
  };

  return (
    <>
      <Typography variant="h5">{currentQuestion.title}</Typography>
      <Paper
        style={{ marginBottom: "16px", overflow: "hidden", maxWidth: "936" }}
        elevation={0}
      >
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              {currentQuestion.header.map((item, i) => (
                <TableCell key={i}>
                  <Input style={{ fontWeight: "500" }} value={item} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentQuestion.rows.map((row, rowi) => (
              <TableRow key={rowi}>
                <CustomTableCell {...{ row, onChange, rowi }} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default DceMatrix;
