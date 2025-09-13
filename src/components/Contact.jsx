import React from "react";
import { Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";


export default function Contact() {
return (
<Stack direction="row" spacing={1}>
<Button variant="contained" color="secondary" startIcon={<EmailIcon />} href="mailto:thomasperese@hotmail.com">
Email Me
</Button>
<Button variant="outlined" color="secondary" startIcon={<LinkedInIcon />} href="https://linkedin.com/in/thomas-perese-140441190" target="_blank" rel="noreferrer">
LinkedIn
</Button>
<Button variant="outlined" color="secondary" startIcon={<GitHubIcon />} href="https://github.com/thomasperese" target="_blank" rel="noreferrer">
GitHub
</Button>
<Button variant="outlined" color="secondary" startIcon={<PhoneIcon />} href="tel:+16466761904">
Phone +1 646 676 1904
</Button>
</Stack>
);
}