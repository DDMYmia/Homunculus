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
  useTheme as useMuiTheme,
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
  Divider,
  Paper
} from '@mui/material';
import { 
  BarChart as BarChartIcon, 
  ShowChart as ShowChartIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
  Menu as MenuIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Devices as DevicesIcon,
  Computer as ComputerIcon,
  Apple as AppleIcon,
  Android as AndroidIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import Link from 'next/link';
import { Language, Translations, getTranslations } from '../utils/i18n';
import { useTheme as useCustomTheme } from '@/styles/themes/ThemeProvider';
import { mapNewSchemeToLegacy, LegacyColorScheme } from '@/styles/themes/themeAdapter';
import ThemeButton from './ThemeButton';

// 扩展主题类型添加自定义属性
declare module '@mui/material/styles' {
  interface Theme {
    customProps: {
      heroGradient: string;
      buttonGradient: string;
      buttonHoverGradient: string;
    };
  }
  // 允许在 createTheme 中使用自定义配置
  interface ThemeOptions {
    customProps?: {
      heroGradient?: string;
      buttonGradient?: string;
      buttonHoverGradient?: string;
    };
  }
}

// 配色方案类型
type ColorScheme = 'default' | 'deepOcean' | 'earthForest' | 'earth';

// Version information
const VERSION = '0.1.1';

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

  const theme = createTheme({
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
  });

  // 添加自定义属性
  return {
    ...theme,
    customProps: {
      heroGradient,
      buttonGradient,
      buttonHoverGradient,
    }
  };
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

// 添加足部导航链接
const getFooterLinks = (t: Translations) => {
  return [
    {
      title: t.companyTitle || '公司',
      links: [
        { label: t.aboutUs || '关于我们', href: '/about' },
        { label: t.contactUs || '联系方式', href: '/contact' },
        { label: t.newsCenter || '新闻中心', href: '/news' },
        { label: t.careers || '加入我们', href: '/careers' }
      ]
    },
    {
      title: t.productTitle || '产品',
      links: [
        { label: t.changelog || '更新日志', href: '/changelog' },
        { label: t.roadmap || '路线图', href: '/roadmap' },
        { label: t.apiDocs || 'API 文档', href: '/api' },
        { label: t.helpCenter || '帮助中心', href: '/help' }
      ]
    },
    {
      title: t.communityTitle || '社区',
      links: [
        { label: t.community || '社区', href: '/community' },
        { label: t.devForum || '开发者论坛', href: '/forum' },
        { label: t.discord || 'Discord', href: '/discord' },
        { label: t.techBlog || '技术博客', href: '/blog' }
      ]
    },
    {
      title: t.legalTitle || '法律',
      links: [
        { label: t.legal || '法律', href: '/legal' },
        { label: t.terms || '服务条款', href: '/terms' },
        { label: t.privacy || '隐私政策', href: '/privacy' },
        { label: t.disclaimer || '免责声明', href: '/disclaimer' }
      ]
    }
  ];
};

// 添加社交媒体链接
const getSocialLinks = (t: Translations) => {
  return [
    { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
    { label: 'Twitter', icon: <TwitterIcon />, href: '#' },
    { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
    { label: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
    { label: 'YouTube', icon: <YouTubeIcon />, href: '#' }
  ];
};

// 添加功能展示数据
const getShowcaseItems = (t: Translations) => {
  return [
    {
      title: t.showcaseTitle1 || '交易分析功能',
      description: t.showcaseDesc1 || '强大的交易数据分析工具，帮助您洞察市场趋势和模式',
      icon: <BarChartIcon sx={{ fontSize: 60, color: 'primary.main' }} />
    },
    {
      title: t.showcaseTitle2 || '实时数据演示',
      description: t.showcaseDesc2 || '提供实时市场数据，确保您的决策基于最新信息',
      icon: <SpeedIcon sx={{ fontSize: 60, color: 'primary.main' }} />
    },
    {
      title: t.showcaseTitle3 || '用户见证',
      description: t.showcaseDesc3 || '来自全球交易者的真实体验和成功案例分享',
      icon: <DevicesIcon sx={{ fontSize: 60, color: 'primary.main' }} />
    },
    {
      title: t.showcaseTitle4 || '数据安全保障',
      description: t.showcaseDesc4 || '采用最高级别的加密技术，确保您的交易数据安全',
      icon: <SecurityIcon sx={{ fontSize: 60, color: 'primary.main' }} />
    }
  ];
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [themeMenuAnchor, setThemeMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);
  
  // 使用我们的全局主题
  const customTheme = useCustomTheme();
  
  // 映射新主题ID到旧主题类型
  const legacyColorScheme = mapNewSchemeToLegacy(customTheme.currentScheme.id);
  
  // 获取翻译
  const t = getTranslations(language);
  
  // 创建旧版主题
  const theme = createTheme(getTheme(legacyColorScheme));
  
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

  // 选择配色方案 - 现在使用我们的全局主题系统
  const handleThemeSelect = (scheme: LegacyColorScheme) => {
    // 映射旧的配色方案到新的主题ID
    const newThemeId = scheme === 'default' ? 'grayscale' : 
                       scheme === 'deepOcean' ? 'neonCyberpunk' :
                       scheme === 'earthForest' ? 'earthPulse' : 'estonian';
    
    // 使用全局主题的setColorScheme
    customTheme.setColorScheme(newThemeId);
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
  const customProps = theme.customProps;

  // 获取页脚链接
  const footerLinks = getFooterLinks(t);
  const socialLinks = getSocialLinks(t);
  const showcaseItems = getShowcaseItems(t);

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
            <ThemeButton color="inherit" size="large" />
            
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
            background: 'var(--color-hero-gradient)',
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
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#fff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                animation: 'fadeIn 1s ease-out',
              }}
            >
              {t.heroTitle}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                fontWeight: 'normal',
                maxWidth: '800px',
                mx: 'auto',
                animation: 'fadeIn 1s ease-out 0.3s',
                animationFillMode: 'both',
              }}
            >
              {t.heroSubtitle}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: 2,
                animation: 'fadeIn 1s ease-out 0.6s',
                animationFillMode: 'both',
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/dashboard"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  backgroundColor: 'var(--color-primary)',
                  backgroundImage: 'var(--color-button-gradient)',
                  transition: 'all var(--transition-speed) ease',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundImage: 'var(--color-button-hover-gradient)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                {t.getStarted}
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="#features"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderColor: '#fff',
                  color: '#fff',
                  borderWidth: 2,
                  transition: 'all var(--transition-speed) ease',
                  borderRadius: 'var(--border-radius)',
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {t.learnMore}
              </Button>
            </Box>
          </Container>

          {/* 波浪效果 */}
          <Box
            component="svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            sx={{
              position: 'absolute',
              bottom: -1,
              left: 0,
              width: '100%',
              height: '10vw',
              minHeight: '100px',
              zIndex: 1,
              fill: 'var(--color-background)',
            }}
          >
            <path
              d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,202.7C672,181,768,139,864,133.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
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
              {getFeatures(t).map((feature, index) => (
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

        {/* 功能展示 */}
        <Box 
          id="showcase" 
          sx={{ 
            py: 10, 
            px: 2,
            background: 'linear-gradient(180deg, #1e1e1e 0%, #232323 100%)',
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
              {t.showcaseTitle || '功能展示'}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              {t.showcaseSubtitle || '探索 Homunculus 的强大功能和特性'}
            </Typography>

            <Grid container spacing={4}>
              {getShowcaseItems(t).map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={`showcase-${index}`}>
                  <Paper 
                    elevation={4}
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* 应用下载区域(未启用) */}
        <Box 
          sx={{ 
            py: 10, 
            px: 2,
            background: 'linear-gradient(180deg, #232323 0%, #1a1a1a 100%)',
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
              {t.downloadTitle || '下载 Homunculus 应用'}
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              {t.downloadSubtitle || '应用下载功能即将推出，敬请期待。您将能够在各种设备上使用我们的交易分析工具。'}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {/* Windows 客户端 */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <ComputerIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t.windowsClient || 'Windows 客户端'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {t.windowsDesc || '适用于 Windows 10 及以上版本'}
                  </Typography>
                  <Button 
                    variant="contained" 
                    disabled
                    fullWidth
                    sx={{ mt: 'auto' }}
                  >
                    {t.comingSoon || '即将推出'}
                  </Button>
                </Paper>
              </Grid>

              {/* iOS App */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <AppleIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t.iosApp || 'iOS App'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {t.iosDesc || '适用于 iPhone 和 iPad'}
                  </Typography>
                  <Button 
                    variant="contained" 
                    disabled
                    fullWidth
                    sx={{ mt: 'auto' }}
                  >
                    {t.comingToAppStore || '即将上架 App Store'}
                  </Button>
                </Paper>
              </Grid>

              {/* Android App */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <AndroidIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t.androidApp || 'Android App'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {t.androidDesc || '适用于所有 Android 设备'}
                  </Typography>
                  <Button 
                    variant="contained" 
                    disabled
                    fullWidth
                    sx={{ mt: 'auto' }}
                  >
                    {t.comingToGooglePlay || '即将上架 Google Play'}
                  </Button>
                </Paper>
              </Grid>
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

        {/* 增强版页脚 */}
        <Box 
          sx={{ 
            py: 8, 
            px: 2,
            bgcolor: '#0a0a0a',
            color: 'text.secondary',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {footerLinks.map((section, index) => (
                <Grid item xs={12} sm={6} md={3} key={`footer-section-${index}`}>
                  <Typography variant="h6" color="white" gutterBottom>
                    {section.title}
                  </Typography>
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                    {section.links.map((link, linkIndex) => (
                      <Box component="li" key={`footer-link-${linkIndex}`} sx={{ mb: 1 }}>
                        <Link 
                          href={link.href} 
                          style={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            textDecoration: 'none',
                          }}
                          className="footer-link"
                        >
                          {link.label}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* 社交媒体链接 */}
            <Box sx={{ mt: 6, pt: 3, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <Grid container justifyContent="center" spacing={2}>
                {socialLinks.map((social, index) => (
                  <Grid item key={`social-${index}`}>
                    <IconButton 
                      component="a" 
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      sx={{ 
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                {t.footerText}
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
} 