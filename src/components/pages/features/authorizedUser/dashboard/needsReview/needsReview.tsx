import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Modal, Typography } from "@mui/material";

function createData(
  name: string,
  position: string,
  yearsOfService: number,
  severity: number,
  homeworld: string,
) {
  return { name, position, yearsOfService, severity, homeworld };
}

interface ICompressedEntity {
  name: string;
  position: string;
  yearsOfService: number;
  severity: number;
  homeworld: string;
}

const rows = [
  createData("Mark Hammer", "Engineer", 6, 1, "Earth"),
  createData("Chris Chart", "Scientist", 9, 2, "Earth"),
  createData("Garth Stream", "Security", 14, 1, "Mars"),
  createData("Ned Beeman", "Engineer", 1, 3, "Pluto"),
  createData("Keith Kleith", "Barkeep", 2, 1, "MARK 3112"),
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NeedsReview() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<ICompressedEntity | undefined>(
    undefined,
  );
  const handleOpen = (data: ICompressedEntity) => {
    setOpen(true);
    setData(data);
  };
  const handleClose = () => {
    setOpen(false);
    setData(undefined);
  };

  return (
    <Paper style={{ padding: "10px" }}>
      <h4>Needs Review</h4>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Years of Service</TableCell>
              <TableCell align="right">Severity</TableCell>
              <TableCell align="right">Homeworld</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.yearsOfService}</TableCell>
                <TableCell align="right">{row.severity}</TableCell>
                <TableCell align="right">{row.homeworld}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleOpen(row);
                    }}
                  >
                    Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.name}
          </Typography>
        </Box>
      </Modal>
    </Paper>
  );
}
export default NeedsReview;
