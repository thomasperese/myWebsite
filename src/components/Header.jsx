import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person"; // Add this import


export default function Header() {
return (
<AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: "blur(6px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
<Toolbar sx={{ py: 2, gap: 2, flexWrap: "wrap" }}>
<Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
<PersonIcon sx={{ mr: 1 }} /> {/* Icon in front of name */}
Thomas Kereama Perese
</Typography>
<Stack direction="row" spacing={1}>
<Button variant="outlined" color="secondary" size="small" startIcon={<EmailIcon />} href="mailto:thomasperese@hotmail.com">
Email
</Button>
<Button variant="outlined" color="secondary" size="small" startIcon={<LinkedInIcon />} href="https://linkedin.com/in/thomas-perese-140441190" target="_blank" rel="noreferrer">
LinkedIn
</Button>
<Button variant="contained" color="secondary" size="small" startIcon={<GitHubIcon />} href="#" target="_blank" rel="noreferrer">
GitHub
</Button>
</Stack>
</Toolbar>
</AppBar>
);
}