'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Divider, 
  Grid,
  Paper,
  Card,
  CardContent,
  Slider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Button,
  Tabs,
  Tab,
  useTheme as useMuiTheme,
  Tooltip,
  Select,
  MenuItem,
  InputLabel,
  alpha
} from '@mui/material';
import { 
  Close as CloseIcon,
  Palette as PaletteIcon,
  FormatSize as FormatSizeIcon,
  Straighten as StraightenIcon,
  Animation as AnimationIcon,
  Check as CheckIcon,
  Refresh as RefreshIcon,
  Accessibility as AccessibilityIcon,
  FormatBold as FormatBoldIcon
} from '@mui/icons-material';
import { useTheme } from '@/styles/themes/ThemeProvider';
import { ColorScheme } from '@/styles/themes/colorSchemes';
import type { ThemeSettings } from '@/styles/themes/ThemeProvider';
import { getColorSchemes } from '@/styles/themes/colorSchemes';

// 标签面板接口
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// 标签面板组件
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`theme-tabpanel-${index}`}
      aria-labelledby={`theme-tab-${index}`}
      style={{ height: '100%', overflow: 'auto' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, height: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
};

// 字体预览组件
const FontPreview: React.FC<{
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
}> = ({ fontFamily, fontSize, fontWeight }) => {
  return (
    <Card variant="outlined" sx={{ mb: 3, overflow: 'hidden' }}>
      <CardContent>
        <Typography variant="overline" display="block" color="text.secondary" gutterBottom>
          字体预览 (Font Preview)
        </Typography>
        
        <Typography 
          sx={{ 
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
            mb: 1,
          }}
        >
          Homunculus 数据驱动交易系统
        </Typography>
        
        <Box sx={{ 
          p: 1, 
          borderRadius: 1, 
          bgcolor: 'background.default',
          fontSize: Math.max(12, fontSize - 2),
          fontFamily: fontFamily,
          fontWeight: fontWeight,
        }}>
          <Box component="span" sx={{ fontWeight: fontWeight + 100 }}>ABCDEFGabcdefg</Box> 1234567890
          <Divider sx={{ my: 0.5 }} />
          你好，世界！交易数据分析
        </Box>
      </CardContent>
    </Card>
  );
};

// 将设置应用到文档
const applySettingsToTheme = (settings: ThemeSettings) => {
  if (typeof window !== 'undefined' && document) {
    // 应用字体设置
    document.documentElement.style.setProperty(
      '--font-family',
      settings.fontFamily
    );
    document.documentElement.style.setProperty(
      '--font-size-base',
      `${settings.fontSize}px`
    );
    document.documentElement.style.setProperty(
      '--font-weight-normal',
      settings.fontWeight.toString()
    );
    
    // 应用圆角设置
    document.documentElement.style.setProperty(
      '--border-radius',
      `${settings.borderRadius}px`
    );
    
    // 应用动画设置
    document.documentElement.style.setProperty(
      '--transition-speed',
      settings.animations ? '0.3s' : '0s'
    );
    
    // 应用对比度设置
    if (settings.contrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // 应用密度设置
    document.documentElement.setAttribute('data-density', settings.density);
    
    // 保存设置到localStorage
    localStorage.setItem('theme-settings', JSON.stringify(settings));
  }
};

// 主题设置类型
interface ThemeSettings {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  borderRadius: number;
  animations: boolean;
  contrast: 'normal' | 'high';
  density: 'compact' | 'normal' | 'comfortable';
}

// 默认设置
const defaultSettings: ThemeSettings = {
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 400,
  borderRadius: 8,
  animations: true,
  contrast: 'normal',
  density: 'normal',
};

// 可选字体
const fontOptions = [
  { value: 'Roboto', label: 'Roboto (默认)' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Noto Sans SC', label: 'Noto Sans SC (中文)' },
];

interface ThemeDrawerContentProps {
  onClose: () => void;
}

const ThemeDrawerContent: React.FC<ThemeDrawerContentProps> = ({ onClose }) => {
  // 使用主题
  const muiTheme = useMuiTheme();
  const { currentScheme, setColorScheme, availableSchemes, applyThemeSettings, currentSettings } = useTheme();
  
  // 设置状态
  const [settings, setSettings] = useState<ThemeSettings>(currentSettings);
  
  // 标签状态
  const [tabValue, setTabValue] = useState(0);
  
  // 应用状态
  const [isApplied, setIsApplied] = useState(false);
  
  // 处理标签切换
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // 处理滑块变化
  const handleSliderChange = (name: keyof ThemeSettings) => (_: Event, value: number | number[]) => {
    setSettings(prev => ({
      ...prev,
      [name]: value as number,
    }));
    setIsApplied(false);
  };
  
  // 处理开关变化
  const handleSwitchChange = (name: keyof ThemeSettings) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      [name]: event.target.checked,
    }));
    setIsApplied(false);
  };
  
  // 处理单选按钮变化
  const handleRadioChange = (name: keyof ThemeSettings) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
    setIsApplied(false);
  };
  
  // 应用设置
  const handleApplySettings = () => {
    applyThemeSettings(settings);
    setIsApplied(true);
    
    // 1.5秒后重置应用状态
    setTimeout(() => {
      setIsApplied(false);
    }, 1500);
  };
  
  // 重置设置
  const handleResetSettings = () => {
    setSettings(defaultSettings);
    setIsApplied(false);
  };
  
  // 处理配色方案选择
  const handleSchemeSelect = (schemeId: string) => {
    setColorScheme(schemeId);
  };
  
  // 加载保存的设置
  useEffect(() => {
    setSettings(currentSettings);
  }, [currentSettings]);
  
  // 加载Google字体
  useEffect(() => {
    if (typeof window !== 'undefined' && 'document' in window) {
      // 检查是否已加载
      const fontLink = document.getElementById('google-fonts');
      if (fontLink) {
        return; // 已加载
      }
      
      const link = document.createElement('link');
      link.id = 'google-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap';
      
      document.head.appendChild(link);
    }
  }, []);
  
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      bgcolor: 'background.default',
    }}>
      {/* 头部 */}
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: 1, 
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}>
        <Typography variant="h6" fontWeight="bold">
          主题设置
          <Typography variant="caption" sx={{ ml: 1, opacity: 0.6 }}>
            (Theme Settings)
          </Typography>
        </Typography>
        <IconButton onClick={onClose} size="small" color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      
      {/* 标签栏 */}
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider', 
        bgcolor: 'background.paper',
      }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab 
            icon={<PaletteIcon />} 
            label="配色方案 (Colors)" 
            id="theme-tab-0"
            aria-controls="theme-tabpanel-0"
          />
          <Tab 
            icon={<FormatSizeIcon />} 
            label="字体 (Fonts)" 
            id="theme-tab-1"
            aria-controls="theme-tabpanel-1"
          />
          <Tab 
            icon={<StraightenIcon />} 
            label="界面 (UI)" 
            id="theme-tab-2"
            aria-controls="theme-tabpanel-2"
          />
        </Tabs>
      </Box>
      
      {/* 内容区 */}
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        {/* 配色方案面板 */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            当前选择: {currentScheme.name}
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {availableSchemes.map((scheme: ColorScheme) => {
              const colors = Object.values(scheme.colors).map(c => c.hex).slice(0, 5);
              const isSelected = currentScheme.id === scheme.id;
              
              return (
                <Grid item xs={12} sm={6} key={scheme.id}>
                  <Tooltip title={scheme.name} arrow>
                    <Paper 
                      elevation={isSelected ? 5 : 1}
                      sx={{ 
                        p: 2, 
                        cursor: 'pointer',
                        border: isSelected ? '2px solid' : '2px solid transparent',
                        borderColor: 'primary.main',
                        position: 'relative',
                        transition: 'all 0.2s ease',
                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                        '&:hover': {
                          boxShadow: muiTheme.shadows[5],
                          transform: 'translateY(-4px)',
                        }
                      }}
                      onClick={() => handleSchemeSelect(scheme.id)}
                    >
                      {/* 选中标记 */}
                      {isSelected && (
                        <Box sx={{ 
                          position: 'absolute', 
                          top: -10, 
                          right: -10, 
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 2,
                          zIndex: 1,
                        }}>
                          <CheckIcon fontSize="small" />
                        </Box>
                      )}
                      
                      {/* 颜色预览 */}
                      <Box sx={{ mb: 1.5 }}>
                        <Box sx={{ 
                          position: 'relative', 
                          height: 40, 
                          borderRadius: 1,
                          overflow: 'hidden',
                          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                        }}>
                          {colors.map((color, index) => (
                            <Box 
                              key={index}
                              sx={{ 
                                position: 'absolute',
                                width: `${100 / colors.length}%`,
                                height: '100%',
                                left: `${(index * 100) / colors.length}%`,
                                bgcolor: color,
                              }} 
                            />
                          ))}
                        </Box>
                      </Box>
                      
                      {/* 方案名称和描述 */}
                      <Typography variant="subtitle2" fontWeight={isSelected ? 'bold' : 'medium'}>
                        {scheme.name}
                      </Typography>
                      
                      <Typography 
                        variant="caption" 
                        color="text.secondary"
                        sx={{ 
                          display: 'block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          mt: 0.5,
                        }}
                      >
                        {scheme.description}
                      </Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        
        {/* 字体面板 */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 4 }}>
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              字体大小 (Font Size): {settings.fontSize}px
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="caption" sx={{ mr: 1 }}>小</Typography>
              <Slider
                value={settings.fontSize}
                onChange={handleSliderChange('fontSize')}
                min={12}
                max={20}
                step={1}
                marks
                valueLabelDisplay="auto"
                sx={{ mx: 1 }}
              />
              <Typography variant="caption" sx={{ ml: 1 }}>大</Typography>
            </Box>
            
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              字体粗细 (Font Weight): {settings.fontWeight}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography variant="caption" sx={{ mr: 1 }}>细</Typography>
              <Slider
                value={settings.fontWeight}
                onChange={handleSliderChange('fontWeight')}
                min={300}
                max={700}
                step={100}
                marks
                valueLabelDisplay="auto"
                sx={{ mx: 1 }}
              />
              <Typography variant="caption" sx={{ ml: 1 }}>粗</Typography>
            </Box>
            
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              字体类型 (Font Family)
            </Typography>
            <FormControl component="fieldset" fullWidth sx={{ mb: 2 }}>
              <RadioGroup 
                value={settings.fontFamily}
                onChange={handleRadioChange('fontFamily')}
              >
                <Grid container spacing={1}>
                  {fontOptions.map((option) => (
                    <Grid item xs={12} sm={6} key={option.value}>
                      <FormControlLabel 
                        value={option.value} 
                        control={<Radio size="small" />} 
                        label={
                          <Typography 
                            variant="body2" 
                            sx={{ fontFamily: option.value }}
                          >
                            {option.label}
                          </Typography>
                        } 
                      />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
            
            {/* 字体预览 */}
            <FontPreview 
              fontFamily={settings.fontFamily}
              fontSize={settings.fontSize}
              fontWeight={settings.fontWeight}
            />
          </Box>
        </TabPanel>
        
        {/* 界面面板 */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            {/* 圆角设置 */}
            <Grid item xs={12}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StraightenIcon fontSize="small" sx={{ mr: 1, opacity: 0.7 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    圆角大小 (Border Radius): {settings.borderRadius}px
                  </Typography>
                </Box>
                
                <Box sx={{ px: 2 }}>
                  <Slider
                    value={settings.borderRadius}
                    onChange={handleSliderChange('borderRadius')}
                    min={0}
                    max={24}
                    step={2}
                    marks
                    valueLabelDisplay="auto"
                  />
                  
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    mt: 2,
                    mb: 3,
                  }}>
                    <Paper 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="caption">0px</Typography>
                    </Paper>
                    
                    <Paper 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: `${settings.borderRadius}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="caption">{settings.borderRadius}px</Typography>
                    </Paper>
                    
                    <Paper 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="caption">圆形</Typography>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            {/* 动画设置 */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AnimationIcon fontSize="small" sx={{ mr: 1, opacity: 0.7 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    动画效果 (Animations)
                  </Typography>
                </Box>
                
                <FormControlLabel
                  control={
                    <Switch 
                      checked={settings.animations} 
                      onChange={handleSwitchChange('animations')}
                    />
                  }
                  label={settings.animations ? "开启" : "关闭"}
                />
              </Box>
            </Grid>
            
            {/* 无障碍设置 */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AccessibilityIcon fontSize="small" sx={{ mr: 1, opacity: 0.7 }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    对比度 (Contrast)
                  </Typography>
                </Box>
                
                <RadioGroup 
                  row
                  value={settings.contrast}
                  onChange={handleRadioChange('contrast')}
                >
                  <FormControlLabel value="normal" control={<Radio size="small" />} label="标准" />
                  <FormControlLabel value="high" control={<Radio size="small" />} label="高对比度" />
                </RadioGroup>
              </Box>
            </Grid>
            
            {/* 密度设置 */}
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  界面密度 (UI Density)
                </Typography>
                
                <RadioGroup 
                  value={settings.density}
                  onChange={handleRadioChange('density')}
                  row
                >
                  <FormControlLabel 
                    value="compact" 
                    control={<Radio size="small" />} 
                    label="紧凑 (Compact)" 
                  />
                  <FormControlLabel 
                    value="normal" 
                    control={<Radio size="small" />} 
                    label="标准 (Normal)" 
                  />
                  <FormControlLabel 
                    value="comfortable" 
                    control={<Radio size="small" />} 
                    label="宽松 (Comfortable)" 
                  />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
      
      {/* 底部按钮组 */}
      <Box sx={{ 
        p: 2, 
        borderTop: 1, 
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button 
          startIcon={<RefreshIcon />}
          onClick={handleResetSettings}
          color="inherit"
          variant="outlined"
          size="small"
        >
          重置 (Reset)
        </Button>
        
        <Button 
          variant="contained" 
          color={isApplied ? "success" : "primary"}
          onClick={handleApplySettings}
          startIcon={isApplied ? <CheckIcon /> : undefined}
          disabled={isApplied}
        >
          {isApplied ? "已应用 (Applied)" : "应用设置 (Apply)"}
        </Button>
      </Box>
    </Box>
  );
};

export default ThemeDrawerContent; 