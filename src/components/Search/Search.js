import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import './Search.css';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  

const Search = () => {
    const classes = useStyles();
  return (
    <div className="row">
        {/*Grid column*/}
        <div className="col-md-6 mb-4">
          <form className="form-inline mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                    Search
                </Button>
            </ThemeProvider>
          </form>
        </div>
        {/*Grid column*/}
      </div>
  );
};

export default Search;
