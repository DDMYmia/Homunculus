'use client';

import React, { useState } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import PaletteIcon from '@mui/icons-material/Palette';
import ThemeDrawerContent from './ThemeDrawerContent';
import { useTheme } from '@/styles/themes/ThemeProvider';

// 主题按钮组件，允许用户打开主题设置抽屉
export default function ThemeButton(props: IconButtonProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { currentScheme } = useTheme();

  // 打开主题设置抽屉
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  // 关闭主题设置抽屉
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Tooltip title="主题设置 (Theme Settings)" arrow>
        <IconButton
          {...props}
          onClick={handleOpenDrawer}
          aria-label="主题设置"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'all var(--transition-speed) ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: '4px',
              borderRadius: '50%',
              background: `var(--color-primary)`,
              opacity: 0.2,
              transform: 'scale(0)',
              transition: 'transform var(--transition-speed) ease',
            },
            '&:hover': {
              transform: 'rotate(15deg)',
              '&::before': {
                transform: 'scale(1)',
              },
            },
            ...props.sx
          }}
        >
          <PaletteIcon
            sx={{
              transition: 'color var(--transition-speed) ease',
              animation: 'colorShift 3s infinite alternate',
              '@keyframes colorShift': {
                '0%': {
                  color: 'var(--color-primary)',
                },
                '33%': {
                  color: 'var(--color-secondary)',
                },
                '66%': {
                  color: 'var(--color-accent)',
                },
                '100%': {
                  color: 'var(--color-primary)',
                },
              },
            }}
          />
        </IconButton>
      </Tooltip>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 400 },
            maxWidth: '100%',
            bgcolor: 'var(--color-paper)',
            color: 'var(--color-text-primary)',
            borderRadius: { xs: 0, sm: '16px 0 0 16px' },
            boxShadow: '0 0 24px rgba(0, 0, 0, 0.2)',
            borderLeft: '1px solid',
            borderColor: 'divider',
            transition: 'all var(--transition-speed) ease',
          }
        }}
      >
        <ThemeDrawerContent onClose={handleCloseDrawer} />
      </Drawer>
    </>
  );
} 