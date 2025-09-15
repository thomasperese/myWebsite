import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
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

export default function SkillsGrid({ buckets }) {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {buckets.map((b, idx) => (
        <Grid
          key={b.name}
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          justifyContent="center"
        >
          <motion.div
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 300,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                        color: "#2EC4B6",
                        border: "1px solid #2EC4B6",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
