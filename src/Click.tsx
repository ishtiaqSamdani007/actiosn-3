import { Button, Card, Checkbox, IconButton, Stack, TextField,Typography,styled } from "@mui/material";
// import { styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
// import Typography from "../../atoms/Typography";
// import theme from "../../../theme";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const TypoStack = styled(Stack)({
    margin: "20px 0px 0px 0px",
  });
const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setconfirmPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);



  const [email2, setEmail2] = useState('');




  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const ConfirmhandleTogglePassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setconfirmPassword(event.target.value);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const checkFormValidity = () => {
    setIsFormValid(
      email.trim() !== "" &&
        password.trim() !== "" &&
        confirmpassword.trim() != "" &&
        isChecked &&
        password == confirmpassword
    );
  };

  useEffect(
    () => checkFormValidity(),
    [email, password, confirmpassword, isChecked]
  );
  const styleContinue = {
    textTransform: "none",
    // color: theme.palette.structural.main,
    width: "384px",
    backgroundColor: isFormValid ? "#224DFF" : "#95AAFF",
    ":disabled": {
      textTransform: "none",
    //   color: theme.palette.structural.main,
      width: "384px",
      backgroundColor: isFormValid ? "#224DFF" : "#95AAFF",
    },
  };
  const CustomStack = styled(Stack)({
    margin: "44px 0px 0px 48px",

  });
 
  const CardComponent = styled(Card)({
    width: "480px",
    height: "42rem",
    // backgroundColor: theme.palette.structural.main,
    marginLeft: "46rem",
    marginTop: "3rem",
    
  });
  return (
    <Card>
        <TextField
            type="email"
            placeholder="abc@gmail"
            variant="outlined"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{width:"89%"}}
          /> 
      <Stack>
 
        <Stack>
          <Typography
            children="Sign up"
            variant="h1"
            // color={theme.palette.textColor.highEmphasis}
          ></Typography>
        </Stack>
        <Stack sx={{ marginTop: "8px" }}>
        
          <Typography
            children="Please sign up to start exploring the platform"
            variant="body2"
            // color={theme.palette.textColor.mediumEmphasis}
          ></Typography>
        </Stack>
        <TypoStack spacing={"10px"}>
          <Typography
            children="Email"
            // color={theme.palette.textColor.mediumEmphasis}
          ></Typography>

           <TextField
            type="email"
            placeholder="abc@gmail"
            variant="outlined"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{width:"89%"}}
          /> 
        </TypoStack>
        <TypoStack spacing={"10px"}>
          <Typography
            children="Password"
            // color={theme.palette.textColor.mediumEmphasis}
          ></Typography>
          

          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="*****"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "89%" }}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle-button1"
                  onClick={handleTogglePassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility  />
                  ) : (
                    <VisibilityOff data-testid="password1" />
                  )}
                </IconButton>
              ),
            }}
          />
        </TypoStack>
        <TypoStack spacing={"10px"}>
          <Typography
            children="Confirm Password"
            // color={theme.palette.textColor.mediumEmphasis}
          ></Typography>

          <TextField
            type={showConfirmPassword ? "text" : "password"}
            placeholder="*****"
            variant="outlined"
            value={confirmpassword}
            
            onChange={handleConfirmPasswordChange}
            style={{width:"89%"}}
            InputProps={{
      
              endAdornment: (
                <IconButton
                  aria-label="toggle-button2"
                  onClick={ConfirmhandleTogglePassword}
                  edge="end"
                >
                  {showConfirmPassword? <Visibility  /> : <VisibilityOff data-testid="password2" />}
                </IconButton>
              ),
            }}
          />
        </TypoStack>
        <TypoStack>
          <Stack direction="row" alignItems={"center"}>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            <Stack spacing={1} direction={"row"}>
              <Typography
                children="I agree to"
                // style={{ color: theme.palette.textColor.mediumEmphasis }}
              />
              <Typography
                children="Privacy policy"
                // color={theme.palette.primary.primary500}
              />
            </Stack>
          </Stack>
        </TypoStack>
        <TypoStack>
          <Button
            variant="contained"
            disabled={!isFormValid}
            children="Signup"
            sx={styleContinue}
          />
        </TypoStack>
        <TypoStack
          spacing={-2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="body2"
            children="Already a member?"
            // style={{ color: theme.palette.textColor.mediumEmphasis }}
          />
          <Button
            variant="text"
            children="Signin"
            sx={{ textTransform: "none" }}
          />
        </TypoStack>
      </Stack>
      
      </Card>
  );
};
export default SignUp;