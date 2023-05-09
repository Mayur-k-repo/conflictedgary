// material
import * as React from "react";
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Button,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    Stack,
} from "@material-ui/core";
import SvgIconStyle from "components/SvgIconStyle";
import MetaMaskOnboarding from '@metamask/onboarding';
//
import { varFadeInUp, MotionInView } from "../../animate";
import {LoadingButton} from "@material-ui/lab";
import AuthLayout from "../../../layouts/AuthLayout";
import MainNavbar from "../../../layouts/main/MainNavbar";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(20, 0, 0, 0),
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    p: {
        fontSize: "14px",
    },
    [theme.breakpoints.down("xl")]: {
        padding: theme.spacing(20, 0, 0, 0),
    },
}));

const ContentStyle = styled("div")(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '50vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));




function useWindowSize() {
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';
// ----------------------------------------------------------------------

export default function StakingContent() {
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();

    React.useEffect(() => {
        if (!onboarding.current) {
           onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setButtonText(CONNECTED_TEXT);
                setDisabled(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);

    React.useEffect(() => {
        function handleNewAccounts(newAccounts) {
            setAccounts(newAccounts);
        }
        if (MetaMaskOnboarding.isMetaMaskInstalled() && 1==2) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts);
            window.ethereum.on('accountsChanged', handleNewAccounts);
            return () => {
                window.ethereum.off('accountsChanged', handleNewAccounts);
            };
        }
    }, []);

    const onClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        } else {
            onboarding.current.startOnboarding();
        }
    };


    const [width, height] = useWindowSize();
    return (
        <RootStyle id="staking">
                    <Container maxWidth="xs" style={{background:"#040404",borderRadius:"15px",backgroundImage:"url(/images/garyLoginBg.jpg)",backgroundSize:"cover"}}>
                        <ContentStyle style={{marginBottom:"100px"}}>
                            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h4" gutterBottom sx={{ color: 'text.secondary' }}>
                                        Welcome to ConflictedGarys
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>Your staking journey starts here</Typography>
                                </Box>


                            </Stack>

                            <LoadingButton fullWidth size="large" type="submit" variant="contained" disabled={isDisabled} onClick={onClick}>
                                {buttonText}
                            </LoadingButton>

                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
