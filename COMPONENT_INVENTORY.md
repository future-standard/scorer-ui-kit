# Scorer UI Kit - Component Inventory

**Generated:** 2026-02-04
**Last Updated:** 2026-02-06
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
- **Props:** (extends `IBasicSearchInput` & `InputHTMLAttributes<HTMLInputElement>`)
  - `defaultValue?`: `string` - Initial value for the search input
  - `onDebouncedChange?`: `(newValue: string) => void` - Callback triggered after debounce delay (600ms)
  - `color?`: `'mono' | 'dimmed' | 'subtle'` - Icon and text color theme (default: 'subtle')
  - `hasBorder?`: `boolean` - Show border around input (default: true)
  - `iconSize?`: `number` - Size of search icon (default: 12)
  - `noBackground?`: `boolean` - Remove background color (default: false)
  - `width?`: `string` - Custom width CSS value
  - `hasCrossButton?`: `boolean` - Show clear/cross button (default: false)
  - `onCrossClick?`: `() => void` - Callback when cross button clicked
  - `disabled?`: `boolean` - Disabled state (default: false)
  - Plus all standard HTML input attributes (`placeholder`, `value`, `onChange`, `onFocus`, `onBlur`, etc.)
- **Notable Features:**
  - Debounced search input with 600ms delay
  - Wraps BasicSearchInput component
  - Optional clear button
  - Supports default/initial value
  - Inherits all standard HTML input attributes
  - Customizable appearance (color, border, background, width)
  - Search icon with configurable size

---

### DropArea
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/DropArea.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/DropArea.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `height?`: `string` - Custom height CSS value for the drop area
  - `text?`: `string` - Text to display in the drop zone
  - `dropCallback?`: `(newFiles: FileList) => void` - Callback when files are dropped
- **Notable Features:**
  - Drag-and-drop file upload area
  - Visual feedback on drag over (dashed border)
  - Accepts FileList from drop events
  - Prevents default browser drag/drop behavior on window
  - Customizable height and display text
  - Absolute positioned overlay for drop zone

---

### DurationSlider
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/DurationSlider.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/DurationSlider.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `ISlider` & `InputHTMLAttributes<HTMLInputElement>`)
  - `title`: `string` (required) - Label text for the slider
  - `timeUnit`: `ITimeUnit | string` (required) - Time unit ('seconds' | 'minutes' | 'hours') or custom string
  - `controlledValue?`: `number` - Externally controlled value (overrides internal state)
  - `timeFormat?`: `string` - Custom time format template (e.g., '[HH]時 [MM]分 [SS]秒' or '[H]Hours [M]Minutes [S]Seconds')
  - `max`: `number` (required) - Maximum slider value
  - `min?`: `number` - Minimum slider value
  - `defaultValue?`: `number` - Initial value (default: 0)
  - `step?`: `number` - Step increment for slider
  - `marks?`: `ISliderMark[]` - Array of marks to display on slider (value, label?)
  - `thumbColor?`: `IFeedbackColor` - Color of slider thumb (default: 'info')
  - `onlyMarkSelect?`: `boolean` - Restrict selection to marks only (default: false)
  - `showValue?`: `boolean` - Show value indicator
  - `inputCallback?`: `(value: number) => void` - Callback on value input
  - `onChangeCallback?`: `(value: number) => void` - Callback on value change
  - `allMarkCentered?`: `boolean` - Center all mark labels (default: false)
  - `disabled?`: `boolean` - Disabled state (default: false)
  - Plus all standard HTML input attributes
- **Notable Features:**
  - Time duration slider with customizable time units
  - Automatic time conversion and display (hours, minutes, seconds)
  - Custom time format templates with placeholders ([H], [HH], [M], [MM], [S], [SS])
  - Supports both controlled and uncontrolled modes
  - Built on SliderInput component with marks support
  - Localization-friendly (handles Japanese and other languages)
  - Dynamic value display with unit abbreviation
  - Custom min/max ranges with validation

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
  - `filtersTitle?`: `string` - Title text for filters section (default: 'Filters:')
  - `searchersConfig?`: `ISearchFilter[]` - Array of search filter configurations (default: [])
    - Each ISearchFilter extends IBasicSearchInput with: id, canHide?, showFieldText?, selected?
  - `dropdownsConfig?`: `IFilterDropdownConfig[]` - Array of dropdown filter configurations (default: [])
    - Each IFilterDropdownConfig includes: id, canHide?, buttonIcon, buttonText, list (IFilterItem[]), selected?, disabled?, optionType?, isLoading?, loadingText?, hasOptionsFilter?, searchPlaceholder?, maxDisplayedItems?, emptyResultText?, searchResultText?, name?, design?, ascendingText?, descendingText?, isListAscending?, onResetCallback?, onCancelCallback?
  - `datePickersConfig?`: `IFilterDatePicker[]` - Array of date picker filter configurations (default: [])
    - Each IFilterDatePicker extends IDropdownDatePicker with: id, canHide?, name?
  - `hasShowMore?`: `boolean` - Enable show more/less functionality for filters
  - `showMoreText?`: `string` - Text for show more button
  - `showLessText?`: `string` - Text for show less button
  - `resultTextTemplate?`: `string` - Template for results count display
  - `totalResults`: `number` (required) - Total number of results
  - `clearText?`: `string` - Text for clear all button
  - `isLoading?`: `boolean` - Loading state
  - `singleFilter?`: `boolean` - Allow only one filter active at a time (default: false)
  - `resultsDateFormat?`: `string` - Date format for displaying date filter results
  - `onChangeCallback?`: `(currentSelected: IFilterResult[]) => void` - Callback when filters change
    - Returns array of IFilterResult: { id: string, type: IFilterType, selected: IFilterItem | IFilterItem[] | IDateInterval | Date | null }
- **Notable Features:**
  - Complete filter bar with three filter types (search, dropdown, datepicker)
  - Automatic filter state management with debounced search (600ms)
  - Single filter mode (only one active at a time)
  - Filter results display with removable tags
  - Clear all filters functionality
  - Show more/less collapsible filters
  - Language-aware dropdown text updates
  - Disabled state management based on single filter mode
  - Integrated FilterInputs and FiltersResults components
  - Supports multiple search inputs, dropdowns, and date pickers simultaneously

---

### FilterButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/atoms/FilterButton.tsx`
- **Story Path:** `storybook/src/stories/Filters/atoms/FilterButton.stories.tsx`
- **Exported From:** `Filters`
- **Props:** (extends `ButtonHTMLAttributes<HTMLButtonElement>`)
  - `icon`: `string` (required) - Icon name to display
  - `hasFlipArrow?`: `boolean` - Show dropdown arrow that flips based on isOpen state (default: false)
  - `isSortAscending?`: `boolean` - Flip the left icon vertically for sort direction (default: false)
  - `isOpen?`: `boolean` - Open state for dropdown (changes styling and arrow direction)
  - `design?`: `FilterButtonDesign` - Design variant: 'default' | 'basic' (default: 'default')
  - `children`: `ReactNode` - Button text content
  - Plus all standard HTML button attributes (`onClick`, `disabled`, `type`, etc.)
- **Notable Features:**
  - Filter dropdown trigger button with two design variants
  - Icon support with customizable color
  - Active/open state styling (primary background when open)
  - Animated dropdown arrow indicator (up/down based on isOpen)
  - Sort direction indicator (flips icon for ascending/descending)
  - Hover and active state transitions
  - Disabled state with reduced opacity
  - Fade-in animation on mount
  - Shadow and border effects
  - Basic design variant (transparent background, no border/shadow)

---

### FilterDropdown
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterDropdown.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterDropdownExamples.stories.tsx`
- **Exported From:** `Filters`
- **Props:** (extends `IFilterFooterControls`)
  - `buttonIcon`: `string` (required) - Icon name for the filter button
  - `buttonText`: `string` (required) - Text for the filter button
  - `list`: `IFilterItem[]` (required) - Array of filter options
    - Each IFilterItem: { text: string, value: string | number }
  - `selected`: `IFilterValue` (required) - Currently selected value(s) (IFilterItem | IFilterItem[] | null)
  - `onSelect`: `(newSelection: IFilterValue) => void` (required) - Selection change callback
  - `disabled?`: `boolean` - Disabled state (default: false)
  - `optionType?`: `IInputOptionsType` - Option type: 'checkbox' | 'radio' | 'text' (default: 'text')
  - `isLoading?`: `boolean` - Loading state (default: false)
  - `loadingText?`: `string` - Loading message text
  - `hasOptionsFilter?`: `boolean` - Enable search within options
  - `searchPlaceholder?`: `string` - Placeholder for search input
  - `maxDisplayedItems?`: `number` - Maximum visible items before scrolling (default: 5)
  - `searchResultText?`: `string` - Results count template (default: 'Showing [VISIBLE] of [TOTAL]')
  - `emptyResultText?`: `string` - Text when no results found
  - `design?`: `FilterButtonDesign` - Button design: 'default' | 'basic' (default: 'default')
  - `ascendingText?`: `string` - Ascending sort button text (default: 'Ascending')
  - `descendingText?`: `string` - Descending sort button text (default: 'Descending')
  - `isListAscending?`: `boolean` - Initial sort direction (default: true)
  - `onResetCallback?`: `() => void` - Reset button callback
  - `onCancelCallback?`: `() => void` - Cancel button callback
  - **IFilterFooterControls interface:**
    - `resetText?`: `string` - Reset button text (default: 'Reset')
    - `cancelText?`: `string` - Cancel button text (default: 'Cancel')
    - `closeText?`: `string` - Close button text (default: 'Close')
    - `applyText?`: `string` - Apply button text (default: 'Apply')
    - `hasReset?`: `boolean` - Show reset button (default: false)
    - `hasApply?`: `boolean` - Show apply/cancel buttons (default: false)
    - `disableApply?`: `boolean` - Disable apply button
    - `disableReset?`: `boolean` - Disable reset button
- **Notable Features:**
  - Dropdown filter with three option types (checkbox, radio, text)
  - Multi-select support with checkbox type
  - Single-select with radio or text types
  - Search/filter within options
  - Sortable list (ascending/descending)
  - Selected items automatically moved to top
  - Loading state with custom message
  - Scrollable list with gradient indicator
  - Optional footer with reset/apply/cancel buttons
  - Apply mode (changes only applied on button click)
  - Empty results message
  - Results counter with template support
  - Locale-aware sorting
  - FilterButton integration with open/close states

---

### FilterDropdownContainer
- **Status:** ✅ Has Storybook (via Datepicker story)
- **Component Path:** `ui-lib/src/Filters/atoms/FilterDropdownContainer.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/DatePicker.stories.tsx`
- **Exported From:** `Filters`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `height?`: `string` - Custom height CSS value
  - `children`: `ReactNode` - Content to display inside the container
  - Plus all standard HTML div attributes (`className`, `style`, `onClick`, etc.)
- **Notable Features:**
  - Styled container for filter dropdown content
  - Box shadow and backdrop blur effects
  - Accent bar at top (5px primary color with shadow)
  - Border styling (right, bottom, left)
  - Rounded corners (3px border-radius)
  - CSS variable-based theming (background, shadow, accent colors)
  - Fallback background color support
  - Inline-flex layout with column direction

---

### FilterInputs
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterInputs.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterInputs.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `searchFilters?`: `ISearchFilter[]` - Array of search input filter configurations (default: [])
    - Each ISearchFilter extends IBasicSearchInput with: id, canHide?, showFieldText?, selected?
  - `dropdownFilters?`: `IFilterDropdownExt[]` - Array of dropdown filter configurations (default: [])
    - Each IFilterDropdownExt extends IFilterDropdown with: id, canHide?
  - `datePickerFilters?`: `IFilterDatePicker[]` - Array of date picker filter configurations (default: [])
    - Each IFilterDatePicker extends IDropdownDatePicker with: id, canHide?, name?
  - `hasShowMore?`: `boolean` - Enable show more/less toggle for filters (default: false)
  - `showMoreText?`: `string` - Text for show more button (default: 'Show More')
  - `showLessText?`: `string` - Text for show less button (default: 'Show Less')
- **Notable Features:**
  - Composite filter inputs container with three filter types
  - Search inputs with show/hide functionality (canHide property)
  - Dropdown filters with collapsible show more/less
  - Date picker filters
  - Dynamic search input addition/removal with "Add" buttons
  - Animated search input appearance (fade-in with width transition)
  - Flexible layout with flex-wrap and gap spacing
  - Initially shows only non-hideable search inputs
  - Show more/less toggle for dropdown filters
  - Cross button to hide optional search inputs
  - Integrates BasicSearchInput, FilterDropdown, and DropdownDatePicker components

---

### FilterLayout
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/FilterLayout.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/FilterLayout.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `contentArray`: `IOptionsItem[]` (required) - Array of layout option configurations
    - Each IOptionsItem: { id: string, icon: string, tooltipText: string }
  - `getLayout`: `(layout: string) => void` (required) - Callback when layout changes
  - `onPageSizeChange`: `(size: number) => void` (required) - Callback when page size changes
  - `disabled?`: `boolean` - Disabled state (default: false)
  - `onToggleOpenCallback?`: `(isOpen: boolean) => void` - Callback when dropdown toggles
  - `onCloseCallback?`: `() => void` - Callback when dropdown closes
  - `pageSizeOptions?`: `number[]` - Available page size options (default: [10, 20, 30, 50, 100])
  - `defaultPage?`: `number` - Default page number
  - `defaultPageSize?`: `number` - Default page size (default: 10)
  - `layoutText?`: `string` - Label for layout section (default: 'Layout')
  - `pageSizeText?`: `string` - Label for page size section (default: 'Items Per Page')
  - `minWidth?`: `number` - Minimum dropdown width in pixels (default: 250)
  - `minHeight?`: `number` - Minimum dropdown height in pixels (default: 90)
  - `hasPageSettings?`: `boolean` - Show page size selector section (default: true)
- **Notable Features:**
  - Layout toggle with customizable options (grid/list or custom layouts)
  - Page size selector with dropdown
  - Smart dropdown positioning (top/bottom, left/right based on viewport space)
  - Click outside to close functionality
  - Active state styling for selected layout
  - ViewSettings icon button trigger
  - FilterDropdownContainer integration
  - Hover effects on layout buttons
  - Compact SelectField for page size
  - Separated layout and pagination sections
  - Tooltip support on layout icons

---

### FiltersResults
- **Status:** ✅ Has Storybook (via FilterBar)
- **Component Path:** `ui-lib/src/Filters/molecules/FiltersResults.tsx`
- **Story Path:** `storybook/src/stories/Filters/organisms/FilterBar.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `labelLists`: `IFilterLabel[]` (required) - Array of active filter labels to display
    - **IFilterLabel interface:**
      - `filterId`: `string` - Unique filter identifier
      - `item`: `IFilterItem | Date | IDateInterval` - Filter value
      - `type`: `IFilterType` - Filter type ('search' | 'dropdown' | 'datepicker')
      - `icon?`: `string` - Optional icon name
      - `filterName?`: `string` - Optional filter name prefix
    - **IFilterItem interface:**
      - `text`: `string` - Display text
      - `value`: `string | number` - Filter value
    - **IDateInterval interface:**
      - `start`: `Date` - Start date
      - `end`: `Date` - End date
    - **IFilterType:** `'search' | 'dropdown' | 'datepicker'`
  - `totalResults`: `number` (required) - Total number of results
  - `resultTextTemplate?`: `string` - Template for results text (default: 'Showing Results ([TOTAL_RESULTS]):')
  - `clearText?`: `string` - Clear all button text (default: 'CLEAR ALL')
  - `resultsDateFormat?`: `string` - Date format string for date-fns (default: '')
  - `onRemoveFilter?`: `(filterId: string, type: IFilterType, item: IFilterItem | Date | IDateInterval) => void` - Remove individual filter callback
  - `onClearAll?`: `() => void` - Clear all filters callback
- **Notable Features:**
  - Displays active filters as removable tags/labels
  - Supports three filter types (search, dropdown, datepicker)
  - Icon support for filter labels
  - Filter name prefix support (e.g., "Status: Active")
  - Date formatting with date-fns
  - Special midnight handling for date ranges (displays 23:59:59 as 00:00 next day)
  - Date format validation
  - Results count with template support ([TOTAL_RESULTS] placeholder)
  - Individual filter removal with close icon
  - Clear all filters button (only shown when filters exist)
  - Flexible layout with flex-wrap
  - Text ellipsis for long filter names (max-width: 300px)
  - Supports IFilterItem, Date, and IDateInterval types

---

### Form
- **Status:** ✅ Has Storybook (via LoginModalExample)
- **Component Path:** `ui-lib/src/Form/Form.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Modals/LoginModalExample.tsx`
- **Exported From:** `Form`
- **Props:** (extends `FormHTMLAttributes<HTMLFormElement>`)
  - `spacing?`: `string` - CSS value for margin-bottom spacing between Label elements (default: '45px;')
  - `children`: `ReactNode` - Form content
  - Plus all standard HTML form attributes (`onSubmit`, `action`, `method`, `noValidate`, etc.)
- **Notable Features:**
  - Form wrapper component with styled-components
  - Automatic spacing between Label components
  - Inherits all standard HTML form attributes
  - Handles form submission via onSubmit prop
  - No built-in validation (use HTML5 validation)

---

### GlobalUI
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/templates/GlobalUI.tsx`
- **Story Path:** `storybook/src/stories/Global/GlobalUI.stories.tsx`
- **Exported From:** `Global`
- **Props:** (combines `OwnProps` & `IMenu` & `ITopBar`)
  - **From OwnProps:**
    - `maxWidth?`: `string` - Maximum width for content area
    - `paddingOverride?`: `string` - Override default content padding
    - `legacyLayout?`: `boolean` - Use legacy layout mode (default: false)
    - `onMenuToggle?`: `(isMenuOpen: boolean) => void` - Callback when menu toggles
  - **From IMenu (MainMenu props):**
    - `content`: `IMenuTop` (required) - Menu structure with items array
      - **IMenuTop:** `{ items: IMenuItemTop[] }`
      - **IMenuItemTop:** `{ title: string, icon?: any, href?: string, isExternalLink?: boolean, submenu?: IMenuItemSubmenu[] }`
      - **IMenuItemSubmenu:** `{ title: string, href?: string, isExternalLink?: boolean }`
    - `home?`: `string` - Home URL
    - `openWidth?`: `number` - Width when menu is open
    - `logoMark?`: `string` - Logo mark image URL
    - `logoText?`: `string` - Logo text
    - `supportUrl?`: `string` - Support link URL
    - `supportText?`: `string` - Support link text
    - `keepOpenText?`: `string` - Keep open toggle text
    - `autoHideText?`: `string` - Auto hide toggle text
    - `defaultMenuOpen?`: `boolean` - Initial menu open state
    - `canAlwaysPin?`: `boolean` - Allow menu to be pinned
  - **From ITopBar (TopBar props):**
    - `loggedInUser`: `string` (required) - Logged in user name
    - `hasNotifications?`: `boolean` - Show notifications
    - `userSubmenu?`: `IUserSubmenuItem[]` - User submenu items
      - **IUserSubmenuItem:** `{text: string, href: string}`
    - `hasLanguage?`: `boolean` - Show language selector
    - `selectedLanguageText?`: `string` - Selected language text
    - `languageOptionsText?`: `string` - Language options text
    - `selectedLangAttribute?`: `string` - Selected language attribute
    - `hasLogout?`: `boolean` - Show logout option
    - `logoutText?`: `string` - Logout button text
    - `logoutLink?`: `string` - Logout link URL
    - `hasSearch?`: `boolean` - Show search
    - `hasCurrentUser?`: `boolean` - Show current user
    - `currentUserText?`: `string` - Current user text
    - `accountOptionText?`: `string` - Account option text
    - `searchPlaceholder?`: `string` - Search placeholder
    - `userDrawerBespoke?`: `ReactElement` - Custom user drawer content
    - `notificationsHistory?`: `INotificationsHistory` - Notifications data
      - **INotificationsHistory:** `{ read: INotificationItem[], unread: INotificationItem[], noNotificationsText?: string, readNotificationsText?: string, unreadNotificationsText?: string }`
      - **INotificationItem:** `{ imgUrl?: string, title: string, message: string, time: string }`
    - `customDrawer?`: `ICustomDrawer` - Custom drawer configuration
      - **ICustomDrawer:** `{ customComponent: ReactElement, icon: string, status?: IStatusDot, counter?: number, width?: string, maxCounter?: number }`
    - `hasSwitchTheme?`: `boolean` - Show theme switcher
    - `isLightMode?`: `boolean` - Current theme mode
    - `switchThemeText?`: `string` - Switch theme text
    - `selectedThemeText?`: `string` - Selected theme text
    - `onLogout?`: `() => void` - Logout callback
    - `onLanguageToggle?`: `() => void` - Language toggle callback
    - `onUserDrawerMetaClick?`: `() => void` - User drawer meta click callback
    - `onThemeToggle?`: `() => void` - Theme toggle callback
    - `userDrawerFooter?`: `IUserDrawerFooter` - User drawer footer config
      - **IUserDrawerFooter:** `{ icon?: string, title: string }`
    - `userDrawerMeta?`: `IUserDrawerMeta[]` - User drawer metadata
      - **IUserDrawerMeta:** `{ icon?: string, title?: string, subTitle?: string, notes?: string, hasCopyIcon?: boolean }`
    - `hasUserDrawerMeta?`: `boolean` - Show user drawer meta
    - `copySuccessMessage?`: `string` - Copy success message
    - `includeCopyTitle?`: `boolean` - Include copy title
    - `hasUserDrawerFooter?`: `boolean` - Show user drawer footer
    - `badge?`: `ITopBarBadge` - Top bar badge configuration
      - **ITopBarBadge:** `{ text: string, color?: string, linkHref?: string, linkTo?: string, linkText?: string, onClick?: () => void }`
  - `children`: `ReactNode` - Page content
- **Notable Features:**
  - Complete application shell template
  - Responsive layout (desktop: MainMenu + TopBar, mobile: MobileNavbar)
  - Integrates MainMenu, TopBar, MobileNavbar, and content area
  - Breakpoint-based layout switching (useBreakpoints hook)
  - Configurable content area (maxWidth, padding, legacy mode)
  - Menu toggle callback support

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
  - Further color values can be reviewed ad `ui-lib/src/theme/variables/Colors.ts`

---

### IconButton
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/Form/atoms/IconButton.tsx`
- **Story Path:** N/A
- **Exported From:** `Form`
- **Props:** (extends `IconProps & ButtonHTMLAttributes<HTMLButtonElement>`)
  - `icon`: `string` (required) - Icon name (from IconProps)
  - `size`: `number` - Icon size in pixels (from IconProps, default: `20`)
  - `weight`: IWeight - Icon weight (from IconProps, default: `'regular'`)
  - `color`: ISvgIcons['color'] - Icon color (from IconProps, default: `'dimmed'`)
  - `forSvgUsage`: `boolean` - Icon SVG usage flag (from IconProps, default: `false`)
  - `hoverColor`: `string` - Icon color on hover (default: `'mono'`)
- **Notable Features:**
  - **Simple Icon Button**: Button with only icon, no text content
  - **Hover Effect**: Changes icon stroke color on hover via hoverColor prop
  - **Reset Styles**: Uses resetButtonStyles for clean button appearance
  - **Type Safety**: Always renders as `type='button'` to prevent form submission
  - **Icon Integration**: Directly uses Icon component with configurable size and weight
  - **HTML Button Attributes**: Supports all standard button attributes (onClick, disabled, className, etc.)
  - **Used In**: Tables, toolbars, action areas, and ActionButtons component
  - **Note**: Does NOT extend IButtonProps - this is a simpler icon-only button without Button component's design variants

---

### Input
- **Status:** ✅ Has Storybook (via TextField)
- **Component Path:** `ui-lib/src/Form/atoms/Input.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/Input.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `fieldState`: TypeFieldState (`'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing'`) - Visual state of the input
  - `showFeedback`: `boolean` - Shows feedback bar below input with icon and message
  - `feedbackMessage`: `string` - Message text displayed in feedback bar
  - `actionCallback`: `() => void` - Callback for action icon click
  - `actionIcon`: `string` - Icon name for action button displayed inside input (right side)
  - `postfix`: `string` - Text displayed after input value (e.g., units like "px", "%")
- **Notable Features:**
  - **Base Input Component**: Foundation input with state-based styling
  - **Field States**: Six states with color-coded borders and shadows (default, disabled, required, valid, invalid, processing)
  - **Feedback System**: Optional feedback bar with state-specific icons (Required, Success, Invalid, Spinner)
  - **Action Icon**: Optional icon button inside input for actions (e.g., clear, show password, search)
  - **Postfix Support**: Display text after input value for units or context
  - **State-Based Styling**: Border colors, shadows, and backgrounds change based on fieldState
  - **Auto-Disable**: Automatically disables input when fieldState is 'disabled' or 'processing'
  - **Focus Effects**: Enhanced box shadow on focus with state-specific colors
  - **Feedback Visibility**: Feedback bar hidden for 'default' and 'disabled' states
  - **Smooth Transitions**: Border, background, and shadow transitions with fast easing
  - **Placeholder Styling**: Italic placeholder text (normal for Japanese language)
  - **Used By**: TextField component wraps this with Label

---

### InputFileButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/InputFileButton.tsx`
- **Story Path:** `storybook/src/stories/Form/FileManagement/InputFileButton.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `text`: `string` (required) - Button text to display
  - `inputCallback`: `(newFiles: FileList) => void` (required) - Callback when files are selected
  - `buttonSize?`: `TypeButtonSizes` - Button size: 'small' | 'normal' | 'large'
  - `buttonDesign?`: `TypeButtonDesigns` - Button design: 'primary' | 'secondary' | 'tertiary' | 'text-only' | 'danger'
  - Plus all standard HTML input attributes (`accept`, `multiple`, `disabled`, `name`, etc.)
- **Notable Features:**
  - File input styled as button (hidden input with visible button trigger)
  - Multiple file support via HTML input `multiple` attribute
  - File type filtering via HTML input `accept` attribute
  - Custom button styling (design and size variants)
  - Automatic input value reset after file selection
  - Click forwarding from button to hidden file input
  - Inherits all standard HTML file input attributes

---

### IntroductionText
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/atoms/IntroductionText.tsx`
- **Story Path:** `storybook/src/stories/Pages/IntroductionText.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `children`: `ReactNode` - Text content to display
- **Notable Features:**
  - Styled introduction/description text component
  - Rendered as `<p>` element
  - Used in page headers and introductions
  - Consistent typography with CSS variables
  - Font: var(--font-ui)
  - Color: var(--grey-11)
  - Font size: 14px
  - Font weight: 500
  - Line height: 20px (142.857%)
  - No custom props (empty IProps interface)

---

### Label
- **Status:** ✅ Has Storybook (via Radio Button)
- **Component Path:** `ui-lib/src/Form/atoms/Label.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/RadioButton.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `LabelHTMLAttributes<HTMLLabelElement>`)
  - `htmlFor`: `string` (required) - Associated input ID for accessibility
  - `labelText`: `string` (required) - Label text to display
  - `direction?`: `TypeLabelDirection` - Flex direction: 'column' | 'row' | 'column-reverse' | 'row-reverse' (default: 'column')
  - `rightAlign?`: `boolean` - **DEPRECATED** - Use `direction='row-reverse'` instead (default: false)
  - `required?`: `boolean` - Show required indicator dot (default: false)
  - `children?`: `ReactNode` - Child elements (typically form inputs)
  - Plus all standard HTML label attributes (`className`, `style`, `onClick`, etc.)
- **Notable Features:**
  - Form label component with flexible layout
  - Required field indicator (primary blue dot via ::after pseudo-element)
  - Accessibility support via htmlFor attribute
  - Four layout directions (column, row, column-reverse, row-reverse)
  - Deprecated rightAlign prop (shows console warning)
  - CSS variable-based styling (font, color, required dot)
  - Supports children for wrapping form inputs
  - Inline-flex for row layouts, flex for column layouts
  - 8px gap between label text and children

---

### Layout
- **Status:** ❌ No Storybook (used in GlobalUI)
- **Component Path:** `ui-lib/src/Global/atoms/Layout.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/PTZPage.tsx`
- **Exported From:** `Global`
- **Description:** Collection of styled layout container components for structuring the application UI. These are styled-components, not React functional components.
- **Exported Components:**
  - **Layout**: Simple flex container (no props)
  - **MobileLayout**: Simple container for mobile layouts (no props)
  - **Content**: Scrollable content container with optional max-width and padding
    - `maxWidth?`: `string` - Custom max-width for child divs (default: 1400px)
    - `padBottom?`: `boolean` - Add bottom padding
  - **MainContainer**: Flex container for main content area (no props)
  - **ContentArea**: Flexible content area with responsive padding and max-width
    - `maxWidth?`: `string` - Custom max-width (default: 1200px in legacy mode)
    - `paddingOverride?`: `string` - Override default responsive padding
    - `legacyLayout?`: `boolean` - Enable legacy layout with responsive padding
- **Exported Constants:**
  - `MOBILE_CLOSE_HEIGHT = 50`
  - `MOBILE_NAVBAR_HEIGHT = 68`
- **Notable Features:**
  - Multiple styled-component exports for different layout needs
  - Content component has default max-width of 1400px for child divs
  - ContentArea supports legacy layout mode with responsive padding:
    - Small screens: `40px 20px` (or custom paddingOverride)
    - Medium screens: `40px` (or custom paddingOverride)
    - Large screens: `70px 90px` with 1200px max-width (or custom values)
  - ContentArea uses media queries from `deviceMediaQuery` theme helper
  - Used by GlobalUI for main application layout structure

---

### LineUI
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUI.tsx`
- **Story Path:** N/A
- **Example Page Path:** `scorer-ui-kit/packages/example/src/pages/LinePage.tsx`
- **Exported From:** `LineUI`
- **Props:**
  - `src`: `string` (required) - Image source URL to display and annotate
  - `onSizeChange?`: `(size: { h: number; w: number }) => void` - Callback when image size changes (default: no-op)
  - `onLineMoveEnd?`: `() => void` - Callback when line movement ends (default: no-op)
  - `onLineClick?`: `(lineSetId: number) => void` - Callback when a line is clicked (default: no-op)
  - `options?`: `LineUIOptions` - Configuration options for line UI behavior and display
  - `showDirectionMark?`: `boolean` - Show direction markers on lines
  - `lineClickSensingBorder?`: `string` - Border size for line click detection (default: '65')
  - `hasClickSensingBorder?`: `boolean` - Enable click sensing border (default: true)
  - **LineUIOptions interface:**
    - `showHandleFinder?`: `boolean` - Show handle finder overlay
    - `showSetIndex?`: `boolean` - Show line set index numbers
    - `showPointLabel?`: `boolean` - Show point labels (default: false)
    - `showLabelShadow?`: `boolean` - Show shadow on labels (default: false)
    - `showPointHandle?`: `boolean` - Show point handles for manipulation
    - `showMoveHandle?`: `boolean` - Show move handles
    - `showGrabHandle?`: `boolean` - Show all grab handles (true by default)
    - `setIndexOffset?`: `number` - Display offset for set indices (default: 0)
    - `pointIndexOffset?`: `number` - Display offset for point indices (default: 0)
    - `showPoint?`: `boolean` - Show point markers (default: false)
    - `fixedImgDimensions?`: `{ x: number, y: number }` - Fixed image dimensions override
    - `boundaryOffset?`: `number` - Offset from boundaries (default: 0)
    - `showDirectionMark?`: `boolean` - Show direction markers (default: false)
    - `areaFillColor?`: `string` - Fill color for areas
    - `areaTransparencyLevel?`: `number` - Transparency level for area fills
  - **IBoundary interface:**
    - `x`: `IMinMax` - X-axis boundaries
    - `y`: `IMinMax` - Y-axis boundaries
  - **IMinMax interface:**
    - `min`: `number` - Minimum value
    - `max`: `number` - Maximum value
- **Notable Features:**
  - Interactive line drawing and annotation on images
  - SVG-based rendering with viewBox scaling
  - Automatic image scaling and boundary calculation
  - Context-based state management via LineSetContext
  - Responsive to window resize events
  - Loading overlay with spinner during image load
  - Handle finder mode for easier line manipulation
  - Support for multiple line sets with individual click handlers
  - Configurable click sensing borders for better UX
  - Direction markers for line orientation
  - Point and move handles for line manipulation
  - Customizable display offsets for indices
  - Fixed dimension support for consistent scaling
  - Boundary offset configuration for edge constraints

---

### LineUIRTC
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUIRTC.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LinePage.tsx`
- **Exported From:** `LineUI`
- **Props:**
  - `ws`: `string` (required) - WebSocket URL for WebRTC connection
  - `onSizeChange?`: `(size: { h: number; w: number }) => void` - Callback when video size changes (default: no-op)
  - `onLineMoveEnd?`: `() => void` - Callback when line movement ends (default: no-op)
  - `onLineClick?`: `(lineSetId: number) => void` - Callback when a line is clicked (default: no-op)
  - `onLoaded?`: `(metadata: { height: number; width: number }) => void` - Callback when video metadata is loaded (default: no-op)
  - `options?`: `LineUIOptions` - Configuration options for line UI behavior and display
  - `videoOptions?`: `LineUIVideoOptions` (extends `VideoHTMLAttributes<HTMLVideoElement>`) - HTML video element attributes including autoPlay, controls, loop, muted, playsInline, poster, preload, etc.
  - `lineClickSensingBorder?`: `string` - Border size for line click detection (default: '65')
  - `hasClickSensingBorder?`: `boolean` - Enable click sensing border (default: true)
  - **LineUIOptions interface:**
    - `showHandleFinder?`: `boolean` - Show handle finder overlay
    - `showSetIndex?`: `boolean` - Show line set index numbers
    - `showPointLabel?`: `boolean` - Show point labels (default: false)
    - `showLabelShadow?`: `boolean` - Show shadow on labels (default: false)
    - `showPointHandle?`: `boolean` - Show point handles for manipulation
    - `showMoveHandle?`: `boolean` - Show move handles
    - `showGrabHandle?`: `boolean` - Show all grab handles (true by default)
    - `setIndexOffset?`: `number` - Display offset for set indices (default: 0)
    - `pointIndexOffset?`: `number` - Display offset for point indices (default: 0)
    - `showPoint?`: `boolean` - Show point markers (default: false)
    - `fixedImgDimensions?`: `{ x: number, y: number }` - Fixed image dimensions override
    - `boundaryOffset?`: `number` - Offset from boundaries (default: 0)
    - `showDirectionMark?`: `boolean` - Show direction markers (default: false)
    - `areaFillColor?`: `string` - Fill color for areas
    - `areaTransparencyLevel?`: `number` - Transparency level for area fills
- **Notable Features:**
  - LineUI component with WebRTC video streaming support
  - Real-time video annotation over WebRTC streams
  - Uses WebRTCClient component for video rendering
  - SVG-based line drawing overlay on video stream
  - Automatic video scaling and boundary calculation
  - Context-based state management via LineSetContext
  - Responsive to window resize events
  - Loading overlay with spinner during video load
  - Handle finder mode for easier line manipulation
  - Support for multiple line sets with individual click handlers
  - Video metadata callback (onLoaded) provides dimensions
  - Configurable click sensing borders for better UX
  - All LineUI options available (handles, labels, indices, etc.)
  - Full HTML5 video element control via videoOptions
  - Default video size: 1024x768 (updated on metadata load)

---

### LineUIVideo
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/LineUI/LineUIVideo.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LineRTCPage.tsx`
- **Exported From:** `LineUI`
- **Props:**
  - `src`: `string` (required) - Video source URL
  - `onSizeChange?`: `(size: { h: number; w: number }) => void` - Callback when video size changes (default: no-op)
  - `onLineMoveEnd?`: `() => void` - Callback when line movement ends (default: no-op)
  - `onLineClick?`: `(lineSetId: number) => void` - Callback when a line is clicked (default: no-op)
  - `onLoaded?`: `(metadata: { height: number; width: number }) => void` - Callback when video metadata is loaded (default: no-op)
  - `options?`: `LineUIOptions` - Configuration options for line UI behavior and display
  - `videoOptions`: `LineUIVideoOptions` (required, extends `VideoHTMLAttributes<HTMLVideoElement>`) - HTML video element attributes with component defaults: loop (default: false), autoPlay (default: false), controls (default: false), muted (default: true), plus all other VideoHTMLAttributes (playsInline, poster, preload, crossOrigin, etc.)
  - `lineClickSensingBorder?`: `string` - Border size for line click detection (default: '65')
  - `hasClickSensingBorder?`: `boolean` - Enable click sensing border (default: true)
  - **LineUIOptions interface:**
    - `showHandleFinder?`: `boolean` - Show handle finder overlay
    - `showSetIndex?`: `boolean` - Show line set index numbers
    - `showPointLabel?`: `boolean` - Show point labels (default: false)
    - `showLabelShadow?`: `boolean` - Show shadow on labels
    - `showPointHandle?`: `boolean` - Show point handles for manipulation
    - `showMoveHandle?`: `boolean` - Show move handles
    - `showGrabHandle?`: `boolean` - Show all grab handles (true by default)
    - `setIndexOffset?`: `number` - Display offset for set indices (default: 0)
    - `pointIndexOffset?`: `number` - Display offset for point indices (default: 0)
    - `showPoint?`: `boolean` - Show point markers (default: false)
    - `boundaryOffset?`: `number` - Offset from boundaries (default: 0)
    - `showDirectionMark?`: `boolean` - Show direction markers (default: false)
- **Notable Features:**
  - LineUI component for standard HTML5 video file annotation
  - SVG-based line drawing overlay on video element
  - Uses native HTML5 `<video>` element (not WebRTC)
  - Automatic video scaling and boundary calculation
  - Context-based state management via LineSetContext
  - Responsive to window resize events
  - Loading overlay with spinner during video load
  - Handle finder mode for easier line manipulation
  - Support for multiple line sets with individual click handlers
  - Video metadata callback (onLoaded) provides dimensions
  - Configurable click sensing borders for better UX
  - All LineUI options available (handles, labels, indices, etc.)
  - Full HTML5 video element control via videoOptions
  - Default video size: 1024x768 (updated on metadata load)
  - Default video settings: muted, no autoplay, no controls, no loop
  - Suitable for local video files or video URLs (not live streams)

---

### MainMenu
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/organisms/MainMenu.tsx`
- **Story Path:** `storybook/src/stories/Global/MainMenu.stories.tsx`
- **Exported From:** `Global`
- **Props:** (IMenu interface)
  - `content`: `IMenuTop` (required) - Menu content structure with items array
  - `home?`: `string` - Home page URL for logo link (default: '/')
  - `openWidth?`: `number` - Width when menu is open
  - `logoMark?`: `string` - Logo mark SVG URL (uses default SvgLogoMark if not provided)
  - `logoText?`: `string` - Logo text SVG URL (uses default SvgLogoText if not provided)
  - `supportUrl?`: `string` - URL for help & support link
  - `supportText?`: `string` - Text for support link (default: 'Help & Support')
  - `keepOpenText?`: `string` - Text for keep open toggle (default: 'Keep Open')
  - `autoHideText?`: `string` - Text for auto-hide toggle (default: 'Auto-Hide')
  - `defaultMenuOpen?`: `boolean` - Initial menu open state (default: true)
  - `canAlwaysPin?`: `boolean` - Allow menu to be pinned (default: false)
  - `onMenuToggle?`: `(isMenuOpen: boolean) => void` - Callback when menu open state changes (default: no-op)
  - **IMenuTop interface:**
    - `items`: `IMenuItemTop[]` - Array of top-level menu items
  - **IMenuItemTop interface:**
    - `title`: `string` - Display title
    - `icon?`: `any` - Icon name for menu item
    - `href?`: `string` - Navigation path
    - `isExternalLink?`: `boolean` - Whether link is external
    - `submenu?`: `IMenuItemSubmenu[]` - Optional submenu items
  - **IMenuItemSubmenu interface:**
    - `title`: `string` - Submenu item title
    - `href?`: `string` - Navigation path
    - `isExternalLink?`: `boolean` - Whether link is external
- **Notable Features:**
  - Fixed position sidebar navigation menu with React Portal rendering
  - Auto-hide/pin functionality with hover behavior
  - Collapsible menu with smooth transitions (except xxlarge breakpoint)
  - Logo display with separate mark and text components
  - Active state highlighting based on current route
  - Nested submenu support with context management
  - Support link in footer (optional)
  - Pin/auto-hide toggle in footer (when canAlwaysPin is true)
  - Uses useMenu hook for state management
  - Uses useLocation from react-router-dom for active path detection
  - Touch-friendly (disables auto-open on touch devices)
  - CSS variable-based theming (menu widths, colors, transitions)
  - PushContainer reserves space for menu in layout
  - Menu width: var(--global-menu-width-open) when open, var(--global-menu-width-closed) when closed
  - Z-index: 99 for proper layering
  - Box shadow and border styling

---

### MediaBox
- **Status:** ✅ Has Storybook (via MediaModal)
- **Component Path:** `ui-lib/src/Misc/atoms/MediaBox.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Modals/MediaModal.stories.tsx`
- **Exported From:** `Misc`
- **Props:** (IMediaModal interface)
  - `src`: `string` (required) - Media source URL (image or video)
  - `mediaType`: `IMediaType` (`'img' | 'video'`) (required) - Media type
  - `alt?`: `string` - Alt text for images
  - `videoOptions?`: `VideoHTMLAttributes<HTMLVideoElement>` - HTML video element attributes with component defaults: loop (default: false), autoPlay (default: true), controls (default: false), muted (default: true), plus all other VideoHTMLAttributes (playsInline, poster, preload, etc.) (default: {})
  - `hasModalLimits?`: `boolean` - Apply modal size limits (max-height: calc(100vh - 100px), max-width: calc(100vw - 100px))
  - `retryLoading?`: `boolean` - Enable automatic retry on load failure (default: false)
  - `retryLimit?`: `number` - Maximum retry attempts with exponential backoff (default: 5)
  - `minWidth?`: `string` - Minimum width for wrapper
  - `minHeight?`: `string` - Minimum height for wrapper
  - `onError?`: `(e: Event) => void` - Callback when media fails to load (default: no-op)
  - `onMediaLoad?`: `() => void` - Callback when media successfully loads (default: no-op)
- **Notable Features:**
  - Displays images or videos with loading states
  - Automatic retry mechanism with exponential backoff for failed loads
  - Loading overlay with spinner during media load
  - NoImage SVG fallback on load failure
  - Smooth fade-in transition on load (theme-based animation)
  - Responsive sizing with optional modal limits
  - Video preload set to 'metadata'
  - Video uses onCanPlayThrough event for load detection
  - Image uses onLoad event for load detection
  - Retry adds timestamp query parameter to bypass cache
  - CSS variable-based styling (grey-11 background)
  - Border radius: 3px
  - Used with useMediaModal hook for modal display
  - Exports MediaBoxWrapper styled component for custom usage

---

### ModalProvider
- **Status:** ✅ Has Storybook (via modal stories)
- **Component Path:** `ui-lib/src/context/ModalContext.tsx`
- **Story Path:** Multiple modal stories
- **Exported From:** `context`
- **Props:**
  - `children`: `ReactNode` - Child components to render within the provider
- **Context Value (ModalContextType):**
  - `modalProps`: `IModalProps` - Current modal properties
    - **IModalProps interface:**
      - `isOpen`: `boolean` (required) - Whether modal is open
      - `isCloseEnable?`: `boolean` - Show close button (default: true)
      - `closeText?`: `string` - Close button text (default: '')
      - `width?`: `string` - Custom modal width CSS value
      - `padding?`: `boolean` - Apply default padding (default: true)
      - `customComponent?`: `ReactElement` - Custom content component
      - `onDismiss`: `() => void` (required) - Callback when modal is dismissed
      - `dismissCallback?`: `() => void` - Additional callback on dismiss
  - `setModalProps`: `(newProps: IModalProps) => void` - Function to update modal properties
- **Notable Features:**
  - React Context provider for global modal management
  - Manages modal state globally via ModalContext
  - Renders Modal component with current props
  - Used with useModal hook for imperative modal control
  - Provides setModalProps function to update modal from anywhere in component tree
  - Default modal props: isOpen=false, onDismiss=no-op
  - Wraps children with context provider
  - Single modal instance shared across application

---

### MultilineContent
- **Status:** ✅ Has Storybook (via TypeTable)
- **Component Path:** `ui-lib/src/Pages/molecules/MultilineContent.tsx`
- **Story Path:** `storybook/src/stories/Tables/molecules/ActionsTable.stories.tsx`
- **Exported From:** `Pages`
- **Props:** (IMultiContent interface)
  - `contentArray`: `ReactElement[]` (required) - Array of React elements to display in column layout
- **Notable Features:**
  - Creates a vertical column of React elements
  - Flexible content display (can contain any React elements)
  - Used in tables and cards for multi-line content
  - Each element wrapped in div with unique key
  - Flex column layout with no gaps
  - Simple container component for stacking elements vertically

---

### Notification
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Alerts/atom/Notification.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Notification.stories.tsx`
- **Exported From:** `Alerts`
- **Props:** (INotificationProps type)
  - `id?`: `string` - Unique notification identifier (auto-generated by NotificationProvider if not provided)
  - `type`: `AlertType` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) (required) - Notification type (default: 'info')
  - `message`: `string` (required) - Notification message text
  - `actionTextButton?`: `string` - Text for optional action button
  - `isPinned?`: `boolean` - Prevent auto-dismiss (default: false)
  - `closeNow?`: `boolean` - Force immediate close (default: false)
  - `icon?`: `string` - Custom icon name (default: '')
  - `onTextButtonClick?`: `() => void` - Callback when action button is clicked
  - `closeCallback?`: `() => void` - Callback when notification closes
- **Notable Features:**
  - Toast-style notification component
  - Auto-dismiss after 7 seconds (unless isPinned is true)
  - Fixed top-center position via React Portal
  - Renders to document.body
  - Icon support with type-specific defaults (error, warning, info, success icons)
  - Optional action button with callback
  - Slide-in and slide-up animations
  - Used with NotificationProvider context and useNotification hook
  - Supports pinned notifications that remain until manually closed
  - closeNow prop triggers immediate dismissal
  - Handles animation end events for cleanup
  - Text button click triggers both callback and dismissal

---

### NotificationProvider
- **Status:** ✅ Has Storybook (via Notification stories)
- **Component Path:** `ui-lib/src/context/NotificationContext.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Notification.stories.tsx`
- **Exported From:** `context`
- **Props:**
  - `children`: `ReactNode` - Child components to render within the provider
- **Context Value (NotificationContextType):**
  - `sendNotification`: `(newNotification: INotificationProps) => void` - Function to queue a new notification
    - **INotificationProps interface:**
      - `id?`: `string` - Unique notification identifier (auto-generated if not provided)
      - `type`: `AlertType` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) (required) - Notification type
      - `message`: `string` (required) - Notification message text
      - `actionTextButton?`: `string` - Text for action button
      - `isPinned?`: `boolean` - Keep notification visible (no auto-dismiss) (default: false)
      - `closeNow?`: `boolean` - Force immediate close (default: false)
      - `icon?`: `string` - Icon name to display (default: '')
      - `onTextButtonClick?`: `() => void` - Callback when action button is clicked
      - `closeCallback?`: `() => void` - Callback when notification closes
  - `clearNotifications`: `() => void` - Function to clear all queued notifications and close active one
- **Notable Features:**
  - React Context provider for global notification management
  - Queue-based notification system (shows one at a time)
  - Manages notification queue with automatic progression
  - Used with useNotification hook for imperative notification control
  - Auto-generates unique IDs for notifications using uniqueID helper
  - Validates and normalizes notification props before queueing
  - Renders active Notification component via React Portal
  - Chains closeCallback to handle queue progression
  - Supports pinned notifications that don't auto-dismiss
  - clearNotifications empties queue and forces current notification to close
  - Context value memoized for performance
  - Single notification displayed at a time

---

### PageHeader
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/molecules/PageHeader.tsx`
- **Story Path:** `storybook/src/stories/Pages/PageHeader.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `title`: `string` (required) - Main page title
  - `areaHref`: `string` - Link URL for area navigation
  - `areaTitle`: `string` - Text for area link
  - `icon`: `string` - Icon name to display
  - `iconColor`: `string` - Color for the icon (default: `'primary-9'`)
  - `introductionText`: `string` - Introduction text below title
  - `updateDocTitle`: `boolean` - Whether to update document title (default: `true`)
  - `hideAreaInDocTitle`: `boolean` - Whether to hide area in document title
  - `tagList`: `IHeaderTag[]` - Array of tag objects
    - **IHeaderTag interface:**
      - `label`: `string` (required) - Tag label text
      - `linkTo`: `string` - Link URL for tag navigation
      - `icon`: `string` - Icon name for tag
      - `onTagClick`: `() => void` - Callback when tag is clicked
  - `areaTitleBottom`: `boolean` - Position area title at bottom
  - `rightContent`: `ReactNode | FC | ReactElement` - Right-side content/buttons
  - `bottomLeftContent`: `ReactNode | FC | ReactElement` - Content for bottom left area
  - `onAreaClick`: `() => void` - Callback when area is clicked
- **Notable Features:**
  - Automatically updates document title with optional area prefix
  - Supports flexible content areas (right and bottom-left)
  - Tag navigation with icons and click handlers
  - Configurable icon color with default value
  - Area link can be positioned at top or bottom

---

### PageTitle
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Pages/atoms/PageTitle.tsx`
- **Story Path:** `storybook/src/stories/Pages/PageTitle.stories.tsx`
- **Exported From:** `Pages`
- **Props:**
  - `title`: `string` (required) - Main title text
  - `icon`: `string` - Icon name to display
  - `iconColor`: `ISvgIcons['color']` - Icon color (default: `'dimmed'`)
  - `areaTitle`: `string` - Area/breadcrumb text
  - `areaHref`: `string` - Link URL for area navigation
  - `updateDocTitle`: `boolean` - Whether to update document title (default: `true`)
  - `hideAreaInDocTitle`: `boolean` - Whether to hide area in document title (default: `false`)
  - `areaTitleBottom`: `boolean` - Position area title below main title (default: `false`)
  - `onAreaClick`: `() => void` - Callback when area is clicked (makes area clickable as button)
- **Notable Features:**
  - Automatically updates document title using useTitle hook
  - Area title can be rendered as link (with areaHref), button (with onAreaClick), or plain text
  - Supports flexible area title positioning (top or bottom)
  - Icon displayed with configurable color
  - Responsive layout with different icon positioning on mobile vs desktop

---

### Pagination
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/molecules/Pagination.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/Pagination.stories.tsx`
- **Exported From:** `Misc`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `pageText`: `string` - Page label text (default: `'Page:'`)
  - `totalPages`: `number` (required) - Total number of pages
  - `activePage`: `number` - Current active page (default: `1`)
  - `buttonText`: `string` - GO button text (default: `'GO'`)
  - `itemsText`: `string` - Items per page label (default: `'Items Per Page'`)
  - `itemsDefaultValue`: `number` - Default items per page value
  - `selectWidth`: `string` - Select field width (default: `'60px'`)
  - `selectDisabled`: `boolean` - Disable select field (default: `false`)
  - `selectId`: `string` - Select field ID (default: `'paginationPages'`)
  - `itemsOptions`: `IItemsOption[]` (required) - Items per page options
    - **IItemsOption interface:**
      - `value`: `number` (required) - Numeric value for items per page
      - `textValue`: `string` (required) - Display text for the option
  - `onPageChange`: `(page: number) => void` (required) - Callback when page changes
  - `onItemsChange`: `(items: number) => void` (required) - Callback when items per page changes
- **Notable Features:**
  - Complete pagination controls with direct page input
  - GO button for page navigation
  - Previous/Next arrow navigation buttons
  - Items per page selector dropdown
  - Input validation with shake animation on invalid input
  - Keyboard support (Enter key to submit page number)
  - Paste validation to prevent invalid input

---

### PasswordField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/PasswordField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/PasswordInput.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `name`: `string` (required) - Input name attribute
  - `label`: `string` (required) - Label text for the field
  - `fieldState`: `TypeFieldState` (required) - Field validation state (`'default' | 'valid' | 'invalid'`)
  - `showFeedback`: `boolean` - Whether to show validation feedback icon
  - `feedbackMessage`: `string` - Validation feedback message text
- **Notable Features:**
  - Password input with automatic show/hide toggle
  - Eye icon button to reveal/hide password (PasswordShow/PasswordHide icons)
  - Toggles between password and text input types
  - Built on Input component with action callback
  - Wrapped in Label component for accessibility
  - Supports all standard input HTML attributes
  - Validation feedback support via fieldState

---

### PercentageSlider
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/PercentageSlider.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/PercentageSlider.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `step`: `number` - Step increment for slider values
  - `marks`: `ISliderMark[]` - Array of mark objects for slider
    - **ISliderMark interface:**
      - `value`: `number` (required) - Position value for the mark
      - `label`: `string` (required) - Display label for the mark
  - `defaultValue`: `number` - Initial slider value (default: `0`)
  - `value`: `number` - Controlled slider value
  - `showValue`: `boolean` - Whether to display percentage value in header
  - `inputCallback`: `(value: number) => void` - Callback when slider value changes
  - `updateThumbColor`: `(value: number) => IFeedbackColor` - Custom function to determine thumb color based on value
  - `updateTitle`: `(value: number) => string` - Custom function to generate title text based on value
  - `allMarkCentered`: `boolean` - Whether to center all mark labels
- **Notable Features:**
  - Percentage slider with fixed range (0-100%)
  - Dynamic title based on value ('Critical Level' ≤10%, 'Warning Level' 10-30%, 'Safe Level' >30%)
  - Color-coded thumb (error/warning/success) based on value thresholds
  - Optional percentage value display with % symbol
  - Customizable title and thumb color via callback functions
  - Built on SliderInput component
  - Supports all standard input HTML attributes

---

### PTZProvider
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/PTZControl/state/PTZProvider.tsx`
- **Story Path:** N/A
- **Example Page Path:** `scorer-ui-kit/packages/example/src/App.tsx`
- **Exported From:** `PTZControl`
- **Props:**
  - `socketUrl`: `string` - WebSocket URL for PTZ connection (default: `'ws://localhost/wsapp/'`)
  - `imageRefresh`: `number` - Image refresh interval in milliseconds (default: `1000`)
  - `children`: `ReactNode` - Child components to render within the provider
- **Context Value (IPTZContext):**
  - `state`: `PTZState` - Current PTZ state from reducer
  - `dispatch`: `React.Dispatch<PTZReducerActions>` - Dispatch function for PTZ actions
  - `actions`: `PTZActions` - Action helper functions
    - **PTZActions interface:**
      - `move`: `({direction}: {direction: 'up' | 'down' | 'left' | 'right'}) => void` - Move camera in specified direction
      - `zoom`: `({zooming}: {zooming: 'in' | 'out'}) => void` - Zoom camera in or out
      - `stop`: `() => void` - Stop current camera movement
      - `connect`: `(params: {username: string, password: string, host: string, port?: number}) => void` - Connect to PTZ camera
      - `disconnect`: `() => void` - Disconnect from PTZ camera
- **Notable Features:**
  - React Context provider for PTZ (Pan-Tilt-Zoom) camera controls
  - Manages PTZ state via reducer pattern
  - Provides action helpers for camera control (move, zoom, stop, connect, disconnect)
  - WebSocket-based communication with configurable URL
  - Configurable image refresh rate
  - Used with usePTZ hook for state management
  - Exposes both raw dispatch and convenient action helpers

---

### RadioButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/RadioButton.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/RadioButton.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `currentChecked`: `number | string` - Currently checked value in the radio group
  - `onChangeCallback`: `(value: number | string) => void` - Callback when radio button is selected
- **Notable Features:**
  - Custom styled radio button with circular design
  - Controlled component using currentChecked prop
  - Automatically determines checked state by comparing currentChecked with value
  - Supports both string and number values
  - Hover states for interactive feedback
  - Disabled state styling
  - Hidden native input for accessibility
  - Supports all standard input HTML attributes (id, name, value, disabled, required)
  - Radio group support via name attribute

---

### SelectField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SelectField.tsx`
- **Story Path:** `storybook/src/stories/Form/SelectField.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `SelectHTMLAttributes<HTMLSelectElement>`)
  - `fieldState`: `TypeFieldState` - Field validation state (`'default' | 'valid' | 'invalid'`) (default: `'default'`)
  - `label`: `ILabel` - Label configuration object
    - **ILabel interface:**
      - `htmlFor`: `string` (required) - ID of the select element
      - `text`: `string` (required) - Label text
      - `isSameRow`: `boolean` - **DEPRECATED** Use `direction: 'row'` instead
      - `direction`: `TypeLabelDirection` - Label direction (`'row' | 'column'`)
  - `isCompact`: `boolean` - Compact mode with reduced height
  - `placeholder`: `string` - Placeholder text (shown as disabled first option)
  - `icon`: `string` - Icon name to display on the left
  - `changeCallback`: `(value: string) => void` - Callback when selection changes
- **Notable Features:**
  - Custom styled select dropdown with hidden native appearance
  - Optional left icon with automatic color adjustment for disabled state
  - Down arrow icon on the right (always visible)
  - Label integration with row or column layout
  - Validation states with color-coded borders and shadows
  - Compact mode reduces height
  - Placeholder shown as disabled hidden option
  - Italic placeholder text (except for Japanese language)
  - Supports all standard select HTML attributes (disabled, defaultValue, children for options)
  - Deprecation warning for `label.isSameRow` (use `label.direction: 'row'`)

---

### SelectWrapper
- **Status:** ✅ Has Storybook (used in SelectField story)
- **Component Path:** `ui-lib/src/Form/atoms/SelectField.tsx`
- **Story Path:** `storybook/src/stories/Form/SelectField.stories.tsx`
- **Exported From:** `Form`
- **Props:** None (styled component)
- **Notable Features:**
  - Styled wrapper div for select field positioning
  - Provides relative positioning for icon placement
  - Full width flex container
  - Exported as styled component from SelectField.tsx

---

### Sidebar
- **Status:** ❌ No Storybook (used in GlobalUI)
- **Component Path:** `ui-lib/src/Global/molecules/Sidebar.tsx`
- **Example Page Path:** `example/src/pages/LinePage.tsx`
- **Story Path:** N/A
- **Exported From:** `Global`
- **Props:**
  - `children`: `ReactNode` - Content to render in sidebar
- **Notable Features:**
  - Sidebar container component for layout
  - Used by MainMenu and other navigation components
  - Provides consistent sidebar styling and positioning

---

### SliderInput
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SliderInput.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/SliderInput.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `min`: `number` - Minimum slider value
  - `max`: `number` (required) - Maximum slider value
  - `step`: `number` - Step increment for slider values
  - `marks`: `ISliderMark[]` - Array of mark objects for slider labels
    - **ISliderMark interface:**
      - `value`: `number` (required) - Position value for the mark
      - `label`: `string` - Display label for the mark
  - `defaultValue`: `number` - Initial slider value
  - `value`: `number` - Controlled slider value
  - `thumbColor`: `IFeedbackColor` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) - Color of the slider thumb (default: `'info'`)
  - `onlyMarkSelect`: `boolean` - Restrict selection to mark positions only
  - `showValue`: `boolean` - Whether to display current value
  - `inputCallback`: `(value: number) => void` - Callback during slider drag
  - `onChangeCallback`: `(value: number) => void` - Callback when slider value changes
  - `allMarkCentered`: `boolean` - Whether to center all mark labels
- **Notable Features:**
  - Custom range slider with draggable thumb
  - Optional marks/labels at specific positions
  - Snap-to-mark functionality with onlyMarkSelect
  - Color-coded thumb (error, warning, info, success, neutral)
  - Ghost thumb for visual feedback during drag
  - Supports both controlled and uncontrolled modes
  - Mark alignment options (centered or edge-aligned)
  - Supports all standard input HTML attributes (disabled, etc.)

---

### SmallInput
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/SmallInput.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/SmallInput.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputHTMLAttributes<HTMLInputElement>`)
  - `fieldState`: `TypeFieldState` (`'default' | 'valid' | 'invalid'`) - Field validation state (default: `'default'`)
  - `label`: `string` (required) - Label text for the input
  - `unit`: `string` - Unit text displayed after the input (e.g., 'px', 'ms')
- **Notable Features:**
  - Compact input variant with reduced height (var(--input-compact-height))
  - Integrated label wrapper for accessibility
  - Optional unit display on the right side
  - Validation state styling with colored borders
  - Focus-within shadow effect
  - Italic placeholder text (except for Japanese language)
  - Disabled state styling
  - Used in tables and tight spaces
  - Supports all standard input HTML attributes (type, placeholder, defaultValue, disabled, required, etc.)

---

### SortDropdown
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/molecules/SortDropdown.tsx`
- **Story Path:** `storybook/src/stories/Filters/molecules/SortDropdown.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `buttonText`: `string` (required) - Text displayed on the dropdown button
  - `list`: `IFilterItem[]` (required) - Array of sort options
    - **IFilterItem type:**
      - `text`: `string` (required) - Display text for the option
      - `value`: `string | number` (required) - Value for the option
  - `disabled`: `boolean` - Whether the dropdown is disabled
  - `isLoading`: `boolean` - Whether to show loading state
  - `loadingText`: `string` - Text to display during loading
  - `ascendingText`: `string` - Text for ascending option (default: `'Ascending'`)
  - `descendingText`: `string` - Text for descending option (default: `'Descending'`)
  - `isSortAscending`: `boolean` - Current sort direction (default: `true`)
  - `selected`: `IFilterItem` (required) - Currently selected sort option
  - `design`: `FilterButtonDesign` (`'default' | 'basic'`) - Button design variant (default: `'basic'`)
  - `onSelect`: `(newSort: IFilterItem, isSortAscending: boolean) => void` (required) - Callback when sort option or direction changes
- **Notable Features:**
  - Sort dropdown with integrated ascending/descending toggle
  - Radio button selection for sort options
  - Separate buttons for ascending/descending with icons (FilterAscending/FilterDescending)
  - Loading state with LoadingBox component
  - FilterSorting icon on button
  - Prevents redundant selections (no callback if same option selected)
  - Built on FilterDropHandler and FilterDropdownContainer

---

### Spinner
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Indicators/Spinner.tsx`
- **Story Path:** `storybook/src/stories/Indicators/Spinner.stories.tsx`
- **Exported From:** Root
- **Props:**
  - `size`: `SpinnerSize` (`'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'`) - Predefined spinner size (default: `'medium'`)
  - `styling`: `string` (required) - Spinner style variant (`'primary' | 'secondary' | 'warning' | 'simple'`)
  - `custom`: `ICustomSpinner` - Custom size and color overrides
    - **ICustomSpinner interface:**
      - `size`: `number` - Custom size in pixels (overrides size prop)
      - `baseColor`: `string` - Custom base circle color
      - `topColor`: `string` - Custom rotating circle color
- **Notable Features:**
  - Animated loading spinner with rotating circle
  - Five predefined sizes (xsmall: 12px, small: 16px, medium: 24px, large: 36px, xlarge: 48px)
  - Color-coded styling variants (primary, secondary, warning, simple)
  - Custom size and color overrides via custom prop
  - SVG-based with smooth rotation and dash animation
  - Deprecation warning for 'danger' styling (use 'warning' instead)
  - Used in buttons and loading states

---

### SplitButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/SplitButton.tsx`
- **Story Path:** `storybook/src/stories/Form/Buttons/SplitButton.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `mainButtonId`: `string` (required) - ID of the button to display as main button
  - `buttonList`: `ISplitButtonItem[]` (required) - Array of button configurations
    - **ISplitButtonItem type (extends ButtonHTMLAttributes):**
      - `id`: `string` (required) - Unique button identifier
      - `icon`: `string` - Icon name to display
      - `text`: `string` (required) - Button text
      - `hasOnSelectLoading`: `boolean` - Whether to show loading state on click
      - `onClickCallback`: `() => void` - Callback when button is clicked
  - `isSortAscending`: `boolean` - Sort direction indicator (legacy prop)
  - `size`: `TypeButtonSizes` (`'xsmall' | 'small' | 'normal' | 'large'`) - Button size variant
  - `design`: `TypeButtonDesigns | string` (`'primary' | 'secondary' | 'warning' | 'danger' | 'text-only' | 'outline'`) - Button design variant (default: `'primary'`)
  - `textMaxWidth`: `string` - Maximum width for button text
  - `disabled`: `boolean` - Whether the entire split button is disabled (default: `false`)
- **Notable Features:**
  - Split button with dropdown menu showing alternative actions
  - Main button displayed based on mainButtonId
  - Toggle icon (Down/Close) to open/close dropdown
  - Click outside to close dropdown
  - Individual buttons can be disabled via buttonList items
  - Supports all standard button HTML attributes via ISplitButtonItem
  - Automatic text width calculation for dropdown options
  - Used for primary action with alternatives

---

### SplitLayout
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Layouts/molecules/SplitLayout.tsx`
- **Story Path:** `storybook/src/stories/Global/organisms/SplitLayout.stories.tsx`
- **Exported From:** `Layouts`
- **Props:**
  - `layout`: `'horizontal' | 'vertical'` (required) - Layout direction
  - `reverse`: `boolean` - Reverse the order of main and side areas
  - `dividerSize`: `number` - Width/height of the resize divider in pixels (default: `16`)
  - `mainArea`: `IMainArea` (required) - Main area configuration
    - **IMainArea interface:**
      - `content`: `ReactElement` (required) - Content to render in main area
      - `minSize`: `number` - Minimum size in pixels
  - `sideArea`: `ISideArea` (required) - Side area configuration
    - **ISideArea interface:**
      - `content`: `ReactElement` (required) - Content to render in side area
      - `defaultSize`: `number` - Default size in pixels (default: `350`)
      - `minSize`: `number` - Minimum size in pixels (default: `0`)
      - `maxSize`: `number` - Maximum size in pixels
      - `collapsable`: `boolean` - Whether side area can be collapsed
      - `defaultCollapsed`: `boolean` - Whether side area starts collapsed
      - `onSideAreaStateChange`: `(sideAreaState: ISideAreaState) => void` - Callback when side area state changes
  - `persist`: `boolean` - Whether to persist size/state in localStorage (default: `false`)
  - `persistenceKey`: `string` - Key for localStorage persistence (default: `'resizable_ui'`)
  - `showDebug`: `boolean` - Show debug overlay with state information
- **Ref Methods (ISplitLayoutHandles):**
  - `open`: `() => void` - Open the side area
  - `close`: `() => void` - Close/collapse the side area
  - `reset`: `() => void` - Reset to default size and state
- **Notable Features:**
  - Two-panel split layout with resizable divider
  - Supports horizontal and vertical layouts
  - Drag to resize with visual feedback (ResizeLine component)
  - Double-click divider to reset to default
  - Collapsible side area with smooth animations
  - Five side area states: open, collapsing, collapsed, peeking, opening
  - Min/max size constraints for both areas
  - localStorage persistence for size and collapse state
  - Click outside viewport releases drag
  - Imperative controls via ref (open, close, reset)
  - Nested split layouts support
  - Hide tolerance for collapsing (50px)

---

### StatusIcon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Icons/StatusIcon.tsx`
- **Story Path:** `storybook/src/stories/Misc/StatusIcon.stories.tsx`
- **Exported From:** `Icons`
- **Props:**
  - `icon`: `string` (required) - Icon name to display
  - `status`: `IStatusDot` (`'caution' | 'danger' | 'good' | 'neutral' | 'highlight'`) - Status color for dot or counter
  - `counter`: `number` - Counter value to display (shows counter badge instead of dot)
  - `maxCounter`: `number` - Maximum counter value before showing "+" (default: `999`)
- **Notable Features:**
  - Icon with status indicator (dot or counter badge)
  - Two display modes: status dot (6px circle) or counter badge (with number)
  - Counter mode: Shows number up to maxCounter, then displays "maxCounter+"
  - Status dot positioned at top-right (-6px, -6px)
  - Counter badge positioned at top-left (14px, -12px)
  - Color-coded status via theme.colors.status
  - Fixed icon size (18px) with 'dimmed' color
  - Smooth color transitions on status change
  - Used for device/connection status and notification counts

---

### Switch
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/atoms/Switch.tsx`
- **Story Path:** `storybook/src/stories/Form/Switch.stories.tsx`
- **Exported From:** `Form`
- **Props:**
  - `labelText`: `string` - Label text displayed next to switch
  - `leftTheme`: `SwitchThemes` (`'on' | 'off' | 'danger'`) - Theme when switch is off (default: `'off'`)
  - `rightTheme`: `SwitchThemes` (`'on' | 'off' | 'danger'`) - Theme when switch is on (default: `'on'`)
  - `state`: `TypeSwitchState` (`'default' | 'loading' | 'locked' | 'disabled' | 'failure'`) - Switch state (default: `'default'`)
  - `checked`: `boolean` - Controlled checked state
  - `defaultChecked`: `boolean` - Default checked state for uncontrolled mode (default: `false`)
  - `onChangeCallback`: `(checked: boolean, indeterminate?: boolean) => void` - Callback when switch is toggled
- **Notable Features:**
  - Toggle switch component with smooth animations
  - Supports both controlled and uncontrolled modes
  - Custom themes for left (off) and right (on) states
  - Five special states: default, loading (shows spinner), locked (shows lock icon, full width), disabled, failure (shows exclamation icon, centered)
  - Hover intent animation (switch moves slightly toward target position)
  - Locked state expands inner switch to full width
  - Failure state centers switch with exclamation icon
  - Loading state shows spinner inside switch
  - Cannot toggle when locked or disabled
  - Smooth transitions for position, border, and width
  - Hidden native checkbox input for accessibility

---

### Tab
- **Status:** ❌ No Storybook (used with Tabs)
- **Component Path:** `ui-lib/src/Tabs/atoms/Tab.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/TabsPage.tsx`
- **Exported From:** `Tabs`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `tabFor`: `string` (required) - Identifier for the tab (used to match with selected state)
  - `children`: `ReactNode` - Tab label content
- **Notable Features:**
  - Individual tab component used within TabList
  - Uses TabContext to get selected state and setSelected function
  - Active state determined by comparing tabFor with context selected value
  - Active styling: bold font (600 vs 500), primary color, bottom border
  - Inactive styling: regular font, grey color, transparent border
  - Click handler calls both custom onClick and setSelected from context
  - Supports all standard div HTML attributes
  - User-select disabled for better UX
  - Fixed height (40px) with consistent padding

---

### TabContent
- **Status:** ❌ No Storybook (used with Tabs)
- **Component Path:** `ui-lib/src/Tabs/TabContent.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/TabsPage.tsx`
- **Exported From:** `Tabs`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `tabId`: `string` (required) - Identifier for the tab panel (must match Tab's tabFor value)
  - `children`: `ReactNode` - Content to display when tab is active
- **Notable Features:**
  - Tab panel content wrapper with conditional rendering
  - Uses TabContext to get selected state
  - Only renders when tabId matches context selected value (selected === tabId)
  - Returns null when not selected (completely unmounted, not just hidden)
  - Supports all standard div HTML attributes
  - Minimal styling (empty Container styled component)
  - Used within Tabs component alongside Tab components

---

### TabList
- **Status:** ✅ Has Storybook (via TabWithIcon story)
- **Component Path:** `ui-lib/src/Tabs/TabList.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `defaultTabId`: `string` (required) - ID of the tab to select by default on mount
  - `children`: `ReactNode` - Tab components to render
- **Notable Features:**
  - Container for Tab components in horizontal layout
  - Uses TabContext to set initial selected tab
  - Sets selected tab to defaultTabId on mount via useEffect
  - Flexbox row layout for horizontal tab bar
  - Supports all standard div HTML attributes
  - Must be used within Tabs component (requires TabContext)

---

### TableRowThumbnail
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tables/atoms/TableRowThumbnail.tsx`
- **Story Path:** `storybook/src/stories/Tables/atoms/TableRowThumbnail.stories.tsx`
- **Exported From:** `Tables`
- **Props:**
  - `image`: `string` - Image source URL for the thumbnail
  - `hoverZoom`: `boolean` - Enables zoom effect on hover (default: `true`)
  - `aspect`: VideoAspects (`'4:3' | '16:9'`) - Aspect ratio for the thumbnail container
  - `mediaUrl`: `string` - URL for full-size media to display in modal when clicked
  - `mediaType`: IMediaType (`'img' | 'video'`) - Type of media for modal display
  - `retryImageLoad`: `boolean` - Enables automatic retry mechanism for failed image loads (default: `false`)
  - `retryLimit`: `number` - Maximum number of retry attempts for image loading (default: `5`)
  - `closeText`: `string` - Text for the close button in the media modal
  - `onClickThumbnail`: `() => void` - Custom click handler for the thumbnail (overrides default modal behavior)
- **Notable Features:**
  - **Hover Zoom Effect**: When `hoverZoom` is enabled, thumbnail scales up on hover for better preview
  - **Retry Mechanism**: Automatically retries loading failed images up to `retryLimit` times with exponential backoff
  - **Media Modal Integration**: Opens full-size media in modal when clicked (unless `onClickThumbnail` is provided)
  - **Placeholder Handling**: Displays placeholder when image fails to load after all retry attempts
  - **Aspect Ratio Control**: Maintains consistent aspect ratio (4:3 or 16:9) for thumbnails
  - **Video Support**: Can display video thumbnails and open video in modal via `mediaType` prop
  - **Image Existence Check**: Validates image URL before attempting to load

---

### Tabs
- **Status:** ✅ Has Storybook (via TabWithIcon story)
- **Component Path:** `ui-lib/src/Tabs/Tabs.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:** (extends `HTMLAttributes<HTMLDivElement>`)
  - `children`: `ReactNode` - Tab and TabContent components to render
- **Notable Features:**
  - **TabContext Provider**: Provides context with `selected` state and `setSelected` function for child Tab components
  - **State Management**: Manages active tab state internally (initialized to empty string)
  - **Flexible Container**: Supports all standard div HTML attributes
  - **Minimal Wrapper**: Simple context provider without styling or layout (just renders children)
  - **Used With**: TabList, Tab, and TabContent components that consume the TabContext
  - **Note**: Initial tab selection is controlled by TabList's `defaultTabId` prop, not by Tabs component

---

### TabsWithIconBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/TabsWithIconBar.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `defaultTabId`: `string` (required) - ID of the tab to select by default on mount
  - `tabList`: `ITabIcon[]` (required) - Array of tab configurations with icons and content
    - **ITabIcon interface** (extends ITabWithIcon):
      - `icon`: `string` (required) - Icon name for the tab
      - `title`: `string` (required) - Main title text for the tab
      - `subtitle`: `string` - Optional subtitle text displayed below title
      - `tabFor`: `string` (required) - Unique identifier for the tab
      - `customComponent`: `ReactElement` - Custom component to render as tab content
  - `paddingLeft`: `string` - Left padding override for tab list wrapper (default: `'87px'`)
- **Notable Features:**
  - **Complete Tab System**: Combines Tabs, TabList, TabWithIcon, and TabContent into single component
  - **Icon Support**: Each tab displays an icon with title and optional subtitle
  - **Active Indicator**: Visual border bottom on active tab with primary color
  - **Custom Content**: Each tab can have custom ReactElement content via `customComponent`
  - **Scrollable Tab Bar**: Tab list wrapper has hidden scrollbar for overflow handling
  - **Flexible Padding**: Customizable left padding for tab list alignment
  - **Auto-rendering**: Automatically maps tabList to create TabWithIcon and TabContent components

---

### TabWithIcon
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tabs/atoms/TabWithIcon.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/TabWithIcon.stories.tsx`
- **Exported From:** `Tabs`
- **Props:**
  - `icon`: `string` (required) - Icon name to display
  - `title`: `string` (required) - Main title text for the tab
  - `subtitle`: `string` - Optional subtitle text displayed below title in italic
  - `tabFor`: `string` (required) - Unique identifier for the tab (matches with TabContent's tabId)
- **Notable Features:**
  - **Context-Based Active State**: Uses TabContext to determine if tab is active (selected === tabFor)
  - **Icon Integration**: Displays icon with dynamic color (primary when active, dimmed when inactive)
  - **Two-Line Layout**: Title and optional subtitle in vertical layout with icon on left
  - **Active Indicator**: 3px bottom border in primary color when active, transparent when inactive
  - **Auto Click Handling**: Automatically calls setSelected from context on click
  - **Text Overflow**: Both title and subtitle use nowrap and text-overflow ellipsis
  - **Responsive Sizing**: Icon size 15px, title 14px, subtitle 12px
  - **Used In**: TabsWithIconBar component for icon-based tab navigation

---

### Tag
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/atoms/Tag.tsx`
- **Story Path:** `storybook/src/stories/Misc/atoms/Tag.stories.tsx`
- **Exported From:** `Misc`
- **Props:** (extends `IconProps`)
  - `label`: `string` - Text content to display in the tag
  - `linkTo`: `string` - React Router link destination (renders as Link when provided)
  - `noBorder`: `boolean` - Removes border styling (default: `false`)
  - `tagSize`: TypeTagSize (`undefined | 'compact' | 'default'`) - Predefined size variant
  - `onTagClick`: `() => void` - Click handler (renders as button when provided)
  - `icon`: `string` - Icon name to display (from IconProps, default: `''`)
  - `size`: `number` - Icon and text size in pixels (from IconProps, default: `12`)
  - `weight`: IWeight - Icon weight (from IconProps, default: `'regular'`)
  - `color`: ISvgIcons['color'] - Icon color (from IconProps, default: `'grey-12'`)
  - `forSvgUsage`: `boolean` - Icon SVG usage flag (from IconProps, default: `false`)
- **Notable Features:**
  - **Flexible Rendering**: Renders as button (with `onTagClick`), Link (with `linkTo`), or plain div
  - **Size Variants**: `compact` (12px text, 8px icon, 2px/6px padding) or `default` (14px text, 10px icon, 3px/8px padding)
  - **Custom Sizing**: When `tagSize` is undefined, uses `size` prop for both icon and text
  - **Hover Effects**: Primary color hover when clickable or linkable
  - **Icon Integration**: Optional icon displayed before label with gap spacing
  - **Border Control**: Optional 1px grey border via `noBorder` prop
  - **User Selection**: Text is non-selectable (user-select: none)
  - **Used For**: Labels, categories, filters, tags with optional navigation or actions

---

### TagList
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Misc/molecules/TagList.tsx`
- **Story Path:** `storybook/src/stories/Misc/molecules/TagList.stories.tsx`
- **Exported From:** `Misc`
- **Props:**
  - `tagsConfig`: `ITag[]` (required) - Array of tag configuration objects
    - Each `ITag` object (extends `IconProps`):
      - `label?`: `string` - Tag text label
      - `linkTo?`: `string` - URL for tag link (makes tag clickable as link)
      - `noBorder?`: `boolean` - Remove tag border (default: false)
      - `tagSize?`: `TypeTagSize` - Tag size variant: 'compact' | 'normal'
      - `onTagClick?`: `() => void` - Click handler for individual tag
      - `icon?`: `string` - Icon name from Phosphor icon set
      - `size?`: `number` - Icon size in pixels (default: 12, or 8/10 based on tagSize)
      - `weight?`: `TypeIconWeight` - Icon weight: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' (default: 'regular')
      - `color?`: `string` - Icon color from theme (default: tag inherits from parent)
      - `forSvgUsage?`: `boolean` - Optimize icon for SVG context
- **Notable Features:**
  - Renders array of Tag components with flex-wrap layout
  - Each tag configured independently via ITag props
  - Automatic spacing: 10px right margin, 6px bottom margin per tag
  - Tags wrap to multiple lines when container width exceeded
  - Supports both clickable tags (onTagClick) and link tags (linkTo)
  - Individual tag styling and behavior per array item

---

### TextArea
- **Status:** ✅ Has Storybook (via TextAreaField story)
- **Component Path:** `ui-lib/src/Form/atoms/TextArea.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/TextAreaField.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `TextareaHTMLAttributes<HTMLTextAreaElement>`)
  - `fieldState`: TypeFieldState (`'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing'`) (required) - Visual state of the textarea
  - `showFeedback`: `boolean` - Shows feedback bar below textarea (default: `false`)
  - `feedbackMessage`: `string` - Message text displayed in feedback bar
  - `placeholder`: `string` - Placeholder text (default: `''`)
  - `children`: `ReactNode` - Content to render inside textarea
- **Notable Features:**
  - **State-Based Styling**: Border, background, and shadow colors change based on fieldState
  - **Feedback Bar**: Optional feedback container with icon and message below textarea
  - **State Icons**: Displays appropriate icon (Required, Success, Invalid, Spinner) based on fieldState
  - **Auto-Disable**: Automatically disables textarea when fieldState is 'disabled' or 'processing'
  - **Focus Effects**: Enhanced box shadow on focus with state-specific colors
  - **Rounded Corners**: Bottom corners removed when feedback is shown
  - **Feedback Visibility**: Feedback bar hidden for 'default' and 'disabled' states
  - **Smooth Transitions**: Border, background, and shadow transitions with fast easing
  - **Placeholder Styling**: Italic placeholder text (normal for Japanese language)
  - **Full Width**: Takes 100% width and height of container

---

### TextAreaField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/TextAreaField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/TextAreaField.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `TextareaHTMLAttributes<HTMLTextAreaElement>`)
  - `name`: `string` (required) - Input name attribute and label htmlFor value
  - `label`: `string` (required) - Label text to display above textarea
  - `fieldState`: TypeFieldState (`'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing'`) (required) - Visual state of the field
  - `showFeedback`: `boolean` - Shows feedback bar below textarea
  - `feedbackMessage`: `string` - Message text displayed in feedback bar
  - `required`: `boolean` - Shows required indicator in label (default: `false`)
  - `children`: `ReactNode` - Content to render inside textarea
- **Notable Features:**
  - **Label Integration**: Wraps TextArea with Label component for proper field labeling
  - **Required Indicator**: Label displays required marker when required prop is true
  - **State Management**: Passes fieldState to both Label and TextArea for consistent styling
  - **Feedback System**: Supports feedback messages with state-specific icons
  - **Composition**: Combines Label and TextArea components with proper prop forwarding
  - **HTML Attributes**: Supports all standard textarea HTML attributes (rows, cols, maxLength, etc.)
  - **Default State**: fieldState defaults to 'default' if not provided

---

### TextField
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Form/molecules/TextField.tsx`
- **Story Path:** `storybook/src/stories/Form/Input/Input.stories.tsx`
- **Exported From:** `Form`
- **Props:** (extends `InputProps` which extends `InputHTMLAttributes<HTMLInputElement>`)
  - `name`: `string` (required) - Input name attribute and label htmlFor value
  - `label`: `string` (required) - Label text to display above input
  - `fieldState`: TypeFieldState (`'default' | 'disabled' | 'required' | 'valid' | 'invalid' | 'processing'`) (required) - Visual state of the field
  - `showFeedback`: `boolean` - Shows feedback bar below input
  - `feedbackMessage`: `string` - Message text displayed in feedback bar
  - `actionCallback`: `() => void` - Callback for action icon click (from InputProps)
  - `actionIcon`: `string` - Icon name for action button (from InputProps)
  - `postfix`: `string` - Text displayed after input value (from InputProps)
  - `required`: `boolean` - Shows required indicator in label
- **Notable Features:**
  - **Label Integration**: Wraps Input with Label component for proper field labeling
  - **Text Type Only**: Always renders as `type='text'` input (type prop is ignored)
  - **Required Indicator**: Label displays required marker when required prop is true
  - **State Management**: Passes fieldState to both Label and Input for consistent styling
  - **Feedback System**: Supports feedback messages with state-specific icons
  - **Action Icon**: Optional action button with icon (e.g., for password visibility toggle)
  - **Postfix Support**: Can display text after input value (e.g., units)
  - **Composition**: Combines Label and Input components with proper prop forwarding
  - **HTML Attributes**: Supports all standard input HTML attributes (placeholder, maxLength, etc.)
  - **Default State**: fieldState defaults to 'default' if not provided
  - Complete form field

---

### ToggleButton
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Filters/atoms/ToggleButton.tsx`
- **Story Path:** `storybook/src/stories/Filters/atoms/ToggleButton.stories.tsx`
- **Exported From:** `Filters`
- **Props:**
  - `options`: `IToggleOption[]` (required) - Array of exactly 2 toggle options
    - **IToggleOption type:**
      - `text`: `string` (required) - Display text for the option
      - `value`: `string | number` (required) - Value associated with the option
      - `icon`: `string` (required) - Icon name to display
  - `categoryLabel`: `String` (required) - Label prefix displayed before option text
  - `selectedIndex`: `number` (required) - Index of currently selected option (0 or 1)
  - `design`: FilterButtonDesign (`'default' | 'basic'`) - Button design variant (default: `'basic'`)
  - `onToggle`: `(index: number, value: string | number) => void` (required) - Callback when toggle is clicked
- **Notable Features:**
  - **Binary Toggle**: Designed for exactly 2 options (returns null if selectedIndex is not 0 or 1)
  - **Auto-Switch Logic**: Automatically toggles between options (0→1, 1→0) on click
  - **Icon Support**: Displays icon from currently selected option
  - **Category Label**: Optional prefix label before option text (e.g., "View: Grid")
  - **FilterButton Integration**: Renders as FilterButton with selected option's icon and text
  - **Index-Based**: Uses index (0 or 1) rather than value for selection state
  - **Callback Pattern**: onToggle receives both new index and corresponding value
  - **Used For**: View mode toggles (grid/list), filter toggles, binary state switches

---

### Tooltip
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Alerts/atom/Tooltip.tsx`
- **Story Path:** `storybook/src/stories/Alerts/Tooltip.stories.tsx`
- **Exported From:** `Alerts`
- **Props:**
  - `message`: `string` (required) - Tooltip message text to display
  - `tooltipFor`: `React.RefObject<HTMLElement>` (required) - Ref to the element that triggers the tooltip
  - `icon`: `string` - Icon name to display before message (16px size)
  - `type`: ITooltipType (`'warning' | 'info' | 'success' | 'neutral'`) - Visual style variant (default: `'neutral'`)
  - `tooltipPosition`: ITooltipPosition (`'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left-top' | 'left' | 'left-bottom' | 'right-top' | 'right' | 'right-bottom'`) - Fixed tooltip position
  - `maxWidth`: `string` - Maximum width CSS value for tooltip
- **Notable Features:**
  - **Ref-Based Attachment**: Attaches to element via ref (not wrapper pattern)
  - **Hover Activation**: Shows on mouseover, hides on mouseout of target element
  - **Portal Rendering**: Renders to document.body via ReactDOM.createPortal
  - **Dynamic Positioning**: Auto-calculates position to avoid viewport overflow when tooltipPosition not specified
  - **12 Position Options**: Supports top/bottom/left/right with left/center/right or top/center/bottom variants
  - **Arrow Indicator**: Displays directional arrow pointing to target element
  - **Type-Based Styling**: Background, border, and arrow colors change based on type
  - **Scroll Awareness**: Updates coordinates on scroll to maintain position
  - **Conditional Rendering**: Returns null when not visible or coords unavailable
  - **Icon Support**: Optional icon displayed before message text
  - **Backdrop Filter**: Applies blur effect to tooltip background

---

### TopBar
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Global/molecules/TopBar.tsx`
- **Story Path:** `storybook/src/stories/Global/TopBar.stories.tsx`
- **Exported From:** `Global`
- **Props:**
  - `loggedInUser`: `string` (required) - User email/name to display
  - `hasNotifications`: `boolean` - Shows notifications dropdown icon
  - `notificationsHistory`: `INotificationsHistory` - Notifications data structure
  - `userSubmenu`: `IUserSubmenuItem[]` - Array of user submenu items
  - `hasLanguage`: `boolean` - Shows language toggle option
  - `selectedLanguageText`: `string` - Text for currently selected language
  - `languageOptionsText`: `string` - Text for language options label
  - `selectedLangAttribute`: `string` - Language attribute value
  - `hasLogout`: `boolean` - Shows logout option
  - `logoutText`: `string` - Text for logout button
  - `logoutLink`: `string` - URL for logout link
  - `hasSearch`: `boolean` - Shows search bar
  - `searchPlaceholder`: `string` - Placeholder text for search input
  - `hasCurrentUser`: `boolean` - Shows current user menu
  - `currentUserText`: `string` - Text for current user menu
  - `accountOptionText`: `string` - Text for account option
  - `userDrawerBespoke`: `ReactElement` - Custom drawer content element
  - `customDrawer`: `ICustomDrawer` - Custom drawer configuration
  - `hasSwitchTheme`: `boolean` - Shows theme toggle option
  - `isLightMode`: `boolean` - Current theme mode state
  - `switchThemeText`: `string` - Text for theme switch button
  - `selectedThemeText`: `string` - Text for currently selected theme
  - `onLogout`: `() => void` - Callback when logout is clicked
  - `onLanguageToggle`: `() => void` - Callback when language is toggled
  - `onUserDrawerMetaClick`: `() => void` - Callback when user drawer meta is clicked
  - `onThemeToggle`: `() => void` - Callback when theme is toggled
  - `userDrawerFooter`: `IUserDrawerFooter` - User drawer footer configuration
  - `userDrawerMeta`: `IUserDrawerMeta[]` - Array of user drawer metadata items
  - `hasUserDrawerMeta`: `boolean` - Shows user drawer metadata section
  - `hasUserDrawerFooter`: `boolean` - Shows user drawer footer section
  - `copySuccessMessage`: `string` - Message shown when copy succeeds
  - `includeCopyTitle`: `boolean` - Includes title in copy functionality
  - `badge`: `ITopBarBadge` - Badge configuration object
- **Notable Features:**
  - **Application Top Bar**: Sticky header with 56px height and shadow
  - **Search Integration**: Optional search bar with placeholder support
  - **User Menu**: Dropdown with submenu items and account options
  - **Notifications**: Dropdown with history and status icon
  - **Language Toggle**: Optional language switcher with custom text
  - **Theme Toggle**: Optional light/dark mode switcher
  - **User Drawer**: Customizable drawer with metadata, footer, and bespoke content
  - **Badge Support**: Optional badge with link or click handler
  - **Portal Rendering**: Dropdowns render to document.body
  - **Responsive Layout**: Flexbox layout with gap spacing
  - **Highly Configurable**: Extensive boolean flags to show/hide features

---

### TypeTable
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Tables/organisms/TypeTable.tsx`
- **Story Path:** `storybook/src/stories/Tables/molecules/TypeTable.stories.tsx`
- **Exported From:** `Tables`
- **Props:**
  - `columnConfig`: `ITableColumnConfig[]` (required) - Array of column configuration objects
    - **ITableColumnConfig interface:**
      - `columnId`: `string` - Unique identifier for the column
      - `groupTitle`: `string` - Title for column group header
      - `header`: `string` (required) - Column header text
      - `sortable`: `boolean` - Enables sorting for this column
      - `sortActive`: `boolean` - Indicates if this column is currently sorted
      - `cellStyle`: TypeCellStyle (`'firstColumn' | 'lowImportance' | 'normalImportance' | 'highImportance'`) (required) - Cell rendering style type
      - `alignment`: TypeCellAlignment (`'left' | 'center' | 'right'`) - Text alignment for cells
      - `showUnit`: `boolean` - Shows unit text in cells
      - `showStatus`: `boolean` - Shows status indicator in cells
      - `hasCopyButton`: `boolean` - Adds copy button to cells
      - `width`: `number` - Fixed column width
      - `minWidth`: `number` - Minimum column width
  - `rows`: ITypeTableData (required) - Array of row data (IRowData[])
    - **IRowData interface:**
      - `_checked`: `boolean` - Row selection state
      - `checkboxDisabled`: `boolean` - Disables checkbox for this row
      - `id`: `number | string` - Unique row identifier
      - `header`: `IRowHeader` - Row header configuration
        - `status`: `any` - Status value
        - `image`: `string` - Thumbnail image URL
        - `mediaUrl`: `string` - Full-size media URL
        - `mediaType`: IMediaType (`'img' | 'video'`) - Media type
        - `retryImageLoad`: `boolean` - Enables image load retry
        - `icon`: `string` - Icon name
        - `onClickThumbnail`: `() => void` - Thumbnail click handler
      - `columns`: `ICellData[]` (required) - Array of cell data
        - `text`: `string` - Cell text content
        - `href`: `string` - Link URL for cell
        - `unit`: `string` - Unit text to display
        - `status`: IDeviceStatus (`'caution' | 'danger' | 'folder' | 'good' | 'neutral'`) - Status indicator
        - `customComponent`: `ReactElement` - Custom cell content
  - `selectable`: `boolean` - Enables row selection checkboxes
  - `hasStatus`: `boolean` - Shows status column
  - `hasThumbnail`: `boolean` - Shows thumbnail column
  - `hasTypeIcon`: `boolean` - Shows type icon column
  - `defaultAscending`: `boolean` - Default sort direction
  - `isLoading`: `boolean` - Shows loading overlay
  - `loadingText`: `string` - Text displayed during loading
  - `emptyTableTitle`: `string` - Title for empty state
  - `emptyTableText`: `string` - Text for empty state
  - `hasHeaderGroups`: `boolean` - Shows grouped column headers
  - `selectCallback`: `(checked: boolean, id?: string | number) => void` - Row selection callback
  - `toggleAllCallback`: `(checked: boolean) => void` - Select all callback
  - `sortCallback`: `(ascending: boolean, columnId: string) => void` - Sort callback
  - `closeText`: `string` - Close button text for media modal
- **Notable Features:**
  - **Comprehensive Data Table**: Full-featured table with sorting, selection, and custom cells
  - **Column Configuration**: Flexible column setup with alignment, width, sorting, and styling
  - **Row Selection**: Optional checkboxes with individual row disable capability
  - **Sortable Columns**: Click-to-sort with ascending/descending toggle
  - **Thumbnails**: Image/video thumbnails with modal preview on click
  - **Status Indicators**: Color-coded status dots (caution, danger, folder, good, neutral)
  - **Type Icons**: Optional icon column for row types
  - **Loading State**: Overlay with spinner and custom text
  - **Empty State**: Customizable empty table message
  - **Header Groups**: Optional grouped column headers
  - **Custom Cells**: Support for custom ReactElement content in cells
  - **Copy Functionality**: Optional copy button per column
  - **Link Support**: Cells can be links via href property
  - **Responsive Design**: Table layout with flexible column widths

---

### UtilityHeader
- **Status:** ✅ Has Storybook
- **Component Path:** `ui-lib/src/Layouts/molecules/UtilityHeader.tsx`
- **Story Path:** `storybook/src/stories/Global/molecules/UtilityHeader.stories.tsx`
- **Exported From:** `Layouts`
- **Props:**
  - `$iconInGutter`: `boolean` - Places back icon in gutter area (auto-detects based on breakpoint if undefined)
  - `showBreadcrumbs`: `boolean` - Shows breadcrumb navigation (default: `true`)
  - `showHomeIcon`: `boolean` - Shows home icon in first breadcrumb (default: `true`)
  - `breadcrumbs`: `IBreadcrumb[]` - Array of breadcrumb items
    - **IBreadcrumb interface:**
      - `text`: `string` (required) - Breadcrumb text to display
      - `href`: `string` - React Router link destination
      - `onClick`: `() => void` - Click handler (renders as button)
  - `back`: `IUtilityHeaderLinkBack` - Back button configuration
    - **IUtilityHeaderLinkBack interface:**
      - `show`: `boolean` - Shows back button
      - `link`: `string` - Back navigation URL
      - `label`: `string` - Back button label text
      - `onClick`: `() => void` - Custom back click handler
  - `share`: `IUtilityHeaderLinkShare` - Share button configuration
    - **IUtilityHeaderLinkShare interface:**
      - `show`: `boolean` - Shows share button
      - `link`: `string` - URL to share/copy
      - `label`: `string` - Share button label text
      - `copiedLabel`: `string` - Label shown after successful copy
- **Notable Features:**
  - **Utility Header**: 48px height header for detail pages with breadcrumbs and actions
  - **Breadcrumb Navigation**: Hierarchical navigation with home icon and separators
  - **Flexible Breadcrumbs**: Supports links (href), buttons (onClick), or plain text
  - **Back Button**: Optional back navigation with divider when breadcrumbs present
  - **Share Functionality**: Copy-to-clipboard with success feedback
  - **Icon Positioning**: Auto-detects or manually controls back icon gutter placement
  - **Responsive**: Uses breakpoints to adjust icon positioning
  - **Hover Effects**: Color transitions on breadcrumb links and home icon
  - **Max Width**: Respects content layout max width and padding
  - **Used In**: Split layouts and detail pages for navigation context

---

### WebRTCClient
- **Status:** ❌ No Storybook
- **Component Path:** `ui-lib/src/WebRTCClient.tsx`
- **Story Path:** N/A
- **Example Page Path:** `example/src/pages/LineRTCPage.tsx`
- **Exported From:** Root
- **Props:** (extends `VideoHTMLAttributes<HTMLVideoElement>`)
  - `enabled`: `boolean` (required) - Enables/disables WebRTC connection
  - `peerAddress`: `string` (required) - WebSocket server address for signaling
  - `maxConnectionAttempts`: `number` - Maximum connection retry attempts (default: `30`)
  - `rtcConfiguration`: `RTCConfiguration` - WebRTC peer connection configuration object (default: `{}`)
    - **Note**: Standard Web API interface for RTCPeerConnection configuration (iceServers, iceTransportPolicy, bundlePolicy, etc.)
    - See [MDN RTCConfiguration](https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration)
  - `id`: `string` - Unique identifier for peer (default: `'1'`)
  - `setStatus`: `(status: string) => void` - Callback for connection status updates
  - `setError`: `(error: string | null) => void` - Callback for error messages
  - `autoPlay`: `boolean` - Video autoplay attribute (default: `true`)
  - `muted`: `boolean` - Video muted attribute (default: `true`)
- **Notable Features:**
  - **WebRTC Video Player**: Real-time video streaming via WebRTC with WebSocket signaling
  - **Automatic Connection**: Connects to peer on mount when enabled, disconnects on unmount
  - **Retry Logic**: Automatically retries connection up to maxConnectionAttempts times
  - **SDP Negotiation**: Handles offer/answer SDP exchange with profile-level-id hack for compatibility
  - **ICE Candidate Exchange**: Manages ICE candidate gathering and exchange
  - **Status Callbacks**: Provides real-time status updates (connecting, registered, connected, etc.)
  - **Error Handling**: Comprehensive error handling with callback notifications
  - **Auto-Reconnect**: Attempts reconnection on WebSocket close (3-second delay)
  - **Peer ID Generation**: Auto-generates unique peer ID with 'WRP_' prefix and random suffix
  - **Video Element**: Renders as HTML5 video element with ref for stream attachment
  - **Stream Management**: Automatically attaches incoming media stream to video element
  - **Cleanup**: Properly closes WebSocket and peer connections on unmount
  - **Used For**: Real-time video streaming from cameras or other WebRTC sources

---