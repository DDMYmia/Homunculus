'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #272643 0%, #2c698d 100%)',
      }}
    >
      {/* 背景粒子效果 - 使用简单的CSS实现，更复杂效果可以使用react-particles或类似库 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          zIndex: 1,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(186,232,232,0.8) 0%, rgba(186,232,232,0) 70%)',
          },
          '&::before': {
            top: '20%',
            right: '20%',
            animation: 'float 20s ease-in-out infinite',
          },
          '&::after': {
            bottom: '20%',
            left: '20%',
            animation: 'float 15s ease-in-out infinite reverse',
          },
          '@keyframes float': {
            '0%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(40px, 20px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: 'white',
                  textShadow: '0 4px 8px rgba(0,0,0,0.2)',
                }}
              >
                Homunculus
                <Typography
                  component="span"
                  sx={{
                    display: 'block',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    color: '#bae8e8',
                  }}
                >
                  智能交易分析平台 | Intelligent Trading Analytics Platform
                </Typography>
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 5,
                  maxWidth: '600px',
                  color: 'white',
                  opacity: 0.9,
                }}
              >
                数据驱动交易，洞察市场先机 | Data-Driven Trading, Market Insights
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    href="/dashboard"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      backgroundColor: '#2c698d',
                      color: 'white',
                      boxShadow: '0 4px 14px rgba(44, 105, 141, 0.4)',
                      '&:hover': {
                        backgroundColor: '#235a7c',
                      },
                    }}
                  >
                    立即开始 | Start Now
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    href="#features"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderColor: '#bae8e8',
                      color: '#bae8e8',
                      '&:hover': {
                        borderColor: '#e3f6f5',
                        backgroundColor: 'rgba(186, 232, 232, 0.1)',
                      },
                    }}
                  >
                    了解更多 | Learn More
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* 这里可以放置仪表盘预览图或交易图表模拟 */}
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '320px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  background: 'rgba(227, 246, 245, 0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    position: 'absolute',
                    textAlign: 'center',
                    px: 4
                  }}
                >
                  交易仪表盘预览图 | Dashboard Preview
                  <br />
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    创建实际项目时替换为真实截图 | Replace with actual screenshot when implementing
                  </span>
                </Typography>

                {/* 简单的图表模拟 */}
                <Box
                  sx={{
                    width: '90%',
                    height: '60%',
                    position: 'relative',
                    zIndex: 1,
                    opacity: 0.5,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#e3f6f5',
                    }
                  }}
                >
                  {/* 模拟的线图 */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path
                      d="M0,150 C50,120 100,180 150,100 C200,30 250,90 300,60 C350,30 400,80 400,50"
                      fill="none"
                      stroke="#bae8e8"
                      strokeWidth="3"
                    />
                    <path
                      d="M0,150 C50,120 100,180 150,100 C200,30 250,90 300,60 C350,30 400,80 400,50 L400,200 L0,200 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#bae8e8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#bae8e8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* 向下滚动指示器 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
            向下滚动 | Scroll Down
          </Typography>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              border: '2px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
            }}
          >
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid white',
                transform: 'translateY(2px)',
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;