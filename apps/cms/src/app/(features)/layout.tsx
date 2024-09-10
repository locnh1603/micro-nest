'use client'

import Navigation from "../components/navbar";
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from "../components/sidebar";
import { Box, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../auth/auth-hook";
import { redirect } from 'next/navigation';
export default function Layout({children}: {children: React.ReactNode}) {
  const { isAuthenticated, checkAuthorization } = useAuth();

  useEffect(() => {
    checkAuthorization();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    redirect('/auth');
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navigation />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}