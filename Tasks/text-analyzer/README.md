# Real-Time Text Analyzer App
### Task 3 — React Hooks Project

## Project Structure

```
src/
├── App.jsx                     # Root component — state, effects, layout
├── index.js                    # React entry point
├── index.css                   # Global styles
├── hooks/
│   └── useAnalyzeText.js       # Custom hook — returns chars, words, specials, status
└── components/
    ├── TextInput.jsx            # Textarea with auto-focus, progress bar, clear button
    ├── AnalysisPanel.jsx        # Summary stats grid (via props)
    ├── Warning.jsx              # Animated warning banner (via props)
    └── Preview.jsx              # Live text preview (via props)
```

## Hooks Used

| Hook | Where | Purpose |
|------|-------|---------|
| `useState` | App.jsx | text, debouncedText, logs, darkMode |
| `useEffect` | App.jsx, TextInput.jsx | localStorage sync, dark mode, auto-focus, debounce |
| `useRef` | App.jsx, TextInput.jsx | debounce timer, textarea DOM reference |
| `useCallback` | App.jsx, useAnalyzeText.js | memoize handleChange, handleClear, addLog, analyze |
| Custom `useAnalyzeText` | App.jsx | returns chars, words, specials, remaining, pct, status |

## Features

- ✅ Real-time character & word count
- ✅ 200-character limit with progress bar
- ✅ Yellow warning at 80% of limit
- ✅ Red warning when over limit
- ✅ Animated `<Warning />` component via props
- ✅ `<AnalysisPanel />` — total chars, words, specials, remaining, status
- ✅ `<Preview />` — live text preview via props
- ✅ Auto-focus on load via `useRef`
- ✅ `useCallback` memoization of analysis functions
- ✅ Debounce (300ms delay) using `useEffect + setTimeout + useRef`
- ✅ Dark mode toggle
- ✅ LocalStorage persistence (restores text on reload)
- ✅ Hook activity log panel (shows console events in UI)
- ✅ Console logs for all hook behavior

## Getting Started

```bash
npm install
npm start
```

App runs at http://localhost:3000
