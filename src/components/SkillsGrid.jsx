import React from "react";
import { Grid, Card, CardContent, Stack, Typography, Chip, useTheme } from "@mui/material";
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


export default function SkillsGrid({ buckets }) {
const theme = useTheme();

return (
<Grid container spacing={3}>
{buckets.map((b) => (
<Grid key={b.name} item xs={12} sm={6} md={3}>
<Card>
<CardContent>
<Stack direction="row" spacing={1} alignItems="center" mb={1}>
{iconMap[b.icon]}
<Typography fontWeight={600}>{b.name}</Typography>
</Stack>
<Stack spacing={1}>
{b.items.map((i) => (
<Chip
key={i}
label={i}
size="small"
variant="outlined"
sx={{
color: "#2EC4B6", // turquoise text color
border: "1px solid #2EC4B6", // turquoise border
fontWeight: 500,
}}
/>
))}
</Stack>
</CardContent>
</Card>
</Grid>
))}
</Grid>
);
}