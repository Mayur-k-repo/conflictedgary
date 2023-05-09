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
  TermsContent,
} from '../components/_external-pages/terms';
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

export default function TermsPage() {
  return (
    <RootStyle title="Gary" id="move_top">
      <ContentStyle>
        <TermsContent/>
      </ContentStyle>
    </RootStyle>
  );
}
