// 语言类型
export type Language = 'en' | 'zh';

// 翻译内容类型
export interface Translations {
  // 导航栏
  appName: string;
  enterApp: string;
  themeSettings: string;
  
  // 英雄区
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  learnMore: string;
  
  // 特点区域
  featuresTitle: string;
  featuresSubtitle: string;
  featureIntegration: {
    title: string;
    description: string;
  };
  featureAnalysis: {
    title: string;
    description: string;
  };
  featureVisualization: {
    title: string;
    description: string;
  };
  featureJournal: {
    title: string;
    description: string;
  };
  
  // 关于我们
  aboutTitle: string;
  aboutSubtitle: string;
  aboutContent1: string;
  aboutContent2: string;
  aboutContent3: string;
  tryNow: string;
  
  // 页脚
  footerText: string;
  
  // 配色方案
  colorSchemes: {
    default: string;
    deepOcean: string;
    earthForest: string;
    earth: string;
  };
  
  // 版本信息
  version: string;
  versionFeatures: string[];
  
  // 仪表盘
  dashboard: string;
  home: string;
  totalAssets: string;
  todayProfitLoss: string;
  totalTrades: string;
  winRate: string;
  profitTrend: string;
  recentTrades: string;
  tradeDistribution: string;
  
  // 导航菜单
  mainFeatures: string;
  dataAnalysis: string;
  trades: string;
  profitLossAnalysis: string;
  winRateAnalysis: string;
  maxDrawdown: string;
  tradeJournal: string;
  financialReports: string;
  userCenter: string;
}

// 英文翻译
export const en: Translations = {
  // 导航栏
  appName: 'Homunculus',
  enterApp: 'Enter App',
  themeSettings: 'Theme Settings',
  
  // 英雄区
  heroTitle: 'Homunculus',
  heroSubtitle: 'Next-Generation Cryptocurrency Trading Analytics Platform',
  heroDescription: 'Integrate data from multiple exchanges, providing comprehensive trading analysis tools to help you optimize trading strategies and improve profitability. Whether you\'re a beginner or an experienced trader, Homunculus provides data-driven trading insights.',
  getStarted: 'Get Started',
  learnMore: 'Learn More',
  
  // 特点区域
  featuresTitle: 'Platform Features',
  featuresSubtitle: 'Homunculus provides comprehensive trading analysis tools to help you understand your trading performance and optimize your strategies.',
  featureIntegration: {
    title: 'Multi-Exchange Integration',
    description: 'Support for major cryptocurrency exchanges including Binance, OKX, Bybit, Bitget, etc., easily import and synchronize your trading data.',
  },
  featureAnalysis: {
    title: 'Advanced Data Analysis',
    description: 'Gain deep insights into your trading performance through win rate analysis, trade duration analysis, maximum drawdown analysis, and more.',
  },
  featureVisualization: {
    title: 'Elegant Data Visualization',
    description: 'Use professional charting tools to transform complex trading data into intuitive visual presentations.',
  },
  featureJournal: {
    title: 'Detailed Trade Journal',
    description: 'Record detailed information for each trade, supporting rich text notes, tag categorization, and image attachments for review and learning.',
  },
  
  // 关于我们
  aboutTitle: 'About Us',
  aboutSubtitle: 'We are a group of developers passionate about cryptocurrency and data analysis, dedicated to providing traders with the best analytical tools.',
  aboutContent1: 'The core philosophy of the Homunculus platform is "Data-driven trading, insights into market opportunities." We believe that through in-depth analysis of trading data, traders can discover their trading patterns and regularities, thereby optimizing trading strategies and improving profitability.',
  aboutContent2: 'Our platform design focuses on user experience and data visualization, transforming complex trading data into intuitive charts and indicators, helping traders quickly understand their trading performance, identify problems and opportunities.',
  aboutContent3: 'The security design of the platform is noteworthy. We only use read-only API access to exchange data or CSV documents exported from exchanges, ensuring user fund security while providing comprehensive analytical capabilities. We do not sell user data or profit from it in any way.',
  tryNow: 'Try Now',
  
  // 页脚
  footerText: '© 2025 Homunculus.com - Empowering Data-Driven Traders',
  
  // 配色方案
  colorSchemes: {
    default: 'Default Blue',
    deepOcean: 'Deep Ocean Dawn',
    earthForest: 'Earth Forest',
    earth: 'Earth Tones',
  },
  
  // 版本信息
  version: 'Version',
  versionFeatures: [
    'Added three new color schemes: Deep Ocean Dawn, Earth Forest, Earth Tones',
    'Improved button styles and interaction effects',
    'Optimized page layout and responsive design',
    'Added color scheme selection feature',
  ],
  
  // 仪表盘
  dashboard: 'Dashboard',
  home: 'Home',
  totalAssets: 'Total Assets',
  todayProfitLoss: 'Today\'s Profit/Loss',
  totalTrades: 'Total Trades',
  winRate: 'Win Rate',
  profitTrend: 'Profit Trend',
  recentTrades: 'Recent Trades',
  tradeDistribution: 'Trade Distribution',
  
  // 导航菜单
  mainFeatures: 'Main Features',
  dataAnalysis: 'Data Analysis',
  trades: 'Trades',
  profitLossAnalysis: 'Profit/Loss Analysis',
  winRateAnalysis: 'Win Rate Analysis',
  maxDrawdown: 'Maximum Drawdown',
  tradeJournal: 'Trade Journal',
  financialReports: 'Financial Reports',
  userCenter: 'User Center',
};

// 中文翻译
export const zh: Translations = {
  // 导航栏
  appName: 'Homunculus',
  enterApp: '进入应用',
  themeSettings: '主题设置',
  
  // 英雄区
  heroTitle: 'Homunculus',
  heroSubtitle: '新一代加密货币交易分析平台',
  heroDescription: '整合多交易所数据，提供全面的交易分析工具，帮助您优化交易策略，提高盈利能力。无论您是初学者还是经验丰富的交易者，Homunculus 都能为您提供数据驱动的交易洞察。',
  getStarted: '开始使用',
  learnMore: '了解更多',
  
  // 特点区域
  featuresTitle: '平台特点',
  featuresSubtitle: 'Homunculus 提供全面的交易分析工具，帮助您深入了解交易表现，优化交易策略。',
  featureIntegration: {
    title: '多交易所集成',
    description: '支持币安、OKX、Bybit、Bitget等主要加密货币交易所，轻松导入和同步您的交易数据。',
  },
  featureAnalysis: {
    title: '高级数据分析',
    description: '通过胜率分析、交易时长分析、最大回撤分析等工具，深入了解您的交易表现。',
  },
  featureVisualization: {
    title: '优雅数据可视化',
    description: '使用专业的图表工具，将复杂的交易数据转化为直观易懂的视觉呈现。',
  },
  featureJournal: {
    title: '详细交易日志',
    description: '记录每笔交易的详细信息，支持富文本笔记、标签分类和图片附件，便于复盘和学习。',
  },
  
  // 关于我们
  aboutTitle: '关于我们',
  aboutSubtitle: '我们是一群热爱加密货币和数据分析的开发者，致力于为交易者提供最好的分析工具。',
  aboutContent1: 'Homunculus 平台的核心理念是"数据驱动交易，洞察市场先机"。我们相信，通过深入分析交易数据，交易者可以发现自己的交易模式和规律，从而优化交易策略，提高盈利能力。',
  aboutContent2: '我们的平台设计注重用户体验和数据可视化，将复杂的交易数据转化为直观易懂的图表和指标，帮助交易者快速理解自己的交易表现，发现问题和机会。',
  aboutContent3: '平台的安全设计值得注意，我们仅使用只读 API 访问交易所数据或交易所导出的 CSV 文档，确保用户资金安全的同时提供全面的分析能力。我们不会出售用户数据或以任何方式从中获利。',
  tryNow: '立即体验',
  
  // 页脚
  footerText: '© 2025 Homunculus.com - 赋能数据驱动的交易者',
  
  // 配色方案
  colorSchemes: {
    default: '默认蓝色',
    deepOcean: '深海晨光',
    earthForest: '大地森林',
    earth: '大地色系',
  },
  
  // 版本信息
  version: '版本',
  versionFeatures: [
    '新增三种配色方案：深海晨光、大地森林、大地色系',
    '改进按钮样式和交互效果',
    '优化页面布局和响应式设计',
    '添加配色方案选择功能',
  ],
  
  // 仪表盘
  dashboard: '仪表盘',
  home: '首页',
  totalAssets: '总资产',
  todayProfitLoss: '今日盈亏',
  totalTrades: '总交易次数',
  winRate: '胜率',
  profitTrend: '盈亏趋势',
  recentTrades: '最近交易',
  tradeDistribution: '交易分布',
  
  // 导航菜单
  mainFeatures: '主要功能',
  dataAnalysis: '数据分析',
  trades: '交易记录',
  profitLossAnalysis: '盈亏分析',
  winRateAnalysis: '胜率分析',
  maxDrawdown: '最大回撤',
  tradeJournal: '交易日志',
  financialReports: '财务报告',
  userCenter: '用户中心',
};

// 获取翻译
export const getTranslations = (language: Language): Translations => {
  return language === 'en' ? en : zh;
}; 