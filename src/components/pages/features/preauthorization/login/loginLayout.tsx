import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import type { RootState } from "../../../../../redux/store";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    dispatch(
      loginUser({
        id: "1",
        fname: "Aaron",
        lname: "Rosa",
        shipAssignedID: "1",
        shipAssignedName: "Enterprise",
        email: "a_rosa6942@yahoo.com",
        role: "Programmer"
      }),
    );
    navigate("/dashboard");
  };

  return (
    <Grid>
      <form noValidate onSubmit={e => handleSubmit(e)}>
        <TextField
          label="Username"
          variant="outlined"
          color="primary"
          margin="normal"
          required
          fullWidth
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type={"password"}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
        >
          Sign In
        </Button>
      </form>
    </Grid>
  );
}
