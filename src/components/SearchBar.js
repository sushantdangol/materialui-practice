import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme=>({
  btn:{
    borderRadius: '50px',
    backgroundColor: '#90EE90',
    color: 'black',
    margin: '10px',
    '&:hover':{
      backgroundColor: '#90EE90',
      color: 'black',
    }
  },
  root: {
    width: '500px',
    marginBottom:'9px',
  },
  input:{
    width: '500px',
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  iconButton: {
    padding:10,
  }
}));


function SearchBar() {
  const classes = useStyles();
  return(
    <div className="search">
      <form autoComplete="off">
        <div className="dropdown">
        <Paper >
          <InputBase className={classes.input} placeholder="" onClick={() => {document.getElementsByClassName("options")[0].style.display = "block";
          document.getElementsByClassName("check")[0].style.display = "block";
          document.getElementsByClassName("cancel")[0].style.display = "block";
          document.getElementsByClassName("arrow")[0].style.display = "none";}} />
            <IconButton className={classes.iconButton}>
              <div className="check"><CheckIcon /></div>
            </IconButton>
            |
            <IconButton className={classes.iconButton}>
              <div className="arrow">
                <ArrowDropDownIcon onClick={() => { document.getElementsByClassName("options")[0].style.display = "block";
                document.getElementsByClassName("check")[0].style.display = "block";
                document.getElementsByClassName("cancel")[0].style.display = "block";
                document.getElementsByClassName("arrow")[0].style.display = "none";
               }} />
             </div>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <div className="cancel"><CancelIcon /></div>
            </IconButton>
        </Paper>
            <div className="options">
              <Paper>
                <Button variant="contained" className={classes.btn} color="primary">Default Text One</Button>
                <Button variant="contained" className={classes.btn} color="primary">Default Long Text Two</Button>
                <Button variant="contained" className={classes.btn} color="primary">Very Long Default Text Three</Button>
              </Paper>
            </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
