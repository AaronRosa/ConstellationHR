import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion } from "@mui/material";

function Question() {
  return (
    <Accordion style={{ margin: "15px 0px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Super interesting question
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          A really interesting answer to the super interesting question
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Question;
