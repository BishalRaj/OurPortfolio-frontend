import LanguageIcon from "@mui/icons-material/Language";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
const Personal = ({ handleChange, handleSubmit, data }) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack direction="row" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-facebook">
            Facebook
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-facebook"
            onChange={handleChange}
            defaultValue={data.facebook}
            name="facebook"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <FaFacebookF />
                </IconButton>
              </InputAdornment>
            }
            label="Facebook"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-twitter">Twitter</InputLabel>
          <OutlinedInput
            id="outlined-adornment-twitter"
            onChange={handleChange}
            defaultValue={data.twitter}
            name="twitter"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <FaTwitter />
                </IconButton>
              </InputAdornment>
            }
            label="Twitter"
          />
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-github">Github</InputLabel>
          <OutlinedInput
            id="outlined-adornment-github"
            onChange={handleChange}
            defaultValue={data.github}
            name="github"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <FaGithub />
                </IconButton>
              </InputAdornment>
            }
            label="Github"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-reddit">Reddit</InputLabel>
          <OutlinedInput
            id="outlined-adornment-reddit"
            onChange={handleChange}
            defaultValue={data.reddit}
            name="reddit"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <FaReddit />
                </IconButton>
              </InputAdornment>
            }
            label="Reddit"
          />
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-linkedin">
            Linkedin
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-linkedin"
            onChange={handleChange}
            defaultValue={data.linkedin}
            name="linkedin"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <FaLinkedin />
                </IconButton>
              </InputAdornment>
            }
            label="Linkedin"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-website">Website</InputLabel>
          <OutlinedInput
            id="outlined-adornment-website"
            onChange={handleChange}
            defaultValue={data.website}
            name="website"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <LanguageIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Website"
          />
        </FormControl>
      </Stack>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Complete
      </Button>
    </Stack>
  );
};

export default Personal;
