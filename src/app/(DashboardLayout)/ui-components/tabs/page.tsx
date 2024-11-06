'use client'

import * as React from 'react'; 
import { Grid, Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';
import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tabs',
  },
];


const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const SCROLLABLE_TAB = [
  { value: '1', icon: <IconUser width={20} height={20} />, label: 'Item 1' },
  { value: '2', icon: <IconUser width={20} height={20} />, label: 'Item 2' },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item 3' },
  { value: '4', icon: <IconUser width={20} height={20} />, label: 'Item 4' },
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Item 5' },
  { value: '6', icon: <IconUser width={20} height={20} />, label: 'Item 6' },
  { value: '7', icon: <IconUser width={20} height={20} />, label: 'Item 7' }
];

const MuiTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="Tabs" description="this is Tabs">
      {/* breadcrumb */}
      <Breadcrumb title="Tabs" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Tabs">
        <Grid container spacing={3}>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Text */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Text">
              <TabContext value={value}>
                <Box>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    {COMMON_TAB.map((tab, index) => (
                      <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
                    ))}
                  </TabList>
                </Box>
                <Divider />
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel, index) => (
                    <TabPanel key={panel.value} value={String(index + 1)}>
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>

              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Icon">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} value={tab.value} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon with Label */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Icon with Label">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} value={tab.value} disabled={tab.disabled} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Bottom */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Icon Bottom">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="bottom" value={tab.value} disabled={tab.disabled} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Left */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Icon Left">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="start" value={tab.value} disabled={tab.disabled} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Right */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Icon Right">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="end" value={tab.value} disabled={tab.disabled} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {COMMON_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Scrollable  */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Scrollable ">
              <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" variant="scrollable" scrollButtons="auto">
                  {SCROLLABLE_TAB.map((tab) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="top" value={tab.value} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.200" mt={2}>
                  {SCROLLABLE_TAB.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
            </ChildCard>
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Vertical */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Vertical">

              <TabContext value={value}>
                <Box width="100%" gap={2} display="flex" flexGrow={1}
                  sx={{ height: 224 }}
                >
                  <Tabs value={value} orientation="vertical" onChange={handleChange} variant="scrollable" scrollButtons="auto">
                    {SCROLLABLE_TAB.map((tab) => (
                      <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="top" value={tab.value} />
                    ))}

                  </Tabs>
                  <Box bgcolor="grey.200" width="100%">
                    {SCROLLABLE_TAB.map((panel) => (
                      <TabPanel key={panel.value} value={panel.value} >
                        {panel.label}
                      </TabPanel>
                    ))}
                  </Box>
                </Box>
              </TabContext>

            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
}
export default MuiTabs;
