import {
  Button,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { v4 as uuidv4 } from "uuid";
const Skills = ({ handleSkill, handleRemoveSkill, data }) => {
  const [item, setitem] = useState({ skill: "", percent: 50 });
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    float: "left",
  }));

  const handleClick = () => {
    handleSkill({ ...item, id: uuidv4() + Math.random() });
  };
  const handleChange = (e) => {
    setitem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleRemove = (x) => {
    handleRemoveSkill(x);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Skill"
        variant="outlined"
        defaultValue={item.skill}
        sx={{ width: "100%" }}
        name="skill"
        onChange={handleChange}
      />
      <Typography
        variant="caption"
        className="mt-3 mb-0 pb-0"
        sx={{ color: "#808080" }}
      >
        Rate Your Skill
      </Typography>

      <Stack direction="row" spacing={2}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          className="mt-0"
          name="percent"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleClick}>
          <Typography varient="h1">+</Typography>
        </Button>
      </Stack>

      <Box component="div" sx={{ width: "fit-content" }}>
        {data.map((x, key) => (
          <Item key={x + key} className="m-1 d-flex">
            {x.skill}

            <CancelIcon
              onClick={() => handleRemove(x.id)}
              sx={{
                marginLeft: "10px",
                "&:hover": {
                  color: "red",
                },
              }}
            />
          </Item>
        ))}
      </Box>
    </Stack>
  );
};

export default Skills;
