import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Skills = ({ handleResume, handleRemoveResume, data }) => {
  const [item, setitem] = useState({});
  const handleChange = (e) => {
    setitem({ ...item, [e.target.name]: e.target.value });
  };
  const submitResume = () => {
    handleResume({ ...item, id: uuidv4() });
  };
  const removeResume = (e) => {
    handleRemoveResume(e.target.id);
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Organization"
        variant="outlined"
        sx={{ width: "100%" }}
        name="organization"
        defaultValue={item.organization}
        onChange={handleChange}
        // {...register("organization", { required: true })}
      />
      <TextField
        id="outlined-basic"
        label="Position / Degree"
        variant="outlined"
        sx={{ width: "100%" }}
        name="position"
        defaultValue={item.position}
        onChange={handleChange}
        // {...register("position", { required: true })}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="date"
          label="Started in"
          type="date"
          sx={{ width: "49%" }}
          name="startDate"
          defaultValue={item.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Ended in"
          type="date"
          sx={{ width: "49%" }}
          name="endDate"
          defaultValue={item.endDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <TextareaAutosize
        maxRows={3}
        aria-label="maximum height"
        placeholder="Description"
        name="description"
        defaultValue={item.description}
        onChange={handleChange}
        style={{ width: "100%" }}
        className="p-2"
      />
      <Button variant="contained" onClick={submitResume}>
        Add
      </Button>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Organization</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.organization}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    id={row.id}
                    onClick={removeResume}
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Skills;
