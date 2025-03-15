'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitHub, Email, Twitter } from '@mui/icons-material';

const AboutSection: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        backgroundColor: '#2c698d',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景装饰 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(227, 246, 245, 0.1) 0%, rgba(227, 246, 245, 0) 70%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                }}
              >
                关于我们 | About Us
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Homunculus.com 是一款设计精良的加密货币交易分析平台。采用现代化的Web技术栈，以用户体验和数据可视化为核心设计理念。
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                平台能够帮助交易者整合多交易所数据，将交易记录、数据可视化和性能分析整合于一体，在单一平台上提供全面的交易分析工具。通过数据和图表获得更全面的洞察，帮助用户优化交易策略并提高盈利能力。
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                平台的安全性设计也值得称道，其仅使用只读API访问交易所数据，或者是交易所导出的CSV文档，确保用户资金安全的同时提供全面的分析功能。
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    href="/dashboard"
                    variant="contained"
                    sx={{
                      backgroundColor: 'white',
                      color: '#2c698d',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    开始使用 | Get Started
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(227, 246, 245, 0.1)',
                  borderRadius: '16px',
                  p: 4,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                  }}
                >
                  联系我们 | Contact Us
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  如果您有任何问题、建议或者合作意向，请随时通过以下方式联系我们。
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ fontSize: 24 }} />
                    <MuiLink
                      href="mailto:contact@homunculus.com"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      contact@homunculus.com
                    </MuiLink>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GitHub sx={{ fontSize: 24 }} />
                    <MuiLink
                      href="https://github.com/homunculus"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      github.com/homunculus
                    </MuiLink>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Twitter sx={{ fontSize: 24 }} />
                    <MuiLink
                      href="https://twitter.com/homunculus"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      twitter.com/homunculus
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;