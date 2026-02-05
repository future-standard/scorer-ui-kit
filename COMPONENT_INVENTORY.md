# Scorer UI Kit - Component Inventory

**Generated:** 2026-02-04  
**Source:** ui-lib/src & storybook/src/stories

This document provides a comprehensive inventory of all React components in the Scorer UI Kit to be used by human and AI, organized alphabetically with their corresponding Storybook documentation status, file paths, props, and notable features.

## Legend
- ✅ **Has Storybook Documentation**
- ❌ **No Storybook Documentation**

---

## Component Inventory

### ActionsBar
- **Status:** ✅ Has Storybook (via TypeTable stories)
- **Component Path:** `ui-lib/src/Misc/atoms/ActionsBar.tsx`
- **Story Path:** `storybook/src/stories/Tables/organisms/TableMultiActions.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `title?`: `string` - Actions bar title (default: 'Actions:')
  - `finishTextButton?`: `string` - Finish button text (default: 'Finish')
  - `actionButtons?`: `IActionsButton[]` - Array of action button configurations (extends `IButtonWithIcon` with `text: string`)
  - `selectedTemplate?`: `string` - Template string for selected count (default: 'Selected [SELECTED] of [TOTAL] Results')
  - `totalSelected?`: `number` - Number of selected items (default: 0)
  - `totalAvailable?`: `number` - Total number of available items (default: 0)
  - `finishCallback?`: `() => void` - Callback when finish button is clicked
- **Notable Features:**
  - Renders a bar with multiple action buttons in the left side plus a `Finish` button in the right side of the screen.
  - Used for bulk actions in tables and lists when selecting checkboxes in rows
  - Displays selected item count with customizable template

---

### ActionButtons
- **Status:** ✅ Has Storybook (via TypeTable stories)
- **Component Path:** `ui-lib/src/Form/molecules/ActionButtons.tsx`
- **Story Path:** `storybook/src/stories/Tables/molecules/ActionsTable.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `buttonsConfig`: `IconButtonData[]` - Array of icon button configurations (required)
    - Each `IconButtonData` includes:
      - `icon`: `string` - Icon name (required)
      - `size?`: `number` - Icon size (default: 20)
      - `weight?`: `IWeight` - Icon weight (default: 'regular')
      - `color?`: `ISvgIcons['color']` - Icon color (default: 'dimmed')
      - `hoverColor?`: `string` - Hover color (default: 'mono')
      - Plus all `ButtonHTMLAttributes<HTMLButtonElement>` (onClick, disabled, etc.)
  - `alignment?`: `'left' | 'center' | 'right'` - Button alignment (default: 'right')
- **Notable Features:**
  - Uses IconButton component
  - Provides action buttons for table rows
  - Configurable alignment
  - Integrated with TypeTable component

---

### AlertBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Alerts/atom/AlertBar.tsx`
- **Story Path:** `storybook/src/stories/Alerts/AlertBar.stories.tsx`
- **Exported From:** `Alerts`
- **Props:**
  - `type?`: `AlertType` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) - Alert type (default: 'info')
  - `message?`: `string` - Alert message text
  - `hideCloseButton?`: `boolean` - Whether to hide close button (default: false)
- **Notable Features:**
  - Displays inline alert messages
  - Color-coded by type
  - Optional close button
  - Auto-dismisses when message changes
  - Returns null when no message or dismissed

---

### AreaUploadManager
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/organisms/AreaUploadManager.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/AreaUploadManager.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `title?`: `string` - Upload area title (default: 'Select Files')
  - `description?`: `string` - Description text shown below title
  - `fileIcons?`: `string[]` - Array of icon names to display
  - `selectFilesText?`: `string` - Select files button text (default: 'Select Files')
  - `addMoreFilesText?`: `string` - Add more files button text (default: 'Add More Files')
  - `clearFilesText?`: `string` - Clear files button text (default: 'Clear Files')
  - `beginUploadText?`: `string` - Begin upload button text (default: 'Begin Upload')
  - `allowedFileTypes?`: `string[]` - Array of allowed MIME types (e.g., ['image/png', 'image/jpeg'])
  - `customComponent?`: `ReactElement` - Custom component to replace default content
  - `onChangeCallback?`: `(goodFiles: FileList, rejectedFiles: FileList) => void` - Callback when files are added/changed
  - `clearFilesCallback?`: `() => void` - Callback when clear files button is clicked
  - `beginUploadCallback?`: `() => void` - Callback when begin upload button is clicked
- **Notable Features:**
  - Drag-and-drop file upload
  - Multiple file support
  - File type validation with rejected files tracking
  - Duplicate file prevention
  - Customizable text labels
  - Optional custom component replacement
  - Three-button interface (add/upload/clear)

---

### AvatarUploader
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/organisms/AvatarUploader.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/AvatarUploader.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `title?`: `string` - Uploader title (default: 'Photograph')
  - `photoText?`: `string` - Drop zone placeholder text (default: 'Drop Photo')
  - `buttonText?`: `string` - Initial select button text (default: 'Select File')
  - `buttonTextReplace?`: `string` - Replace button text (default: 'Replace Photo')
  - `cropToolTitle?`: `string` - Crop modal title
  - `cropToolCancelTxt?`: `string` - Crop modal cancel button text
  - `cropToolConfirmTxt?`: `string` - Crop modal confirm button text
  - `uploaderCropText?`: `string` - Crop button text (default: 'Crop Image')
  - `deletePhotoText?`: `string` - Delete button text (default: 'Remove')
  - `currentImg?`: `string` - Current image URL
  - `hasCrop?`: `boolean` - Enable crop functionality (default: true)
  - `onAvatarUpdate?`: `(imgFile: File) => void` - Callback when avatar is updated
  - `onError?`: `(msg: string) => void` - Error callback with message
  - `onRemove?`: `() => void` - Callback when avatar is removed
- **Notable Features:**
  - Avatar/profile photo upload
  - Integrated crop tool with configurable aspect ratio
  - Drag-and-drop support
  - Image preview with placeholder
  - Remove/replace functionality
  - Single file validation
  - Image type validation (JPEG/PNG)

---

### BasicSearchInput
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/atoms/BasicSearchInput.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/BasicSearchInput.stories.tsx`
- **Exported From:** `Misc`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `color?`: `'mono' | 'dimmed' | 'subtle'` - Color scheme (default: 'subtle')
  - `hasBorder?`: `boolean` - Show border (default: true)
  - `iconSize?`: `number` - Search icon size (default: 12)
  - `disabled?`: `boolean` - Disabled state (default: false)
  - `noBackground?`: `boolean` - Remove background (default: false)
  - `width?`: `string` - Custom width
  - `hasCrossButton?`: `boolean` - Show clear button (default: false)
  - `onCrossClick?`: `() => void` - Clear button click handler
  - Plus all standard HTML input attributes (`placeholder`, `value`, `onChange`, etc.)
- **Notable Features:**
  - Simple search input with icon
  - Customizable styling
  - Optional clear button
  - Lightweight and performant

---

### Button
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/Button.tsx`
- **Story Path:** `storybook/src/stories/Form/Buttons/Button.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `ButtonHTMLAttributes<HTMLButtonElement>`)
  - `size?`: `TypeButtonSizes` (`'xsmall' | 'small' | 'normal' | 'large'`) - Button size (default: 'normal')
  - `design?`: `TypeButtonDesigns` (`'primary' | 'secondary' | 'warning' | 'danger' | 'text-only' | 'outline'`) - Button style (default: 'primary')
  - `shadow?`: `boolean` - Add shadow effect (default: false)
  - `noPadding?`: `boolean` - Remove padding (default: false)
  - `loading?`: `boolean` - Loading state (default: false)
  - Plus all standard HTML button attributes (`children`, `onClick`, `disabled`, `type`, etc.)
- **Notable Features:**
  - Multiple design variants
  - Size options
  - Shadow effect option
  - Loading state support
  - Full accessibility support

---

### ButtonsStack
- **Status:** ✅ Has Storybook (via PageHeader)
- **Component Path:** `ui-lib/src/Form/molecules/ButtonsStack.tsx`
- **Story Path:** `storybook/src/stories/Pages/PageHeader.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `buttons`: `IButtonStack[]` - Array of button configurations (required)
    - Each `IButtonStack` extends extends `IButtonProps` which extends `ButtonHTMLAttributes<HTMLButtonElement>` and includes:
      - `id?`: `string` - Button identifier
      - `buttonType?`: `IButtonType` (`'default' | 'icon-button'`) - Button type
      - `icon?`: `string` - Icon name (for icon-button type)
      - `iconPosition?`: `'left' | 'right'` - Icon position (for icon-button type)
      - `text`: `string` - Button text (required)
      - Plus all `IButtonProps` properties (`size`, `design`, `onClick`, `disabled`, etc.)
- **Notable Features:**
  - Stacks multiple buttons vertically with 8px gap
  - Supports both regular buttons and icon buttons
  - Default size is 'small' for all buttons
  - Text wrapping disabled (nowrap)
  - Used in page headers and forms

---

### ButtonWithIcon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/ButtonWithIcon.tsx`
- **Story Path:** `storybook/src/stories/Form/Buttons/ButtonWithIcons.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `IButtonProps` which extends `ButtonHTMLAttributes<HTMLButtonElement>`)
  - `icon`: `string` - Icon name (required)
  - `position?`: `'left' | 'right'` - Icon position (default: 'left')
  - `shadow?`: `boolean` - Add shadow effect (default: false)
  - `weight?`: `IWeight` (`'light' | 'regular' | 'heavy' | 'strong'`) - Icon weight (default: 'regular')
  - `size?`: `TypeButtonSizes` - Button size (default: 'normal')
  - `design?`: `TypeButtonDesigns` - Button design (default: 'primary')
  - `loading?`: `boolean` - Loading state (default: false)
  - Plus all standard HTML button attributes
- **Notable Features:**
  - Button with icon support
  - Icon positioning (left/right)
  - Loading state with spinner
  - Configurable icon weight
  - Inherits all Button features

---

### ButtonWithLoading
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/ButtonWithLoading.tsx`
- **Story Path:** `storybook/src/stories/Form/Buttons/ButtonWithLoading.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `IButtonProps` which extends `ButtonHTMLAttributes<HTMLButtonElement>`)
  - `position?`: `'left' | 'right'` - Spinner position (default: right)
  - `shadow?`: `boolean` - Add shadow effect (default: false)
  - `design?`: `TypeButtonDesigns` - Button design (default: 'primary')
  - `size?`: `TypeButtonSizes` - Button size (default: 'normal')
  - `loading?`: `boolean` - Loading state (default: false)
  - Plus all standard HTML button attributes (`onClick`, `disabled`, `children`, etc.)
- **Notable Features:**
  - Button with loading spinner
  - Configurable spinner position (left/right)
  - Automatically disabled during loading
  - Smooth transitions with easing
  - Spinner size adapts to button size

---

### CameraPanels
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/CameraPanels/organisms/CameraPanels.tsx`
- **Story Path:** `storybook/src/stories/CameraPanels/organisms/CameraPanels.stories.tsx`
- **Exported From:** `CameraPanels`
- **Props:**
  - `panels`: `ICameraPanel[]` - Array of camera panel configurations (required)
    - Each `ICameraPanel` includes:
      - `streamProps`: `IMediaStream` - Media stream configuration (required)
        - Extends `IMediaModal` (media source, type, alt, controls, etc.)
        - `isEmptyWithIcon?`: `boolean` - Show empty state with icon (default: false)
        - `emptyIcon?`: `string` - Icon for empty state (default: 'PasswordHide')
        - `status?`: `IFeedbackColor` - Status line color (default: 'neutral')
        - `noticeMessage?`: `string` - Notice message text
        - `noticeTitle?`: `string` - Notice title text
        - `noticeIcon?`: `string` - Notice icon name
        - `hasNotice?`: `boolean` - Show notice overlay (default: false)
      - `panelMetaData?`: `IPanelMetaData` - Panel metadata
        - `deviceIcon?`: `string` - Device icon (default: 'Camera')
        - `leftSubTitle?`: `string` - Left subtitle text
        - `leftTitle?`: `string` - Left title text
        - `rightTitle?`: `string` - Right title text
        - `rightSubTitle?`: `string` - Right subtitle text
        - `hideIcon?`: `boolean` - Hide device icon (default: false)
      - `customBottom?`: `ReactElement` - Custom bottom component (replaces metadata)
      - `panelOnClick?`: `() => void` - Panel click handler
- **Notable Features:**
  - Grid layout for camera feeds
  - Auto-fill grid with 300px panels (300x230px each)
  - 20px gap between panels
  - Status line indicator per panel
  - Notice overlay support with icon and message
  - Custom bottom component support
  - Click handler support per panel
  - Metadata display with device icon and titles

---

### Checkbox
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/Checkbox.tsx`
- **Story Path:** `storybook/src/stories/Form/Checkbox.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `checked?`: `boolean` - Checked state (default: false)
  - `disabled?`: `boolean` - Disabled state
  - `indeterminate?`: `boolean` - Indeterminate state (default: false)
  - `onChangeCallback?`: `(checked: boolean, indeterminate?: boolean) => void` - Change handler
- **Notable Features:**
  - Custom styled checkbox
  - Supports indeterminate state
  - Controlled/uncontrolled modes
  - Accessibility compliant
  - Visual state management (on/off/indeterminate)

---

### ConfirmationModal
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Modals/ConfirmationModal.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Modals/ConfirmationModal.stories.tsx`
- **Exported From:** `Modals`
- **Props:**
  - `title?`: `string` - Modal title (default: '')
  - `message`: `string` - Confirmation message (required, default: '')
  - `leftButtonText?`: `string` - Left button text (default: 'submit')
  - `leftButtonDesign?`: `TypeButtonDesigns` - Left button design (default: 'primary')
  - `leftButtonCallback?`: `() => void` - Left button callback
  - `rightButtonText?`: `string` - Right button text (default: 'cancel')
  - `rightButtonDesign?`: `TypeButtonDesigns` - Right button design (default: 'secondary')
  - `rightButtonCallback?`: `() => void` - Right button callback
- **Notable Features:**
  - Two-button confirmation dialog
  - Customizable button styles
  - Auto-closes modal on button click
  - Uses useModal hook for state management

---

### ContentLayout
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Layouts/organisms/ContentLayout.tsx`
- **Story Path:** `storybook/src/stories/Global/organisms/ContentLayout.stories.tsx`
- **Exported From:** `Layouts`
- **Props:**
  - `layout?`: `'default' | 'fullscreen' | 'dashboard'` - Layout type (default: 'default')
  - `HeaderContent?`: `IHeaderContent` - Header configuration object (default: {})
    - `UtilityHeaderOptions?`: `IUtilityHeader` - Utility header configuration
      - `$iconInGutter?`: `boolean` - Position icon in gutter
      - `showBreadcrumbs?`: `boolean` - Show breadcrumb navigation
      - `showHomeIcon?`: `boolean` - Show home icon
      - `breadcrumbs?`: `IBreadcrumb[]` - Breadcrumb items (text, href?, onClick?)
      - `back?`: `IUtilityHeaderLinkBack` - Back link configuration (show?, link?, label?, onClick?)
      - `share?`: `IUtilityHeaderLinkShare` - Share link configuration (show?, link?, label?, copiedLabel?)
    - `PageHeaderArea?`: `ReactNode | React.FC` - Page header content
    - `TabsElementArea?`: `ReactNode | React.FC` - Tabs navigation content
  - `children`: `ReactNode` - Main content
- **Notable Features:**
  - Main content layout wrapper with max-width constraint
  - Three layout types (default, fullscreen, dashboard)
  - Optional utility header with breadcrumbs and back/share links
  - Optional page header area
  - Optional tabs area with automatic Tabs wrapper
  - CSS variable-based padding (--content-layout-padding-*)
  - Responsive design with flexible content area

---

### Controls (PTZ)
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/PTZControl/organisms/Controls.tsx`
- **Story Path:** N/A
- **Example Page Path:** `/Users/isa/Dev/FS/scorer-ui-kit-before-npm/scorer-ui-kit/packages/example/src/pages/PTZPage.tsx`
- **Exported From:** `PTZControl`
- **Props:**
  - `debug?`: `boolean` - Show debug state output (default: false)
- **Notable Features:**
  - Pan-Tilt-Zoom camera controls
  - Directional controls (Up, Down, Left, Right components)
  - Zoom controls (ZoomIn, ZoomOut components)
  - Uses PTZContext from PTZProvider for state management
  - Optional debug mode displays current PTZ state as JSON
  - Composed of Base and ZoomBase molecules with atomic control components

---

### CropTool
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/CropTool.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/CropTool.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `imgUrl`: `string` (required) - Image URL to crop
  - `canvasHeight`: `number` (required) - Height of the canvas
  - `canvasWidth`: `number` (required) - Width of the canvas
  - `title?`: `string` - Modal title
  - `cancelBtnTxt?`: `string` - Cancel button text
  - `cropBtnTxt?`: `string` - Crop button text
  - `isResizable?`: `boolean` - Whether crop area is resizable
  - `cropHeight?`: `number` - Initial crop area height
  - `cropWidth?`: `number` - Initial crop area width
  - `aspectRatio?`: `number` - Aspect ratio for crop area
  - `onCrop?`: `(newFileUrl: string, fileType: string) => void` - Callback when crop is confirmed
  - `onClose?`: `() => void` - Callback when modal is closed
  - `onError?`: `(msg: string) => void` - Callback for error handling
- **Notable Features:**
  - Image cropping interface rendered as React portal
  - Drag to reposition crop area
  - Resizable crop area (when isResizable is true)
  - Aspect ratio lock support
  - Canvas-based image manipulation
  - Returns cropped image as data URL with file type
  - Error handling callback
---

### DatePicker
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/DatePicker.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/DatePicker.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `initialValue?`: `Date | IDateInterval` - Initial date or date range value
  - `dateMode?`: `'single' | 'interval'` - Date selection mode (default: 'interval')
  - `timeMode?`: `'off' | 'single' | 'interval'` - Time selection mode (default: 'interval')
  - `hasEmptyValue?`: `boolean` - Allow empty/null initial value (default: false)
  - `dateTimeTextUpper?`: `string` - Label for start date/time (default: 'From')
  - `dateTimeTextLower?`: `string` - Label for end date/time (default: 'To')
  - `timeZoneTitle?`: `string` - Timezone label (default: 'Timezone')
  - `timeZoneValueTitle?`: `string` - Timezone value display (default: 'JST')
  - `availableRange?`: `IDateRange` - Available date range constraints
    - `start`: `Date | null` - Earliest selectable date
    - `end`: `Date | null` - Latest selectable date
  - `contentDays?`: `Date[]` - Days to mark with content indicator dot
  - `lang?`: `'en' | 'ja'` - Language for calendar (default: 'en')
  - `cancelText?`: `string` - Cancel button text (default: 'Cancel')
  - `applyText?`: `string` - Apply button text (default: 'Apply')
  - `hasApply?`: `boolean` - Show apply/cancel buttons (default: false)
  - `disableApply?`: `boolean` - Disable apply button (default: false)
  - `updateCallback?`: `(data: IDateInterval | Date) => void` - Callback on date selection change
    - Returns `IDateInterval` (start: Date, end: Date) in interval mode
    - Returns `Date` in single mode
  - `applyCallback?`: `() => void` - Callback when apply button clicked
  - `cancelCallback?`: `() => void` - Callback when cancel button clicked
- **Notable Features:**
  - Date range or single date picker
  - Calendar interface with month/year navigation
  - Time selection support (off/single/interval modes)
  - Localization support (EN/JA)
  - Content indicator dots for specific days
  - Optional apply/cancel buttons
  - Date range constraints
  - Time range validation (prevents invalid time ranges)
  - Timezone display
  - Visual states for selected, start, end, inside range, and today
  - Drag selection for date ranges
  - DateTimeBlock components for precise time input

---

### DebouncedSearcher
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/molecules/DebouncedSearcher.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/DebouncedSearcher.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `placeholder`: `string` - Input placeholder
  - `onSearch`: `(value: string) => void` - Search callback
  - `debounceMs`: `number` - Debounce delay (default: 300ms)
  - `minChars`: `number` - Minimum characters to trigger search
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Debounced search input
  - Configurable delay
  - Minimum character threshold
  - Clear button
  - Loading indicator option

---

### DropArea
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/DropArea.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/DropArea.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `onDrop`: `(files: File[]) => void` - Drop callback
  - `accept`: `string` - Accepted file types
  - `multiple`: `boolean` - Allow multiple files
  - `text`: `string` - Drop zone text
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Drag-and-drop file upload
  - Visual feedback on drag over
  - File type validation
  - Multiple file support
  - Click to browse alternative

---

### DurationSlider
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/DurationSlider.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/DurationSlider.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `value`: `number` - Current value
  - `onChange`: `(value: number) => void` - Change handler
  - `min`: `number` - Minimum value
  - `max`: `number` - Maximum value
  - `unit`: `'seconds' | 'minutes' | 'hours'` - Time unit
  - `disabled`: `boolean` - Disabled state
  - `label`: `string` - Label text
- **Notable Features:**
  - Time duration slider
  - Multiple time units
  - Value display with unit
  - Custom min/max ranges

---

### EditCell
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tables/molecules/EditCell.tsx`
- **Story Path:** `storybook/src/stories/Tables/atoms/EditableCell.stories.tsx`
- **Exported From:** `Tables`
- **Props:**
  - `value`: `string | number` - Cell value
  - `onSave`: `(value: string | number) => void` - Save callback
  - `type`: `'text' | 'number'` - Input type
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Inline editable table cell
  - Click to edit
  - Save/cancel actions
  - Validation support
  - Loading state during save

---

### FilterBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/organisms/FilterBar.tsx`
- **Story Path:** `storybook/src/stories/Filters/organisms/FilterBar.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `filters`: `IFilterDropdownConfig[]` - Filter configurations
  - `onFilterChange`: `(filters: IFilterResult[]) => void` - Change handler
  - `language`: `'en' | 'ja'` - Language
  - `searchConfig`: `ISearchFilter` - Search configuration
  - `sortConfig`: Sort configuration
  - `layoutConfig`: Layout configuration
- **Notable Features:**
  - Complete filter bar with multiple filter types
  - Search integration
  - Sort dropdown
  - Layout toggle
  - Filter results display
  - Clear all filters
  - Responsive design

---

### FilterButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/atoms/FilterButton.tsx`
- **Story Path:** `storybook/src/stories/Filters/atoms/FilterButton.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `text`: `string` - Button text
  - `icon`: `IconSVGs` - Icon name
  - `isOpen`: `boolean` - Open state
  - `disabled`: `boolean` - Disabled state
  - `design`: `'default' | 'active'` - Design type
  - `hasFlipArrow`: `boolean` - Show dropdown arrow
  - `onClick`: `() => void` - Click handler
- **Notable Features:**
  - Filter dropdown trigger button
  - Icon support
  - Active state styling
  - Dropdown arrow indicator
  - Badge support for active filters

---

### FilterDropdown
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterDropdown.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterDropdownExamples.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `options`: Array of filter options
  - `selectedValues`: Array of selected values
  - `onChange`: `(values: IFilterValue[]) => void` - Change handler
  - `optionType`: `'checkbox' | 'radio' | 'text'` - Option type
  - `isLoading`: `boolean` - Loading state
  - `loadingText`: `string` - Loading message
  - `maxDisplayedItems`: `number` - Max visible items
  - `language`: `'en' | 'ja'` - Language
- **Notable Features:**
  - Dropdown filter with multiple option types
  - Checkbox/radio/text options
  - Search within options
  - Loading state
  - Scrollable list
  - Footer with apply/clear buttons
  - Multi-select support

---

### FilterDropdownContainer
- **Status:** ✅ Has Storybook (via Datepicker story)
- **Component Path:** `ui-lib/src/Filters/atoms/FilterDropdownContainer.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/DatePicker.stories.tsx`
- **Exported From:** `Filters`
- **Notable Features:**
  - Container for filter dropdown content
  - Positioning and styling wrapper

---

### FilterInputs
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterInputs.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterInputs.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `filters`: `IFilterItem[]` - Active filters
  - `onFilterChange`: `(filters: IFilterItem[]) => void` - Change handler
  - `language`: `'en' | 'ja'` - Language
- **Notable Features:**
  - Input-based filters
  - Text/number input filters
  - Range filters
  - Dynamic filter addition/removal

---

### FilterLayout
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterLayout.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterLayout.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `currentLayout`: `'grid' | 'list'` - Current layout
  - `onLayoutChange`: `(layout: string) => void` - Change handler
  - `hasPageSettings`: `boolean` - Show page size selector
  - `pageSize`: `number` - Current page size
  - `pageSizeOptions`: `number[]` - Available page sizes
  - `onPageSizeChange`: `(size: number) => void` - Page size change handler
  - `language`: `'en' | 'ja'` - Language
- **Notable Features:**
  - Layout toggle (grid/list)
  - Page size selector
  - Localized labels

---

### FiltersResults
- **Status:** ✅ Has Storybook (via FilterBar)
- **Component Path:** `ui-lib/src/Filters/molecules/FiltersResults.tsx`
- **Story Path:** `storybook/src/stories/Filters/organisms/FilterBar.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `filters`: `IFilterResult[]` - Active filters
  - `onRemove`: `(filterId: string) => void` - Remove filter callback
  - `onClearAll`: `() => void` - Clear all callback
  - `language`: `'en' | 'ja'` - Language
- **Notable Features:**
  - Displays active filters as tags
  - Remove individual filters
  - Clear all filters button
  - Localized text

---

### FlexContentPlaceholder
- **Status:** ✅ Has Storybook (via GlobalUI)
- **Component Path:** `ui-lib/src/common/ContentPlaceholder.tsx`
- **Story Path:** `storybook/src/stories/Global/GlobalUI.stories.tsx`
- **Exported From:** `common`
- **Notable Features:**
  - Placeholder for content areas
  - Flexbox-based layout
  - Used in layout examples

---

### Form
- **Status:** ✅ Has Storybook (via LoginModalExample)
- **Component Path:** `ui-lib/src/Form/Form.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Modals/LoginModalExample.tsx`
- **Exported From:** `Form`
- **Notable Features:**
  - Form wrapper component
  - Handles form submission
  - Form validation support

---

### GlobalUI
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/templates/GlobalUI.tsx`
- **Story Path:** `storybook/src/stories/Global/GlobalUI.stories.tsx`
- **Exported From:** `Global`
- **Props:**
  - `mainMenu`: Main menu configuration
  - `topBar`: Top bar configuration
  - `children`: `ReactNode` - Page content
  - `theme`: Theme configuration
  - `notifications`: Notifications configuration
- **Notable Features:**
  - Complete application shell
  - Integrates MainMenu, TopBar, and content area
  - Theme provider
  - Notification system
  - Modal system
  - Responsive layout
  - Mobile menu support

---

### Icon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Icons/Icon.tsx`
- **Story Path:** `storybook/src/stories/Misc/Icons.stories.tsx`
- **Exported From:** `Icons`
- **Props:**
  - `icon`: `string` - Icon name from icon library (required)
  - `size?`: `number` - Icon size in pixels (default: 24)
  - `weight?`: `IWeight` (`'light' | 'regular' | 'heavy' | 'strong'`) - Icon weight (default: 'regular')
  - `color?`: `ISvgIcons['color']` - Icon color (default: 'grey-12')
  - `forSvgUsage?`: `boolean` - Use wrapper for SVG context (default: false)
- **Notable Features:**
  - SVG icon component
  - Large icon library (@future-standard/icons)
  - Customizable size and color
  - Multiple weights
  - Consistent sizing system
  - Can be used within SVG elements

---

### IconButton
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/Form/atoms/IconButton.tsx`
- **Story Path:** N/A
- **Exported From:** `Form`
- **Props:**
  - `icon`: `IconSVGs` - Icon name
  - `onClick`: `() => void` - Click handler
  - `disabled`: `boolean` - Disabled state
  - `size`: Size option
- **Notable Features:**
  - Button with only icon (no text)
  - Circular or square variants
  - Used in tables and toolbars

---

### Input
- **Status:** ✅ Has Storybook (via TextField)
- **Component Path:** `ui-lib/src/Form/atoms/Input.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/Input.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `value`: `string` - Input value
  - `onChange`: `(e: ChangeEvent) => void` - Change handler
  - `type`: `'text' | 'number' | 'email' | 'password'` - Input type
  - `placeholder`: `string` - Placeholder text
  - `disabled`: `boolean` - Disabled state
  - `state`: `'default' | 'error' | 'warning' | 'success'` - Visual state
  - `name`: `string` - Input name
- **Notable Features:**
  - Base input component
  - Multiple types
  - State-based styling
  - Validation states

---

### InputFileButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/InputFileButton.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/InputFileButton.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `text`: `string` - Button text
  - `onChange`: `(files: FileList) => void` - Change handler
  - `accept`: `string` - Accepted file types
  - `multiple`: `boolean` - Allow multiple files
  - `buttonDesign`: Button design type
  - `buttonSize`: Button size
- **Notable Features:**
  - File input styled as button
  - Multiple file support
  - File type filtering
  - Custom button styling

---

### IntroductionText
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/atoms/IntroductionText.tsx`
- **Story Path:** `storybook/src/stories/Pages/IntroductionText.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `children`: `ReactNode` - Text content
- **Notable Features:**
  - Styled introduction/description text
  - Used in page headers
  - Consistent typography

---

### Label
- **Status:** ✅ Has Storybook (via Radio Button)
- **Component Path:** `ui-lib/src/Form/atoms/Label.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/RadioButton.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `htmlFor`: `string` - Associated input ID
  - `text`: `string` - Label text
  - `required`: `boolean` - Show required indicator
- **Notable Features:**
  - Form label component
  - Required field indicator
  - Accessibility support

---

### Layout
- **Status:** ❌ No Storybook (used in GlobalUI)
- **Component Path:** `ui-lib/src/Global/atoms/Layout.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/PTZPage.tsx`
- **Exported From:** `Global`
- **Notable Features:**
  - Base layout wrapper
  - Used by GlobalUI

---

### LineUI
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUI.tsx`
- **Story Path:** N/A
- **Example Page Path:** `scorer-ui-kit/packages/example/src/pages/LinePage.tsx`
- **Exported From:** `LineUI`
- **Notable Features:**
  - Line drawing UI component
  - Interactive line creation
  - Used for annotations

---

### LineUIRTC
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUIRTC.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LinePage.tsx`
- **Exported From:** `LineUI`
- **Notable Features:**
  - LineUI with WebRTC support
  - Real-time collaboration

---

### LineUIVideo
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUIVideo.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LineRTCPage.tsx`
- **Exported From:** `LineUI`
- **Notable Features:**
  - LineUI for video overlays
  - Video annotation support

---

### MainMenu
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/organisms/MainMenu.tsx`
- **Story Path:** `storybook/src/stories/Global/MainMenu.stories.tsx`
- **Exported From:** `Global`
- **Props:**
  - `logoMark`: `string` - Logo mark image URL
  - `logoText`: `string` - Logo text image URL
  - `menuItems`: Array of menu item configurations
  - `currentPath`: `string` - Current active path
  - `onNavigate`: Navigation callback
  - `userInfo`: User information object
  - `isCollapsed`: `boolean` - Collapsed state
- **Notable Features:**
  - Sidebar navigation menu
  - Logo display
  - Collapsible menu
  - Active state highlighting
  - User info display
  - Nested menu support

---

### MediaBox
- **Status:** ✅ Has Storybook (via MediaModal)
- **Component Path:** `ui-lib/src/Misc/atoms/MediaBox.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Modals/MediaModal.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `src`: `string` - Media source URL
  - `type`: `'img' | 'video'` - Media type
  - `alt`: `string` - Alt text for images
  - `controls`: `boolean` - Show video controls
- **Notable Features:**
  - Displays images or videos in modal
  - Responsive sizing
  - Video playback controls
  - Used with useMediaModal hook

---

### ModalProvider
- **Status:** ✅ Has Storybook (via modal stories)
- **Component Path:** `ui-lib/src/context/ModalContext.tsx`
- **Story Path:** Multiple modal stories
- **Exported From:** `context`
- **Notable Features:**
  - Context provider for modal system
  - Manages modal state globally
  - Used with useModal hook

---

### MultilineContent
- **Status:** ✅ Has Storybook (via TypeTable)
- **Component Path:** `ui-lib/src/Pages/molecules/MultilineContent.tsx`
- **Story Path:** `storybook/src/stories/Tables/molecules/ActionsTable.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `title`: `string` - Title text
  - `subtitle`: `string` - Subtitle text
  - `description`: `string` - Description text
- **Notable Features:**
  - Multi-line content display
  - Used in tables and cards
  - Hierarchical text display

---

### Notification
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Alerts/atom/Notification.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Notification.stories.tsx`
- **Exported From:** `Alerts`
- **Props:**
  - `id?`: `string` - Unique notification ID
  - `type`: `AlertType` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) - Notification type (required, default: 'info')
  - `message`: `string` - Notification message (required)
  - `actionTextButton?`: `string` - Action button text
  - `isPinned?`: `boolean` - Prevent auto-dismiss (default: false)
  - `closeNow?`: `boolean` - Force close notification (default: false)
  - `icon?`: `string` - Custom icon name (default: '')
  - `onTextButtonClick?`: `() => void` - Action button callback
  - `closeCallback?`: `() => void` - Close callback
- **Notable Features:**
  - Toast-style notifications
  - Auto-dismiss after 7 seconds (unless pinned)
  - Fixed top-center position
  - Icon support with defaults per type
  - Optional action button
  - Slide animations
  - Used with NotificationProvider and useNotification hook

---

### NotificationProvider
- **Status:** ✅ Has Storybook (via Notification stories)
- **Component Path:** `ui-lib/src/context/NotificationContext.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Notification.stories.tsx`
- **Exported From:** `context`
- **Notable Features:**
  - Context provider for notification system
  - Manages notification queue
  - Used with useNotification hook

---

### PageHeader
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/molecules/PageHeader.tsx`
- **Story Path:** `storybook/src/stories/Pages/PageHeader.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `title`: `string` - Page title
  - `icon`: `IconSVGs` - Title icon
  - `iconColor`: Icon color option
  - `areaText`: `string` - Area/breadcrumb text
  - `areaHref`: `string` - Area link URL
  - `onAreaClick`: `() => void` - Custom area click handler
  - `tags`: `IHeaderTag[]` - Tag list
  - `buttons`: `IButtonStack[]` - Action buttons
  - `introductionText`: `string` - Introduction text
  - `updateDocTitle`: `boolean` - Update document title
  - `areaTitleBottom`: `boolean` - Position area text below title
  - `bottomLeftContent`: `ReactNode` - Custom bottom left content
- **Notable Features:**
  - Complete page header component
  - Breadcrumb navigation
  - Tag display
  - Action buttons
  - Introduction text
  - Flexible layout options
  - Document title sync

---

### PageTitle
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/atoms/PageTitle.tsx`
- **Story Path:** `storybook/src/stories/Pages/PageTitle.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `title`: `string` - Title text
  - `icon`: `IconSVGs` - Title icon
  - `iconColor`: Icon color option
  - `onClick`: `() => void` - Click handler
- **Notable Features:**
  - Styled page title
  - Optional icon
  - Clickable option
  - Consistent typography

---

### Pagination
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/molecules/Pagination.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/Pagination.stories.tsx`
- **Exported From:** `Misc`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `pageText?`: `string` - Page label text (default: 'Page:')
  - `totalPages`: `number` - Total number of pages (required)
  - `activePage?`: `number` - Current active page (default: 1)
  - `buttonText?`: `string` - GO button text (default: 'GO')
  - `itemsText?`: `string` - Items per page label (default: 'Items Per Page')
  - `itemsDefaultValue?`: `number` - Default items per page value
  - `selectWidth?`: `string` - Select field width (default: '60px')
  - `selectDisabled?`: `boolean` - Disable select field (default: false)
  - `selectId?`: `string` - Select field ID (default: 'paginationPages')
  - `itemsOptions`: `IItemsOption[]` - Items per page options (required, format: `{value: number, textValue: string}`)
  - `onPageChange`: `(page: number) => void` - Page change handler (required)
  - `onItemsChange`: `(items: number) => void` - Items per page change handler (required)
- **Notable Features:**
  - Complete pagination controls
  - Direct page input with GO button
  - Previous/Next arrow navigation
  - Items per page selector
  - Input validation with shake animation
  - Keyboard support (Enter to submit)
  - Paste validation

---

### PasswordField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/PasswordField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/PasswordInput.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - All TextField props plus:
  - `showPasswordToggle`: `boolean` - Show/hide password toggle
- **Notable Features:**
  - Password input with show/hide toggle
  - Eye icon to reveal password
  - All TextField features
  - Validation support

---

### PercentageSlider
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/PercentageSlider.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/PercentageSlider.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `value`: `number` - Current percentage (0-100)
  - `onChange`: `(value: number) => void` - Change handler
  - `disabled`: `boolean` - Disabled state
  - `label`: `string` - Label text
  - `showValue`: `boolean` - Display percentage value
- **Notable Features:**
  - Percentage slider (0-100%)
  - Value display with % symbol
  - Custom styling
  - Smooth dragging

---

### PTZProvider
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/PTZControl/state/PTZProvider.tsx`
- **Story Path:** N/A
- **Example Page Path:** `scorer-ui-kit/packages/example/src/App.tsx`
- **Exported From:** `PTZControl`
- **Notable Features:**
  - Context provider for PTZ controls
  - Manages PTZ state
  - Used with usePTZ hook

---

### RadioButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/RadioButton.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/RadioButton.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `name`: `string` - Radio group name
  - `value`: `string` - Radio value
  - `checked`: `boolean` - Checked state
  - `onChange`: `(value: string) => void` - Change handler
  - `disabled`: `boolean` - Disabled state
  - `label`: `string` - Label text
- **Notable Features:**
  - Custom styled radio button
  - Radio group support
  - Label integration
  - Controlled/uncontrolled modes

---

### SelectField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SelectField.tsx`
- **Story Path:** `storybook/src/stories/Form/SelectField.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `options`: Array of select options
  - `value`: `string | number` - Selected value
  - `onChange`: `(value: string | number) => void` - Change handler
  - `placeholder`: `string` - Placeholder text
  - `disabled`: `boolean` - Disabled state
  - `state`: `'default' | 'error' | 'warning' | 'success'` - Visual state
  - `icon`: `IconSVGs` - Icon
  - `label`: Label configuration
  - `isCompact`: `boolean` - Compact mode
  - `width`: `string` - Fixed width
- **Notable Features:**
  - Custom styled select dropdown
  - Icon support
  - Label integration
  - Validation states
  - Compact mode
  - Fixed or flexible width

---

### SelectWrapper
- **Status:** ✅ Has Storybook (used in SelectField story)
- **Component Path:** `ui-lib/src/Form/atoms/SelectField.tsx`
- **Story Path:** `storybook/src/stories/Form/SelectField.stories.tsx`
- **Exported From:** `Form`
- **Notable Features:**
  - Wrapper for select field styling

---

### Sidebar
- **Status:** ❌ No Storybook (used in GlobalUI)
- **Component Path:** `ui-lib/src/Global/molecules/Sidebar.tsx`
- **Example Page Path:** `example/src/pages/LinePage.tsx`
- **Story Path:** N/A
- **Exported From:** `Global`
- **Notable Features:**
  - Sidebar container component
  - Used by MainMenu

---

### SliderInput
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SliderInput.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/SliderInput.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `value`: `number` - Current value
  - `onChange`: `(value: number) => void` - Change handler
  - `min`: `number` - Minimum value
  - `max`: `number` - Maximum value
  - `step`: `number` - Step increment
  - `disabled`: `boolean` - Disabled state
  - `marks`: `ISliderMark[]` - Slider marks/labels
  - `allMarkCentered`: `boolean` - Center all marks
- **Notable Features:**
  - Range slider input
  - Custom marks/labels
  - Step control
  - Min/max range
  - Value display

---

### SmallInput
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SmallInput.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/SmallInput.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - Similar to Input but smaller size
  - `value`: `string` - Input value
  - `onChange`: Change handler
  - `type`: Input type
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Compact input variant
  - Used in tables and tight spaces
  - All Input features in smaller size

---

### SortDropdown
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/SortDropdown.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/SortDropdown.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `options`: Array of sort options
  - `selectedOption`: Current sort option
  - `ascending`: `boolean` - Sort direction
  - `onChange`: `(option: string, ascending: boolean) => void` - Change handler
  - `language`: `'en' | 'ja'` - Language
- **Notable Features:**
  - Sort dropdown with direction toggle
  - Ascending/descending toggle
  - Custom sort options
  - Localized labels

---

### Spinner
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Indicators/Spinner.tsx`
- **Story Path:** `storybook/src/stories/Indicators/Spinner.stories.tsx`
- **Exported From:** Root
- **Props:**
  - `size`: `'small' | 'medium' | 'large'` - Spinner size
  - `type`: `'primary' | 'secondary'` - Spinner style
  - `customSize`: `number` - Custom size in pixels
  - `customBaseColor`: `string` - Custom base color
  - `customTopColor`: `string` - Custom top color
- **Notable Features:**
  - Loading spinner indicator
  - Multiple sizes
  - Color customization
  - Used in buttons and loading states

---

### SplitButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/SplitButton.tsx`
- **Story Path:** `storybook/src/stories/Form/Buttons/SplitButton.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `mainButton`: Main button configuration
  - `options`: `ISplitButtonProps[]` - Dropdown options
  - `design`: Button design type
  - `size`: Button size
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Split button with dropdown menu
  - Main action + additional options
  - Dropdown menu on click
  - Customizable options
  - Used for primary action with alternatives

---

### SplitLayout
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Layouts/molecules/SplitLayout.tsx`
- **Story Path:** `storybook/src/stories/Global/organisms/SplitLayout.stories.tsx`
- **Exported From:** `Layouts`
- **Props:**
  - `leftContent`: `ReactNode` - Left panel content
  - `rightContent`: `ReactNode` - Right panel content
  - `defaultLeftWidth`: `number` - Default left panel width percentage
  - `minLeftWidth`: `number` - Minimum left panel width
  - `maxLeftWidth`: `number` - Maximum left panel width
  - `resizable`: `boolean` - Enable resize
  - `onResize`: Resize callback
- **Notable Features:**
  - Two-panel split layout
  - Resizable divider
  - Drag to resize
  - Min/max width constraints
  - Nested split layouts support
  - Responsive design

---

### StatusIcon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Icons/StatusIcon.tsx`
- **Story Path:** `storybook/src/stories/Misc/StatusIcon.stories.tsx`
- **Exported From:** `Icons`
- **Props:**
  - `icon`: `IconSVGs` - Icon name
  - `status`: `'caution' | 'danger' | 'good' | 'neutral' | 'highlight'` - Status type
  - `size`: `number` - Icon size
  - `showDot`: `boolean` - Show status dot
  - `dotPosition`: `'top-right' | 'bottom-right'` - Dot position
- **Notable Features:**
  - Icon with status indicator
  - Colored status dot
  - Multiple status types
  - Used for device/connection status

---

### Switch
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/Switch.tsx`
- **Story Path:** `storybook/src/stories/Form/Switch.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `checked`: `boolean` - Checked state
  - `onChange`: `(checked: boolean) => void` - Change handler
  - `disabled`: `boolean` - Disabled state
  - `state`: `'default' | 'error' | 'success'` - Visual state
  - `leftTheme`: `'off' | 'on'` - Left side theme
  - `rightTheme`: `'off' | 'on'` - Right side theme
  - `label`: `string` - Label text
  - `defaultChecked`: `boolean` - Default checked state
- **Notable Features:**
  - Toggle switch component
  - Custom themes for each side
  - Label support
  - Validation states
  - Smooth animation

---

### Tab
- **Status:** ❌ No Storybook (used with Tabs)
- **Component Path:** `ui-lib/src/Tabs/atoms/Tab.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/TabsPage.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `id`: `string` - Tab ID
  - `label`: `string` - Tab label
  - `active`: `boolean` - Active state
  - `onClick`: Click handler
- **Notable Features:**
  - Individual tab component
  - Used within TabList
  - Active state styling

---

### TabContent
- **Status:** ❌ No Storybook (used with Tabs)
- **Component Path:** `ui-lib/src/Tabs/TabContent.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/TabsPage.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `children`: `ReactNode` - Tab content
  - `tabId`: `string` - Associated tab ID
- **Notable Features:**
  - Tab panel content wrapper
  - Conditional rendering based on active tab

---

### TabList
- **Status:** ✅ Has Storybook (via TabWithIcon story)
- **Component Path:** `ui-lib/src/Tabs/TabList.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `children`: Tab components
- **Notable Features:**
  - Container for Tab components
  - Horizontal tab bar

---

### TableRowThumbnail
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tables/atoms/TableRowThumbnail.tsx`
- **Story Path:** `storybook/src/stories/Tables/atoms/TableRowThumbnail.stories.tsx`
- **Exported From:** `Tables`
- **Props:**
  - `src`: `string` - Image source URL
  - `alt`: `string` - Alt text
  - `onClick`: `() => void` - Click handler
  - `size`: `'small' | 'medium' | 'large'` - Thumbnail size
- **Notable Features:**
  - Table cell thumbnail image
  - Click to enlarge
  - Multiple sizes
  - Placeholder for missing images
  - Used with MediaModal

---

### Tabs
- **Status:** ✅ Has Storybook (via TabWithIcon story)
- **Component Path:** `ui-lib/src/Tabs/Tabs.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `defaultTab`: `string` - Default active tab ID
  - `children`: Tab and TabContent components
- **Notable Features:**
  - Tab container/controller
  - Manages active tab state
  - Context provider for tabs

---

### TabsWithIconBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/TabsWithIconBar.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `tabs`: `ITabIcon[]` - Array of tab configurations with icons
  - `defaultTabId`: `string` - Default active tab
  - `onTabChange`: `(tabId: string) => void` - Tab change handler
  - `paddingLeft`: `string` - Left padding override
- **Notable Features:**
  - Tabs with icon support
  - Icon + text labels
  - Active tab indicator
  - Custom padding

---

### TabWithIcon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tabs/atoms/TabWithIcon.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `id`: `string` - Tab ID
  - `label`: `string` - Tab label
  - `icon`: `IconSVGs` - Icon name
  - `active`: `boolean` - Active state
  - `disabled`: `boolean` - Disabled state
  - `onClick`: Click handler
- **Notable Features:**
  - Tab with icon
  - Icon + text layout
  - Active/disabled states
  - Used in TabsWithIconBar

---

### Tag
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/atoms/Tag.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/Tag.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `text`: `string` - Tag text
  - `color`: `'primary' | 'grey' | 'info' | 'success' | 'caution' | 'warning'` - Tag color
  - `icon`: `IconSVGs` - Optional icon
  - `onIconClick`: `() => void` - Icon click handler (for remove/edit)
  - `onClick`: `() => void` - Tag click handler
  - `size`: `'small' | 'medium'` - Tag size
- **Notable Features:**
  - Colored tag/badge component
  - Optional icon (typically for remove)
  - Multiple color schemes
  - Clickable tags
  - Used for labels, categories, filters

---

### TagList
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/molecules/TagList.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/TagList.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `tags`: `ITag[]` - Array of tag configurations
  - `onTagClick`: `(tagId: string) => void` - Tag click handler
  - `onTagRemove`: `(tagId: string) => void` - Tag remove handler
- **Notable Features:**
  - List of tags with wrapping
  - Remove functionality
  - Click handlers
  - Responsive layout

---

### TextArea
- **Status:** ✅ Has Storybook (via TextAreaField story)
- **Component Path:** `ui-lib/src/Form/atoms/TextArea.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/TextAreaField.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `value`: `string` - Textarea value
  - `onChange`: Change handler
  - `placeholder`: `string` - Placeholder
  - `disabled`: `boolean` - Disabled state
  - `rows`: `number` - Number of rows
- **Notable Features:**
  - Base textarea component
  - Auto-resize option
  - Character count option

---

### TextAreaField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/TextAreaField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/TextAreaField.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - All TextArea props plus:
  - `label`: Label configuration
  - `feedback`: `string` - Feedback message
  - `state`: `'default' | 'error' | 'warning' | 'success'` - Visual state
  - `required`: `boolean` - Required field
  - `maxLength`: `number` - Maximum character length
  - `showCharCount`: `boolean` - Show character counter
- **Notable Features:**
  - Textarea with label and validation
  - Character counter
  - Feedback messages
  - Validation states
  - Required indicator

---

### TextField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/TextField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/Input.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - All Input props plus:
  - `label`: Label configuration
  - `feedback`: `string` - Feedback message
  - `state`: `'default' | 'error' | 'warning' | 'success'` - Visual state
  - `required`: `boolean` - Required field
  - `icon`: `IconSVGs` - Input icon
- **Notable Features:**
  - Input with label and validation
  - Icon support
  - Feedback messages
  - Validation states
  - Required indicator
  - Complete form field

---

### ToggleButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/atoms/ToggleButton.tsx`
- **Story Path:** `storybook/src/stories/Filters/atoms/ToggleButton.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `options`: `IToggleOption[]` - Toggle options
  - `selectedValue`: `string | number` - Selected value
  - `onChange`: `(value: string | number) => void` - Change handler
  - `disabled`: `boolean` - Disabled state
- **Notable Features:**
  - Toggle button group
  - Multiple options
  - Single selection
  - Used for view modes, filters

---

### Tooltip
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Alerts/atom/Tooltip.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Tooltip.stories.tsx`
- **Exported From:** `Alerts`
- **Props:**
  - `message`: `string` - Tooltip message
  - `children`: `ReactNode` - Element to attach tooltip to
  - `position`: `ITooltipPosition` - Tooltip position (top-left, top-right, bottom-left, bottom-right, etc.)
  - `type`: `'info' | 'warning' | 'error' | 'success'` - Tooltip type
  - `icon`: `IconSVGs` - Custom icon
  - `noIcon`: `boolean` - Hide icon
- **Notable Features:**
  - Hover tooltip
  - Multiple positions
  - Color-coded by type
  - Icon support
  - Wraps any element

---

### TopBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/molecules/TopBar.tsx`
- **Story Path:** `storybook/src/stories/Global/TopBar.stories.tsx`
- **Exported From:** `Global`
- **Props:**
  - `loggedInUser`: `string` - User email/name
  - `hasSearch`: `boolean` - Show search
  - `searchPlaceholder`: `string` - Search placeholder
  - `onSearch`: Search handler
  - `hasLogout`: `boolean` - Show logout
  - `logoutLink`: `string` - Logout URL
  - `logoutText`: `string` - Logout text
  - `hasNotifications`: `boolean` - Show notifications
  - `notificationsHistory`: `INotificationsHistory` - Notifications data
  - `hasCurrentUser`: `boolean` - Show user menu
  - `currentUserText`: `string` - User menu text
  - `userSubmenu`: User submenu items
  - `hasLanguage`: `boolean` - Show language toggle
  - `onLanguageToggle`: Language toggle handler
  - `hasSwitchTheme`: `boolean` - Show theme toggle
  - `switchThemeText`: `string` - Theme toggle text
  - `selectedThemeText`: `string` - Selected theme text
  - `hasUserDrawerMeta`: `boolean` - Show user drawer metadata
  - `userDrawerMetaConfig`: User drawer configuration
  - `badgeText`: `string` - Badge text
  - `badgeColor`: Badge color
  - `badgeLinkTo`: `string` - Badge link
  - `badgeLinkText`: `string` - Badge link text
  - `badgeOnClick`: Badge click handler
- **Notable Features:**
  - Application top bar
  - Search functionality
  - User menu with dropdown
  - Notifications dropdown
  - Language toggle
  - Theme toggle
  - User badge
  - Highly customizable
  - Responsive design

---

### TypeTable
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tables/organisms/TypeTable.tsx`
- **Story Path:** `storybook/src/stories/Tables/molecules/TypeTable.stories.tsx`
- **Exported From:** `Tables`
- **Props:**
  - `data`: Array of table data
  - `columnConfig`: Column configuration array
  - `onRowClick`: `(row: any) => void` - Row click handler
  - `selectable`: `boolean` - Enable row selection
  - `selectedRows`: Array of selected row IDs
  - `onSelectionChange`: Selection change handler
  - `sortable`: `boolean` - Enable sorting
  - `onSort`: Sort handler
  - `loading`: `boolean` - Loading state
  - `emptyMessage`: `string` - Empty state message
  - `hasHeaderGroups`: `boolean` - Show header groups
  - `hasThumbnail`: `boolean` - Show thumbnails
  - `hasStatus`: `boolean` - Show status indicators
  - `hasTypeIcon`: `boolean` - Show type icons
  - `closeText`: `string` - Close text for modals
- **Notable Features:**
  - Comprehensive data table
  - Sortable columns
  - Selectable rows
  - Row actions
  - Thumbnails with modal preview
  - Status indicators
  - Type icons
  - Loading state
  - Empty state
  - Editable cells support
  - Header groups
  - Responsive design
  - Highly custom
izable

---

### UtilityHeader
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Layouts/molecules/UtilityHeader.tsx`
- **Story Path:** `storybook/src/stories/Global/molecules/UtilityHeader.stories.tsx`
- **Exported From:** `Layouts`
- **Props:**
  - `backButton`: Back button configuration
  - `shareButton`: Share button configuration
  - `title`: `string` - Header title
  - `customContent`: `ReactNode` - Custom content
- **Notable Features:**
  - Utility header for detail pages
  - Back navigation
  - Share functionality
  - Custom content support
  - Used in split layouts

---

### WebRTCClient
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/WebRTCClient.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LineRTCPage.tsx`
- **Exported From:** Root
- **Notable Features:**
  - WebRTC client component
  - Real-time communication support
  - Video/audio streaming

---