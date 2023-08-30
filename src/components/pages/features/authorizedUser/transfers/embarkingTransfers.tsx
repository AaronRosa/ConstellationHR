import { Cancel, CheckCircle, MoreVert } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  Menu,
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
import { useDispatch } from "react-redux";
import { showGlobalModal } from "../../../../../redux/slices/globalModalSlice";

const tempTableData = [
  {
    id: 1,
    shipID: 1,
    embarkingTo: 2,
    name: "Mark",
    position: "Engineer II",
    yos: 10,
    approved: null,
  },
  {
    id: 2,
    shipID: 1,
    embarkingTo: 2,
    name: "Sam",
    position: "Engineer II",
    yos: 10,
    approved: null,
  },
  {
    id: 3,
    shipID: 1,
    embarkingTo: 2,
    name: "Jamie",
    position: "Engineer II",
    yos: 10,
    approved: null,
  },
];

function EmbarkingTransfers() {
  const dispatch = useDispatch();
  const [chosenShip, setChosenShip] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handelOptionsBtnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionsBtnClose = () => {
    setAnchorEl(null);
  };

  const openGlobalModal = (person: string) => {
    dispatch(showGlobalModal(person));
  };

  return (
    <>
      <Typography>Please review the embarking crew requests.</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Years of Service</TableCell>
              <TableCell>Embarking to</TableCell>
              <TableCell>Reviewed?</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tempTableData.map(record => (
              <TableRow key={"key" + record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.position}</TableCell>
                <TableCell>{record.yos}</TableCell>
                <TableCell>{record.embarkingTo}</TableCell>
                <TableCell>
                  {record.approved ? (
                    <CheckCircle color="success" />
                  ) : (
                    <Cancel color="error" />
                  )}
                </TableCell>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handelOptionsBtnClick}
                >
                  <MoreVert />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleOptionsBtnClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleOptionsBtnClose}>
                    Approve
                  </MenuItem>
                  <MenuItem onClick={handleOptionsBtnClose}>Deny</MenuItem>
                  <MenuItem
                    onClick={() => {
                      openGlobalModal(record.name);
                      handleOptionsBtnClose();
                    }}
                  >
                    Quick Profile
                  </MenuItem>
                </Menu>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmbarkingTransfers;
