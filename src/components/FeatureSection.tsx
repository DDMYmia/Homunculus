'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  DataUsage as DataIcon, 
  Analytics as AnalyticsIcon, 
  Visibility as VisibilityIcon, 
  History as HistoryIcon 
} from '@mui/icons-material';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <Card 
          sx={{ 
            height: '100%',
            backgroundColor: 'rgba(227, 246, 245, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(44, 105, 141, 0.15)',
                mb: 3,
                mx: 'auto',
              }}
            >
              {icon}
            </Box>
            
            <Typography 
              variant="h5" 
              component="h3" 
              sx={{ 
                mb: 2, 
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
              }}
            >
              {title}
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const FeatureSection: React.FC = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: <DataIcon sx={{ fontSize: 40, color: '#2c698d' }} />,
      title: "广泛数据来源 | Data Sources",
      description: "支持多个交易所API和CSV导入，整合所有交易数据于一体，便于全面分析",
      delay: 0.1,
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#2c698d' }} />,
      title: "深度交易分析 | Trading Analysis",
      description: "全方位分析交易表现，深入了解盈利、亏损原因，优化交易策略",
      delay: 0.2,
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 40, color: '#2c698d' }} />,
      title: "优雅数据可视化 | Data Visualization",
      description: "通过直观的图表展示交易数据，快速把握市场趋势和交易模式",
      delay: 0.3,
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 40, color: '#2c698d' }} />,
      title: "详细交易记录 | Trading Journal",
      description: "记录和标注每笔交易，添加图片和笔记，构建个人交易心得库",
      delay: 0.4,
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: 12,
        backgroundColor: '#272643',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景装饰 */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(44, 105, 141, 0.2) 0%, rgba(44, 105, 141, 0) 70%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: 'white',
            }}
          >
            核心功能 | Core Features
          </Typography>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 8,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            Homunculus 提供全方位交易分析工具，助您洞察市场，精进交易策略
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection; 