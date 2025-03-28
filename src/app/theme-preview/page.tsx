'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Chip,
  Slider,
  Switch,
  FormControlLabel,
  Link,
  Alert,
  AlertTitle,
  CircularProgress,
  IconButton,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Send as SendIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/styles/themes/ThemeProvider';

const ThemePreviewPage: React.FC = () => {
  // Get theme context
  const { currentScheme } = useTheme();
  
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 10, mb: 6 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          主题预览
          <Typography component="span" variant="h5" sx={{ ml: 2, opacity: 0.6 }}>
            (Theme Preview)
          </Typography>
        </Typography>
        
        <Typography variant="h6" align="center" paragraph color="text.secondary">
          当前主题: {currentScheme.name}
          <Typography component="span" variant="body1" sx={{ ml: 1, opacity: 0.7 }}>
            (Current Theme)
          </Typography>
        </Typography>
        
        <Divider sx={{ my: 4 }} />
        
        {/* Palette Preview */}
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          调色板 (Palette)
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {Object.entries(currentScheme.colors).map(([colorName, colorInfo]) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={colorName}>
              <Paper 
                sx={{ 
                  p: 2, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: `8px solid ${colorInfo.hex}`,
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: colorInfo.hex, 
                    height: 80, 
                    borderRadius: 1,
                    mb: 2,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                  }} 
                />
                <Typography variant="h6" gutterBottom>
                  {colorName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {colorInfo.hex}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  RGB: {colorInfo.rgb}
                </Typography>
                <Typography variant="body2" sx={{ mt: 'auto', pt: 1 }}>
                  {colorInfo.usage}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Components Preview */}
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          组件预览 (Components)
        </Typography>
        
        {/* Buttons */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          按钮 (Buttons)
        </Typography>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">主要按钮 (Primary)</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">轮廓按钮 (Outlined)</Button>
            </Grid>
            <Grid item>
              <Button variant="text">文本按钮 (Text)</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">次要按钮 (Secondary)</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" disabled>禁用按钮 (Disabled)</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" startIcon={<AddIcon />}>
                带图标 (With Icon)
              </Button>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Typography */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          排版 (Typography)
        </Typography>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h1" gutterBottom>h1. 标题 (Heading)</Typography>
          <Typography variant="h2" gutterBottom>h2. 标题 (Heading)</Typography>
          <Typography variant="h3" gutterBottom>h3. 标题 (Heading)</Typography>
          <Typography variant="h4" gutterBottom>h4. 标题 (Heading)</Typography>
          <Typography variant="h5" gutterBottom>h5. 标题 (Heading)</Typography>
          <Typography variant="h6" gutterBottom>h6. 标题 (Heading)</Typography>
          <Typography variant="subtitle1" gutterBottom>
            副标题1 (Subtitle 1). Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            副标题2 (Subtitle 2). Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="body1" gutterBottom>
            正文1 (Body 1). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
          </Typography>
          <Typography variant="body2" gutterBottom>
            正文2 (Body 2). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            按钮文本 (Button Text)
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            说明文本 (Caption Text)
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            上标文本 (Overline Text)
          </Typography>
        </Paper>
        
        {/* Form Elements */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          表单元素 (Form Elements)
        </Typography>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="标准输入框 (Standard Input)" 
                fullWidth 
                margin="normal"
              />
              <TextField 
                label="带提示的输入框 (With Placeholder)" 
                placeholder="请输入..." 
                fullWidth 
                margin="normal"
              />
              <TextField 
                label="禁用状态 (Disabled)" 
                disabled 
                fullWidth 
                margin="normal"
              />
              <TextField 
                label="错误状态 (Error)" 
                error 
                helperText="这是一个错误信息" 
                fullWidth 
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>滑块 (Slider):</Typography>
              <Slider 
                defaultValue={30} 
                aria-label="Slider" 
                valueLabelDisplay="auto" 
                sx={{ mb: 4 }}
              />
              
              <Typography gutterBottom>开关 (Switch):</Typography>
              <FormControlLabel 
                control={<Switch defaultChecked />} 
                label="开启 (On)" 
                sx={{ mb: 2, display: 'block' }}
              />
              <FormControlLabel 
                control={<Switch />} 
                label="关闭 (Off)" 
                sx={{ mb: 4, display: 'block' }}
              />
              
              <Typography gutterBottom>标签 (Chips):</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="基本 (Basic)" />
                <Chip label="可点击 (Clickable)" onClick={() => {}} />
                <Chip label="可删除 (Deletable)" onDelete={() => {}} />
                <Chip icon={<FavoriteIcon />} label="带图标 (With Icon)" />
                <Chip color="primary" label="主色 (Primary)" />
                <Chip color="secondary" label="次色 (Secondary)" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Cards */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          卡片 (Cards)
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  卡片标题 (Card Title)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  这是一个基本卡片示例，展示了卡片内容和操作的布局。
                  This is a basic card example showing card content and action layout.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">了解更多 (Learn More)</Button>
                <Button size="small" startIcon={<StarIcon />}>收藏 (Save)</Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
                <Typography variant="h5" component="div">
                  主题卡片 (Themed Card)
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2">
                  这个卡片使用了主题颜色，展示了如何使用主题系统创建有特色的卡片。
                  This card uses theme colors to show how to create distinctive cards using the theme system.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">操作 (Action)</Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  轮廓卡片 (Outlined Card)
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  这是一个轮廓风格的卡片，边框更轻量。
                  This is an outlined style card with a lighter border.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <InfoIcon color="info" fontSize="small" />
                  <Typography variant="caption">
                    包含额外信息 (With additional info)
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Alerts */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          提醒 (Alerts)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Alert severity="success" sx={{ mb: 2 }}>
              <AlertTitle>成功 (Success)</AlertTitle>
              操作已成功完成 — This is a success alert!
            </Alert>
            <Alert severity="info" sx={{ mb: 2 }}>
              <AlertTitle>信息 (Info)</AlertTitle>
              这是一条重要信息 — This is an info alert!
            </Alert>
          </Grid>
          <Grid item xs={12} md={6}>
            <Alert severity="warning" sx={{ mb: 2 }}>
              <AlertTitle>警告 (Warning)</AlertTitle>
              请注意此警告信息 — This is a warning alert!
            </Alert>
            <Alert severity="error" sx={{ mb: 2 }}>
              <AlertTitle>错误 (Error)</AlertTitle>
              发生了错误 — This is an error alert!
            </Alert>
          </Grid>
        </Grid>
        
        {/* Progress */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
          进度指示器 (Progress Indicators)
        </Typography>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <CircularProgress />
            </Grid>
            <Grid item>
              <CircularProgress color="secondary" />
            </Grid>
            <Grid item>
              <CircularProgress color="success" />
            </Grid>
            <Grid item>
              <CircularProgress color="info" />
            </Grid>
            <Grid item>
              <CircularProgress color="warning" />
            </Grid>
            <Grid item>
              <CircularProgress color="error" />
            </Grid>
          </Grid>
        </Paper>
        
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Button variant="contained" component={Link} href="/" startIcon={<HomeIcon />}>
            返回首页 (Back to Home)
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ThemePreviewPage;
