import { MoreVert } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const tempTableData = [
  { id: 1, shipID: 1, name: "Aaron", position: "Captain", yos: 10 },
];

function IncomingTransfers() {
  const [chosenShip, setChosenShip] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setChosenShip(event.target.value as string);
  };

  return (
    <>
      <Typography>Please review the incoming crew requests.</Typography>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Ship</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Ship"
          value={chosenShip}
          defaultValue="All"
          onChange={handleChange}
        >
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="1">Test</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Years of Service</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempTableData.map(record => (
              <TableRow key={"key" + record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.position}</TableCell>
                <TableCell>{record.yos}</TableCell>
                <Button>
                  <MoreVert />
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default IncomingTransfers;
