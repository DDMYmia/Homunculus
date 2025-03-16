'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import Timeline from '@mui/icons-material/Timeline';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Language, Translations, getTranslations } from '../utils/i18n';
import ThemeButton from './ThemeButton';
import { useTheme as useCustomTheme } from '@/styles/themes/ThemeProvider';

// Version information
const VERSION = '0.1.1';

// Get localized navigation items
const getNavigation = (t: Translations) => [
  { segment: 'dashboard', title: t.dashboard, icon: <DashboardIcon /> },
  { segment: 'portfolio', title: t.portfolio, icon: <ShoppingCartIcon /> },
  { segment: 'analysis', title: t.analysis, icon: <BarChartIcon /> },
  { segment: 'journal', title: t.tradeJournal, icon: <LayersIcon /> },
  { segment: 'financial-reports', title: t.financialReports, icon: <LayersIcon /> },
  { segment: 'user-center', title: t.userCenter, icon: <AccountCircleIcon /> },
];

const drawerWidth = 240;

export default function DashboardLayoutBasic() {
  const [open, setOpen] = React.useState(true);
  const [language, setLanguage] = React.useState<Language>('en');
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);

  // Use global theme
  const { currentScheme } = useCustomTheme();

  // Get translations
  const t = getTranslations(language);
  // Get navigation menu
  const NAVIGATION = getNavigation(t);
  
  const languageMenuOpen = Boolean(languageMenuAnchor);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  // Open language menu
  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  // Close language menu
  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  // Select language
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  // Toggle submenu
  const handleSubMenuToggle = (segment: string) => {
    if (openSubMenu === segment) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(segment);
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      bgcolor: 'var(--color-background)',
      color: 'var(--color-text-primary)',
      transition: 'all var(--transition-speed) ease'
    }}>
      <CssBaseline />
      
      {/* Top app bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: 'width var(--transition-speed) ease, margin var(--transition-speed) ease',
          bgcolor: 'var(--color-paper)',
          backdropFilter: 'blur(8px)',
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: open ? `${drawerWidth}px` : 0,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            
            <Breadcrumbs aria-label="Breadcrumb navigation" sx={{ color: 'var(--color-text-secondary)' }}>
              <Link
                underline="hover"
                color="inherit"
                href="/dashboard"
              >
                {t.dashboard}
              </Link>
              <Typography color="var(--color-text-primary)">{t.overview}</Typography>
            </Breadcrumbs>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip 
              label={`v${VERSION}`}
              size="small"
              variant="outlined"
              sx={{ 
                borderColor: 'var(--color-primary)',
                color: 'var(--color-text-secondary)',
                fontWeight: 'bold',
                mr: 2,
                '&:hover': {
                  borderColor: 'var(--color-primary)',
                  opacity: 0.9
                }
              }}
            />
            
            {/* Language selection button */}
            <Tooltip title={language === 'en' ? '切换语言 (Change Language)' : 'Change Language'} arrow>
              <IconButton
                onClick={handleLanguageMenuOpen}
                color="inherit"
                aria-controls={languageMenuOpen ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={languageMenuOpen ? 'true' : undefined}
                sx={{ mr: 1 }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="language-menu"
              anchorEl={languageMenuAnchor}
              open={languageMenuOpen}
              onClose={handleLanguageMenuClose}
              TransitionComponent={Fade}
              MenuListProps={{
                'aria-labelledby': 'language-button',
              }}
            >
              <MenuItem 
                onClick={() => handleLanguageSelect('en')}
                selected={language === 'en'}
              >
                English
              </MenuItem>
              <MenuItem 
                onClick={() => handleLanguageSelect('zh')}
                selected={language === 'zh'}
              >
                中文
              </MenuItem>
            </Menu>
            
            {/* Theme settings button */}
            <ThemeButton color="inherit" size="medium" />
            
            {/* User avatar */}
            <Tooltip title={t.profile} arrow>
              <IconButton
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 64,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 64,
            transition: (theme) =>
              theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            overflowX: 'hidden',
            backgroundColor: 'var(--color-paper)',
            color: 'var(--color-text-primary)',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
        open={open}
      >
        <Toolbar sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          py: 2
        }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Logo"
            sx={{ 
              height: 40, 
              display: 'block',
              transition: 'all var(--transition-speed) ease',
              filter: 'brightness(0.9) contrast(1.1)'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/40x40?text=H';
            }}
          />
          {open && (
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                ml: 2, 
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'var(--color-primary)'
              }}
            >
              Homunculus
            </Typography>
          )}
        </Toolbar>
        
        <Divider />
        
        <List sx={{ mt: 2 }}>
          {NAVIGATION.map((item) => (
            <ListItem key={item.segment} disablePadding sx={{ display: 'block', mb: 0.5 }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  borderTopRightRadius: '24px',
                  borderBottomRightRadius: '24px',
                  mx: 1,
                  px: 2.5,
                  '&:hover': {
                    bgcolor: 'rgba(var(--color-primary-rgb), 0.1)',
                  },
                  ...(item.segment === 'dashboard' && {
                    bgcolor: 'var(--color-primary)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'var(--color-primary)',
                      opacity: 0.9,
                    },
                  }),
                }}
                onClick={() => handleSubMenuToggle(item.segment)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: item.segment === 'dashboard' ? '#fff' : 'var(--color-primary)',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  sx={{ 
                    opacity: open ? 1 : 0,
                    '& .MuiListItemText-primary': {
                      fontWeight: item.segment === 'dashboard' ? 'bold' : 'normal'
                    }
                  }} 
                />
                {open && item.segment === 'analysis' && (
                  openSubMenu === item.segment ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
              
              {/* Submenu - Analysis */}
              {item.segment === 'analysis' && (
                <Collapse in={openSubMenu === 'analysis' && open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon sx={{ color: 'var(--color-primary)' }}>
                        <BarChartIcon />
                      </ListItemIcon>
                      <ListItemText primary={t.performance} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon sx={{ color: 'var(--color-primary)' }}>
                        <Timeline />
                      </ListItemIcon>
                      <ListItemText primary={t.trends} />
                    </ListItemButton>
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          transition: 'margin var(--transition-speed) ease',
          mt: '64px',
          bgcolor: 'var(--color-background)',
        }}
      >
        {/* Dashboard content */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                borderRadius: 'var(--border-radius)',
                bgcolor: 'var(--color-paper)',
                color: 'var(--color-text-primary)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                {t.welcomeBack}
              </Typography>
              <Typography variant="body1" color="var(--color-text-secondary)">
                {t.welcomeMessage}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button 
                  variant="contained" 
                  sx={{ 
                    mr: 2, 
                    bgcolor: 'var(--color-primary)',
                    '&:hover': {
                      bgcolor: 'var(--color-primary)',
                      opacity: 0.9,
                    }
                  }}
                >
                  {t.newTrade}
                </Button>
                <Button 
                  variant="outlined"
                  sx={{
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                    '&:hover': {
                      borderColor: 'var(--color-primary)',
                      bgcolor: 'rgba(var(--color-primary-rgb), 0.05)',
                    }
                  }}
                >
                  {t.viewReport}
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          {/* Example cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                  borderRadius: 'var(--border-radius)',
                  bgcolor: 'var(--color-paper)',
                  color: 'var(--color-text-primary)',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform var(--transition-speed) ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography 
                    component="h2" 
                    variant="subtitle1"
                    fontWeight="bold"
                    color="var(--color-text-secondary)"
                  >
                    {index === 0 && t.totalValue}
                    {index === 1 && t.profitLoss}
                    {index === 2 && t.winRate}
                    {index === 3 && t.activeTrades}
                  </Typography>
                  <Box 
                    sx={{ 
                      width: 36, 
                      height: 36, 
                      borderRadius: '50%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'var(--color-primary)',
                      opacity: 0.8
                    }}
                  >
                    {index === 0 && <DashboardIcon fontSize="small" sx={{ color: '#fff' }} />}
                    {index === 1 && <BarChartIcon fontSize="small" sx={{ color: '#fff' }} />}
                    {index === 2 && <Timeline fontSize="small" sx={{ color: '#fff' }} />}
                    {index === 3 && <ShoppingCartIcon fontSize="small" sx={{ color: '#fff' }} />}
                  </Box>
                </Box>
                <Typography component="p" variant="h5" fontWeight="bold">
                  {index === 0 && '$87,324.56'}
                  {index === 1 && '+$12,493.82'}
                  {index === 2 && '68.5%'}
                  {index === 3 && '12'}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: index === 1 ? 'success.main' : 'var(--color-text-secondary)',
                      fontWeight: 'medium'
                    }}
                  >
                    {index === 0 && '+2.3% vs last week'}
                    {index === 1 && '+5.7% ($673.12)'}
                    {index === 2 && '+1.2% vs last month'}
                    {index === 3 && '3 pending orders'}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
} 