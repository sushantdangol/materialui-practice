import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

import { withStyles } from '@material-ui/core/styles';

import List from './List';


const StyledButton = withStyles({
  root: {
    backgroundColor: '#90EE90',
    borderRadius: 50,
    border: 0,
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

// const StyledInput = withStyles({
//   root: {
//     width: '500px',
//     flex: 1,
//     marginLeft: '16px'
//     }
//   }
// )(Input);

export default class Add extends React.Component {
  constructor() {
    super()
    this.state = {
      def: {
        defaults: [
          'Default Text One',
          'Default Long Text Two',
          'Very Long Default Text Three'
        ]
      },
      lists: {
        items:[]
      },
      optionsStyle: {
        display: 'none',
        position: 'absolute',
        backgroundColor: 'white',
        textAlign: 'left',
        width: '500px'
      },
      btnStyle: {
        check: {
          display: 'none'
        },
        arrow: {
          display: 'block'
        }
      }
    }
  }

  showDefault() {
    console.log('Working')
    this.setState({
      optionsStyle:{
        display:'block'
      },
      btnStyle: {
        check: {
          display: 'block'
        },
        arrow: {
          display: 'none'
        }
      }
  });
  }

  addItem(value) {
    var array = [...this.state.def.defaults]
    var index = array.indexOf(value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        def: {
          defaults: array
        }
      });
    }
    this.setState({
        lists: {
          items: this.state.lists.items.concat(value)
        }
    })
  }

  addList(e) {
    if(this._inputElement.value !== "") {
      var newItem = this._inputElement.value
      this.setState({
        lists: {
          items: this.state.lists.items.concat(newItem)
        }
      })
      // this.setState((prevState) => {
      //   return{
      //     lists: {
      //       items: this.state.lists.items.concat(newItem)
      //     }
      //   }
      // })
      this._inputElement.value = "";
    }
  }

  deleteItems(value) {
    var array = [...this.state.lists.items]
    var index = array.indexOf(value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        def: {
          defaults: array
        }
      });
    }
  }

  clearText() {
    if(this._inputElement.value !== "") {
      this._inputElement.value = "";
    }
  }

  render() {
    console.log(this.state.lists.items)

    return(
      <div>
        <div className="dropdown">
        <Paper>
          <List entries={this.state.lists.items} delete={this.deleteItems} />
        </Paper>
        <Paper >
          <form onSubmit={(event) => this.addList}>
            <input onClick={() => this.showDefault()} placeholder="Enter Text" ref={(a) => this._inputElement = a} />
          </form>

            <IconButton onClick={() => this.addList()} >
              <div style={this.state.btnStyle.check}><CheckIcon /></div>
            </IconButton>
            |
            <IconButton >
              <div className="arrow">
                <ArrowDropDownIcon style={this.state.btnStyle.arrow} onClick={() => this.showDefault()} />
             </div>
            </IconButton>
            <IconButton onClick={() => this.clearText()}>
              <div style={this.state.btnStyle.check}><CancelIcon /></div>
            </IconButton>
        </Paper>
            <div style={this.state.optionsStyle}>
              <Paper>
                <Grid container spacing={1} justify="left" alignItems="center">
                  { this.state.def.defaults.map(value=><StyledButton variant="contained" key={value} color="primary" onClick={() => this.addItem(value)} >{value}</StyledButton>)}
                </Grid>
              </Paper>
            </div>
        </div>
      </div>
    );
  }
}
