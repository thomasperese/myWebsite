import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Card sx={{ margin: "10px auto", width: "100%" }}>
        <CardContent>
          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", lineHeight: 1.8 }}
          >
            I am a Creative Technologist with a passion for building digital
            experiences that merge frontend engineering, immersive storytelling,
            and cultural design. My work sits at the intersection of technology
            and creativity, where code becomes a canvas, and innovation a tool for
            connection.
            {"\n"}
            {"\n"}
            With a foundation in React, JavaScript, SwiftUI, and XR development, I
            create responsive applications and immersive environments that are as
            functional as they are engaging. My portfolio spans projects in web
            development, AR/VR, cultural storytelling, and IoT systems, each
            informed by user-centered research and iterative design.
            {"\n"}
            {"\n"}
            Whether developing a VisionOS prototype to explore Māori narratives,
            leading a HoloLens 2 safety initiative for KiwiRail, or experimenting
            with Arduino and digital fabrication for urban transport solutions, I
            thrive on translating complex challenges into accessible,
            human-centered outcomes.
            {"\n"}
            {"\n"}
            Cultural values ground my practice. I am a proud descendant of rich Māori and Pacifica heritage, and having been raised in a diverse country like New Zealand that honors culture and sustainability,
            I aim to weave human centred cultural values that have sustainably governed my people to live in harmony with each other and the earth
            for thousands of years into the design and delivery of every project. 
            {"\n"}
            {"\n"}
            I believe in a world full of disruptions,
            These values ensure that technology does more than perform. It
            connects, protects, educates, enhances and sustains kaitiakitanga (guardianship) of the earth, the world we live in today, and the future we design for future generations.
            {"\n"}
            {"\n"}
            Beyond technical expertise, I bring an interdisciplinary mindset
            shaped by research, design, project management, and collaboration. I
            believe great technology balances creativity with rigor, aesthetics
            with functionality, and innovation with cultural integrity.
            {"\n"}
            {"\n"}
            My goal is to continue crafting experiences that not only showcase the
            future of emerging technologies, but also enquire about their impact on
            people and communities.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}