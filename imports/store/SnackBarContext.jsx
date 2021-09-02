import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import React, { createContext, useCallback, useContext, useState } from 'react';

export const SnackBarContext = createContext();

export const SnackBarProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);

  const updateSnackBarMessage = useCallback((message) => {
    setMessage(message);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const snackbarHandleClose = useCallback((event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  }, []);

  return (
    <SnackBarContext.Provider value={{ updateSnackBarMessage }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={snackbarHandleClose}
        message={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </SnackBarContext.Provider>
  );
};

export function useSnackBar() {
  return useContext(SnackBarContext);
}
