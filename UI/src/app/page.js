"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <Typography variant="h1">Hello Next.js + MUI 🎉</Typography>

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Themed Button
      </Button>

      <Card sx={{ mt: 4, maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h6">Custom Card</Typography>
          <Typography>
            This card uses theme overrides for border-radius and shadow.
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}
