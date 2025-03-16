'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Typography, 
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme as useMuiTheme
} from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@/styles/themes/ThemeProvider';
import ThemeButton from './ThemeButton';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 使用MUI主题获取屏幕尺寸
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  
  // 使用我们的主题上下文
  const { currentScheme } = useTheme();

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={transparent ? 0 : 4}
        sx={{ 
          background: transparent ? 'transparent' : 'rgba(39, 38, 67, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo部分 */}
          <Link href="/" passHref>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image 
                src="/images/logo.png" 
                alt="Homunculus Logo"
                width={40} 
                height={40}
                style={{ 
                  objectFit: 'contain',
                  marginRight: '10px',
                }}
                onError={(e) => {
                  // 如果logo图片不存在，显示占位符图片
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/40x40.png?text=H';
                }}
              />
              <Typography 
                variant="h6" 
                component="span"
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Homunculus
              </Typography>
            </Box>
          </Link>

          {/* 桌面导航链接 */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={Link} href="/">
              首页
            </Button>
            <Button color="inherit" component={Link} href="/dashboard">
              仪表盘
            </Button>
            <Button color="inherit" component={Link} href="/portfolio">
              交易记录
            </Button>
            <Button color="inherit" component={Link} href="/analysis">
              分析
            </Button>
            <Button color="inherit" component={Link} href="/journal">
              交易日志
            </Button>
          </Box>

          {/* 右侧功能按钮区 */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* 主题设置按钮 */}
            <ThemeButton color="inherit" size="large" />
            
            <IconButton 
              edge="end" 
              color="inherit"
              size="large"
              component={Link}
              href="/profile"
            >
              <AccountCircle />
            </IconButton>
            
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ display: { md: 'none' } }}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <Box 
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              backgroundColor: 'rgba(39, 38, 67, 0.95)',
              backdropFilter: 'blur(10px)',
              p: 2
            }}
          >
            <Button color="inherit" component={Link} href="/" sx={{ py: 1, justifyContent: 'flex-start' }}>
              首页
            </Button>
            <Button color="inherit" component={Link} href="/dashboard" sx={{ py: 1, justifyContent: 'flex-start' }}>
              仪表盘
            </Button>
            <Button color="inherit" component={Link} href="/portfolio" sx={{ py: 1, justifyContent: 'flex-start' }}>
              交易记录
            </Button>
            <Button color="inherit" component={Link} href="/analysis" sx={{ py: 1, justifyContent: 'flex-start' }}>
              分析
            </Button>
            <Button color="inherit" component={Link} href="/journal" sx={{ py: 1, justifyContent: 'flex-start' }}>
              交易日志
            </Button>
          </Box>
        )}
      </AppBar>
    </>
  );
};

export default Navbar; 