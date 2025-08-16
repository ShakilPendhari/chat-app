"use client";

import { useState } from "react";
import {
  Box,
  List,
  ListItemAvatar,
  Avatar,
  Typography,
  TextField,
  ListItemText,
  ListItem,
  ListItemButton,
} from "@mui/material";

const dummyChats = [
  { id: 1, name: "Alice", lastMessage: "See you tomorrow!", time: "10:30 AM" },
  {
    id: 2,
    name: "Developers Group",
    lastMessage: "New update deployed 🚀",
    time: "Yesterday",
  },
  { id: 3, name: "Bob", lastMessage: "Let’s catch up soon!", time: "Mon" },
];

export default function Sidebar({ onSelectChat }) {
  const [search, setSearch] = useState("");

  const filteredChats = dummyChats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: 300,
        borderRight: "1px solid #ddd",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Search */}
      <Box p={2}>
        <TextField
          placeholder="Search or start new chat"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {/* Chat list */}
      <List>
        {filteredChats.map((chat) => (
          <ListItem key={chat.id} disablePadding>
            <ListItemButton onClick={() => onSelectChat(chat.id)}>
              <ListItemAvatar>
                <Avatar>{chat.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">{chat.name}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {chat.time}
                    </Typography>
                  </Box>
                }
                secondary={chat.lastMessage}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
