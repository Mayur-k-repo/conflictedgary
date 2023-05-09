import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField } from '@material-ui/core';
import { DatePicker, StaticDatePicker, MobileDatePicker, DesktopDatePicker, DesktopTimePicker } from '@material-ui/lab';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ----------------------------------------------------------------------


gsap.registerPlugin(ScrollTrigger);
const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  background: 'url(/images/Garys.jpg)',
  backgroundPosition: "40%",
  backgroundSize: 'cover',
  height: "100vh",
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(30),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  // height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const [age, setAge] = useState('');
  const textRef = useRef();
  const bgRef = useRef();
  const [value, setValue] = useState(new Date());
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    // gsap.from(bgRef.current,{opacity:0,scale:3,duration:2,rotation:450, transformOrigin:"50% 50%", ease:"power2"});
    gsap.fromTo(textRef.current, { opacity: 0, scale: 1, bottom: "20%", ease: "power4" }, { opacity: 1, scale: 1, duration: 2, bottom: "10%" }).delay(2);
    // gsap.to(textRef.current,{opacity:0,scale:0,duration:4,y:100}).delay(5);
    // gsap.to(textRef.current,{
    //   scale:3,
    //   // opacity:0,
    //   bottom:"%70",
    //   y:"-=300",
    //   duration:3,
    //   transformOrigin:"center center",
    //   scrollTrigger: {
    //     trigger: bgRef.current,
    //     // scrollTrigger:textRef.current,
    //     start: "top top",
    //     end: "100%",
    //     scrub: true
    //   }
    //
    // }).delay(4);
  })
  return (
    <div style={{ overflow: "hidden" }}>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter} style={{ overflow: "hidden", position: "relative" }} ref={bgRef}>

        <Container maxWidth="lg" >
          <ContentStyle >

          </ContentStyle>
          <Typography ref={textRef} variant="h3" sx={{ width: "100%", fontFamily: "Formula Condensed !important", textAlign: "center", position: "absolute", bottom: "10%", left: 0 }}>
            {/* Meet the Garys! */}
            Going to fuck around & find out
          </Typography>
        </Container>
      </RootStyle>
    </div>
  );
}
