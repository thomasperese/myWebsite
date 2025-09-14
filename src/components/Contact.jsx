import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Contact
      </Typography>
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
          thomasperese@hotmail.com
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
          href="tel:+64211234567"
          fullWidth
        >
          +64 21 123 4567
        </Button>
      </Stack>
    </Box>
  );
}