# ui

## 🧩 Custom Styling with `className` Support

gra.UI.ty components now support a `className` prop, allowing full customization using Tailwind CSS, custom CSS classes, or utility-first design systems.

You can use `className` to easily override or extend styles on all major components.

### ✅ Supported Components

| Component         | Usage Example                                  |
|------------------|-------------------------------------------------|
| `NSButton`        | `<NSButton className="bg-blue-600" />`         |
| `Alert`           | `<Alert className="text-red-500" />`           |
| `AlertBanner`     | `<AlertBanner className="border" />`           |
| `BottomSheet`     | `<BottomSheet className="rounded-md" />`       |
| `DropdownMenu`    | `<DropdownMenu className="w-full" />`          |
| `DropdownMenuOption` | `<DropdownMenuOption className="p-2" />`  |
| `DropdownSearchBox` | `<DropdownSearchBox className="text-xs" />` |
| `DropdownMenuHeader` | `<DropdownMenuHeader className="font-bold" />` |
| `DropdownMenuFooter` | `<DropdownMenuFooter className="bg-gray-100" />` |
| `Tabs`            | `<Tabs className="text-center" />`             |
| `Accordion`       | `<Accordion className="border" />`             |
| `Tooltip`         | `<Tooltip className="text-sm" />`              |

> Note: In some cases, the `className` is applied to the outer wrapper. Refer to the DOM structure via browser inspect tools if targeting nested parts.

---

### 💡 Example

```tsx
<NSButton
  variant="primary"
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
>
  Submit
</NSButton>

<Accordion
  title="Advanced Settings"
  className="border border-gray-300 rounded-md"
>
  Here are the advanced settings content.
</Accordion>
