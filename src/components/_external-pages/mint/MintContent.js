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

//

import { useMetaMask } from "metamask-react";

import { varFadeInUp, MotionInView } from "../../animate";
import MintForm from "./MintForm";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 0, 20, 0),
  height:"100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  p: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(6, 0, 0, 0),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
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


// ----------------------------------------------------------------------

export default function MintContent() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const [width, height] = useWindowSize();
  return (
    <RootStyle id="mint">
      <Container >
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item xs={12}  className={"mintSection"} textAlign={"left"}>

                <MintForm/>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
