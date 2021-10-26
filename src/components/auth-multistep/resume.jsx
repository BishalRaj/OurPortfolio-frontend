import { Stack, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Skills = () => {
  const { register } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Organization"
        variant="outlined"
        sx={{ width: "100%" }}
        {...register("organization", { required: true })}
      />
      <TextField
        id="outlined-basic"
        label="Position / Degree"
        variant="outlined"
        sx={{ width: "100%" }}
        {...register("position", { required: true })}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="date"
          label="Started in"
          type="date"
          sx={{ width: "49%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Ended in"
          type="date"
          sx={{ width: "49%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <TextareaAutosize
        maxRows={3}
        aria-label="maximum height"
        placeholder="Description"
        style={{ width: "100%" }}
        className="p-2"
      />
    </Stack>
  );
};

export default Skills;
