import { Button, Stack } from "@mui/material";
import { Divider, Paper, Typography as Typ } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function RegisterLayout({
  message,
  showLogin,
}: {
  message: string;
  showLogin: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div>
      <Typ variant="h4">{message}</Typ>
      <form style={{ margin: "30px" }}>
        <Stack spacing={2} direction={"row"}>
          <input placeholder="Email" style={{ minWidth: "300px" }} />
          <Button variant="contained">Register</Button>
          {showLogin && (
            <Button
              variant="text"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </form>
    </div>
  );
}

export default RegisterLayout;
