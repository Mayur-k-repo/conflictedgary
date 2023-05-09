// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import { CityCarousel } from '../../carousel';
import { CategoryCarousel } from '../../carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(12),
  [theme.breakpoints.down('xl')] : {
    paddingTop: theme.spacing(8),
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle id="arts">
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            {/* <Typography variant="h3" sx={{ mb: 3, fontSize: [35, 65], textAlign: 'center', fontFamily: "Matter, sans-serif"}}>
              ARTS
            </Typography> */}
            <Typography variant="h2" textAlign="center" sx={{ mb: 3,fontSize: [70 , 80 , 100], fontFamily: "Formula Condensed !important" ,mt:5 }}>
                  ART
              </Typography>
            {/* <Typography sx={{ mb: 3, fontSize: 24, lineHeight: '30px', fontWeight: 400, textAlign: 'center', fontFamily: "Matter, sans-serif" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography> */}
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            {/* <CityCarousel /> */}
          </MotionInView>
        </ContentStyle>
      </Container>
      <CategoryCarousel />
    </RootStyle>
  );
}
