import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      ease: "easeInOut",
      duration: 0.5,
    },
  }),
};

export default function ProjectsGrid() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <motion.div
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Increase amount for later trigger
            variants={cardVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
