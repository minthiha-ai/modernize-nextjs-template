'use client'

import * as React from 'react';
import {
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';

import { IconChevronDown } from '@tabler/icons-react';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Accordion',
  },
];

const MuiAccordion = () => {
  // controlled accodion
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <PageContainer title="Accordian" description="this is Accordian">
      {/* breadcrumb */}
      <Breadcrumb title="Accordion" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Accordion">
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" alignItems="stretch">
            <ChildCard title="Basic">
              <Accordion>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="h6">Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </ChildCard>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="stretch">
            <ChildCard title="Controlled">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
                    General settings
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    I am an accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                    eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
                    Users
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    You are currently not an owner
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius
                    pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
                    Advanced settings
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Filtering has been entirely disabled for whole web server
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet
                    egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
                    Personal data
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet
                    egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};
export default MuiAccordion;
