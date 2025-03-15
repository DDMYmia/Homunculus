import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Tabs, Tab } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Box 
        component="main" 
        sx={{
          backgroundColor: '#272643',
          minHeight: '100vh',
          pt: { xs: '76px', md: '84px' }, // 导航栏高度补偿
          pb: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4, mt: 2 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              color="white" 
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              交易记录 | Portfolio
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.7)">
              查看和分析您的所有交易历史 | View and analyze all your trading history
            </Typography>
          </Box>

          {/* 过滤器和操作按钮 */}
          <Paper 
            sx={{ 
              p: 3, 
              mb: 4, 
              borderRadius: 2,
              background: 'rgba(227, 246, 245, 0.05)',
              backdropFilter: 'blur(10px)',
            }} 
            elevation={0}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <Tabs
                  value={0}
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#2c698d',
                    },
                    '& .MuiTab-root': {
                      color: 'rgba(255,255,255,0.7)',
                      '&.Mui-selected': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <Tab label="所有交易 | All Trades" />
                  <Tab label="多头交易 | Long Trades" />
                  <Tab label="空头交易 | Short Trades" />
                  <Tab label="未平仓 | Open Positions" />
                </Tabs>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{ 
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }
                  }}
                >
                  导入交易数据 | Import Data
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    backgroundColor: '#2c698d',
                    '&:hover': {
                      backgroundColor: '#235a7c',
                    }
                  }}
                >
                  导出报告 | Export Report
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* 交易统计 */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  background: 'rgba(227, 246, 245, 0.05)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }} 
                elevation={0}
              >
                <Typography 
                  variant="body2" 
                  color="rgba(255,255,255,0.7)"
                  sx={{ mb: 1 }}
                >
                  总交易笔数 | Total Trades
                </Typography>
                <Typography 
                  variant="h4" 
                  color="white" 
                  fontWeight="bold"
                  sx={{ mb: 0.5 }}
                >
                  174
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    多头：120
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    空头：54
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  background: 'rgba(227, 246, 245, 0.05)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }} 
                elevation={0}
              >
                <Typography 
                  variant="body2" 
                  color="rgba(255,255,255,0.7)"
                  sx={{ mb: 1 }}
                >
                  胜率 | Win Rate
                </Typography>
                <Typography 
                  variant="h4" 
                  color="white" 
                  fontWeight="bold"
                  sx={{ mb: 0.5 }}
                >
                  67.2%
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    多头：72.5%
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    空头：55.6%
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  background: 'rgba(227, 246, 245, 0.05)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }} 
                elevation={0}
              >
                <Typography 
                  variant="body2" 
                  color="rgba(255,255,255,0.7)"
                  sx={{ mb: 1 }}
                >
                  总盈亏 | Total P/L
                </Typography>
                <Typography 
                  variant="h4" 
                  color="#4caf50" 
                  fontWeight="bold"
                  sx={{ mb: 0.5 }}
                >
                  +$12,483.25
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  初始资金的 +24.9%
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  background: 'rgba(227, 246, 245, 0.05)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }} 
                elevation={0}
              >
                <Typography 
                  variant="body2" 
                  color="rgba(255,255,255,0.7)"
                  sx={{ mb: 1 }}
                >
                  平均持仓时间 | Avg. Hold Time
                </Typography>
                <Typography 
                  variant="h4" 
                  color="white" 
                  fontWeight="bold"
                  sx={{ mb: 0.5 }}
                >
                  4h 12m
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    多头：3h 45m
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    空头：5h 21m
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* 交易表格 */}
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              background: 'rgba(227, 246, 245, 0.05)',
              backdropFilter: 'blur(10px)',
            }} 
            elevation={0}
          >
            <Typography 
              variant="h6" 
              component="h2" 
              color="white" 
              sx={{ mb: 3 }}
            >
              交易历史 | Trade History
            </Typography>
            
            <Box 
              sx={{ 
                backgroundColor: 'rgba(44, 105, 141, 0.1)',
                borderRadius: 1,
                p: 2,
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color="rgba(255,255,255,0.5)" align="center">
                交易表格区域 - 将展示分页的交易记录，包含交易对、方向、价格、数量、时间和盈亏等信息
                <br />
                Trade Table Area - Will display paginated trade records with pair, direction, price, size, time, and P/L
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
} 