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
  backgroundImage: "url(/images/g-back-parallel.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "45%",
  // maxWidth:"1140px",
}));

const ringIcon = {
  height: "50px",
  maxWidth: "50px",
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
  createData("Presale Date", "TBD"),
  createData("Mint Price", "TBD"),
  createData("Public Sale Date", "TBD"),
  createData("Public Sale Limit", "6 Token Per Address"),
  createData("Total Supply", "1,000"),
  createData("Token Type", "ERC-721"),
  createData("Blockchain", "Ethereum"),
  createData("Media & Metadata Hosting", "IPFS"),
  createData("Smart Contract", "TBD"),
];

// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  const [width, height] = useWindowSize();

  return (
    <RootStyle id="benefit">
      <Container maxWidth="lg">

        <MotionInView variants={varFadeInUp} sx={{ marginTop: "70px" }}>
          {width > 1024 ? (
            <UtilityStyle className={"utilities-container"}>
              <Stack direction="row" padding="50px 0">
                <Box flex="1">
                  <Box sx={{ maxWidth: "400px", margin: "auto" }}>
                    <Stack direction="row">
                      <Box flex={2.5} padding="0 20px">
                        <Typography
                          style={{ color: "#e8284d", fontSize: "1.2rem" }}
                        >
                          Security
                        </Typography>
                        <Typography style={{ fontSize: ".94rem" }}>
                          Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain Uncertain
                        </Typography>
                      </Box>
                      <Box
                        flex={1}
                        sx={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                          position: "relative",
                          backgroundColor: "#161c24",
                          height: "90px",
                          maxWidth: "90px"
                        }}
                      >
                        <img
                          src="/images/icon2.png"
                          style={{
                            top: "15px",
                            left: "11px",
                            position: "absolute",
                            width: "65px",
                          }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box flex="0.8">

                </Box>
                <Box flex="1">
                  <Box sx={{ maxWidth: "400px", margin: "auto" }}>
                    <Stack direction="row">
                      <Box
                        flex={1}
                        sx={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                          position: "relative",
                          backgroundColor: "#161c24",
                          height: "90px",
                          maxWidth: "90px"
                        }}
                      >
                        <img
                          src="/images/item1.png"
                          style={{
                            top: "12px",
                            left: "18px",
                            position: "absolute",
                            width: "45px",
                          }}
                        />
                      </Box>
                      <Box flex={2.5} padding="0 25px">
                        <Typography
                          style={{ color: "#e8284d", fontSize: "1.2rem" }}
                        >
                          Not a Security
                        </Typography>
                        <Typography style={{ fontSize: ".94rem" }}>
                          Unclear Unclear Unclear <br />
                          Unclear Unclear Unclear <br />
                          Unclear Unclear Unclear <br />
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
              <Stack direction="row" padding="50px 0">
                <Box flex="1">
                  <Box sx={{ maxWidth: "400px", margin: "auto" }}>
                    <Stack direction="row">
                      <Box flex={2.5} padding="0 20px">
                        <Typography
                          style={{ color: "#e8284d", fontSize: "1.2rem" }}
                        >
                          Not a Security
                        </Typography>
                        <Typography style={{ fontSize: ".94rem" }}>
                          Unclear Unclear Unclear
                          Unclear Unclear Unclear
                          Unclear Unclear Unclear Unclear Unclear Unclear
                        </Typography>
                      </Box>
                      <Box
                        flex={1}
                        sx={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                          position: "relative",
                          backgroundColor: "#161c24",
                          height: "90px",
                          maxWidth: "90px"
                        }}
                      >
                        <img
                          src="/images/icon4.png"
                          style={{
                            top: "12px",
                            left: "10px",
                            position: "absolute",
                            width: "66px",
                          }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box flex="0.8">

                </Box>
                <Box flex="1">
                  <Box sx={{ maxWidth: "400px", margin: "auto" }}>
                    <Stack direction="row">
                      <Box
                        flex={1}
                        sx={{
                          borderRadius: "100%",
                          border: "1px solid #fff",
                          position: "relative",
                          backgroundColor: "#161c24",
                          height: "90px",
                          maxWidth: "90px"
                        }}
                      >
                        <img
                          src="/images/icon5.png"
                          style={{
                            top: "16px",
                            left: "19px",
                            position: "absolute",
                            width: "52px",
                          }}
                        />
                      </Box>
                      <Box flex={2.5} padding="0 25px">
                        <Typography
                          style={{ color: "#e8284d", fontSize: "1.2rem" }}
                        >
                          Secutiry
                        </Typography>
                        <Typography style={{ fontSize: ".94rem" }}>
                          Uncertain Uncertain <br />
                          Uncertain Uncertain <br />
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </UtilityStyle>
          ) : (
            <Box>
              <Stack direction="row" alignItems="center" marginBottom="15px">
                <Box
                  sx={{
                    borderRadius: "100%",
                    height: "70px",
                    minWidth: "70px",
                    border: "1px solid #fff",
                  }}
                >
                  <img src="/images/icon2.png" style={ringIcon} />
                </Box>
                <Box padding="0 25px">
                  <Typography style={{ color: "#e8284d", fontSize: "1.2rem" }}>
                    Security
                  </Typography>
                  <Typography style={{ fontSize: ".94rem" }}>
                    Uncertain Uncertain
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" marginBottom="15px">
                <Box
                  sx={{
                    borderRadius: "100%",
                    height: "70px",
                    minWidth: "70px",
                    border: "1px solid #fff",
                  }}
                >
                  <img src="/images/item1.png" style={ringIcon} />
                </Box>
                <Box padding="0 25px">
                  <Typography style={{ color: "#e8284d", fontSize: "1.2rem" }}>
                    Not a Security
                  </Typography>
                  <Typography style={{ fontSize: ".94rem" }}>
                    Unclear Unclear Unclear
                  </Typography>
                </Box>
              </Stack>
              {/* <Stack direction="row" alignItems="center" marginBottom="15px">
                <Box
                  sx={{
                    borderRadius: "100%",
                    height: "70px",
                    minWidth: "70px",
                    border: "1px solid #fff",
                  }}
                >
                  <img src="/images/icon5.png" style={ringIcon} />
                </Box>
                <Box padding="0 25px">
                  <Typography style={{ color: "#e8284d", fontSize: "1.2rem" }}>
                    Partnership Perks
                  </Typography>
                  <Typography style={{ fontSize: ".94rem" }}>
                    200 lifetime access passes to NFT analytics tools + periodic
                    access pass giveaways to holders
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" marginBottom="15px">
                <Box
                  sx={{
                    borderRadius: "100%",
                    height: "70px",
                    minWidth: "70px",
                    border: "1px solid #fff",
                  }}
                >
                  <img src="/images/icon4.png" style={ringIcon} />
                </Box>
                <Box padding="0 25px">
                  <Typography style={{ color: "#e8284d", fontSize: "1.2rem" }}>
                    Epic Merch!
                  </Typography>
                  <Typography style={{ fontSize: ".94rem" }}>Make a statement in style</Typography>
                </Box>
              </Stack> */}
            </Box>
          )}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
