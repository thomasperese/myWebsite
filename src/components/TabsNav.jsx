import React from "react";
import { Box, Container, Tabs, Tab, Typography } from "@mui/material";


const tabLabels = ["Projects", "Skills", "About", "Education", "Contact"];

export default function TabsNav({ tab, setTab }) {
return (
<Box sx={{ py: 6, borderBottom: "1px solid rgba(255,255,255,0.06)", background: "linear-gradient(180deg, rgba(14,19,36,1) 0%, rgba(5,7,15,1) 100%)" }}>
<Container maxWidth="lg">
<Typography variant="h4" fontWeight={700} gutterBottom>
Creative Technologist • Frontend Engineer • AR/VR Developer
</Typography>
<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
Māori • Samoan • Fijian • Tongan — weaving kaupapa Māori values of <em>manaakitanga</em> (care), <em>kaitiakitanga</em> (guardianship), and
<em> whakawhanaungatanga</em> (relationship-building) into modern software, design, and XR.
</Typography>
<Tabs value={tab} onChange={(_, v) => setTab(v)} textColor="secondary" indicatorColor="secondary" variant="scrollable" scrollButtons="auto" sx={{ mt: 3 }}>
{tabLabels.map((label, idx) => (
<Tab
key={label}
label={label}
sx={{
mx: 1,
fontWeight: 500,
transition: "background 0.2s",
borderRadius: 2,
"&:hover": {
backgroundColor: "secondary.light",
color: "secondary.contrastText",
},
}}
/>
))}
</Tabs>
</Container>
</Box>
);
}