import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';


const StyledButton = withStyles({
  root: {
    backgroundColor: '#fff',
    borderRadius: 50,
    border: '2px solid #90EE90',
    color: 'black',
    height: 38,
    padding: '0 30px',
    margin: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover':{
      backgroundColor: '#90EE90',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const IconStyled = withStyles({
  root: {
    padding: '0px',
    margin: '0px',
    marginLeft: '5px'
  }
})(IconButton);

export default class List extends React.Component {

  listItem(item) {
    return <StyledButton> {item} <IconStyled onClick={() => this.removeItem(item)}><CancelIcon /></IconStyled> </StyledButton>
  }

  removeItem(value){
    this.props.delete(value)
  }

  render() {
    var itemEntries = this.props.entries;
    var listItems = itemEntries.map(this.listItem);
    return(
      <div>
        <h1>This is the List</h1>
        <div className="list">
        {listItems}
        </div>
      </div>
    );
  }
}
