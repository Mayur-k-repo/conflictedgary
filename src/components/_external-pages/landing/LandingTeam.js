// material
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import { Box, Grid, Button, Container, Typography, Link } from "@material-ui/core";
//
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0, 12, 0),
  // background: 'url(/images/about-bg.png)',
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(8, 0, 8, 0),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down(426)]: {
    padding: 0,
  },
}));

const ContentTeam = styled("div")(({ theme }) => ({
  padding: "10px 40px 10px 40px",
  margin: "10px",
  transition: "all 0.5s",
  "&:hover": {
    borderRadius: "10px",
    boxShadow: "0px 0px 0px 4px rgb(243 243 243 / 80%)",
    transform: "translateY(-30px)",
    // background: theme.palette.grey[900]
  },
}));
// ----------------------------------------------------------------------

export default function LandingTeam() {
  return (
    <RootStyle id="team">
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            {/* <Typography variant="h2" sx={{ mb: 3, fontSize: [35, 65]  }}>
              OUR TALENTED TEAM
            </Typography> */}
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                mb: 3,
                fontSize: [70, 80, 100],
                fontFamily: "Formula Condensed !important",
              }}
            >
              TEAM
            </Typography>
          </MotionInView>

          {/* <MotionInView variants={varFadeInUp}>
            <Typography
              variant='h5'
              sx={{ mb: 3, fontSize: 24, lineHeight: '30px', fontWeight: 400, textAlign: 'center', fontFamily: "Matter, sans-serif" }}
            >
              Simplexity's project team is composed of experienced professionals with
              diverse but complementary backgrounds.
            </Typography>
          </MotionInView> */}

          <MotionInView variants={varFadeInUp}>
            {/* <Grid container className="team-grid-container" style={{"justifyContent":"center"}}>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Rob.png"
                    // alt={item.title}
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                    loading="lazy"
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    ROB
                  </Typography>
                  <Typography>PROJECT MANAGER</Typography>
                  <Link
                      style={{color:"#fff"}}
                      target="_blank"
                    href="https://twitter.com/elevenrm">
                  <i
                      className="fa fa-twitter"
                      style={{ fontSize: "20px", margin: "10px" }}
                  ></i>
                  </Link>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:rob@conflictedgarys.com">
                  <i
                      className="fa fa-envelope"
                      style={{ fontSize: "20px", margin: "10px" }}
                  ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                      Project Lead<br/>
                      Founder @tonicLABS.io<br/>
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Tina.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    TINA
                  </Typography>
                  <Typography>CREATIVE DIRECTOR</Typography>
                  <Link
                      style={{color:"#fff"}}
                      target="_blank"
                      href="https://twitter.com/tintinjpeg">
                    <i
                        className="fa fa-twitter"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:tina@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                     Design Research<br/>
                      Public Relations<br/>
                      Founder @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Marcos.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    MARCOS
                  </Typography>
                  <Typography>3D DEVELOPER</Typography>

                  <Link
                      style={{color:"#fff"}}
                      href="mailto:marcos@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                     Artist<br/>
                      3D Master Designer<br/>
                      Member @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Adrilin.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    ADRILIN
                  </Typography>
                  <Typography>2D DESIGNER</Typography>
                  <Link
                      style={{color:"#fff"}}
                      target="_blank"
                      href="https://twitter.com/AdrilinMarin">
                    <i
                        className="fa fa-twitter"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:adrilin@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                     Graphic Designer<br/>
                      Member @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Kennedy.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    KENNEDY
                  </Typography>
                  <Typography>DEVELOPER</Typography>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:kennedy@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                      Frontend Developer<br/>
                      Member @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Monyse.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    MONYSE
                  </Typography>
                  <Typography>DEVELOPER</Typography>
                  <Link
                      style={{color:"#fff"}}
                      target="_blank"
                      href="https://twitter.com/mnnarriman">
                    <i
                        className="fa fa-twitter"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:monyse@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                      Web Designer<br/>
                      Graphic Artist<br/>
                      Member @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/Oliver.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    OLIVER
                  </Typography>
                  <Typography>DEVELOPER</Typography>
                  <Link
                      style={{color:"#fff"}}
                      href="mailto:oliver@conflictedgarys.com">
                    <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                      Blockchain Developer<br/>
                      Member @tonicLABS.io
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
              <Grid md={3} sm={6} xs={12}>
                <ContentTeam>
                  <img
                    src="images/n0vax.png"
                    // alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "100%", border: "5px solid gray" }}
                  />
                  <Typography
                    sx={{
                      mt: 5,
                      color: "text.secondary",
                    }}
                  >
                    n0vax
                  </Typography>
                  <Typography>MARKETING</Typography>
                  <Link
                      style={{color:"#fff"}}
                      href="https://twitter.com/n0vaxNFT">
                    <i
                        className="fa fa-twitter"
                        style={{ fontSize: "20px", margin: "10px" }}
                    ></i>
                  </Link>
                  <Box>
                    <Typography sx={{ mb: 3 }}>
                      Community Manager
                    </Typography>
                  </Box>
                </ContentTeam>
              </Grid>
            </Grid> */}

            <Grid container className="team-grid-container" style={{ "justifyContent": "center" }}>
              <Grid md={6} sm={8} xs={12}>

                <img src="images/team.jpeg" alt="Team Image" style={{ margin: 'auto' }} />

              </Grid>
            </Grid>

          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
