"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Button, Typography, Box, TextField } from "@mui/material";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google login success!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Chat App Login
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />

      <Button
        type="button"
        variant="contained"
        onClick={handleLogin}
        sx={{ mb: 1, width: "300px" }}
      >
        Login
      </Button>
      <Button
        type="button"
        variant="outlined"
        onClick={handleSignup}
        sx={{ mb: 1, width: "300px" }}
      >
        Signup
      </Button>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={handleGoogleLogin}
        sx={{ width: "300px" }}
      >
        Continue with Google
      </Button>
    </Box>
  );
}
