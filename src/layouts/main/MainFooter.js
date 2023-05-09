import { Icon } from "@iconify/react";
import googleFill from "@iconify/icons-eva/google-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
// material
import { styled } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Button,
  Stack,
  Box,
} from "@material-ui/core";
//
import SvgIconStyle from "components/SvgIconStyle";
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: "FaceBook", icon: facebookFill },
  { name: "Google", icon: googleFill },
  { name: "Linkedin", icon: linkedinFill },
  { name: "Twitter", icon: twitterFill },
];

const LINKS = [
  {
    headline: "CONTACT US",
    children: [
      { name: "6595 Rosewell Road Ste G PMG 13625 Atlanta", href: "#" },
      { name: "(404) 828 0870", href: "#" },
    ],
  },
  {
    headline: "INFORMATION",
    children: [
      { name: "About us", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Terms and conditions", href: "#" },
    ],
  },
  {
    headline: "MY ACCOUNT",
    children: [{ name: "Shopping Cart", href: "#" }],
  },
  {
    headline: "LET US HELP YOU",
    children: [{ name: "Wishlist", href: "#" }],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  background: "#000000",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  color: "#B8B8B8"
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider sx={{ border: "2px solid #ffffff" }} />

      <Container maxWidth="lg" sx={{ py: 5 }}>
        {" "}
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: "center" }}
        >
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            <Stack className="halfw">
              <a href="https://conflictedgarys.com/">
                <img
                  src="/images/logo-gary.png"
                  style={{ width: "200px", margin: "auto" }}
                />
              </a>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            alignSelf={"center"}
            sx={{ marginTop: ["30px", 0, 0, 0], textAlign: "center" }}
          >
            <a href="https://twitter.com/ConflictedGarys" target="_blank">
              <img src="images/twitter-color.png" alt="Twitter" style={{ maxWidth: '35px', borderRadius: '4px', margin: 'auto', filter: 'grayscale()' }} />
            </a>
          </Grid>
        </Grid>

        <Grid container justifyContent={{ xs: "center", md: "space-between" }} sx={{ textAlign: "center" }} >
          <Grid item xs={12} sm={6} md={6} justifyContent={{ xs: "center", md: "space-between" }} >
            <Typography sx={{ fontSize: 18, fontWeight: 400, lineHeight: "35px", textAlign: "center", marginTop: "50px", }} >
              Copyright © 2021-2023 ConflictedGarys all rights reserved
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} alignSelf={"center"} sx={{ textAlign: "center" }} >
            <Typography sx={{ fontSize: 16, fontWeight: 400, lineHeight: "35px", textAlign: "center", marginTop: "50px" }} >
              <RouterLink to={'/terms'} style={{ color: 'white' }}>Terms & Conditions</RouterLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
