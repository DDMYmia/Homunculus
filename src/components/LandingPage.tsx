'use client';

import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Fade,
  Badge,
  Chip,
  Divider
} from '@mui/material';
import { 
  BarChart as BarChartIcon, 
  ShowChart as ShowChartIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
  Menu as MenuIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
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
  let buttonGradient = 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
  let buttonHoverGradient = 'linear-gradient(45deg, #1976D2 30%, #00B0FF 90%)';
  let heroGradient = 'radial-gradient(circle at 50% 50%, #303f9f 0%, #1a237e 50%, #121212 100%)';
  
  // 深海晨光配色
  if (colorScheme === 'deepOcean') {
    primaryColor = '#2c698d';
    secondaryColor = '#bae8e8';
    accentColor = '#3a8daa';
    backgroundColor = '#272643';
    paperColor = '#1e1e38';
    textPrimaryColor = '#ffffff';
    textSecondaryColor = 'rgba(255, 255, 255, 0.7)';
    buttonGradient = 'linear-gradient(45deg, #2c698d 30%, #bae8e8 90%)';
    buttonHoverGradient = 'linear-gradient(45deg, #1e4b6d 30%, #8cd7d7 90%)';
    heroGradient = 'radial-gradient(circle at 50% 50%, #272643 0%, #1e1e38 50%, #121212 100%)';
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
    buttonGradient = 'linear-gradient(45deg, #656D4A 30%, #A4AC86 90%)';
    buttonHoverGradient = 'linear-gradient(45deg, #414833 30%, #656D4A 90%)';
    heroGradient = 'radial-gradient(circle at 50% 50%, #414833 0%, #333D29 50%, #582F0E 100%)';
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
    buttonGradient = 'linear-gradient(45deg, #EE9B00 30%, #CA6702 90%)';
    buttonHoverGradient = 'linear-gradient(45deg, #CA6702 30%, #BB3E03 90%)';
    heroGradient = 'radial-gradient(circle at 50% 50%, #005F73 0%, #001219 50%, #9B2226 100%)';
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
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: '1.1rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 24px',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::after': {
              opacity: 1,
            },
          },
          containedPrimary: {
            background: buttonGradient,
            boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
            '&:hover': {
              background: buttonHoverGradient,
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px 0 rgba(0, 118, 255, 0.5)',
            },
          },
          outlinedPrimary: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px 0 rgba(0, 118, 255, 0.2)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            },
          },
        },
      },
    },
    // 添加自定义属性
    customProps: {
      heroGradient: heroGradient,
      buttonGradient: buttonGradient,
      buttonHoverGradient: buttonHoverGradient,
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

// 特点数据
const getFeatures = (t: Translations) => [
  {
    title: t.featureIntegration.title,
    description: t.featureIntegration.description,
    icon: <StorageIcon sx={{ fontSize: 60 }} />,
    color: '#2196f3',
  },
  {
    title: t.featureAnalysis.title,
    description: t.featureAnalysis.description,
    icon: <BarChartIcon sx={{ fontSize: 60 }} />,
    color: '#ff9800',
  },
  {
    title: t.featureVisualization.title,
    description: t.featureVisualization.description,
    icon: <ShowChartIcon sx={{ fontSize: 60 }} />,
    color: '#4caf50',
  },
  {
    title: t.featureJournal.title,
    description: t.featureJournal.description,
    icon: <TimelineIcon sx={{ fontSize: 60 }} />,
    color: '#f44336',
  },
];

export default function LandingPage() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('default');
  const [language, setLanguage] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuAnchor, setThemeMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);
  
  // 获取翻译
  const t = getTranslations(language);
  // 获取配色方案名称
  const colorSchemeNames = getColorSchemeNames(t);
  // 获取特点数据
  const features = getFeatures(t);
  
  const theme = getTheme(colorScheme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const themeMenuOpen = Boolean(themeMenuAnchor);
  const languageMenuOpen = Boolean(languageMenuAnchor);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // 滚动到下一部分
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 获取自定义属性
  const customProps = theme.customProps as any;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: 'background.default', 
        color: 'text.primary',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}>
        {/* 导航栏 */}
        <AppBar 
          position="fixed" 
          color={scrolled ? 'primary' : 'transparent'} 
          elevation={scrolled ? 4 : 0}
          sx={{ 
            transition: 'all 0.3s ease',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            backgroundColor: scrolled 
              ? 'rgba(30, 30, 30, 0.8)'
              : 'transparent'
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t.appName}
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
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
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
            
            {/* 进入应用按钮 */}
            <Button 
              color="inherit" 
              component={Link} 
              href="/dashboard"
              variant="outlined"
              sx={{ 
                ml: 2,
                borderRadius: '20px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              {t.enterApp}
            </Button>
          </Toolbar>
        </AppBar>

        {/* 英雄区 */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            backgroundImage: customProps.heroGradient,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                mb: 2,
                background: customProps.buttonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(144, 202, 249, 0.5)',
              }}
            >
              {t.heroTitle}
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                mb: 4,
                color: '#fff',
              }}
            >
              {t.heroSubtitle}
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 6, 
                maxWidth: '800px', 
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {t.heroDescription}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                component={Link}
                href="/dashboard"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: customProps.buttonGradient,
                  '&:hover': {
                    background: customProps.buttonHoverGradient,
                  }
                }}
              >
                {t.getStarted}
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  }
                }}
                onClick={scrollToFeatures}
              >
                {t.learnMore}
              </Button>
            </Box>
          </Container>
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 30, 
              left: '50%', 
              transform: 'translateX(-50%)',
              animation: 'bounce 2s infinite',
              zIndex: 2,
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0) translateX(-50%)',
                },
                '40%': {
                  transform: 'translateY(-20px) translateX(-50%)',
                },
                '60%': {
                  transform: 'translateY(-10px) translateX(-50%)',
                },
              },
            }}
          >
            <IconButton 
              color="inherit" 
              onClick={scrollToFeatures}
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* 特点区域 */}
        <Box 
          id="features" 
          sx={{ 
            py: 10, 
            px: 2,
            background: 'linear-gradient(180deg, #121212 0%, #1e1e1e 100%)',
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              sx={{ 
                mb: 2,
                background: customProps.buttonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.featuresTitle}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
            >
              {t.featuresSubtitle}
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    <Box 
                      sx={{ 
                        p: 3, 
                        display: 'flex', 
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${feature.color}40 0%, ${feature.color}20 100%)`,
                      }}
                    >
                      <Box sx={{ 
                        color: feature.color,
                        transform: 'scale(1)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        }
                      }}>
                        {feature.icon}
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3" align="center">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* 关于我们 */}
        <Box 
          sx={{ 
            py: 10, 
            px: 2,
            background: 'linear-gradient(180deg, #1e1e1e 0%, #121212 100%)',
          }}
        >
          <Container maxWidth="md">
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              sx={{ 
                mb: 2,
                background: customProps.buttonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.aboutTitle}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              {t.aboutSubtitle}
            </Typography>
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 4, 
                backgroundColor: 'background.paper',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography paragraph>
                {t.aboutContent1}
              </Typography>
              <Typography paragraph>
                {t.aboutContent2}
              </Typography>
              <Typography>
                {t.aboutContent3}
              </Typography>
            </Box>
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                size="large"
                component={Link}
                href="/dashboard"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: customProps.buttonGradient,
                  '&:hover': {
                    background: customProps.buttonHoverGradient,
                  }
                }}
              >
                {t.tryNow}
              </Button>
            </Box>
          </Container>
        </Box>

        {/* 页脚 */}
        <Box 
          sx={{ 
            py: 4, 
            bgcolor: '#0a0a0a',
            color: 'text.secondary',
          }}
        >
          <Container>
            <Typography variant="body2" align="center">
              {t.footerText}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
} 