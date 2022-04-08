import React from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { DialogTitle } from "../../ui-components/DialogTitle";

export default function BasicModal({ handleClose, title }) {
  return (
    <Dialog open={true} onClose={handleClose} maxWidth="sm">
      <DialogTitle onClose={handleClose}>{title}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
