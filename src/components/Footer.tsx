'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#272643', 
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image 
                src="/images/logo.png" 
                alt="Homunculus Logo"
                width={36} 
                height={36}
                style={{ 
                  objectFit: 'contain',
                  marginRight: '10px',
                }}
                onError={(e) => {
                  // 如果logo图片不存在，显示占位符图片
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/36x36.png?text=H';
                }}
              />
              <Typography 
                variant="h6" 
                component="span"
                sx={{ 
                  fontWeight: 'bold',
                }}
              >
                Homunculus
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              新一代Web端加密货币交易分析平台，数据驱动交易，洞察市场先机。
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © {new Date().getFullYear()} Homunculus.com 
              <br />
              赋能数据驱动交易者 | Empowering Data-Driven Traders
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              快速链接 | Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  首页 | Home
                </MuiLink>
              </Link>
              <Link href="/dashboard" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  仪表盘 | Dashboard
                </MuiLink>
              </Link>
              <Link href="/portfolio" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  交易记录 | Portfolio
                </MuiLink>
              </Link>
              <Link href="/journal" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  交易日志 | Journal
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              资源 | Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/help" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  帮助中心 | Help Center
                </MuiLink>
              </Link>
              <Link href="/faq" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  常见问题 | FAQ
                </MuiLink>
              </Link>
              <Link href="/api" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  API 文档 | API Docs
                </MuiLink>
              </Link>
              <Link href="/blog" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  博客 | Blog
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              法律 | Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/terms" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  服务条款 | Terms of Service
                </MuiLink>
              </Link>
              <Link href="/privacy" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  隐私政策 | Privacy Policy
                </MuiLink>
              </Link>
              <Link href="/cookies" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  Cookie 政策 | Cookie Policy
                </MuiLink>
              </Link>
              <Link href="/disclaimer" passHref>
                <MuiLink color="inherit" underline="hover" component="span">
                  免责声明 | Disclaimer
                </MuiLink>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            pt: 3, 
            mt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Homunculus 不提供任何财务建议。交易加密货币存在风险，请谨慎决策。
            <br />
            Homunculus does not provide financial advice. Cryptocurrency trading involves risk, please make informed decisions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 