import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { IconHeart, IconPhoto, IconUserCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileTab = () => {
  const location = usePathname();
  const [value, setValue] = React.useState(location);
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };
  const ProfileTabs = [
    {
      label: "Profile",
      icon: <IconUserCircle size="20" />,
      to: "/apps/user-profile/profile",
    },
    {
      label: "Followers",
      icon: <IconHeart size="20" />,
      to: "/apps/user-profile/followers",
    },
    {
      label: "Friends",
      icon: <IconUserCircle size="20" />,
      to: "/apps/user-profile/friends",
    },
    {
      label: "Gallery",
      icon: <IconPhoto size="20" />,
      to: "/apps/user-profile/gallery",
    },
  ];

  return (
    <Box
      mt={1}
      sx={{ mt: 1, backgroundColor: (theme) => theme.palette.grey[100] }}
    >
      <Box
        justifyContent={"end"}
        display="flex"
        sx={{ maxWidth: { xs: 320, sm: "100%" } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="scrollable prevent tabs example"
        >
          {ProfileTabs.map((tab) => {
            return (
              <Tab
                iconPosition="start"
                label={tab.label}
                sx={{ minHeight: "50px" }}
                icon={tab.icon}
                component={Link}
                href={tab.to}
                value={tab.to}
                key={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProfileTab;
