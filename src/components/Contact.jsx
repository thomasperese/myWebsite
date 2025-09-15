import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", sm: "center" }}
      >
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<EmailIcon />}
          href="mailto:thomasperese@hotmail.com"
          fullWidth
        >
          Email
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<LinkedInIcon />}
          href="https://linkedin.com/in/thomas-perese-140441190"
          target="_blank"
          rel="noreferrer"
          fullWidth
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GitHubIcon />}
          href="#"
          target="_blank"
          rel="noreferrer"
          fullWidth
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<PhoneIcon />}
          href="tel:+1 (646) 676-1904"
          fullWidth
        >
          Phone
        </Button>
      </Stack>
    </Box>
  );
}
