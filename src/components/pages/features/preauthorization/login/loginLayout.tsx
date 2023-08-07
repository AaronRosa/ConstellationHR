import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import type { RootState } from "../../../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setUser,
  logOutUser,
  selectUser,
} from "../../../../../redux/slices/userSlice";

export default function LoginLayout() {
  const user = useSelector(selectUser);

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
    axios
      .post(login, userData)
      .then(response => {
        if (response.status) {
          localStorage.setItem("accessToken", "1234");
          localStorage.setItem("refreshToken", "0987");
          localStorage.setItem("user", "{name: 'Aaron'}");
          window.location.href = "/";
        }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
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

      <div>
        <button onClick={() => dispatch(setUser("aaron"))}>Login</button>
        <button onClick={() => dispatch(logOutUser())}>Logout</button>
        {user}
      </div>
    </Grid>
  );
}
