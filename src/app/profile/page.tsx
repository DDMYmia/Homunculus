import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Profile() {
  return (
    <>
      <Navbar />
      <Box 
        component="main" 
        sx={{
          backgroundColor: '#272643',
          minHeight: '100vh',
          pt: { xs: '76px', md: '84px' }, // 导航栏高度补偿
          pb: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1"
            color="white"
            sx={{ mb: 4 }}
          >
            用户资料 | User Profile
          </Typography>
          <Typography 
            variant="h5"
            color="rgba(255,255,255,0.7)"
          >
            此页面正在开发中... | This page is under development...
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
} 