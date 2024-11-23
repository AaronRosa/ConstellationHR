import { Box, Button, ClickAwayListener } from "@mui/material";
import "./popup.css";
import { MouseEvent, MouseEventHandler, useState } from "react";
import {
  getTitle,
  hideGlobalModal,
  isGlobalModalOpen,
} from "../../../redux/slices/globalModalSlice";
import { useDispatch, useSelector } from "react-redux";

function Popup() {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const modalOpen = useSelector(isGlobalModalOpen);
  const title = useSelector(getTitle);
  const closeModal = (e: MouseEvent | TouchEvent | any) => {
    dispatch(hideGlobalModal());
  };
  return (
    <>
      {modalOpen && (
        <div className="modalBG">
          <ClickAwayListener onClickAway={e => closeModal(e)}>
            <Box>
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <Button onClick={closeModal} className="close">
                      <span>&times;</span>
                    </Button>
                    <h2>{title}</h2>
                  </div>
                  <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                  </div>
                  <div className="modal-footer">
                    <h3>Modal Footer</h3>
                  </div>
                </div>
              </div>
            </Box>
          </ClickAwayListener>
        </div>
      )}
    </>
  );
}
export default Popup;
