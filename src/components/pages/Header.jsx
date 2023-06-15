import classes from "../../modules/Header.module.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Badge, createTheme, ThemeProvider
} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';

export function Header(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FF0000FF',
                darker: '#fff',
            },
        },
    });

    return (
        <AppBar position="static" sx={{mb: 7, }} >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon
                        id="demo-positioned-button"
                        onClick={handleClick}
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                    <Menu
                        id="demo-positioned-menu"
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        aria-labelledby="demo-positioned-button"
                        open={open}
                    >
                        <MenuItem></MenuItem>
                        <MenuItem onClick={handleClose}>1</MenuItem>
                        <MenuItem onClick={handleClose}>2</MenuItem>
                        <MenuItem onClick={handleClose}>3</MenuItem>
                    </Menu>
                </IconButton>
                <NavLink to="/" className={classes.link}
                         style={({isActive}) => {
                             return {
                                 color: isActive ? "rgb(0, 255, 13)" : "white",
                             };
                         }}><Typography
                    variant="h5"
                    sx={{flexGrow: 1}}
                >
                    Pokedex
                </Typography></NavLink>
                <IconButton
                    color="inherit"
                    sx={{ml: "auto"}}
                >
                    <ThemeProvider theme={theme}>
                        <Badge
                            color="primary"
                            badgeContent={props.lenght}
                        >
                            <NavLink to="/caughtpage" className={classes.link}
                                     style={({isActive, isPending}) => {
                                         return {
                                             color: isActive ? "rgb(0, 255, 13)" : "white",
                                         };
                                     }}><ShoppingCart/></NavLink>
                        </Badge>
                    </ThemeProvider>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}