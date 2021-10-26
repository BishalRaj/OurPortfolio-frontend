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
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const Personal = () => {
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
        label="Full Name"
        variant="outlined"
        sx={{ width: "100%" }}
        {...register("name", { required: true })}
      />{" "}
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        sx={{ width: "100%" }}
        {...register("email", { required: true })}
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
        />
        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          type="number"
          sx={{ width: "49%" }}
          {...register("contact", { required: true })}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ width: "49%" }}
          {...register("address", { required: true })}
        />{" "}
        <TextField
          id="outlined-basic"
          label="Zip Code"
          type="number"
          variant="outlined"
          sx={{ width: "49%" }}
          {...register("zip", { required: true })}
        />
      </Box>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password", { required: true })}
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
          {...register("confirmPassword", { required: true })}
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
