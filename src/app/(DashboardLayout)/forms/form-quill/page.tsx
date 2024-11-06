"use client";

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import "./Quill.css";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill: any = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
);

import Paper from "@mui/material/Paper";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import ParentCard from "@/app/components/shared/ParentCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Quill Editor",
  },
];

const QuillEditor = () => {
  const [text, setText] = useState("");

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <PageContainer title="Quill Editor" description="this is Quill Editor">
      {/* breadcrumb */}
      <Breadcrumb title="Quill Editor" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Quill Editor">
        <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
          <ReactQuill
            value={text}
            onChange={(value: any) => {
              setText(value);
            }}
            placeholder="Type here..."
          />
        </Paper>
      </ParentCard>
    </PageContainer>
  );
};

export default QuillEditor;
