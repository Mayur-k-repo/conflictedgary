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
import {MintContent} from "../components/_external-pages/mint";


const RootStyle = styled(Page)({
  height: '100%',

});

const ContentStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  background: 'url(/images/labBg.jpg)',
  backgroundPosition: "40%",
  backgroundSize: 'cover',
  height:'100vh'
  // backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MintPage() {
  return (
    <RootStyle title="Gary" id="move_top">
      <ContentStyle>
        <MintContent/>
      </ContentStyle>
    </RootStyle>
  );
}
