import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import type { RootState } from "../../../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  logOutUser,
  selectCurrentUser,
} from "../../../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginLayout() {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const login = "https://jsonplaceholder.typicode.com/posts";

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
    dispatch(loginUser("Aaron"));
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

      <div style={{ marginTop: "100px" }}>
        <h2>Demo auto login/logout</h2>
        <button onClick={() => dispatch(loginUser("aaron"))}>Login</button>
        <button onClick={() => dispatch(logOutUser())}>Logout</button>
        {user}
      </div>
    </Grid>
  );
}
