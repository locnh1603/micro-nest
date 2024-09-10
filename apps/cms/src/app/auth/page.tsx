'use client';

import { Button } from "@mui/material";

export default function Index() {
  // To use app shell auth
  const login = () => {
    localStorage.setItem('token', 'test-token-123');
  }
  return (
    <div>
      <Button onClick={login} href="/dashboard">Login</Button>
    </div>
  );
}
  