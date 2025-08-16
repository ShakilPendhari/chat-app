"use client";

import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { MoreVert, Search, Call, VideoCall } from "@mui/icons-material";

export default function ChatHeader({ name }) {
  return (
    <Box
      sx={{
        height: 64,
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar>{name[0]}</Avatar>
        <Box ml={2}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="caption" color="textSecondary">online</Typography>
        </Box>
      </Box>

      <Box>
        <IconButton><Search /></IconButton>
        <IconButton><Call /></IconButton>
        <IconButton><VideoCall /></IconButton>
        <IconButton><MoreVert /></IconButton>
      </Box>
    </Box>
  );
}
