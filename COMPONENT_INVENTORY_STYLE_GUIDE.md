# Component Inventory Documentation Style Guide

This document defines the established pattern for documenting component props in `COMPONENT_INVENTORY.md`. Follow these guidelines to maintain consistency across all component entries.

## Core Principles

1. **No TypeScript Syntax in Prop Listings**: Props are documented using inline type information, not TypeScript code blocks
2. **Inline Type Annotations**: Types are written inline using backticks: `` `string` ``, `` `number` ``, `` `boolean` ``
3. **Nested Interfaces**: Complex types use expanded field listing with "**InterfaceName interface:**" format
4. **Descriptive Explanations**: Each prop includes a clear description of its purpose
5. **Default Values**: Always specify default values in parentheses when applicable

## Component Entry Structure

```markdown
### ComponentName
- **Status:** ✅/❌ Has Storybook (context if needed)
- **Component Path:** `relative/path/to/Component.tsx`
- **Story Path:** `relative/path/to/Component.stories.tsx` or N/A
- **Exported From:** `ModuleName`
- **Props:** (interface name or inheritance info)
  - [prop documentation following patterns below]
- **Notable Features:**
  - [bullet points describing key functionality]

---
```

## Prop Documentation Patterns

### Pattern 1: Simple Props
For basic types (string, number, boolean):

```markdown
- `propName`: `type` - Description
- `propName?`: `type` - Description (default: value)
- `propName`: `type` (required) - Description
```

**Examples:**
```markdown
- `title`: `string` (required) - Component title text
- `size?`: `number` - Icon size in pixels (default: 24)
- `disabled?`: `boolean` - Disabled state (default: false)
```

### Pattern 2: Union Types and Type Aliases

**Two Approaches Based on Source Code:**

#### Approach A: Named Type Aliases (Preferred)
When the union type is defined as a separate type alias in the codebase, reference the type alias name with its definition:

```markdown
- `propName?`: `TypeAliasName` (`'value1' | 'value2' | 'value3'`) - Description (default: 'value1')
```

**Type Alias Naming Conventions:**
- Most type aliases use the `I` prefix: `IWeight`, `IFeedbackColor`, `IStatusDot`
- Some use descriptive names without prefix: `AlertType`, `TypeButtonSizes`
- Both conventions are acceptable and should match the source code

**Examples from Codebase:**

**From index.tsx (global types):**
```markdown
- `weight?`: `IWeight` (`'light' | 'regular' | 'heavy' | 'strong'`) - Icon weight (default: 'regular')
- `color?`: `IFeedbackColor` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) - Feedback color (default: 'neutral')
- `status?`: `IStatusDot` (`'caution' | 'danger' | 'good' | 'neutral' | 'highlight'`) - Status indicator
- `timeUnit`: `ITimeUnit` (`'seconds' | 'minutes' | 'hours'`) - Time unit (required)
- `mediaType`: `IMediaType` (`'img' | 'video'`) - Media type (required)
```

**From AlertBar.tsx:**
```markdown
- `type?`: `AlertType` (`'error' | 'warning' | 'info' | 'success' | 'neutral'`) - Alert type (default: 'info')
```

**From ActionButtons.tsx:**
```markdown
- `alignment?`: `IAlignmentOptions` (`'left' | 'center' | 'right'`) - Button alignment (default: 'right')
```

**From Form/index.ts:**
```markdown
- `size?`: `TypeButtonSizes` (`'xsmall' | 'small' | 'normal' | 'large'`) - Button size (default: 'normal')
- `optionType?`: `IInputOptionsType` (`'text' | 'checkbox' | 'radio'`) - Input option type (default: 'text')
```

#### Approach B: Inline Union Types (Component-Specific)
When the union type is defined inline in the component interface without a separate type alias, document it directly:

```markdown
- `propName?`: `'value1' | 'value2'` - Description (default: 'value1')
```

**Examples from Codebase:**

**From ButtonWithIcon.tsx:**
```markdown
- `position?`: `'left' | 'right'` - Icon position relative to text (default: 'left')
```

**From ContentLayout.tsx:**
```markdown
- `layout?`: `'default' | 'fullscreen' | 'dashboard'` - Layout mode (default: 'default')
```

**From BasicSearchInput.tsx:**
```markdown
- `color?`: `'mono' | 'dimmed' | 'subtle'` - Icon and text color theme (default: 'subtle')
```

**From ResizeLine.tsx:**
```markdown
- `state?`: `'default' | 'arrow'` - Visual state of resize line (default: 'default')
```

**When to Use Each Approach:**
- **Use Approach A** when the type is defined in `src/index.tsx`, `src/Form/index.ts`, `src/Alerts/index.ts`, or exported from a module
- **Use Approach B** when the union is defined inline in the component's interface without a separate type alias
- **Check the source file**: If you see `type TypeName = 'a' | 'b'` or `export type TypeName = 'a' | 'b'`, use Approach A
- **If inline in interface**: If you see `propName?: 'a' | 'b'` directly in the interface, use Approach B

**Key Points:**
- Always check the source code to determine which approach to use
- For named type aliases, always show both the name and definition
- For inline unions, show the union directly without inventing a type name
- Use the exact type alias name as defined in the codebase (with or without `I` prefix)
- Check `src/index.tsx`, `src/Form/index.ts`, or component-specific files for type definitions

### Pattern 3: Callback Functions
For function props, show the signature inline:

```markdown
- `callbackName?`: `(param1: type, param2: type) => returnType` - Description
```

**Examples:**
```markdown
- `onChange?`: `(value: string) => void` - Callback when value changes
- `onSizeChange?`: `(size: { h: number; w: number }) => void` - Callback when size changes
- `updateCallback?`: `(data: IDateInterval | Date) => void` - Callback on date selection
```

### Pattern 4: Array Props
For array types:

```markdown
- `propName?`: `Type[]` - Description
```

**Examples:**
```markdown
- `fileIcons?`: `string[]` - Array of icon names to display
- `allowedFileTypes?`: `string[]` - Array of allowed MIME types
- `marks?`: `ISliderMark[]` - Array of marks to display on slider
```

### Pattern 5: Simple Object Props
For simple inline object structures (2-3 fields maximum, no nesting):

```markdown
- `propName?`: `{ key1: type, key2: type }` - Description
```

**Examples:**
```markdown
- `fixedImgDimensions?`: `{ x: number, y: number }` - Fixed image dimensions override
- `size`: `{ h: number; w: number }` - Size object with height and width
```

**When to use Pattern 5:**
- Object has 2-3 fields maximum
- No nested objects or complex types
- Fields are self-explanatory
- No need for individual field descriptions

**When to use Pattern 6 instead:**
- Object has 4+ fields
- Contains nested objects or arrays
- Fields need individual descriptions
- Object is a named interface type

### Pattern 6: Complex Nested Interfaces

**Standard Approach: Expanded Field Listing**

Use expanded field listing for complex nested interfaces. Each field should be documented with its type and description:

```markdown
- `propName`: `InterfaceName` (required) - Description
  - **InterfaceName interface:**
    - `field1`: `type` - Field description
    - `field2`: `type` - Field description
    - `nested?`: `NestedType` - Nested field description
  - **NestedType interface:**
    - `nestedField1`: `type` - Nested field description
    - `nestedField2`: `type` - Nested field description
  - **TypeAlias:** `'value1' | 'value2' | 'value3'`
```

**Examples:**

**Complex nested structure with multiple interfaces:**
```markdown
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
```

**Simple nested structure (4+ fields):**
```markdown
- `availableRange?`: `IDateRange` - Available date range constraints
  - **IDateRange interface:**
    - `start`: `Date | null` - Earliest selectable date
    - `end`: `Date | null` - Latest selectable date
    - `minDays?`: `number` - Minimum days in range
    - `maxDays?`: `number` - Maximum days in range
```

**Nested structure with type unions:**
```markdown
- `notificationsHistory?`: `INotificationsHistory` - Notifications data
  - **INotificationsHistory interface:**
    - `read`: `INotificationItem[]` - Array of read notifications
    - `unread`: `INotificationItem[]` - Array of unread notifications
    - `noNotificationsText?`: `string` - Text when no notifications
    - `readNotificationsText?`: `string` - Header text for read section
    - `unreadNotificationsText?`: `string` - Header text for unread section
  - **INotificationItem interface:**
    - `imgUrl?`: `string` - Optional notification image URL
    - `title`: `string` - Notification title
    - `message`: `string` - Notification message text
    - `time`: `string` - Timestamp or relative time string
```

**Array of complex objects:**
```markdown
- `buttonsConfig`: `IconButtonData[]` (required) - Array of icon button configurations
  - **IconButtonData interface:**
    - `icon`: `string` - Icon name (required)
    - `size?`: `number` - Icon size (default: 20)
    - `weight?`: `IWeight` - Icon weight (default: 'regular')
    - `color?`: `ISvgIcons['color']` - Icon color (default: 'dimmed')
    - Plus all `ButtonHTMLAttributes<HTMLButtonElement>` (onClick, disabled, etc.)
```

**Key Points:**
- Always use "**InterfaceName interface:**" as the header (with "interface:" suffix)
- Indent nested interface fields with 4 spaces (one level deeper than parent)
- Document each field with its type and a clear description
- Include optional/required indicators (`?` for optional)
- When documenting type aliases within nested structures, use format: "**TypeAlias:** `'value1' | 'value2'`" (without "interface:" suffix)
  - Example: `**IFilterType:** 'search' | 'dropdown' | 'datepicker'` (this is a type alias definition within the nested structure)
  - This distinguishes type aliases from interface definitions in the same nested structure
- Be consistent with indentation and formatting throughout the document

### Pattern 7: Interface Inheritance
When a component extends another interface or HTML attributes:

```markdown
- **Props:** (extends `BaseInterface` & `HTMLAttributes<HTMLElement>`)
  - `specificProp`: `type` - Description
  - Plus all standard HTML element attributes (`className`, `style`, `onClick`, etc.)
```

**Examples:**
```markdown
- **Props:** (extends `IBasicSearchInput` & `InputHTMLAttributes<HTMLInputElement>`)
  - `defaultValue?`: `string` - Initial value for the search input
  - `onDebouncedChange?`: `(newValue: string) => void` - Callback after debounce
  - Plus all standard HTML input attributes (`placeholder`, `value`, `onChange`, etc.)
```

### Pattern 8: Combined Interfaces
When props combine multiple interfaces:

```markdown
- **Props:** (combines `Interface1` & `Interface2` & `Interface3`)
  - **From Interface1:**
    - [props from first interface]
  - **From Interface2:**
    - [props from second interface]
  - **From Interface3:**
    - [props from third interface]
```

**Example:**
```markdown
- **Props:** (combines `OwnProps` & `IMenu` & `ITopBar`)
  - **From OwnProps:**
    - `maxWidth?`: `string` - Maximum width for content area
    - `paddingOverride?`: `string` - Override default content padding
  - **From IMenu (MainMenu props):**
    - `content`: `IMenuTop` (required) - Menu structure with items array
      - **IMenuTop interface:**
        - `items`: `IMenuItemTop[]` - Array of menu items
```

## Special Cases

### ReactNode/ReactElement Props
```markdown
- `children`: `ReactNode` - Child elements to render
- `customComponent?`: `ReactElement` - Custom React component
```

### Optional vs Required Props
- **Optional**: Use `?` after prop name: `propName?`
- **Required**: Add `(required)` after type: `propName`: `type` (required)
- **Default values**: Add after description: `(default: value)`

### Deprecated Props
```markdown
- `oldPropName?`: `type` - **DEPRECATED** - Use `newPropName` instead (default: value)
```

## Type Formatting Rules

1. **Backticks**: Always wrap types in backticks: `` `string` ``, `` `number` ``
2. **Union Types**: Use pipe with spaces: `` `'value1' | 'value2'` ``
3. **Objects**: Use curly braces with spaces: `` `{ key: type, key2: type }` ``
4. **Arrays**: Use bracket notation: `` `string[]` ``, `` `IType[]` ``
5. **Functions**: Show full signature: `` `(param: type) => returnType` ``
6. **Null/Undefined**: Include in unions: `` `string | null` ``, `` `Date | undefined` ``

## Description Guidelines

1. **Be Concise**: Keep descriptions brief but clear
2. **Start with Action/Purpose**: "Callback when...", "Array of...", "Show/Hide..."
3. **Include Context**: Mention what the prop affects or controls
4. **Specify Units**: For numbers, mention units (pixels, milliseconds, etc.)
5. **Note Relationships**: If a prop depends on another, mention it

## Notable Features Section

List key functionality as bullet points:
- Start with action verbs or descriptive phrases
- Focus on user-facing features and behaviors
- Mention integration with other components
- Note special behaviors (animations, validations, etc.)
- Include technical details (hooks used, rendering approach, etc.)

**Example:**
```markdown
- **Notable Features:**
  - Drag-and-drop file upload
  - Multiple file support
  - File type validation with rejected files tracking
  - Duplicate file prevention
  - Customizable text labels
  - Optional custom component replacement
```

## Common Mistakes to Avoid

❌ **Don't use TypeScript code blocks for props:**
```typescript
interface IProps {
  name: string;
  age: number;
}
```

✅ **Do use inline type notation:**
```markdown
- `name`: `string` - Person's name
- `age`: `number` - Person's age
```

❌ **Don't omit default values:**
```markdown
- `size?`: `number` - Icon size
```

✅ **Do include default values:**
```markdown
- `size?`: `number` - Icon size (default: 24)
```

❌ **Don't use vague descriptions:**
```markdown
- `callback`: `Function` - Callback function
```

✅ **Do provide specific signatures and context:**
```markdown
- `onSave?`: `(value: string) => void` - Callback when save button is clicked
```

❌ **Don't use inline objects for complex structures:**
```markdown
- `config`: `{ a: string, b: number, c: { d: boolean, e: string[] } }` - Configuration
```

✅ **Do use expanded field listing for complex objects:**
```markdown
- `config`: `IConfig` - Configuration object
  - **IConfig interface:**
    - `a`: `string` - Field A description
    - `b`: `number` - Field B description
    - `c`: `INestedConfig` - Nested configuration
  - **INestedConfig interface:**
    - `d`: `boolean` - Field D description
    - `e`: `string[]` - Field E description
```

## Pattern Selection Guide

**Use Pattern 1** for: string, number, boolean props

**Use Pattern 2** for: union types and type aliases

**Use Pattern 3** for: callback functions

**Use Pattern 4** for: arrays of primitives or simple types

**Use Pattern 5** for: simple inline objects (2-3 fields, no nesting, self-explanatory)

**Use Pattern 6** for: 
- Objects with 4+ fields
- Nested objects or arrays
- Named interface types
- Arrays of complex objects
- Any structure needing field descriptions

**Use Pattern 7** for: components extending base interfaces or HTML attributes

**Use Pattern 8** for: components combining multiple interfaces

## Consistency Checklist

Before submitting documentation, verify:
- [ ] All props use inline type notation with backticks
- [ ] Default values are specified for optional props
- [ ] Required props are marked with `(required)`
- [ ] Nested interfaces use expanded field listing (Pattern 6)
- [ ] Simple objects (2-3 fields) use inline notation (Pattern 5)
- [ ] Callback signatures show parameter types and return types
- [ ] Union types use consistent spacing: `'a' | 'b' | 'c'`
- [ ] Descriptions are clear and concise
- [ ] Interface inheritance is documented
- [ ] Notable Features section is complete
- [ ] No TypeScript code blocks in Props section

## Examples of Well-Documented Components

See these components in `COMPONENT_INVENTORY.md` for reference:
- **ActionsBar** (lines 16-34) - Simple props with arrays
- **ActionButtons** (lines 36-56) - Array of complex objects (Pattern 6)
- **AlertBar** (lines 59-74) - Union types and type aliases (Pattern 2)
- **DatePicker** (lines 403-444) - Complex nested interfaces (Pattern 6)
- **DebouncedSearcher** (lines 447-472) - Interface inheritance (Pattern 7)
- **FiltersResults** (lines 754-794) - Complex nested with multiple interfaces (Pattern 6)
- **GlobalUI** (lines 815-890) - Combined interfaces (Pattern 8)
- **Icon** (lines 893-912) - Type aliases with definitions (Pattern 2)

---

**Summary of Pattern Consolidation:**
- **Merged Pattern 2 & 3**: Union Types and Type Aliases (both handle union types)
- **Merged Pattern 7 & 10**: Complex Nested Interfaces (Pattern 10 was redundant)
- **Kept Pattern 6 separate**: For truly simple inline objects (2-3 fields)
- **Result**: 8 clear, non-overlapping patterns

**Last Updated:** 2026-02-06
**Maintained By:** Development Team
