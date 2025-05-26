import { useDispatch } from "react-redux";
import { deleteContact, updContact } from "../../redux/contacts/operations";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";
import { ThemeProvider } from "@mui/material/styles";
import { boxStyle, theme } from "../../constants/muiTheme.js";
import s from "./Contact.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function Contact({ contact }) {
  const [showUpdModal, setShowUpdModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
  };

  return (
    <div className={s.contactBox}>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <div className={s.btns}>
        <ThemeProvider theme={theme}>
          <Button
            onClick={() => setShowDeleteModal(true)}
            variant="contained"
            className={s.btn}
          >
            <DeleteOutlineIcon fontSize="small" /> Delete
          </Button>
          <Button
            onClick={() => setShowUpdModal(true)}
            variant="text"
            className={s.btn}
          >
            <EditOutlinedIcon fontSize="small" />
            Edit
          </Button>
        </ThemeProvider>
      </div>
      {showDeleteModal && (
        <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
          <Box sx={boxStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ marginBottom: "12px" }}
            >
              Are you sure you want to delete this Contact?
            </Typography>
            <div
              style={{ display: "flex", gap: "12px", justifyContent: "center" }}
            >
              <ThemeProvider theme={theme}>
                <Button
                  type="button"
                  onClick={handleDelete}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowModal(false)}
                  variant="contained"
                >
                  No
                </Button>
              </ThemeProvider>
            </div>
          </Box>
        </Modal>
      )}
      <Modal open={showUpdModal} onClose={() => setShowUpdModal(false)}>
        <Box sx={boxStyle}>
          <UpdateContactForm
            contact={contact}
            onClose={() => setShowUpdModal(false)}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Contact;
