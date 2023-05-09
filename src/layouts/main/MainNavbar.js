import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import { Link as ScrollLink } from 'react-scroll';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import AccountPopover from './AccountPopover';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

import useAuth from '../../hooks/useAuth';

import { useMetaMask, useConnectedMetaMask } from "metamask-react";
import { useState } from "react";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 162;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isHome = pathname === '/';

  function metamaskStatus() {
    switch (status) {
      case 'unavailable':
        return 'MetaMask not available';
        break;

      case 'connecting':
        return 'CONNECTING';
        break;
      case 'connected':
        return `0X....${account.substring(account.length - 5)}`;
        break;
      default:
        return 'CONNECT';
        break;
    }
  }

  function connectWallet() {
    connect().then((accounts) => {
    })
  }

  if (status !== 'unavailable' && ethereum) {
    ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length > 0) {
      } else {
      }

    })
  }
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 80 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // pr: 20
          }}
        >
          <a href="https://conflictedgarys.com/">
            <Logo
              sx={{
                transition: 'transform 0.3s',
                marginTop: [2, 2, 0, 0],
                ...(isOffset && {
                  transform: 'scale(0.75)',
                  marginTop: 0,
                })
              }}
            />
          </a>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <Button variant="contained" className="connectButton" onClick={connectWallet}>{metamaskStatus()}</Button>
          </MHidden>

          {/* {isAuthenticated ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button component={RouterLink} variant="contained" to="/auth/login">
              Login
            </Button>
          )} */}
          {/* <AccountPopover /> */}

          <MHidden width="mdUp">
            {/* <Button variant="contained" sx={{fontFamily: "Matter, sans-serif", padding:'10px'}}>connect wallet</Button> */}
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
