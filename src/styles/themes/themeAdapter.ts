/**
 * 主题适配器
 * 
 * 此文件提供了新旧主题系统之间的兼容性映射函数，确保旧组件可以使用新的主题系统。
 */

// 旧的颜色方案类型
export type LegacyColorScheme = 'default' | 'deepOcean' | 'earthForest' | 'earth';

/**
 * 映射新的主题ID到旧的色彩方案
 * 
 * @param themeId 新主题ID
 * @returns 对应的旧色彩方案
 */
export function mapNewSchemeToLegacy(themeId: string): LegacyColorScheme {
  const mapping: Record<string, LegacyColorScheme> = {
    'grayscale': 'default',
    'neonCyberpunk': 'deepOcean',
    'earthPulse': 'earthForest',
    'primalForest': 'earthForest',
    'estonian': 'earth',
    'byzantine': 'deepOcean',
    'fruitPlatter': 'default',
    'german': 'default',
    'blueOrange': 'earth'
  };
  
  return mapping[themeId] || 'default';
}

/**
 * 映射旧的色彩方案到新主题ID
 * 
 * @param scheme 旧色彩方案
 * @returns 对应的新主题ID
 */
export function mapLegacyToNewScheme(scheme: LegacyColorScheme): string {
  const mapping: Record<LegacyColorScheme, string> = {
    'default': 'grayscale',
    'deepOcean': 'neonCyberpunk',
    'earthForest': 'earthPulse',
    'earth': 'estonian'
  };
  
  return mapping[scheme] || 'grayscale';
}

/**
 * 从CSS变量提取RGB格式
 * 
 * @param variable CSS变量名
 * @returns RGB格式值
 */
export function extractRgbFromCssVar(variable: string): string {
  if (typeof window === 'undefined') return '0, 0, 0';
  
  // 获取计算后的变量值
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  
  // 如果值为hex格式，转换为RGB
  if (value.startsWith('#')) {
    const r = parseInt(value.slice(1, 3), 16);
    const g = parseInt(value.slice(3, 5), 16);
    const b = parseInt(value.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
  
  // 如果值为rgb或rgba格式，提取RGB部分
  const rgbMatch = value.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(',').map(part => part.trim());
    return parts.slice(0, 3).join(', ');
  }
  
  // 默认返回黑色
  return '0, 0, 0';
}

/**
 * 从十六进制颜色值获取RGB值
 * 
 * @param hex 十六进制颜色值
 * @returns RGB颜色值对象
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // 去除#前缀，并处理简写形式(#RGB -> #RRGGBB)
  const normalizedHex = hex.replace('#', '');
  let r, g, b;
  
  if (normalizedHex.length === 3) {
    r = parseInt(normalizedHex.charAt(0) + normalizedHex.charAt(0), 16);
    g = parseInt(normalizedHex.charAt(1) + normalizedHex.charAt(1), 16);
    b = parseInt(normalizedHex.charAt(2) + normalizedHex.charAt(2), 16);
  } else if (normalizedHex.length === 6) {
    r = parseInt(normalizedHex.substring(0, 2), 16);
    g = parseInt(normalizedHex.substring(2, 4), 16);
    b = parseInt(normalizedHex.substring(4, 6), 16);
  } else {
    return null;
  }
  
  return { r, g, b };
}

/**
 * 从RGB值生成十六进制颜色值
 * 
 * @param r 红色通道
 * @param g 绿色通道
 * @param b 蓝色通道
 * @returns 十六进制颜色值
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * 生成彩色渐变背景
 * 
 * @param primary 主色
 * @param secondary 次色
 * @param angle 角度
 * @returns CSS渐变字符串
 */
export function generateGradient(primary: string, secondary: string, angle: number = 45): string {
  return `linear-gradient(${angle}deg, ${primary} 30%, ${secondary} 90%)`;
}

/**
 * 从主要颜色生成辅助颜色
 * 
 * @param primary 主要颜色
 * @param factor 调整因子
 * @returns 辅助颜色
 */
export function generateSecondaryColor(primary: string, factor: number = 0.2): string {
  const rgb = hexToRgb(primary);
  if (!rgb) return '#90caf9';
  
  const { r, g, b } = rgb;
  
  // 在RGB空间中调整颜色
  const adjustedR = Math.min(255, r + (255 - r) * factor);
  const adjustedG = Math.min(255, g + (255 - g) * factor);
  const adjustedB = Math.min(255, b + (255 - b) * factor);
  
  return rgbToHex(Math.round(adjustedR), Math.round(adjustedG), Math.round(adjustedB));
} 