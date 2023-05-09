import { useEffect } from "react";
import { useLocation } from "react-router-dom"
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingHowWork,
  LandingEquipment,
  LandingUtilities,
  LandingCategory,
  LandingDamage,
  LandingConnect,
  LandingTeam,
  LandingAbout,
} from '../components/_external-pages/landing';
import { FaqsList } from '../components/_external-pages/faqs'
import SmoothScroll from "smooth-scroll";

// ----------------------------------------------------------------------
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Gary" id="move_top">
      <LandingHero />

      <ContentStyle>
        <LandingAbout/>
        <LandingUtilities/>
        <LandingEquipment/>
        <LandingHowWork />
        <Container sx={{ pt: 15, mb: 10 }} id="faq">
            {/* <Typography variant="h3" align="center" sx={{ mb: 5, fontSize: [35, 65] }}>
              Frequently asked questions
            </Typography> */}
            <Typography variant="h2" textAlign="center" sx={{ mb: 5, fontSize: [70, 80, 100] ,  fontFamily: "Formula Condensed !important" }}>
                  FAQ
              </Typography>
          <FaqsList />
        </Container>

        <LandingTeam/>
      </ContentStyle>
    </RootStyle>
  );
}
