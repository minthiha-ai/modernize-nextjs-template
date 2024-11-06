import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { EmailType } from '../../../(DashboardLayout)/types/apps/email';
import { IconStar, IconAlertCircle, IconTrash } from "@tabler/icons-react";
import { useSelector, useDispatch } from "@/store/hooks";
import {
  starEmail,
  importantEmail,
  deleteEmail,
} from "@/store/apps/email/EmailSlice";
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
import Image from "next/image";

const EmailContent = () => {
  const emailDetails: EmailType = useSelector(
    (state) => state.emailReducer.emails[state.emailReducer.emailContent - 1]
  );

  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const toggleEditor = () => {
    setShow(!show);
  };

  const dispatch = useDispatch();

  const theme = useTheme();

  const warningColor = theme.palette.warning.main;
  const errorColor = theme.palette.error.light;

  return emailDetails && !emailDetails.trash ? (
    <Box>
      <Stack p={2} gap={0} direction="row">
        <Tooltip title={emailDetails.starred ? "Unstar" : "Star"}>
          <IconButton onClick={() => dispatch(starEmail(emailDetails.id))}>
            <IconStar
              stroke={1.3}
              size="18"
              style={{
                fill: emailDetails.starred ? warningColor : "",
                stroke: emailDetails.starred ? warningColor : "",
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title={emailDetails ? "Important" : "Not Important"}>
          <IconButton onClick={() => dispatch(importantEmail(emailDetails.id))}>
            <IconAlertCircle
              size="18"
              stroke={1.3}
              style={{
                fill: emailDetails.important ? errorColor : "",
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => dispatch(deleteEmail(emailDetails.id))}>
            <IconTrash size="18" stroke={1.3} />
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider />
      <Box p={3}>
        {/* ------------------------------------------- */}
        {/* Email Detail page */}
        {/* ------------------------------------------- */}
        <Box display="flex" alignItems="center" sx={{ pb: 3 }}>
          <Avatar
            alt={emailDetails.from}
            src={emailDetails.thumbnail}
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">{emailDetails.from}</Typography>
            <Typography variant="body2">{emailDetails.To}</Typography>
          </Box>
          <Chip
            label={emailDetails.label}
            sx={{ ml: "auto", height: "21px" }}
            size="small"
            color={
              emailDetails.label === "Promotional"
                ? "primary"
                : emailDetails.label === "Social"
                ? "error"
                : "success"
            }
          />
        </Box>
        {/* ------------------------------------------- */}
        {/* Email Detail page */}
        {/* ------------------------------------------- */}

        <Box sx={{ py: 2 }}>
          <Typography variant="h4">{emailDetails.subject}</Typography>
        </Box>

        <Box sx={{ py: 2 }}>
          <div
            dangerouslySetInnerHTML={{ __html: emailDetails.emailContent }}
          />
        </Box>
      </Box>
      {emailDetails?.attchments?.length == 0 ? null : (
        <>
          <Divider />
          <Box p={3}>
            <Typography variant="h6">
              Attachments ({emailDetails?.attchments?.length})
            </Typography>

            <Grid container spacing={3}>
              {emailDetails.attchments?.map((attach) => {
                return (
                  <Grid item lg={4} key={attach.id}>
                    <Stack direction="row" gap={2} mt={2}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: "48px",
                          height: "48px",
                          bgcolor: (theme: any) => theme.palette.grey[100],
                        }}
                      >
                        <Avatar
                          src={attach.image}
                          alt="av"
                          variant="rounded"
                          sx={{ width: "24px", height: "24px" }}
                        ></Avatar>
                      </Avatar>
                      <Box mr={"auto"}>
                        <Typography variant="subtitle2" fontWeight={600} mb={1}>
                          {attach.title}
                        </Typography>
                        <Typography variant="body2">
                          {attach.fileSize}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Divider />
        </>
      )}

      <Box p={3}>
        <Stack direction="row" gap={2}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={toggleEditor}
          >
            Reply
          </Button>
          <Button variant="outlined" size="small">
            Forward
          </Button>
        </Stack>

        {/* Editor */}
        {show ? (
          <Box mt={3}>
            <Paper variant="outlined">
              <ReactQuill
                value={text}
                onChange={(value: any) => {
                  setText(value);
                }}
                placeholder="Type here..."
              />
            </Paper>
          </Box>
        ) : null}
      </Box>
    </Box>
  ) : (
    <Box
      p={3}
      height="50vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      {/* ------------------------------------------- */}
      {/* If no Email  */}
      {/* ------------------------------------------- */}
      <Box>
        <Typography variant="h4">Please Select a Mail</Typography>
        <br />
        <Image
          src="/images/breadcrumb/emailSv.png"
          alt={"emailIcon"}
          width= {250}
          height= {250}
        />
      </Box>
    </Box>
  );
};

export default EmailContent;
