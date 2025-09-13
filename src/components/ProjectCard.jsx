import React from "react";
import { Card, CardContent, CardActions, Typography, Stack, Chip, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";


const iconMap = {
code: <CodeIcon fontSize="small" />,
ar: <ViewInArIcon fontSize="small" />,
design: <DesignServicesIcon fontSize="small" />,
mr: <PrecisionManufacturingIcon fontSize="small" />,
};


export default function ProjectCard({ project }) {
const Icon = iconMap[project.icon] || <CodeIcon fontSize="small" />;
return (
<Card
sx={{
height: 400, // Fixed height
maxWidth: 300,
width: "100%",
m: "auto",
display: "flex",
flexDirection: "column",
}}
>
<CardContent>
<Stack direction="row" alignItems="center" spacing={1} mb={1}>
{Icon}
<Typography variant="h6" fontWeight={600}>
{project.title}
</Typography>
</Stack>
<Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
{project.blurb}
</Typography>
<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
{project.tags.map((t) => (
<Chip key={t} size="small" label={t} variant="outlined" color="secondary" />
))}
</Stack>
</CardContent>
<CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
<Button size="small" color="secondary" startIcon={<LaunchIcon />} href={project.demo}>
Demo
</Button>
<Button size="small" color="secondary" startIcon={<GitHubIcon />} href={project.repo}>
Code
</Button>
</CardActions>
</Card>
);
}