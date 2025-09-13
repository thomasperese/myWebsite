import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import education from "../data/education";

export default function Education() {
  return (
    <Box>
      <Grid container spacing={2}>
        {education.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ maxWidth: 300, margin: "auto" }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.years}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}