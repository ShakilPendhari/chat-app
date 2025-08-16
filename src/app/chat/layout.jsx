"use client";

import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import GlobalNavbar from "./components/GlobalNavbar";
import { useState } from "react";

export default function ChatLayout({ children }) {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Global Navbar */}
      <GlobalNavbar />

      <Box display="flex" flex={1}>
        {/* Sidebar */}
        <Sidebar onSelectChat={(id) => setActiveChat(id)} />

        {/* Chat section */}
        <Box flex={1} display="flex" flexDirection="column">
          {/* Chat header */}
          {activeChat && <ChatHeader name={"Alice"} />}

          {/* Chat body */}
          <Box flex={1} overflow="auto" p={2}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
