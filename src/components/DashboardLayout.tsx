'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
import PaletteIcon from '@mui/icons-material/Palette';
import LanguageIcon from '@mui/icons-material/Language';
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
import { Language, Translations, getTranslations } from '../utils/i18n';

// 配色方案类型
type ColorScheme = 'default' | 'deepOcean' | 'earthForest' | 'earth';

// 版本信息
const VERSION = '0.1.0';

// 创建主题
const getTheme = (colorScheme: ColorScheme = 'default') => {
  // 默认配色
  let primaryColor = '#1976d2';
  let secondaryColor = '#90caf9';
  let accentColor = '#2196F3';
  let backgroundColor = '#121212';
  let paperColor = '#1e1e1e';
  let textPrimaryColor = '#ffffff';
  let textSecondaryColor = 'rgba(255, 255, 255, 0.7)';
  
  // 深海晨光配色
  if (colorScheme === 'deepOcean') {
    primaryColor = '#2c698d';
    secondaryColor = '#bae8e8';
    accentColor = '#3a8daa';
    backgroundColor = '#272643';
    paperColor = '#1e1e38';
    textPrimaryColor = '#ffffff';
    textSecondaryColor = 'rgba(255, 255, 255, 0.7)';
  }
  
  // 大地森林配色
  else if (colorScheme === 'earthForest') {
    primaryColor = '#656D4A';
    secondaryColor = '#A4AC86';
    accentColor = '#7F4F24';
    backgroundColor = '#333D29';
    paperColor = '#414833';
    textPrimaryColor = '#ffffff';
    textSecondaryColor = 'rgba(255, 255, 255, 0.7)';
  }
  
  // 大地配色
  else if (colorScheme === 'earth') {
    primaryColor = '#005F73';
    secondaryColor = '#0A9396';
    accentColor = '#EE9B00';
    backgroundColor = '#001219';
    paperColor = '#005F73';
    textPrimaryColor = '#ffffff';
    textSecondaryColor = 'rgba(255, 255, 255, 0.7)';
  }

  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primaryColor,
        light: secondaryColor,
        dark: accentColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: backgroundColor,
        paper: paperColor,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
      },
    },
  });
};

// 配色方案名称映射
const getColorSchemeNames = (t: Translations) => ({
  default: t.colorSchemes.default,
  deepOcean: t.colorSchemes.deepOcean,
  earthForest: t.colorSchemes.earthForest,
  earth: t.colorSchemes.earth,
});

// 获取导航菜单
const getNavigation = (t: Translations) => [
  { kind: 'header', title: t.mainFeatures },
  { segment: 'dashboard', title: t.dashboard, icon: <DashboardIcon /> },
  { segment: 'trades', title: t.trades, icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: t.dataAnalysis },
  {
    segment: 'analytics',
    title: t.dataAnalysis,
    icon: <BarChartIcon />,
    children: [
      { segment: 'profit-loss', title: t.profitLossAnalysis, icon: <DescriptionIcon /> },
      { segment: 'win-rate', title: t.winRateAnalysis, icon: <DescriptionIcon /> },
      { segment: 'max-drawdown', title: t.maxDrawdown, icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'journal', title: t.tradeJournal, icon: <LayersIcon /> },
  { segment: 'financial-reports', title: t.financialReports, icon: <LayersIcon /> },
  { segment: 'user-center', title: t.userCenter, icon: <AccountCircleIcon /> },
];

const drawerWidth = 240;

export default function DashboardLayoutBasic() {
  const [open, setOpen] = React.useState(true);
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('default');
  const [language, setLanguage] = React.useState<Language>('en');
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const [themeMenuAnchor, setThemeMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);

  // 获取翻译
  const t = getTranslations(language);
  // 获取配色方案名称
  const colorSchemeNames = getColorSchemeNames(t);
  // 获取导航菜单
  const NAVIGATION = getNavigation(t);
  
  const theme = getTheme(colorScheme);
  const themeMenuOpen = Boolean(themeMenuAnchor);
  const languageMenuOpen = Boolean(languageMenuAnchor);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // 打开主题菜单
  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setThemeMenuAnchor(event.currentTarget);
  };

  // 关闭主题菜单
  const handleThemeMenuClose = () => {
    setThemeMenuAnchor(null);
  };

  // 选择配色方案
  const handleThemeSelect = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    handleThemeMenuClose();
  };
  
  // 打开语言菜单
  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  // 关闭语言菜单
  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  // 选择语言
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  const handleSubMenuClick = (segment: string) => {
    setOpenSubMenu(openSubMenu === segment ? null : segment);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* 顶部导航栏 */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            width: '100%',
            transition: (theme) =>
              theme.transitions.create(['margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {t.appName} | {language === 'en' ? 'Cryptocurrency Trading Analytics Platform' : '加密货币交易分析平台'}
            </Typography>
            
            {/* 版本号显示 */}
            <Tooltip 
              title={
                <Box sx={{ p: 1 }}>
                  <Typography variant="subtitle2" gutterBottom>{t.version} {VERSION} {t.versionFeatures[0].includes('新增') ? '更新内容：' : 'Updates:'}</Typography>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {t.versionFeatures.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body2">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              } 
              arrow
              placement="bottom-end"
            >
              <Chip
                label={`v${VERSION}`}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ 
                  mr: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  }
                }}
              />
            </Tooltip>
            
            {/* 语言选择按钮 */}
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
            
            {/* 主题设置按钮 */}
            <Tooltip title={t.themeSettings} arrow>
              <IconButton 
                onClick={handleThemeMenuOpen}
                color="inherit"
                aria-controls={themeMenuOpen ? 'theme-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={themeMenuOpen ? 'true' : undefined}
              >
                <PaletteIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="theme-menu"
              anchorEl={themeMenuAnchor}
              open={themeMenuOpen}
              onClose={handleThemeMenuClose}
              TransitionComponent={Fade}
              MenuListProps={{
                'aria-labelledby': 'theme-button',
              }}
              PaperProps={{
                sx: {
                  width: 240,
                  maxHeight: 400,
                }
              }}
            >
              {(Object.keys(colorSchemeNames) as ColorScheme[]).map((scheme) => (
                <MenuItem 
                  key={scheme} 
                  onClick={() => handleThemeSelect(scheme)}
                  selected={colorScheme === scheme}
                  sx={{
                    borderLeft: colorScheme === scheme
                      ? `4px solid ${theme.palette.primary.main}` 
                      : '4px solid transparent',
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 16, 
                      height: 16, 
                      borderRadius: '50%', 
                      mr: 1,
                      background: scheme === 'default' 
                        ? '#1976d2' 
                        : scheme === 'deepOcean' 
                          ? '#2c698d' 
                          : scheme === 'earthForest' 
                            ? '#656D4A' 
                            : '#005F73',
                      border: '2px solid #333',
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.1)'
                    }} 
                  />
                  {colorSchemeNames[scheme]}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>

        {/* 侧边栏 */}
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
              boxSizing: 'border-box',
              marginTop: 0,
              height: 'calc(100% - 64px)',
              top: 64,
            },
          }}
        >
          <List sx={{ mt: 1 }}>
            {NAVIGATION.map((item, index) => {
              // 分隔线
              if (item.kind === 'divider') return <Divider key={index} />;
              
              // 标题
              if (item.kind === 'header') return (
                <ListItem key={index} sx={{ display: open ? 'block' : 'none' }}>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ fontWeight: 'bold', ml: 2 }}
                  >
                    {item.title}
                  </Typography>
                </ListItem>
              );
              
              // 有子菜单的项目
              if (item.children) {
                const isSubMenuOpen = openSubMenu === item.segment;
                return (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleSubMenuClick(item.segment)}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.title} 
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                        {open && (isSubMenuOpen ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={open && isSubMenuOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child, childIndex) => (
                          <ListItemButton
                            key={childIndex}
                            sx={{ pl: 4 }}
                          >
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText primary={child.title} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }
              
              // 普通菜单项
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.title} 
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>

        {/* 主内容区域 */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* 这个空的 Toolbar 用于在顶部 AppBar 下方创建空间 */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              {t.home}
            </Link>
            <Typography color="text.primary">{t.dashboard}</Typography>
          </Breadcrumbs>
          
          {/* 仪表盘内容 */}
          <Grid container spacing={2}>
            {/* 顶部卡片 */}
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ height: 100, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6">{t.totalAssets}</Typography>
                <Typography variant="h4">$12,345.67</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ height: 100, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6">{t.todayProfitLoss}</Typography>
                <Typography variant="h4" color="success.main">+$123.45</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ height: 100, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6">{t.totalTrades}</Typography>
                <Typography variant="h4">1,234</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box sx={{ height: 100, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6">{t.winRate}</Typography>
                <Typography variant="h4">65.4%</Typography>
              </Box>
            </Grid>
            
            {/* 图表区域 */}
            <Grid item xs={12} lg={8}>
              <Box sx={{ height: 350, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6" gutterBottom>{t.profitTrend}</Typography>
                <Box sx={{ height: 300, bgcolor: 'action.hover', borderRadius: 1 }} />
              </Box>
            </Grid>
            
            {/* 侧边信息 */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ height: 350, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6" gutterBottom>{t.recentTrades}</Typography>
                <Box sx={{ height: 300, bgcolor: 'action.hover', borderRadius: 1 }} />
              </Box>
            </Grid>
            
            {/* 底部区域 */}
            <Grid item xs={12}>
              <Box sx={{ height: 200, bgcolor: 'background.paper', borderRadius: 1, p: 2, boxShadow: 1 }}>
                <Typography variant="h6" gutterBottom>{t.tradeDistribution}</Typography>
                <Box sx={{ height: 150, bgcolor: 'action.hover', borderRadius: 1 }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
} 