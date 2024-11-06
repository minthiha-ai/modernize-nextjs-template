"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import NoteSidebar from "@/app/components/apps/notes/NoteSidebar";
import NoteContent from "@/app/components/apps/notes/NoteContent";
import AppCard from "@/app/components/shared/AppCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Notes",
  },
];

export default function Notes() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <PageContainer title="Note App" description="this is Note App">
      <Breadcrumb title="Note app" items={BCrumb} />
      <AppCard>
        {lgDown ? (
          <NoteSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
        ) : (
          <NoteSidebar
            isMobileSidebarOpen={true}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
        )}

        <Box flexGrow={1}>
          <NoteContent
            toggleNoteSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
          />
        </Box>
      </AppCard>
    </PageContainer>
  );
}
