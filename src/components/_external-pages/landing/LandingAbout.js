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
import { varFadeInUp, MotionInView } from "../../animate";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0, 0, 0),
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  // maxWidth:"1140px",
  // margin:"auto",
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

const UtilityStyle = styled("div")(({ theme }) => ({
  height: "500px",
  backgroundImage: "url(/images/Sans-titre-2021-12-10T015116.649.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // maxWidth:"1140px",
}));

const ringIcon = {
  height: "50px",
  width: "50px",
  margin: "auto",
  marginTop: "10px",
};

function createData(name, value) {
  return { name, value };
}

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

const utilities = [
  { content: "- Community membership with perks on the way!" },
  { content: "- Free profile pic NFT of your Gary to mint!" },
  {
    content:
      "- Early access to upcoming projects and events (yes, we have more projects in the works)",
  },
  { content: "- Perks in upcoming partnerships" },
  { content: "- Giveaways" },
  { content: "- Voting rights on all community matters" },
  { content: "- Unique Merch access" },
  { content: "- Commercial use" },
  { content: "- Exclusive NFT Trading / Indicator Bot subscription!" },
  {
    content:
      "- And so much more on the way! check discord for new announcements",
  },
];
const rows = [
  createData("Presale Date", "Unclear"),
  createData("Mint Price", "Unclear"),
  createData("Public Mint Date", "Unclear"),
  createData("Public Mint Limit", "Unclear"),
  createData("Total Supply", "Unclear"),
  createData("Smart Contract", "Unclear"),
  createData("Blockchain", "Unclear"),
  createData("Media & Metadata Hosting", "Unclear"),
  createData("Wells Notice", "Probably"),
];

// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  const [width, height] = useWindowSize();

  return (
    <RootStyle id="about">
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={6} className={"aboutContent"} textAlign={"left"}>
                <Typography
                  variant="h2"
                  textAlign="center"
                  sx={{
                    mb: 3,
                    fontSize: [70, 80, 100],
                    fontFamily: "Formula Condensed !important",
                  }}
                >
                  {/* ABOUT PROJECT */}
                  THE PROJECT
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  A community driven project to kickstart the anti-crypto-bullying movement on the Ethereum blockchain starring Daddy Gensler, as previously seen having lunch with the biggest crypto fraud.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 500, marginTop: "20px" }}
                >
                  It's time we hold no-clarity Gary accountable for his actions or should we say lack thereof.
                  This is chaos, we're failing as a country. We can only respond the only way we know.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 500, marginTop: "20px", position: "relative" }}>
                  WITH MORE TOKENS. WE ARE HISTORY.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TableContainer sx={{ marginTop: "30px" }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "td, th": {
                              padding: "12px 0px !important",
                              borderBottom: "1px solid #fff",
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ paddingLeft: "0px !important" }}
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
