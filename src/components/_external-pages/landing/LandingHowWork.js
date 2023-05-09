// material
import { styled } from "@material-ui/core/styles";
import { Box, Grid, Container, Typography, Stack } from "@material-ui/core";
//
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
  varFadeInRight,
} from "../../animate";
import { motion } from "framer-motion";
import * as React from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  // padding: theme.spacing(28, 0)
  paddingTop: theme.spacing(12),
  [theme.breakpoints.down("xl")]: {
    paddingTop: theme.spacing(8),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    height: "100%",
    marginBottom: 0,
    textAlign: "left",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

// ----------------------------------------------------------------------
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

export default function LandingDarkMode() {
  const [width, height] = useWindowSize();
  return (
    <RootStyle id="roadmap">
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box>
          <motion.div variants={varFadeInRight}>
            {/* <Typography
              variant="h3"
              align="center"
              sx={{ mb: 3, fontSize: [35, 65] }}
            >
              ROADMAP
            </Typography> */}
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                mt: 5,
                mb: 3,
                fontSize: [70, 80, 100],
                fontFamily: "Formula Condensed !important",
              }}
            >
              THE GRILLING
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <div className="tile-roadmap">

              <Grid container className={width > 800 ? "showPercentage" : ""}>
                <Grid md={4} sm={4} xs={12} className="piece selected">
                  <div className="background-text bottom-right">
                    <h1 className="mb-0">MR.CHAIR</h1>
                  </div>
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected">

                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected">

                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected">
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected">
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece selected">
                  <div className="background-text top-right">
                    <h1 className="mb-0">YOU DON'T</h1>
                  </div>
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece selected">
                  <div className="background-text bottom-right">
                    <h1 className="mb-0">WANT ME</h1>
                  </div>
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected"></Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected"></Grid>
                <Grid md={4} sm={4} xs={12} className="piece unselected"></Grid>
                <Grid md={4} sm={4} xs={12} className="piece selected">
                  <div className="background-text bottom-left text-left">
                    <h1 className="mb-0">TO PREJUDGE!</h1>
                  </div>
                </Grid>
                <Grid md={4} sm={4} xs={12} className="piece selected">
                  <div className="content-box4 docs">
                    <div className="content-image-docs">
                      <img src="images/new-docs.png" alt="" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </motion.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
