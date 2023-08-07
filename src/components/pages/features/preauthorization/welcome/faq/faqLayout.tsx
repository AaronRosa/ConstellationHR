import { Typography } from "@mui/material";
import Question from "./question";

function FAQLayout() {
  return (
    <div style={{ margin: "10px 30px" }}>
      <Typography variant="h3">Frequently asked questions.</Typography>
      <div style={{ padding: "0px" }}>
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}

export default FAQLayout;
