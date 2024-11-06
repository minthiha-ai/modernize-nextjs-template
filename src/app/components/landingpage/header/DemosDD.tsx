import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NextLink from "next/link";

import mainDemo from "/public/images/landingpage/demos/demo-main.jpg";
import darkDemo from "/public/images/landingpage/demos/demo-dark.jpg";
import horizontalDemo from "/public/images/landingpage/demos/demo-horizontal.jpg";
import rtlDemo from "/public/images/landingpage/demos/demo-rtl.jpg";

import app1 from "/public/images/landingpage/apps/app-calendar.jpg";
import app2 from "/public/images/landingpage/apps/app-chat.jpg";
import app3 from "/public/images/landingpage/apps/app-contact.jpg";
import app4 from "/public/images/landingpage/apps/app-email.jpg";
import app5 from "/public/images/landingpage/apps/app-note.jpg";
import Image from "next/image";

interface DemoTypes {
  link: string;
  img: string | any;
  title: string;
}

const demos: DemoTypes[] = [
  {
    link: "https://modernize-nextjs.adminmart.com/landingpage",
    img: mainDemo,
    title: "Main",
  },
  {
    link: "https://modernize-nextjs-dark.vercel.app/",
    img: darkDemo,
    title: "Dark",
  },
  {
    link: "https://modernize-nextjs-horizontal.vercel.app/",
    img: horizontalDemo,
    title: "Horizontal",
  },
  {
    link: "/",
    img: rtlDemo,
    title: "RTL-[included with package]",
  },
];

const apps: DemoTypes[] = [
  {
    link: "https://modernize-nextjs.adminmart.com/apps/calendar",
    img: app1,
    title: "Calendar",
  },
  {
    link: "https://modernize-nextjs.adminmart.com/apps/chats",
    img: app2,
    title: "Chat",
  },
  {
    link: "https://modernize-nextjs.adminmart.com/apps/contacts",
    img: app3,
    title: "Contact",
  },
  {
    link: "https://modernize-nextjs.adminmart.com/apps/email",
    img: app4,
    title: "Email",
  },
  {
    link: "https://modernize-nextjs.adminmart.com/apps/notes",
    img: app5,
    title: "Note",
  },
];

const StyledBox = styled(Box)(() => ({
  overflow: "auto",
  position: "relative",
  ".MuiButton-root": {
    display: "none",
  },
  "&:hover": {
    ".MuiButton-root": {
      display: "block",
      transform: "translate(-50%,-50%)",
      position: "absolute",
      left: "50%",
      right: "50%",
      top: "50%",
      minWidth: "100px",
      zIndex: "9",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: " 0",
      width: "100%",
      height: "100%",
      zIndex: "8",
      backgroundColor: "rgba(55,114,255,.2)",
    },
  },
}));

const DemosDD = () => {
  return (
    <>
      <Box p={4}>
        <Typography variant="h5">Different Demos</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Included with the package
        </Typography>

        <Stack mt={2} spacing={3} direction={{ xs: "column", lg: "row" }}>
          {demos.map((demo, index) => (
            <Box key={index}>
              <StyledBox>
                <Image
                  src={demo.img}
                  alt="demo"
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  href={demo.link}
                  target="_blank"
                >
                  Live Preview
                </Button>
              </StyledBox>
              <Typography
                variant="body1"
                color="textPrimary"
                textAlign="center"
                fontWeight={500}
                mt={2}
              >
                {demo.title}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Typography variant="h5" mt={5}>
          Different Apps
        </Typography>

        <Stack
          mt={2}
          spacing={3}
          mb={2}
          direction={{ xs: "column", lg: "row" }}
        >
          {apps.map((app, index) => (
            <Box key={index}>
              <StyledBox>
                <Image
                  src={app.img}
                  alt="demo"
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <NextLink href={app.link}>
                  <Button variant="contained" color="primary" size="small">
                    Live Preview
                  </Button>
                </NextLink>
              </StyledBox>
              <Typography
                variant="body1"
                color="textPrimary"
                textAlign="center"
                fontWeight={500}
                mt={2}
              >
                {app.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default DemosDD;
