import { Link, Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton,Drawer, MenuItem } from "@material-ui/core";
// import { display } from "@mui/system";
import React, { FC, useState, useEffect } from "react";

interface HeaderState {
	// readonly navBar : navBarState;
	mobileView?: boolean;
    drawerOpen?: boolean;
}

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#400CC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
          },
	},
	logo: {
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
    menuButton: {
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
     toolBar: {
         display:"flex",
         justifyContent: "space-between",
     },
     drawerContainer: {
        padding: "20px 30px",
      }
}));

const headersData = [
    {
        label: "Se connecter",
        href: "/login",
      },
      {
        label: "S'inscrire",
        href: "/signup",
      },
      {
        label: "Accueil",
        href: "/",
      },
      {
        label: "Mon compte",
        href: "/profil",
      },
];

const Header: FC<HeaderState> = () => {

	const { header, logo, menuButton, toolBar, drawerContainer } = useStyles();

	const displayDesktop = () => {
		return (
            <Toolbar className={toolBar}>{hospitalLogo}
               <IconButton
                   {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                  }}/>
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
	};

	const hospitalLogo = (
		<Typography variant='h6' component='h1' className={logo}>
			Hospital
		</Typography>
	);


    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                    className: menuButton
                }} >
                    {label}
                </Button>
            );
        });
    };

	const [state, setState] = useState({
		mobileView: false,
        drawerOpen: false
	});

    const {mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);
    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                {...{
                    component: RouterLink,
                    to: href,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => 
        setState((prevState) => ({ ...prevState, drawerOpen:true }));
        const handleDrawerClose = () => {
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        }
        return (
            <Toolbar>
              <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                  }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
              {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                  }}
              > 
              <div className={drawerContainer}>{getDrawerChoices()}</div>
              </Drawer>
      <div>{hospitalLogo}</div>
      </Toolbar>
          );
    };

    
	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
};
export default Header;
