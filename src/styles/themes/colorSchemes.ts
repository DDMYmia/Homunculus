/**
 * Color Schemes for Homunculus
 * This file contains all color palettes used in the application
 */

// Color interface
export interface ColorInfo {
  hex: string;
  rgb: string;
  usage: string;
}

// Color Scheme interface
export interface ColorScheme {
  id: string;
  name: string;
  description: string;
  colors: {
    [key: string]: ColorInfo;
  };
}

// Grayscale - Default scheme
export const grayscale: ColorScheme = {
  id: 'grayscale',
  name: 'Grayscale',
  description: 'Minimalist black and white color palette with neutral gray tones',
  colors: {
    pureWhite: {
      hex: '#F8F9FA',
      rgb: 'rgb(248, 249, 250)',
      usage: 'Primary background, content areas'
    },
    lightGray: {
      hex: '#E9ECEF',
      rgb: 'rgb(233, 236, 239)',
      usage: 'Secondary background, cards, separator areas'
    },
    mistGray: {
      hex: '#DEE2E6',
      rgb: 'rgb(222, 226, 230)',
      usage: 'Table backgrounds, grouped elements'
    },
    silverGray: {
      hex: '#CED4DA',
      rgb: 'rgb(206, 212, 218)',
      usage: 'Disabled buttons, input backgrounds'
    },
    neutralGray: {
      hex: '#ADB5BD',
      rgb: 'rgb(173, 181, 189)',
      usage: 'Secondary text, borders, dividers'
    },
    deepCyanGray: {
      hex: '#6C757D',
      rgb: 'rgb(108, 117, 125)',
      usage: 'Supporting text, captions'
    },
    slateGray: {
      hex: '#495057',
      rgb: 'rgb(73, 80, 87)',
      usage: 'Primary text, subheadings'
    },
    darkCoalGray: {
      hex: '#343A40',
      rgb: 'rgb(52, 58, 64)',
      usage: 'Emphasized text, main navigation'
    },
    carbonBlack: {
      hex: '#212529',
      rgb: 'rgb(33, 37, 41)',
      usage: 'Headings, key elements'
    }
  }
};

// Fruit Platter
export const fruitPlatter: ColorScheme = {
  id: 'fruitPlatter',
  name: 'Fruit Platter',
  description: 'Vibrant and fruity color scheme with warm, tropical tones',
  colors: {
    passionWatermelon: {
      hex: '#F26F83',
      rgb: 'rgb(242, 111, 131)',
      usage: 'Primary accent, buttons, calls-to-action'
    },
    softCoconut: {
      hex: '#F7D6CB',
      rgb: 'rgb(247, 214, 203)',
      usage: 'Primary background, content areas'
    },
    goldenPineapple: {
      hex: '#F2B85A',
      rgb: 'rgb(242, 184, 90)',
      usage: 'Headings, secondary accent, icons'
    },
    guavaPink: {
      hex: '#DB908A',
      rgb: 'rgb(219, 144, 138)',
      usage: 'Light backgrounds, table areas'
    },
    pitayaRed: {
      hex: '#D95F5F',
      rgb: 'rgb(217, 95, 95)',
      usage: 'Buttons, links, warning information'
    },
    brightMango: {
      hex: '#FFAE00',
      rgb: 'rgb(255, 174, 0)',
      usage: 'Primary accent, buttons, calls-to-action'
    },
    caramelBrown: {
      hex: '#634A00',
      rgb: 'rgb(99, 74, 0)',
      usage: 'Secondary text, dividers, borders'
    },
    oliveBlack: {
      hex: '#383416',
      rgb: 'rgb(56, 52, 21)',
      usage: 'Dark text, footer background'
    },
    jadeGreen: {
      hex: '#0C7D74',
      rgb: 'rgb(12, 124, 115)',
      usage: 'Secondary accent, cards, icons'
    },
    deepSeaBlue: {
      hex: '#0F353D',
      rgb: 'rgb(15, 52, 61)',
      usage: 'Primary background, header area'
    }
  }
};

// Neon Cyberpunk
export const neonCyberpunk: ColorScheme = {
  id: 'neonCyberpunk',
  name: 'Neon Cyberpunk',
  description: 'Electric and futuristic color scheme with vivid neon accents',
  colors: {
    skyBlue: {
      hex: '#97E3FE',
      rgb: 'rgb(151, 227, 254)',
      usage: 'Interface highlights, info tooltips, secondary buttons'
    },
    neonPink: {
      hex: '#F394F8',
      rgb: 'rgb(243, 148, 248)',
      usage: 'Accent elements, neon effects, buttons'
    },
    violet: {
      hex: '#9A53D0',
      rgb: 'rgb(154, 83, 208)',
      usage: 'Primary accent, icons, heading text'
    },
    electroPurple: {
      hex: '#7630D9',
      rgb: 'rgb(118, 48, 217)',
      usage: 'Secondary accent, hover states'
    },
    royalBlue: {
      hex: '#2843AD',
      rgb: 'rgb(40, 67, 173)',
      usage: 'Interactive elements, link text'
    },
    darkPurple: {
      hex: '#532473',
      rgb: 'rgb(83, 36, 115)',
      usage: 'Dark backgrounds, footer areas'
    },
    midnightBlue: {
      hex: '#0F1546',
      rgb: 'rgb(15, 21, 70)',
      usage: 'Primary background, dark mode'
    },
    deepBlue: {
      hex: '#04588C',
      rgb: 'rgb(4, 88, 140)',
      usage: 'Content area backgrounds, navigation bar'
    },
    cyberCyan: {
      hex: '#79F2E6',
      rgb: 'rgb(121, 242, 230)',
      usage: 'Highlight elements, text highlights'
    },
    burningOrange: {
      hex: '#E85D04',
      rgb: 'rgb(232, 93, 4)',
      usage: 'Primary contrast, warning information'
    }
  }
};

// Byzantine
export const byzantine: ColorScheme = {
  id: 'byzantine',
  name: 'Byzantine',
  description: 'Rich and regal color scheme inspired by Byzantine art and culture',
  colors: {
    royalPurple: {
      hex: '#492B7C',
      rgb: 'rgb(73, 43, 124)',
      usage: 'Primary background, header area'
    },
    deepPurple: {
      hex: '#301551',
      rgb: 'rgb(48, 21, 81)',
      usage: 'Secondary background, footer, shadows'
    },
    passionateOrange: {
      hex: '#ED8A0A',
      rgb: 'rgb(237, 138, 10)',
      usage: 'Primary accent, buttons, icons'
    },
    brightYellow: {
      hex: '#F6D912',
      rgb: 'rgb(246, 217, 18)',
      usage: 'Secondary accent, highlight elements'
    },
    paleGold: {
      hex: '#FFF29C',
      rgb: 'rgb(255, 242, 156)',
      usage: 'Light backgrounds, text areas'
    },
    nightBlue: {
      hex: '#000814',
      rgb: 'rgb(0, 8, 20)',
      usage: 'Dark backgrounds, footer areas'
    },
    deepSeaBlue: {
      hex: '#001D3D',
      rgb: 'rgb(0, 29, 61)',
      usage: 'Secondary background, header area'
    },
    gemBlue: {
      hex: '#003566',
      rgb: 'rgb(0, 53, 102)',
      usage: 'Navigation bar, content blocks'
    },
    brightGold: {
      hex: '#FFC300',
      rgb: 'rgb(255, 195, 0)',
      usage: 'Primary accent, buttons, icons'
    },
    shiningGold: {
      hex: '#FFD60A',
      rgb: 'rgb(255, 214, 10)',
      usage: 'Secondary accent, hover states, notifications'
    }
  }
};

// Estonian
export const estonian: ColorScheme = {
  id: 'estonian',
  name: 'Estonian',
  description: 'Clean and modern color scheme inspired by Estonian digital design',
  colors: {
    estonianWhite: {
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      usage: 'Primary background, content areas'
    },
    pearlGrayWhite: {
      hex: '#E7ECEF',
      rgb: 'rgb(231, 236, 239)',
      usage: 'Secondary background, card elements'
    },
    seafoamBlue: {
      hex: '#CAF0F8',
      rgb: 'rgb(202, 240, 248)',
      usage: 'Light backgrounds, table areas'
    },
    lightSkyBlue: {
      hex: '#98CCF0',
      rgb: 'rgb(152, 204, 240)',
      usage: 'Dividers, borders, supporting elements'
    },
    skyBlue: {
      hex: '#00AEE1',
      rgb: 'rgb(0, 174, 225)',
      usage: 'Primary accent, buttons, links'
    },
    navyAzureBlue: {
      hex: '#007AAE',
      rgb: 'rgb(0, 122, 174)',
      usage: 'Secondary accent, icons, hover states'
    },
    classicBlue: {
      hex: '#274C77',
      rgb: 'rgb(39, 76, 119)',
      usage: 'Headings, important text, brand elements'
    },
    deepSeaBlue: {
      hex: '#003459',
      rgb: 'rgb(0, 52, 89)',
      usage: 'Secondary background, header area, page header'
    },
    estonianBlack: {
      hex: '#00171F',
      rgb: 'rgb(0, 23, 31)',
      usage: 'Footer background, dark elements'
    },
    neutralGray: {
      hex: '#8B8C89',
      rgb: 'rgb(139, 140, 137)',
      usage: 'Secondary text, supporting information'
    }
  }
};

// Earth Pulse
export const earthPulse: ColorScheme = {
  id: 'earthPulse',
  name: 'Earth Pulse',
  description: 'Organic and balanced color scheme with earthy tones and natural contrasts',
  colors: {
    deepSeaBlack: {
      hex: '#001219',
      rgb: 'rgb(0, 18, 25)',
      usage: 'Primary background, footer area'
    },
    inkGreenBlue: {
      hex: '#005F73',
      rgb: 'rgb(0, 95, 115)',
      usage: 'Secondary background, header area'
    },
    cyanGreen: {
      hex: '#0A9396',
      rgb: 'rgb(10, 147, 150)',
      usage: 'Primary accent, buttons, links'
    },
    mintGreen: {
      hex: '#94D2BD',
      rgb: 'rgb(148, 210, 189)',
      usage: 'Secondary elements, card backgrounds'
    },
    lightSand: {
      hex: '#E9D8A6',
      rgb: 'rgb(233, 216, 166)',
      usage: 'Content background, separator areas'
    },
    goldenOrange: {
      hex: '#EE9B00',
      rgb: 'rgb(238, 155, 0)',
      usage: 'Accent elements, highlights, icons'
    },
    ochreOrange: {
      hex: '#CA6702',
      rgb: 'rgb(202, 103, 2)',
      usage: 'Secondary accent, hover states'
    },
    rustRed: {
      hex: '#BB3E03',
      rgb: 'rgb(187, 62, 3)',
      usage: 'Warning elements, important notices'
    },
    brickRed: {
      hex: '#AE2012',
      rgb: 'rgb(174, 32, 18)',
      usage: 'Error messages, delete buttons'
    },
    deepRed: {
      hex: '#9B2226',
      rgb: 'rgb(155, 34, 38)',
      usage: 'Dangerous operations, critical warnings'
    }
  }
};

// Primal Forest
export const primalForest: ColorScheme = {
  id: 'primalForest',
  name: 'Primal Forest',
  description: 'Deep and earthy color scheme inspired by ancient forests and natural habitats',
  colors: {
    deepBrown: {
      hex: '#582F0E',
      rgb: 'rgb(88, 47, 14)',
      usage: 'Footer background, dark elements'
    },
    walnutBrown: {
      hex: '#7F4F24',
      rgb: 'rgb(127, 79, 36)',
      usage: 'Main headings, navigation bar'
    },
    amberBrown: {
      hex: '#936639',
      rgb: 'rgb(147, 102, 57)',
      usage: 'Secondary headings, borders'
    },
    desertBrown: {
      hex: '#A68A64',
      rgb: 'rgb(166, 138, 100)',
      usage: 'Card borders, dividers'
    },
    taupe: {
      hex: '#B6AD90',
      rgb: 'rgb(182, 173, 144)',
      usage: 'Secondary background, content blocks'
    },
    linenGray: {
      hex: '#C2C5AA',
      rgb: 'rgb(194, 197, 170)',
      usage: 'Primary background, content areas'
    },
    oliveGreen: {
      hex: '#A4AC86',
      rgb: 'rgb(164, 172, 134)',
      usage: 'Secondary elements, links'
    },
    mossGreen: {
      hex: '#656D4A',
      rgb: 'rgb(101, 109, 74)',
      usage: 'Buttons, accent elements'
    },
    pineGreen: {
      hex: '#414833',
      rgb: 'rgb(65, 72, 51)',
      usage: 'Main text, key elements'
    },
    forestGreen: {
      hex: '#333D29',
      rgb: 'rgb(51, 61, 41)',
      usage: 'Dark text, footer'
    }
  }
};

// German
export const german: ColorScheme = {
  id: 'german',
  name: 'German',
  description: 'Bold and powerful color scheme with strong reds and warm accent tones',
  colors: {
    midnightBlack: {
      hex: '#03071E',
      rgb: 'rgb(3, 7, 30)',
      usage: 'Dark background, footer area'
    },
    deepWineRed: {
      hex: '#370617',
      rgb: 'rgb(55, 6, 23)',
      usage: 'Secondary dark elements, sidebar'
    },
    richRed: {
      hex: '#6A040F',
      rgb: 'rgb(106, 4, 15)',
      usage: 'Primary background, header area'
    },
    brightRed: {
      hex: '#9D0208',
      rgb: 'rgb(157, 2, 8)',
      usage: 'Accent areas, banner backgrounds'
    },
    pureRed: {
      hex: '#D00000',
      rgb: 'rgb(208, 0, 0)',
      usage: 'Primary accent, important buttons'
    },
    vermilionRed: {
      hex: '#DC2F02',
      rgb: 'rgb(220, 47, 2)',
      usage: 'Warning information, important notices'
    },
    burningOrange: {
      hex: '#E85D04',
      rgb: 'rgb(232, 93, 4)',
      usage: 'Secondary accent, icons, hover states'
    },
    brightOrange: {
      hex: '#F48C06',
      rgb: 'rgb(244, 140, 6)',
      usage: 'Decorative elements, progress bars'
    },
    warmOrange: {
      hex: '#FAA307',
      rgb: 'rgb(250, 163, 7)',
      usage: 'Link text, button hover states'
    },
    goldenYellow: {
      hex: '#FFBA08',
      rgb: 'rgb(255, 186, 8)',
      usage: 'Highlight elements, call-to-action buttons, prompt text'
    }
  }
};

// Blue-Orange Contrast
export const blueOrangeScheme: ColorScheme = {
  id: 'blueOrange',
  name: 'Blue-Orange Contrast',
  description: 'Vibrant complementary color scheme with cooling blues and warming oranges',
  colors: {
    lightLakeBlue: {
      hex: '#8ECAE6',
      rgb: 'rgb(142, 202, 230)',
      usage: 'Light background, content blocks'
    },
    powderBlue: {
      hex: '#73BFDC',
      rgb: 'rgb(115, 191, 220)',
      usage: 'Secondary background, card elements'
    },
    horizonBlue: {
      hex: '#58B4D1',
      rgb: 'rgb(88, 180, 209)',
      usage: 'Supporting elements, lightweight icons'
    },
    azureBlue: {
      hex: '#219EBC',
      rgb: 'rgb(33, 158, 188)',
      usage: 'Primary accent, buttons, navigation'
    },
    cobaltBlue: {
      hex: '#126782',
      rgb: 'rgb(18, 103, 130)',
      usage: 'Hover states, secondary headings'
    },
    deepBlue: {
      hex: '#023047',
      rgb: 'rgb(2, 48, 71)',
      usage: 'Main text, headings, footer'
    },
    brightYellowOrange: {
      hex: '#FFB703',
      rgb: 'rgb(255, 183, 3)',
      usage: 'Primary contrast, call-to-action buttons'
    },
    orangeYellow: {
      hex: '#FD9E02',
      rgb: 'rgb(253, 158, 2)',
      usage: 'Important notices, accent icons'
    },
    vividOrange: {
      hex: '#FB8500',
      rgb: 'rgb(251, 133, 0)',
      usage: 'Secondary contrast, highlight elements, icons'
    },
    brightOrange: {
      hex: '#FB9017',
      rgb: 'rgb(251, 144, 23)',
      usage: 'Decorative elements, hover effects'
    }
  }
};

// All color schemes export
export const colorSchemes: ColorScheme[] = [
  grayscale,
  fruitPlatter,
  neonCyberpunk,
  byzantine,
  estonian,
  earthPulse,
  primalForest,
  german,
  blueOrangeScheme
];

// Default color scheme
export const defaultColorScheme = grayscale;

// Get color scheme by ID
export const getColorSchemeById = (id: string): ColorScheme => {
  return colorSchemes.find(scheme => scheme.id === id) || defaultColorScheme;
};

// Export a function to get color values from a scheme
export const getColorValue = (scheme: ColorScheme, colorKey: string, format: 'hex' | 'rgb' = 'hex'): string => {
  if (!scheme.colors[colorKey]) {
    console.warn(`Color key "${colorKey}" not found in scheme "${scheme.name}"`);
    return format === 'hex' ? '#000000' : 'rgb(0, 0, 0)';
  }
  
  return scheme.colors[colorKey][format];
}; 