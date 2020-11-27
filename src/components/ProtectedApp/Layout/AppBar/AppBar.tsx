import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FitnessCenterIcon from '@material-ui/icons/Whatshot';
import CheckIcon from '@material-ui/icons/Check';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {AuthContext, IAuthContext} from "../../ProtectedApp";
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {routes} from "../../../../config/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

interface IAppBarOption {
    title: string,
    submitFormId: string | null
}

interface IAppBarOptions {
    [key: string]: IAppBarOption
}

const appBarOptions: IAppBarOptions = {
    home: {
        title: 'Fitzilla',
        submitFormId: null
    },
    exercises: {
        title: routes.EXERCISES.title,
        submitFormId: null
    },
    createExercise: {
        title: `Create ${routes.EXERCISE.title}`,
        submitFormId: 'exercise-form'
    },
    updateExercise: {
        title: `Update ${routes.EXERCISE.title}`,
        submitFormId: 'exercise-form'
    }
}
export const AppBar = () => {
    const params: any = useParams();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const {authUser, signOut}: IAuthContext = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [appBarProps, setAppBarProps] = useState(appBarOptions.home);

    const {pathname} = location;
    const isHome = pathname === routes.HOME_PAGE.path;

    useEffect(() => {
        if (isHome) {
            setAppBarProps(appBarOptions.home);
        } else if (pathname.includes(routes.EXERCISES.path)) {
            setAppBarProps(appBarOptions.exercises);
        } else if (pathname.includes(routes.EXERCISE.path)) {
            setAppBarProps(params.id ? appBarOptions.updateExercise : appBarOptions.createExercise);
        }
    }, [pathname]);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleGoBack = () => {
        history.goBack();
    }


    return (
        <div className={classes.root}>
            <MuiAppBar position="static">
                <Toolbar>
                    {
                        isHome ?
                            <IconButton
                                aria-label="logo"
                                aria-controls="logo-appbar"
                                color="inherit"
                                edge="start"
                            >
                                <FitnessCenterIcon/>
                            </IconButton> :
                            <IconButton
                                aria-label="back"
                                aria-controls="back-appbar"
                                onClick={handleGoBack}
                                color="inherit"
                                edge="start"
                            >
                                <ArrowBackIcon/>
                            </IconButton>
                    }
                    <Typography variant="h6" className={classes.title}>
                        {appBarProps.title}
                    </Typography>
                    {isHome && <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {authUser && <MenuItem disabled>{authUser.name}</MenuItem>}
                            <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
                        </Menu>
                    </div>}

                    {appBarProps.submitFormId &&
                    <IconButton
                        form='exercise-form'
                        type='submit'
                        aria-label="save"
                        aria-controls="save-appbar"
                        aria-haspopup="true"
                        onClick={() => console.log('save')}
                        color="inherit"
                    >
                        <CheckIcon/>
                    </IconButton>
                    }

                </Toolbar>
            </MuiAppBar>
        </div>
    );
}