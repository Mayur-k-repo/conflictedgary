import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const MOCK_FAQS = [...Array(7)].map((_, index) => ({
  id: mockData.id(index),
  value: `panel${index + 1}`,
  heading: mockData.text.questions(index),
  detail: mockData.text.description(index)
}));

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <div style={{ marginTop: "50px" }}>
      <MotionInView variants={varFadeIn} >
        {MOCK_FAQS.map((accordion, index) => (
          <Accordion key={accordion.value}>
            <AccordionSummary id={`panel${index + 1}-header`} expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
              <Typography variant="subtitle1">{accordion.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`panel${index + 1}-body`}>
              <Typography>{accordion.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </MotionInView>
    </div>
  );
}
