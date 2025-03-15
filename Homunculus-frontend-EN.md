# 🎨 Homunculus: Next-Generation Cryptocurrency Trading Analytics Platform Frontend Design

<div align="center">
  <p><strong>Elegant · Intuitive · Efficient</strong></p>
  <p>Modern Frontend Design Based on React & Next.js</p>
</div>

## 📐 Core Design Philosophy

We adopt a modern, minimalist UI design with smooth interactions, featuring:

- Highly variable color schemes with multiple options beyond the default dark mode
- Responsive layout adapting to desktop, tablet, and mobile devices
- Emphasis on intuitive presentation of trading data through various chart types
- Smooth user experience combining animation and interaction
- Consistency of design elements throughout the application including colors, fonts, spacing

> 💡 **Design Philosophy**: Data-centered, user experience-driven, enhancing data comprehension through visual design

## 🛠️ Frontend Technology Stack

### Core Framework
- **React 19** - Efficient and flexible UI library
- **Next.js 15.2.2** - React framework providing SSR/SSG/ISR capabilities
- **TypeScript** - Type-safe JavaScript superset

### UI Component Libraries
- **Material UI** - React component library implementing Material Design
- **Ant Design** - Enterprise-level UI design language and React component library
- **TailwindCSS** - Atomic CSS framework

### State Management
- **React Context + useReducer** - Lightweight state management
- **Zustand** - Simple and efficient global state management

### Data Visualization
- **Lightweight-charts** - High-performance financial charting library
- **Recharts** - Simple React-based chart library
- **Victory** - Interactive data visualization components

### Network Requests
- **SWR** - React Hooks library for data fetching
- **Next.js API Routes** - Simplified API interaction

### Animation Effects
- **Framer Motion** - React animation library
- **GSAP** - Professional-grade web animation library

## 🎭 Design Core

### 1. Overall Visual Style

#### ✅ Modern FinTech Style

- Dark theme with Deep Sea Morning color scheme by default for enhanced visual impact
- Card-based layout avoiding information overload, highlighting key data
- Rounded corners + shadows enhancing depth and reducing visual fatigue

#### 🎨 Deep Sea Morning Color Palette

Uses variations of blue to create a fresh, professional, and profound visual effect suitable for professional services, healthcare, technology, or financial websites. Conveys reliability, stability, and professionalism.

**Midnight Blue** - `#272643` - rgb(39, 38, 67)
- Usage: Main background, footer area

**Pure White** - `#ffffff` - rgb(255, 255, 255)
- Usage: Text, content background

**Light Mint** - `#e3f6f5` - rgb(227, 246, 245)
- Usage: Secondary background, card elements

**Pale Teal** - `#bae8e8` - rgb(186, 232, 232)
- Usage: Borders, dividers, secondary elements

**Deep Sea Blue** - `#2c698d` - rgb(44, 105, 141)
- Usage: Primary accent, buttons, links

Additionally, we offer two alternative color palettes:

#### 🎨 Earth Forest Color Palette

Suitable for nature, outdoor, environmental, or agricultural website designs, conveying organic and sustainable development concepts.

**Primary Colors:**
- **Deep Brown** `#582F0E` - Footer background, dark elements
- **Walnut Brown** `#7F4F24` - Main headings, navigation bar
- **Amber Brown** `#936639` - Secondary headings, borders
- **Desert Brown** `#A68A64` - Card borders, dividers

**Secondary Colors:**
- **Taupe** `#B6AD90` - Secondary backgrounds, content blocks
- **Linen Gray** `#C2C5AA` - Main background, content areas
- **Olive Green** `#A4AC86` - Secondary elements, links
- **Moss Green** `#656D4A` - Buttons, accent elements
- **Pine Green** `#414833` - Main text, key elements
- **Forest Green** `#333D29` - Dark text, footer

#### 🎨 Earth Color Palette

Provides complete visual hierarchy and rich emotional expression, suitable for content-rich websites such as travel, nature, education, or museum platforms.

**Dark Colors:**
- **Deep Sea Black** `#001219` - Main background, footer area
- **Ink Green-Blue** `#005F73` - Secondary background, heading areas
- **Teal** `#0A9396` - Primary accent, buttons, links

**Neutral Colors:**
- **Mint Green** `#94D2BD` - Secondary elements, card backgrounds
- **Light Sand** `#E9D8A6` - Content backgrounds, separator areas

**Warm Colors:**
- **Golden Orange** `#EE9B00` - Accent elements, highlights, icons
- **Ochre Orange** `#CA6702` - Secondary accents, hover states
- **Rust Red** `#BB3E03` - Warning elements, important notifications
- **Brick Red** `#AE2012` - Error messages, delete buttons
- **Deep Red** `#9B2226` - Dangerous operations, critical warnings

#### ✅ Dynamic Interactions

- Homepage scroll-triggered animations (content slide-in, fade-in)
- Mouse hover interactions (data detail tooltips, card highlighting)
- Background dynamic effects (particles, flowing gradients)
- Chart zooming effects

#### ✅ Data Visualization

- Candlestick charts, P&L curves, equity curves intuitively displaying trading data
- Lightweight-charts + WebGL providing high-performance chart rendering
- Interactive chart components showing account data changes

### 2. Layout Planning

#### ✅ Modular Structure

- **Global Navigation Bar** (top/side): Provides quick access points, can be expanded/collapsed
- **Dashboard**: Trading overview, P&L curves, risk control
- **Data Center** (Portfolio): Trading records, account management
- **User Center**: API access, personalization settings, notifications
- **Social Features** (optional): Strategy sharing, team collaboration, social media sharing

#### ✅ Responsive Design

- Next.js + CSS Modules implementing responsive layouts
- TailwindCSS breakpoint system for multi-device adaptation
- Material UI responsive component system

## 📱 Main Page Design

### 1. Dashboard Page

#### ✅ Design Philosophy

The dashboard adopts a modern Material UI design with the following core features:

- **Fixed Top Navigation Bar**: Provides application title and global action buttons
- **Collapsible Sidebar**: Can be expanded/collapsed to save screen space
- **Responsive Layout**: Adapts to different screen sizes, from mobile to desktop devices
- **Dark/Light Theme Toggle**: Provides excellent visual experience
- **Multi-level Menu Support**: Supports submenu expansion/collapse
- **Breadcrumb Navigation**: Clearly displays current location

#### ✅ Core Code Implementation

##### 1. Top Navigation Bar Implementation

```tsx
<AppBar
  position="fixed"
  sx={{
    zIndex: (theme) => theme.zIndex.drawer + 1,
    transition: (theme) =>
      theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: (theme) =>
        theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    }),
  }}
>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDrawer}
      edge="start"
      sx={{ marginRight: 5 }}
    >
      {open ? <ChevronLeftIcon /> : <MenuIcon />}
    </IconButton>
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      Homunculus | Cryptocurrency Trading Analytics Platform
    </Typography>
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </Toolbar>
</AppBar>
```

##### 2. Collapsible Sidebar Implementation

```tsx
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
    },
  }}
>
  <Toolbar />
  <List sx={{ mt: 1 }}>
    {NAVIGATION.map((item, index) => {
      // Render different types of menu items...
    })}
  </List>
</Drawer>
```

##### 3. Submenu Implementation

```tsx
// Items with submenus
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
```

##### 4. Theme Switching Implementation

```tsx
const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === 'dark' ? '#90caf9' : '#1976d2',
        },
      },
    }),
  [mode],
);

const toggleColorMode = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
};
```

#### ✅ Key Features

1. **Responsive Design**
   - Automatically adjusts layout on different devices
   - Cards stack automatically on small screen devices

2. **Interactive Experience**
   - Smooth sidebar expand/collapse animations
   - Smooth transitions during theme switching
   - Submenu expand/collapse animations

3. **Data Visualization Areas**
   - Top cards display key metrics
   - Middle area displays charts and detailed data
   - Bottom area displays supplementary information

4. **Navigation Experience**
   - Breadcrumb navigation clearly shows location
   - Sidebar organizes functional modules by category
   - Icons remain when collapsed, saving space

### 2. Landing Page

#### ✅ Three-Screen Structure

Using Framer Motion + Intersection Observer to implement a scrolling information display, with the top navigation bar remaining fixed at the top.

##### Hero Section
- Headline: "Homunculus - Intelligent Trading Analytics"
- Subheading: Brief introduction to platform core values
- CTA buttons ("Start" / "Use Now")
- Background animations (particles, gradients, flow effects)

##### Page 2: Four Main Features:
- Extensive data sources, complex trading analysis, elegant data visualization, detailed trade records
- Card-based display with interactive animations (hover to expand content)
- Call-to-Action (CTA)

##### Page 3:
- About us, contact information

### 3. Trading Dashboard

#### ✅ Core Data Overview

- Account profit/loss overview (fund changes, win rate, maximum drawdown)
- Market data (latest prices for trading instruments, trends)
- Trading history (recent trades, P&L)

#### ✅ Customizable Layout

- React DnD for drag and drop functionality
- Material UI card components that can be reordered
- localStorage to save layout preferences

#### ✅ Data Visualization

- P&L trend charts (Recharts line charts)
- Position distribution (Victory pie charts)
- Strategy performance (bar charts)

#### ✅ Real-time Updates

- SWR + WebSocket connecting to backend, displaying latest trading data
- Framer Motion animations for smooth data updates

### 4. Trade Details Page

#### ✅ Detailed Single Trade Analysis

- Trade entry/exit point visualization
- Lightweight-charts showing the trading process
- P&L calculation, fee details

#### ✅ Intelligent Review

- Tag management (strategy, trading instrument classification)
- Trade notes (supporting rich text, images)

### 5. User Center

#### ✅ Personalization Settings

- API management (developer mode)
- Account binding (exchanges, social accounts)
- Theme switching (dark/light mode)

#### ✅ Notification Center

- Trade alerts
- Important market message push notifications

#### ✅ Security Management

- Two-factor authentication (2FA)
- Device management

## ✨ Interaction & Animation

### 1. Scroll-Triggered Animation

- Implemented using Intersection Observer + Framer Motion
- Fade-in/fade-out effects (such as dynamic loading of trading data)
- Slide-in/slide-out (such as menus, filter panels)

### 2. Card Hover Interaction

- Material UI hover state optimization
- Display more information on hover
- Click to expand details

### 3. Background Dynamic Effects

- React Particles implementing particle effects
- CSS gradient animations + GSAP

### 4. Data Update Animation

- WebSocket real-time data push
- Framer Motion transition animations

## 📊 Responsive & Mobile Optimization

### ✅ Mobile Layout Adjustment

- Using Next.js dynamic imports and server components to reduce bundle size
- Streamlined data display
- Gesture swiping support on trade detail pages

### ✅ Adaptation Solution

- Tailwind CSS Grid & Flexbox
- Material UI responsive system
- React Hooks + Media Query

## 🔄 Backend API Interaction

- ✅ SWR for data requests and caching
- ✅ Zustand for state management
- ✅ WebSocket for real-time trading data updates
- ✅ Next.js API Routes simplifying frontend-backend interaction

## 🚀 Future Extensions

### ✅ AI Trading Analysis

- Market trend prediction
- Intelligent trading suggestions

### ✅ Social Trading

- Trading strategy sharing
- Team collaboration

### ✅ Blockchain Data Storage

- On-chain trading data ensuring immutability

### ✅ PWA (Progressive Web App)

- Next.js PWA support
- Near-native application experience
- Offline access to core functionality

---

<div align="center">
  <p>© 2025 Homunculus Frontend Design - Creating Ultimate Trading Analysis Experience</p>
</div> 