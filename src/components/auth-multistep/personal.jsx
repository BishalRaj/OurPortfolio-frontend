import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const Personal = ({ handleChange, data }) => {
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
        label="Full Name"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={handleChange}
        defaultValue={data.name}
        name="name"
      />{" "}
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        sx={{ width: "100%" }}
        onChange={handleChange}
        defaultValue={data.email}
        name="email"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          sx={{ width: "49%" }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          defaultValue={data.dob}
          name="dob"
        />
        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          type="number"
          sx={{ width: "49%" }}
          onChange={handleChange}
          defaultValue={data.contact}
          name="contact"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ width: "49%" }}
          onChange={handleChange}
          defaultValue={data.address}
          name="address"
        />{" "}
        <TextField
          id="outlined-basic"
          label="Zip Code"
          type="number"
          variant="outlined"
          sx={{ width: "49%" }}
          onChange={handleChange}
          defaultValue={data.zip}
          name="zip"
        />
      </Box>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          defaultValue={data.password}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          defaultValue={data.confirmPassword}
          name="confirmPassword"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
        />
      </FormControl>
    </Stack>
  );
};

export default Personal;
