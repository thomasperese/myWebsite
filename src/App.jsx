import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Container, Box, Typography } from "@mui/material";
import theme from "./theme";

import Header from "./components/Header";
import TabsNav from "./components/TabsNav";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsGrid from "./components/SkillsGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import projects from "./data/projects";
import skillBuckets from "./data/skills";
import Education from "./components/Education";


export default function App() {
const [tab, setTab] = useState(0);


return (
<ThemeProvider theme={theme}>
<CssBaseline />
<Header />
<TabsNav tab={tab} setTab={setTab} />

<Container maxWidth="lg" sx={{ py: 6 }}>
{tab === 0 && (
<Box justifyContent={"center"} alignItems="center" display="flex" flexDirection="column">
<Typography variant="h4" fontWeight={600} gutterBottom>
Featured Projects
</Typography>
<ProjectsGrid projects={projects} />
</Box>
)}


{tab === 1 && (
<Box justifyContent={"center"} alignItems="center" display="flex" flexDirection="column">
<Typography variant="h4" fontWeight={600} gutterBottom>
Technical Skills
</Typography>
<SkillsGrid buckets={skillBuckets} />
</Box>
)}


{tab === 2 && (
<Box justifyContent={"center"} alignItems="center" display="flex" flexDirection="column">
<Typography variant="h4" fontWeight={600} gutterBottom>
About
</Typography>
<About />
</Box>
)}


{tab === 3 && (
<Box justifyContent={"center"} alignItems="center" display="flex" flexDirection="column">
<Typography variant="h4" fontWeight={600} gutterBottom>
Education
</Typography>
<Education />
</Box>
)}

{tab === 4 && (
<Box justifyContent={"center"} alignItems="center" display="flex" flexDirection="column">
<Typography variant="h4" fontWeight={600} gutterBottom>
Contact
</Typography>
<Contact />
</Box>
)}
</Container>


<Box component="footer" sx={{ py: 6, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
<Container maxWidth="lg">
<Typography variant="body2" color="text.secondary">
© {new Date().getFullYear()} Thomas Kereama Perese — Built with React
</Typography>
</Container>
</Box>
</ThemeProvider>
);
}