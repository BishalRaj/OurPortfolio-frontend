import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Personal from "../components/auth-multistep/personal";
import Resume from "../components/auth-multistep/resume";
import Skills from "../components/auth-multistep/skills";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";

const Register = () => {
  const [counter, setcounter] = useState(1);
  const [skill, setskill] = useState([]);

  const handleSkill = (data) => {
    setskill((x) => [...x, data]);
  };
  const handleRemoveSkill = (x) => {
    let filteredData = skill.filter((item) => item.skill != x);

    setskill(filteredData);
  };

  console.log("====================================");
  console.log(skill);
  console.log("====================================");
  const registerComponents = [
    { text: "Your Personal Details", item: <Personal /> },
    { text: "Academic / Work Details", item: <Resume /> },
    {
      text: "Mention Your Skills",
      item: (
        <Skills
          handleSkill={handleSkill}
          data={skill}
          handleRemoveSkill={handleRemoveSkill}
        />
      ),
    },
  ];
  counter < 1 && setcounter(1);
  counter > registerComponents.length && setcounter(registerComponents.length);
  const centerItems = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const circularArrow = {
    height: 50,
    width: 50,
    borderRadius: "100%",
    backgroundColor: color.default,
    color: "white",
    ...centerItems,
    "&:hover": {
      backgroundColor: color.hoverDefault,
    },
  };

  const returnComponent = (
    <>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          // backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "10%",
            ...centerItems,
          }}
        >
          <IconButton
            sx={{
              ...circularArrow,
            }}
            className="shadow-lg"
            onClick={() => setcounter(counter - 1)}
          >
            <ArrowBackIosNewIcon color="white" />
          </IconButton>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "80%",
            // backgroundColor: "red",
            ...centerItems,
          }}
        >
          <Stack sx={{ width: "60%", height: "100%" }}>
            {registerComponents.map(
              (component, key) =>
                counter === key + 1 && (
                  <>
                    <Typography
                      variant="h5"
                      sx={{ height: "20% !important", ...centerItems }}
                    >
                      {component.text}
                    </Typography>

                    <Box sx={{ height: "80% !important", ...centerItems }}>
                      {component.item}
                    </Box>
                  </>
                )
            )}
          </Stack>
        </Box>

        <Box sx={{ width: "10%", ...centerItems }}>
          <IconButton
            sx={{ ...circularArrow }}
            className="shadow-lg"
            onClick={() => setcounter(counter + 1)}
          >
            <ArrowForwardIosIcon color="white" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
  const redirectComponent = {
    text: "Already have an account?",
    redirectText: "Login",
    link: "/",
  };
  return (
    <>
      <AuthLayout
        formComponent={returnComponent}
        authCardText={"Manage your portfolio more effectively"}
        authCardImg={image.register}
        redirectComponent={redirectComponent}
      />
    </>
  );
};

export default Register;
