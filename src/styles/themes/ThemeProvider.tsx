'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ColorScheme, defaultColorScheme, getColorSchemeById, colorSchemes } from './colorSchemes';

// Theme context type
interface ThemeContextType {
  currentScheme: ColorScheme;
  setColorScheme: (schemeId: string) => void;
  availableSchemes: ColorScheme[];
  applyThemeSettings: (settings: ThemeSettings) => void;
  currentSettings: ThemeSettings;
}

// 主题设置类型
export interface ThemeSettings {
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

// 将设置应用到文档
const applySettingsToDocument = (settings: ThemeSettings) => {
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

// Create theme context
const ThemeContext = createContext<ThemeContextType>({
  currentScheme: defaultColorScheme,
  setColorScheme: () => {},
  availableSchemes: colorSchemes,
  applyThemeSettings: () => {},
  currentSettings: defaultSettings,
});

// Theme provider properties
interface ThemeProviderProps {
  children: React.ReactNode;
  initialSchemeId?: string;
}

// Create Material UI theme from color scheme
const createMuiTheme = (scheme: ColorScheme, settings: ThemeSettings): Theme => {
  // Extract main colors from the scheme
  const isDark = scheme.id !== 'grayscale' && scheme.id !== 'estonian';
  const primaryColor = Object.values(scheme.colors).find(c => c.usage.includes('Primary accent'))?.hex || '#1976d2';
  const secondaryColor = Object.values(scheme.colors).find(c => c.usage.includes('Secondary accent'))?.hex || '#90caf9';
  const backgroundColor = Object.values(scheme.colors).find(c => c.usage.includes('Primary background'))?.hex || 
    (isDark ? '#121212' : '#F8F9FA');
  const paperColor = Object.values(scheme.colors).find(c => c.usage.includes('Secondary background'))?.hex || 
    (isDark ? '#1e1e1e' : '#E9ECEF');
  const textPrimary = Object.values(scheme.colors).find(c => c.usage.includes('Main text') || c.usage.includes('Primary text'))?.hex || 
    (isDark ? '#ffffff' : '#212529');
  const textSecondary = Object.values(scheme.colors).find(c => c.usage.includes('Secondary text'))?.hex || 
    (isDark ? 'rgba(255, 255, 255, 0.7)' : '#6C757D');

  // 应用设置到CSS变量
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', scheme.id);
    
    // 设置关键颜色变量
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    document.documentElement.style.setProperty('--color-secondary', secondaryColor);
    document.documentElement.style.setProperty('--color-background', backgroundColor);
    document.documentElement.style.setProperty('--color-paper', paperColor);
    document.documentElement.style.setProperty('--color-text-primary', textPrimary);
    document.documentElement.style.setProperty('--color-text-secondary', textSecondary);
  }

  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: backgroundColor,
        paper: paperColor,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
    },
    typography: {
      fontFamily: settings.fontFamily,
      fontSize: settings.fontSize,
    },
    shape: {
      borderRadius: settings.borderRadius,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: settings.borderRadius,
            textTransform: 'none',
            transition: settings.animations ? '0.3s' : '0s',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: settings.borderRadius * 1.5,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: settings.animations ? '0.3s' : '0s',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: settings.animations ? '0.3s' : '0s',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: settings.density === 'compact' ? '6px 16px' :
                    settings.density === 'comfortable' ? '12px 16px' : '8px 16px',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: settings.density === 'compact' ? '48px' :
                     settings.density === 'comfortable' ? '72px' : '64px',
          },
        },
      },
    },
  });
};

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialSchemeId = defaultColorScheme.id 
}) => {
  // State for current color scheme
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(
    getColorSchemeById(initialSchemeId)
  );
  
  // State for theme settings
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);
  
  // State for Material UI theme
  const [theme, setTheme] = useState<Theme>(createMuiTheme(currentScheme, settings));
  
  // Set color scheme by ID
  const setColorScheme = (schemeId: string) => {
    const scheme = getColorSchemeById(schemeId);
    setCurrentScheme(scheme);
    
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredColorScheme', schemeId);
    }
  };
  
  // Apply theme settings
  const applyThemeSettings = (newSettings: ThemeSettings) => {
    setSettings(newSettings);
    applySettingsToDocument(newSettings);
  };
  
  // Effect to load saved preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 加载配色方案偏好
      const savedScheme = localStorage.getItem('preferredColorScheme');
      if (savedScheme) {
        setColorScheme(savedScheme);
      }
      
      // 加载主题设置
      const savedSettings = localStorage.getItem('theme-settings');
      if (savedSettings) {
        try {
          const parsedSettings = JSON.parse(savedSettings) as ThemeSettings;
          setSettings(parsedSettings);
          applySettingsToDocument(parsedSettings);
        } catch (error) {
          console.error('无法解析保存的主题设置:', error);
        }
      } else {
        // 如果没有保存的设置，应用默认设置
        applySettingsToDocument(defaultSettings);
      }
    }
  }, []);
  
  // Effect to update theme when color scheme changes
  useEffect(() => {
    setTheme(createMuiTheme(currentScheme, settings));
  }, [currentScheme, settings]);
  
  // Context value
  const contextValue = {
    currentScheme,
    setColorScheme,
    availableSchemes: colorSchemes,
    applyThemeSettings,
    currentSettings: settings,
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 