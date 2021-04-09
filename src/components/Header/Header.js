import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';
import './Header.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { UserContext } from '../../App';

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
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();
    return (
        <div className="header">
            <div className="logo"><img className="logo" src={logo} alt=""/></div>
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                        {
                            loggedInUser.email !== undefined ? <Link to="/admin">{loggedInUser.name}</Link> : <Link to="/login">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" className={classes.margin}>
                                    Login
                                </Button>
                            </ThemeProvider>
                        </Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

