# Gravity UI Component Library - AI Agent Guide

This guide provides comprehensive information about Gravity UI components, their props, and types to help AI coding assistants understand and correctly implement components in this design system.

## Library Overview

Gravity is a comprehensive React component library built with TypeScript. All components use the `NS` prefix (e.g., `NSButton`, `NSModal`) and are exported from the main library at `ui/index.ts`.

## Core Design Tokens

### Color System

Gravity uses a systematic color naming convention that follows the structure: `--<category>-<intensity>-<name>-<state>`. Understanding this system is crucial for proper component styling.

#### Color Categories
1. **Background Colors (`bg`)**: Used for component backgrounds, surfaces, and containers
2. **Text Colors (`text`)**: Used for all text content and typography
3. **Border Colors (`border`)**: Used for borders, dividers, and outlines

#### Color Intensities
- **`subtle`**: Light, understated colors for backgrounds and secondary elements
- **`moderate`**: Medium intensity colors for standard UI elements
- **`emphasis`**: High contrast colors for important elements and primary actions

#### Color Names
- **Neutral**: `primary`, `secondary`, `tertiary` - Grayscale colors for general UI
- **Semantic**: `success`, `warning`, `error` - Status and feedback colors
- **Brand**: `brand` - Primary brand identity color (typically blue)
- **Accent**: `yellow`, `purple` - Additional accent colors

#### Color States
- **`default`**: Normal/rest state
- **`hover`**: Mouse hover interaction state
- **`disabled`**: Inactive/disabled state

#### Component Color Props
- **Action Colors**: `brand`, `success`, `warning`, `error` (for buttons, form fields, interactive elements)
- **Text Colors**: `primary`, `secondary`, `brand`, `success`, `warning`, `error`, `yellow`, `purple` (for typography)

### Design Token Reference

#### Foundational Color Palette
```css
/* Neutral Colors (Grayscale) */
--neutral-0: #FFFFFF;     /* Pure white */
--neutral-100: #F6F7F9;   /* Very light gray */
--neutral-200: #EDEFF3;   /* Light gray */
--neutral-300: #E1E5EA;   /* Medium light gray */
--neutral-400: #C9CFD9;   /* Medium gray */
--neutral-500: #B2B9C7;   /* Medium gray */
--neutral-600: #8C95A6;   /* Medium dark gray */
--neutral-700: #5B6271;   /* Dark gray */
--neutral-750: #30363D;   /* Very dark gray */
--neutral-800: #23282F;   /* Near black */
--neutral-900: #16191D;   /* Very dark */
--neutral-1000: #0B0C0E;  /* Almost black */

/* Brand Colors (Blue) */
--brand-0: #E5F1FF;       /* Very light blue */
--brand-100: #C2DDFF;     /* Light blue */
--brand-200: #94C4FF;     /* Medium light blue */
--brand-300: #61A8FF;     /* Medium blue */
--brand-400: #2989FF;     /* Medium bright blue */
--brand-500: #0673F9;     /* Primary brand blue */
--brand-600: #005ED1;     /* Dark blue */
--brand-700: #004599;     /* Very dark blue */
--brand-800: #003270;     /* Near navy */
--brand-900: #002452;     /* Navy */

/* Success Colors (Green) */
--success-0: #D9FCED;     /* Very light green */
--success-100: #ACF7D3;   /* Light green */
--success-200: #7EE7B8;   /* Medium light green */
--success-300: #50CE99;   /* Medium green */
--success-400: #13B97C;   /* Medium bright green */
--success-500: #009965;   /* Primary success green */
--success-600: #007A51;   /* Dark green */
--success-700: #005C3D;   /* Very dark green */
--success-800: #003D29;   /* Forest green */
--success-900: #002D1E;   /* Deep green */

/* Warning Colors (Orange) */
--warning-0: #FFF1E5;     /* Very light orange */
--warning-100: #FFD2BA;   /* Light orange */
--warning-200: #FFB286;   /* Medium light orange */
--warning-300: #FD9254;   /* Medium orange */
--warning-400: #F37216;   /* Medium bright orange */
--warning-500: #DE5A02;   /* Primary warning orange */
--warning-600: #A83E00;   /* Dark orange */
--warning-700: #802D00;   /* Very dark orange */
--warning-800: #5C1F00;   /* Deep orange */
--warning-900: #441704;   /* Near brown */

/* Error Colors (Red) */
--error-0: #FFE5E7;       /* Very light red */
--error-100: #FBBBBF;     /* Light red */
--error-200: #FA9499;     /* Medium light red */
--error-300: #F8636B;     /* Medium red */
--error-400: #EE3F44;     /* Medium bright red */
--error-500: #D22D3A;     /* Primary error red */
--error-600: #A01B22;     /* Dark red */
--error-700: #7E1219;     /* Very dark red */
--error-800: #63080D;     /* Deep red */
--error-900: #4A040A;     /* Near maroon */

/* Accent Colors */
--yellow-0: #FFF3D6;      /* Very light yellow */
--yellow-400: #FEB000;    /* Bright yellow */
--yellow-500: #F59700;    /* Primary yellow */

--purple-0: #F5E5FF;      /* Very light purple */
--purple-400: #967CFD;    /* Bright purple */
--purple-500: #7B55EE;    /* Primary purple */
```

#### Semantic Color Variables (Theme-Aware)
```css
/* Modern Color System (follows --category-intensity-name-state pattern) */
--bg-subtle-primary-default: var(--neutral-0);
--bg-subtle-primary-hover: var(--neutral-100);
--bg-subtle-primary-disabled: var(--neutral-200);

--bg-emphasis-brand-default: var(--brand-500);
--bg-emphasis-brand-hover: var(--brand-400);
--bg-emphasis-brand-disabled: var(--brand-200);

--text-emphasis-primary-default: var(--neutral-900);
--text-emphasis-primary-disabled: var(--neutral-600);

--border-subtle-primary-default: var(--neutral-300);
--border-subtle-primary-disabled: var(--neutral-200);

/* Legacy Color System (for backward compatibility) */
--text-primary: var(--neutral-900);      /* Main text color */
--text-secondary: var(--neutral-600);    /* Secondary text color */
--text-brand: var(--brand-500);          /* Brand text color */
--text-success: var(--success-500);      /* Success text color */
--text-error: var(--error-500);          /* Error text color */
--text-warning: var(--warning-500);      /* Warning text color */

--bg-primary: var(--neutral-0);          /* Main background */
--bg-secondary: var(--neutral-100);      /* Secondary background */
--bg-brand: var(--brand-500);            /* Brand background */
--bg-success: var(--success-500);        /* Success background */
--bg-error: var(--error-500);            /* Error background */
--bg-warning: var(--warning-500);        /* Warning background */

--border: var(--neutral-300);            /* Default border */
--border-brand: var(--brand-500);        /* Brand border */
--border-success: var(--success-500);    /* Success border */
--border-error: var(--error-500);        /* Error border */
--border-warning: var(--warning-500);    /* Warning border */
```

#### Spacing System
```css
/* Spacing tokens (8px grid system) */
--spacing-0px: 0px;       --spacing-32px: 32px;
--spacing-4px: 4px;       --spacing-40px: 40px;
--spacing-8px: 8px;       --spacing-48px: 48px;
--spacing-12px: 12px;     --spacing-56px: 56px;
--spacing-16px: 16px;     --spacing-64px: 64px;
--spacing-20px: 20px;     --spacing-80px: 80px;
--spacing-24px: 24px;     --spacing-128px: 128px;
--spacing-28px: 28px;     --spacing-160px: 160px;
```

#### Typography System
```css
/* Font sizes */
--font-size-12px: 12px;   --font-size-32px: 32px;
--font-size-14px: 14px;   --font-size-40px: 40px;
--font-size-16px: 16px;   --font-size-48px: 48px;
--font-size-18px: 18px;   --font-size-56px: 56px;
--font-size-20px: 20px;   --font-size-64px: 64px;
--font-size-24px: 24px;   --font-size-96px: 96px;
--font-size-28px: 28px;

/* Font weights */
--font-weight-400: 400;   /* Regular */
--font-weight-450: 450;   /* Medium */
--font-weight-500: 500;   /* Medium */
--font-weight-550: 550;   /* Semibold */
--font-weight-600: 600;   /* Semibold */
--font-weight-700: 700;   /* Bold */

/* Font families */
--font-family: "Mona Sans", sans-serif;
--font-family-code: "Fira Code", monospace;
```

#### Border Radius System
```css
--corner-radius-0px: 0px;
--corner-radius-4px: 4px;
--corner-radius-8px: 8px;
--corner-radius-12px: 12px;
--corner-radius-16px: 16px;
--corner-radius-24px: 24px;
--corner-radius-50percent: 50%;    /* Circular */
```

#### Z-Index System
```css
--z-index-tooltip: 3000;
--z-index-overlay-hoc: 2000;
--z-index-dropdown: 1400;
--z-index-modal: 1100;
--z-index-drawer: 1000;
--z-index-floating-action-button: 500;
```

### Common Component Patterns
- All components extend appropriate HTML element props (e.g., `HTMLButtonElement` for buttons)
- Most components support `className` and `style` props for customization
- Form components typically include validation states (`errorMessage`, `helpMessage`)
- Interactive components support disabled states

## Component Reference

### 1. Button Components

#### NSButton
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'    // Default: 'primary'
  color?: 'brand' | 'neutral' | 'error' | 'success' | 'warning'  // Default: 'brand'
  size?: 'small' | 'medium' | 'large'               // Default: 'medium'
  icon?: grauityIconName                             // Optional icon
  iconSize?: grauityIconSizeName                     // Default: '20'
  iconPosition?: 'left' | 'right'                   // Default: 'left'
  disabled?: boolean                                 // Default: false
  loading?: boolean                                  // Default: false
  fullWidth?: boolean                                // Default: false
  type?: 'button' | 'submit' | 'reset'              // Default: 'button'
  showAnimationOnClick?: boolean                     // Default: true
  children: React.ReactNode
}
```

#### NSIconButton
```typescript
interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  color?: 'brand' | 'neutral' | 'error' | 'success' | 'warning'
  size?: 'small' | 'medium' | 'large'
  icon: grauityIconName                              // Required
  iconSize?: grauityIconSizeName
  disabled?: boolean
  loading?: boolean
  onClick?: (e?: any) => void
}
```

### 2. Typography

#### NSTypography
```typescript
interface TypographyProps {
  variant: TypographyVariantType                     // Required
  color?: string                                     // Custom color
  as?: any                                          // HTML element type
  textAlign?: string
  textTransform?: string
  fontSize?: string
  children: React.ReactNode
}

// Typography variants include:
// Display: 'display-bd-d1', 'display-bd-d2', 'display-bd-d3'
// Headings: 'heading-sb-h1' through 'heading-sb-h6'
// Paragraphs: 'paragraph-sb-p1' through 'paragraph-sb-p4', 'paragraph-md-p1' through 'paragraph-md-p4'
// Actions: 'action-sb-p1', 'action-sb-p2', 'action-sb-lk1'
```

### 3. Form Components

#### NSTextField
```typescript
interface TextFieldProps {
  name: string                                       // Required
  label?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute                      // Default: 'text'
  value?: string
  isRequired?: boolean                               // Default: false
  isDisabled?: boolean                               // Default: false
  isReadOnly?: boolean                               // Default: false
  errorMessage?: string
  helpMessage?: string
  size?: 'small' | 'medium' | 'large'              // Default: 'medium'
  adornments?: {
    start?: React.ReactNode
    end?: React.ReactNode
  }
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}
```

#### NSCheckbox
```typescript
interface CheckboxProps {
  name: string                                       // Required
  label?: string
  size?: 'small' | 'medium' | 'large'              // Default: 'medium'
  color?: 'brand' | 'success' | 'warning' | 'error' // Default: 'brand'
  isRequired?: boolean                               // Default: false
  isDisabled?: boolean                               // Default: false
  isChecked?: boolean                                // Default: false
  isIndeterminate?: boolean                          // Default: false
  value?: string | number
  helpMessage?: string
  errorMessage?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
```

#### NSDropdown
```typescript
interface DropdownProps {
  name: string                                       // Required
  label?: string
  placeholder?: string                               // Default: 'Select'
  isRequired?: boolean                               // Default: false
  isDisabled?: boolean                               // Default: false
  helpMessage?: string
  errorMessage?: string
  color?: 'brand' | 'success' | 'warning' | 'error' // Default: 'brand'
  showSelectedValueOnTrigger?: boolean               // Default: true
  trigger?: React.ReactNode                          // Custom trigger element
  items: BaseItemOptionProps[]                       // Dropdown items
  multiple?: boolean                                 // Enable multi-select
}
```

### 4. Data Display

#### NSTable
```typescript
interface TableProps {
  columns?: TableColumn[]                            // Table structure
  rows?: TableRow[]                                 // Table data
  condensed?: boolean                               // Default: true (reduced padding)
  striped?: boolean                                 // Default: false (alternating row colors)
  borderAround?: boolean                            // Default: true
  borderWithin?: boolean                            // Default: true
  hoverable?: boolean                               // Default: false
  loading?: boolean                                 // Default: false
  capitalizeHeaders?: boolean                       // Default: true
  highlightHeaders?: boolean                        // Default: true
}

interface TableColumn {
  key: string                                       // Required
  display: string                                   // Required
  width?: string
  align?: 'left' | 'right' | 'center'             // Default: 'center'
  rowSpan?: number                                  // Default: 1
  colSpan?: number                                  // Default: 1
}
```

### 5. Overlay Components

#### NSModal
```typescript
interface ModalProps {
  isOpen: boolean                                   // Required
  title?: React.ReactNode
  description?: string
  children?: React.ReactNode                        // Modal body content
  hideOnClickAway: boolean                         // Required
  blurBackground?: boolean                          // Default: false
  showCloseButton?: boolean                         // Default: false
  width?: string                                    // Default: '500px'
  height?: string                                   // Default: 'auto'
  maxWidth?: string                                 // Default: '95vw'
  maxHeight?: string                                // Default: '95vh'
  animatePresence?: false | 'slide' | 'slide-reverse' | 'fade' | 'emanate' // Default: 'fade'
  onClose?: () => void
}
```

#### NSAlert
```typescript
interface AlertProps {
  type?: 'default' | 'outlined' | 'filled'         // Default: 'default'
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'default' // Default: 'primary'
  icon?: grauityIconName | 'auto' | null            // Default: null
  title?: React.ReactNode
  description?: React.ReactNode
  showCloseButton?: boolean                         // Default: false
  actionButtons?: ButtonProps[]                     // Action buttons array
  inlineButtons?: boolean                           // Default: false
  maxWidth?: string                                 // Default: '440px'
  onClose?: () => void
}
```

### 6. Navigation

#### NSTab
```typescript
interface TabProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large' // Default: 'medium'
  variant?: 'rounded' | 'bordered'                  // Default: 'bordered'
  children?: React.ReactNode                        // Tab content
  subText?: React.ReactNode                         // Optional subtext
  icon?: grauityIconName                            // Optional icon
  iconSize?: grauityIconSizeName                    // Default: '20'
  iconPosition?: 'left' | 'right' | 'top' | 'bottom' // Default: 'left'
  isActive?: boolean                                // Default: false
  disabled?: boolean                                // Default: false
  onClick?: () => void
  ariaControls?: string                             // Associated tabpanel ID
}
```

### 7. Data Input

#### NSIcon
```typescript
interface IconProps {
  name: grauityIconName                             // Required
  size?: grauityIconSizeName                        // Icon size
  color?: string                                    // Custom color
  disabled?: boolean                                // Inactive state
  loading?: boolean                                 // Loading spinner
  flipped?: grauityFlippedChoiceName               // Flip direction
  rotated?: grauityRotatedChoiceName               // Rotation
  bordered?: boolean                                // Add border
  circular?: boolean                                // Circular background
  fitted?: boolean                                  // Remove margins
  link?: boolean                                    // Link styling
  inverted?: boolean                                // Invert colors
}
```

### 8. Calendar Components

#### NSCalendar (Unified Calendar)
```typescript
interface CalendarProps {
  events?: CalendarEvent[]                          // Calendar events
  view?: 'monthly' | 'weekly'                      // Calendar view type
}

interface CalendarEvent<T = {}> {
  id?: string | number
  title?: string
  start: Date                                       // Required
  end: Date                                         // Required
  allDay?: boolean
  render?: (event: CalendarEvent<T>) => React.ReactNode
  focused?: boolean
}
```

## Common Patterns and Best Practices

### 1. Form Field Pattern
Most form components follow this pattern:
- `name` (required) - field identifier
- `label` - descriptive label
- `isRequired` - validation requirement
- `isDisabled` - disabled state
- `errorMessage` - validation error
- `helpMessage` - helpful guidance
- `onChange` - value change handler

### 2. Size Variants
Standard size options across components:
- `small` - Compact size
- `medium` - Default size (most common)
- `large` - Larger size for emphasis

### 3. Color Usage Guidelines

#### Using Component Color Props
Components accept semantic color names that automatically map to appropriate CSS variables:

**For Action Components (Buttons, Form Fields, Interactive Elements):**
```jsx
// Brand color (primary blue) - default for most actions
<NSButton color="brand">Primary Action</NSButton>

// Success color (green) - for positive actions
<NSButton color="success">Save</NSButton>
<NSCheckbox color="success" />

// Warning color (orange) - for cautionary actions
<NSButton color="warning">Proceed with Caution</NSButton>

// Error color (red) - for destructive actions
<NSButton color="error">Delete</NSButton>
<NSTextField color="error" errorMessage="Invalid input" />
```

**For Typography Components:**
```jsx
// Primary text color (default dark gray)
<NSTypography color="primary">Main content</NSTypography>

// Secondary text color (lighter gray)
<NSTypography color="secondary">Supporting text</NSTypography>

// Brand color for emphasis
<NSTypography color="brand">Highlighted brand content</NSTypography>

// Semantic colors for status messages
<NSTypography color="success">Success message</NSTypography>
<NSTypography color="error">Error message</NSTypography>
```

#### Custom Color Usage
For advanced styling, use design tokens directly:

**Using Foundational Color Tokens:**
```jsx
// Direct color references for precise control
<div 
  style={{
    backgroundColor: 'var(--neutral-0)',
    border: '1px solid var(--neutral-300)',
    color: 'var(--neutral-900)'
  }}
>
  Using foundational tokens directly
</div>

// Brand color variations
<div className="brand-card">
  <NSTypography style={{ color: 'var(--brand-700)' }}>
    Dark Brand Text
  </NSTypography>
  <NSButton style={{ backgroundColor: 'var(--brand-100)' }}>
    Light Brand Button
  </NSButton>
</div>
```

**Using Semantic Color Variables:**
```jsx
// Modern semantic approach (recommended)
<NSTypography 
  style={{ 
    color: 'var(--text-emphasis-brand-default)',
    backgroundColor: 'var(--bg-subtle-brand-default)'
  }}
>
  Semantic color styling
</NSTypography>

// Legacy semantic approach (for compatibility)
<div 
  style={{
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border)'
  }}
>
  Legacy semantic styling
</div>
```

**Complete Design Token Usage:**
```jsx
// Comprehensive styling with all design tokens
<div 
  className="custom-card"
  style={{
    // Colors
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border)',
    
    // Spacing
    padding: 'var(--spacing-24px)',
    margin: 'var(--spacing-16px)',
    gap: 'var(--spacing-12px)',
    
    // Typography
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-size-16px)',
    fontWeight: 'var(--font-weight-450)',
    
    // Border radius
    borderRadius: 'var(--corner-radius-12px)',
    
    // Z-index (if needed)
    position: 'relative',
    zIndex: 'var(--z-index-dropdown)'
  }}
>
  <NSTypography 
    variant="heading-sb-h3"
    style={{ 
      color: 'var(--brand-600)',
      marginBottom: 'var(--spacing-8px)'
    }}
  >
    Card Title
  </NSTypography>
  
  <NSTypography 
    variant="paragraph-md-p1"
    style={{ 
      color: 'var(--text-secondary)',
      marginBottom: 'var(--spacing-16px)'
    }}
  >
    Card description with proper spacing and typography.
  </NSTypography>
  
  <NSButton 
    style={{
      backgroundColor: 'var(--success-500)',
      borderRadius: 'var(--corner-radius-8px)',
      padding: 'var(--spacing-12px) var(--spacing-20px)'
    }}
  >
    Action Button
  </NSButton>
</div>

/* CSS Class Approach */
.custom-card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--corner-radius-12px);
  padding: var(--spacing-24px);
  font-family: var(--font-family);
}

.custom-card:hover {
  background-color: var(--bg-secondary);
  border-color: var(--border-brand);
}

/* State-based styling */
.custom-card.success {
  background-color: var(--success-0);
  border-color: var(--success-300);
  color: var(--success-700);
}

.custom-card.error {
  background-color: var(--error-0);
  border-color: var(--error-300);
  color: var(--error-700);
}
```

#### Color Mapping Reference

**Component Props to Design Tokens:**
| Component Prop | Modern CSS Variable | Legacy CSS Variable | Foundational Token | Use Case |
|---|---|---|---|---|
| `color="brand"` | `--*-emphasis-brand-*` | `--*-brand` | `--brand-500` | Primary brand actions |
| `color="success"` | `--*-emphasis-success-*` | `--*-success` | `--success-500` | Positive actions/feedback |
| `color="warning"` | `--*-emphasis-warning-*` | `--*-warning` | `--warning-500` | Cautionary actions |
| `color="error"` | `--*-emphasis-error-*` | `--*-error` | `--error-500` | Destructive actions/errors |
| `color="primary"` (text) | `--text-emphasis-primary-*` | `--text-primary` | `--neutral-900` | Main content |
| `color="secondary"` (text) | `--text-moderate-secondary-*` | `--text-secondary` | `--neutral-600` | Supporting content |

**Design Token Categories:**
| Token Category | Purpose | Example Variables |
|---|---|---|
| **Foundational** | Raw color values | `--brand-500`, `--neutral-900`, `--success-400` |
| **Semantic (Modern)** | Theme-aware, follows naming convention | `--bg-emphasis-brand-default`, `--text-subtle-primary-hover` |
| **Legacy** | Backward compatibility | `--text-primary`, `--bg-brand`, `--border-success` |
| **Spacing** | Layout and spacing | `--spacing-16px`, `--spacing-24px` |
| **Typography** | Text styling | `--font-size-16px`, `--font-weight-450` |
| **Border Radius** | Corner styling | `--corner-radius-8px`, `--corner-radius-50percent` |
| **Z-Index** | Layer management | `--z-index-modal`, `--z-index-tooltip` |

**Color Intensity Guide:**
| Intensity Level | Number Range | Use Case | Example |
|---|---|---|---|
| **0-100** | Lightest tints | Backgrounds, subtle highlights | `--brand-0`, `--success-100` |
| **200-300** | Light colors | Secondary backgrounds, disabled states | `--neutral-200`, `--error-300` |
| **400-500** | Primary colors | Main component colors, default states | `--brand-500`, `--warning-400` |
| **600-700** | Dark colors | Text on light backgrounds, emphasis | `--neutral-700`, `--success-600` |
| **800-900** | Darkest shades | High contrast text, deep backgrounds | `--neutral-900`, `--brand-800` |

#### Dark Mode Considerations
All color variables automatically adapt to theme changes:
```jsx
// These components will automatically adapt to light/dark themes
<GrauityThemeProvider theme="dark">
  <NSButton color="brand">Works in dark mode</NSButton>
  <NSTypography color="primary">Adapts to dark theme</NSTypography>
</GrauityThemeProvider>
```

### 4. State Management
Components support common states:
- `disabled` - Non-interactive state
- `loading` - Loading state with spinner
- `isActive` - Active/selected state
- `isOpen` - Open/expanded state (for overlays)

## Few-Shot Examples

### Example 1: Basic Button Usage
```jsx
// Simple primary button
<NSButton onClick={handleClick}>
  Save Changes
</NSButton>

// Secondary button with icon
<NSButton 
  variant="secondary" 
  icon="user-plus" 
  iconPosition="left"
>
  Add User
</NSButton>

// Icon-only button
<NSIconButton 
  icon="settings" 
  variant="tertiary" 
  onClick={openSettings}
/>
```

### Example 2: Form with Validation
```jsx
<form>
  <NSTextField
    name="email"
    label="Email Address"
    type="email"
    isRequired
    placeholder="Enter your email"
    errorMessage={errors.email}
    onChange={handleEmailChange}
  />
  
  <NSCheckbox
    name="newsletter"
    label="Subscribe to newsletter"
    isChecked={subscribeToNewsletter}
    onChange={handleNewsletterChange}
  />
  
  <NSButton type="submit" loading={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </NSButton>
</form>
```

### Example 3: Data Table
```jsx
<NSTable
  columns={[
    { key: 'name', display: 'Name', width: '200px' },
    { key: 'email', display: 'Email', width: '300px' },
    { key: 'role', display: 'Role', align: 'center' }
  ]}
  rows={users.map(user => ({
    name: { display: user.name },
    email: { display: user.email },
    role: { display: user.role }
  }))}
  hoverable
  striped
/>
```

### Example 4: Modal Dialog
```jsx
<NSModal
  isOpen={showModal}
  title="Confirm Action"
  description="Are you sure you want to delete this item?"
  hideOnClickAway={false}
  showCloseButton
  onClose={handleCloseModal}
>
  <div style={{ marginTop: '20px' }}>
    <NSButton 
      variant="primary" 
      color="error" 
      onClick={handleConfirm}
      style={{ marginRight: '10px' }}
    >
      Delete
    </NSButton>
    <NSButton 
      variant="secondary" 
      onClick={handleCloseModal}
    >
      Cancel
    </NSButton>
  </div>
</NSModal>
```

### Example 5: Alert Messages
```jsx
// Success alert with action
<NSAlert
  variant="success"
  icon="auto"
  title="Operation Successful"
  description="Your changes have been saved successfully."
  showCloseButton
  actionButtons={[
    { 
      children: 'View Details', 
      variant: 'tertiary',
      onClick: handleViewDetails 
    }
  ]}
  onClose={handleDismissAlert}
/>

// Error alert
<NSAlert
  variant="error"
  type="outlined"
  title="Validation Error"
  description="Please check the form fields and try again."
  showCloseButton
/>
```

### Example 6: Typography Hierarchy
```jsx
<div>
  <NSTypography variant="display-bd-d1" as="h1">
    Page Title
  </NSTypography>
  
  <NSTypography variant="heading-sb-h2" as="h2">
    Section Heading
  </NSTypography>
  
  <NSTypography variant="paragraph-md-p1">
    This is body text with medium weight and standard size.
  </NSTypography>
  
  <NSTypography 
    variant="action-sb-lk1" 
    as="button" 
    onClick={handleLinkClick}
  >
    Click here for more info
  </NSTypography>
</div>
```

### Example 7: Dropdown Selection
```jsx
<NSDropdown
  name="category"
  label="Select Category"
  placeholder="Choose a category"
  isRequired
  items={[
    { key: 'tech', display: 'Technology' },
    { key: 'design', display: 'Design' },
    { key: 'marketing', display: 'Marketing' }
  ]}
  onSelectionChange={handleCategoryChange}
  errorMessage={errors.category}
/>
```

### Example 8: Color Usage Patterns
```jsx
// Action buttons with semantic colors
<div className="button-group">
  <NSButton color="brand">Primary Action</NSButton>
  <NSButton color="success" icon="check">Save Changes</NSButton>
  <NSButton color="warning" variant="secondary">Draft</NSButton>
  <NSButton color="error" variant="tertiary">Delete</NSButton>
</div>

// Form validation with colors
<form>
  <NSTextField
    name="username"
    label="Username"
    color="brand"
    value={username}
    onChange={handleUsernameChange}
  />
  
  <NSTextField
    name="email"
    label="Email"
    color="error"
    value={email}
    errorMessage="Please enter a valid email"
    onChange={handleEmailChange}
  />
  
  <NSCheckbox
    name="terms"
    label="I agree to the terms and conditions"
    color="success"
    isChecked={acceptedTerms}
    onChange={handleTermsChange}
  />
</form>

// Status messages with typography colors
<div className="status-messages">
  <NSTypography variant="paragraph-sb-p2" color="success">
    ✓ Account created successfully
  </NSTypography>
  
  <NSTypography variant="paragraph-md-p2" color="warning">
    ⚠ Please verify your email address
  </NSTypography>
  
  <NSTypography variant="paragraph-md-p2" color="error">
    ✗ Failed to save changes
  </NSTypography>
  
  <NSTypography variant="paragraph-md-p1" color="secondary">
    Last updated 2 minutes ago
  </NSTypography>
</div>

// Advanced design token usage
<div 
  style={{
    backgroundColor: 'var(--bg-subtle-brand-default)',
    border: '1px solid var(--border-subtle-brand-default)',
    borderRadius: 'var(--corner-radius-12px)',
    padding: 'var(--spacing-20px)',
    margin: 'var(--spacing-16px)',
    fontFamily: 'var(--font-family)'
  }}
>
  <NSTypography 
    variant="heading-sb-h3"
    style={{ 
      color: 'var(--text-emphasis-brand-default)',
      marginBottom: 'var(--spacing-12px)',
      fontSize: 'var(--font-size-24px)',
      fontWeight: 'var(--font-weight-600)'
    }}
  >
    Design System Card
  </NSTypography>
  
  <NSTypography 
    variant="paragraph-md-p1"
    style={{ 
      color: 'var(--text-moderate-primary-default)',
      marginBottom: 'var(--spacing-16px)',
      lineHeight: '1.5'
    }}
  >
    This demonstrates comprehensive design token usage with proper spacing, 
    typography, and color systems.
  </NSTypography>

  {/* Status indicators using foundational tokens */}
  <div style={{ display: 'flex', gap: 'var(--spacing-8px)' }}>
    <span 
      style={{
        backgroundColor: 'var(--success-100)',
        color: 'var(--success-700)',
        padding: 'var(--spacing-4px) var(--spacing-8px)',
        borderRadius: 'var(--corner-radius-4px)',
        fontSize: 'var(--font-size-12px)',
        fontWeight: 'var(--font-weight-500)'
      }}
    >
      Active
    </span>
    <span 
      style={{
        backgroundColor: 'var(--warning-100)',
        color: 'var(--warning-700)',
        padding: 'var(--spacing-4px) var(--spacing-8px)',
        borderRadius: 'var(--corner-radius-4px)',
        fontSize: 'var(--font-size-12px)',
        fontWeight: 'var(--font-weight-500)'
      }}
    >
      Pending
    </span>
  </div>
</div>
```

## Key Implementation Notes

1. **Import Pattern**: Always import components from the main library: `import { NSButton } from '@gravity/ui'`

2. **Required Props**: Pay attention to required props (marked in interface). Missing required props will cause TypeScript errors.

3. **Event Handlers**: Most event handlers follow React's standard event signature patterns.

4. **Styling**: Use `className` for CSS classes and `style` for inline styles. The library provides design tokens through CSS variables following the `--<category>-<intensity>-<name>-<state>` pattern.

5. **Color Usage**: 
   - Use semantic color props (`brand`, `success`, `warning`, `error`) for component colors
   - Use CSS variables (e.g., `var(--text-emphasis-primary-default)`) for custom styling
   - All colors automatically adapt to light/dark themes
   - Follow the color mapping reference for consistent color usage across components

6. **Accessibility**: Components include built-in ARIA attributes. Use additional props like `ariaLabel`, `ariaControls` when needed.

7. **Form Integration**: Form components work well with form libraries like React Hook Form or Formik through standard props like `name`, `value`, `onChange`.

8. **Theming**: Components automatically adapt to light/dark themes when wrapped in `GrauityThemeProvider`.

This guide covers the most commonly used components. For specific implementation details or edge cases, refer to the individual component type definitions in the codebase.