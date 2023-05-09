import {useLocation, Outlet, Link as RouterLink} from 'react-router-dom';
// material
import { Box, Link, Container, Typography } from '@material-ui/core';
// components
import Logo from '../../components/Logo';
//
import MainFooter from '../main/MainFooter';
import {styled} from "@material-ui/core/styles";

// ----------------------------------------------------------------------
const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7)
    }
}));
export default function MainWithoutNavLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
        <HeaderStyle>
            <RouterLink to="/">
                <Logo />
            </RouterLink>


        </HeaderStyle>
        <div>
            <Outlet />
        </div>
        <MainFooter/>
    </>
  );
}
