import React, { useState, useEffect, useRef, useCallback } from 'react';

import TextInput    from './components/TextInput';
import AnalysisPanel from './components/AnalysisPanel';
import Warning      from './components/Warning';
import Preview      from './components/Preview';
import useAnalyzeText, { LIMIT } from './hooks/useAnalyzeText';

/**
 * App.jsx — Root Component
 *
 * Hooks used:
 *  - useState    : manages text, debouncedText, logs, darkMode
 *  - useEffect   : monitors text changes, debounce, localStorage, dark mode
 *  - useRef      : stores debounce timer (persists across renders without re-render)
 *  - useCallback : memoizes handleChange, handleClear, addLog functions
 *  - custom hook : useAnalyzeText() — returns all analysis values
 */
function App() {
  // ── useState: restore last text from localStorage on load ──────────────
  const [text, setText] = useState(() => {
    try {
      const saved = localStorage.getItem('analyzer_text');
      console.log('[useState] Restoring text from localStorage:', saved ? saved.length + ' chars' : 'none');
      return saved || '';
    } catch {
      return '';
    }
  });

  // useState: debounced copy of text (updates 300ms after user stops typing)
  const [debouncedText, setDebouncedText] = useState(text);

  // useState: hook activity log entries
  const [logs, setLogs] = useState([]);

  // useState: dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // ── useRef: holds the debounce timer ID across renders ─────────────────
  const debounceTimer = useRef(null);

  // ── useCallback: memoize addLog so it's stable across renders ──────────
  const addLog = useCallback((msg) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [`${time} — ${msg}`, ...prev].slice(0, 15));
  }, []);

  // ── useCallback: memoize handleChange — not recreated each render ───────
  const handleChange = useCallback((val) => {
    console.log('[useState] setText called, new length:', val.length);
    setText(val);

    // Debounce: clear previous timer, set new one for 300ms delay
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      console.log('[useEffect + useRef + debounce] Debounced analysis fired after 300ms pause');
      setDebouncedText(val);
      addLog(`Analysis fired — ${val.length} chars, ${val.trim() === '' ? 0 : val.trim().split(/\s+/).length} words`);
    }, 300);
  }, [addLog]);

  // ── useCallback: memoize handleClear ───────────────────────────────────
  const handleClear = useCallback(() => {
    console.log('[useCallback] handleClear called — resetting text');
    setText('');
    setDebouncedText('');
    addLog('Text cleared');
  }, [addLog]);

  // ── useEffect: save debouncedText to localStorage whenever it changes ───
  useEffect(() => {
    console.log('[useEffect] debouncedText changed → saving to localStorage');
    try {
      localStorage.setItem('analyzer_text', debouncedText);
    } catch {
      console.warn('localStorage not available');
    }
  }, [debouncedText]);

  // ── useEffect: apply/remove dark mode class on body ────────────────────
  useEffect(() => {
    console.log('[useEffect] darkMode changed:', darkMode);
    document.body.classList.toggle('dark', darkMode);
    addLog(`Dark mode ${darkMode ? 'enabled' : 'disabled'}`);
  }, [darkMode]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── useEffect: log on initial mount ────────────────────────────────────
  useEffect(() => {
    console.log('[useEffect] App mounted');
    addLog('App mounted — textarea auto-focused');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Custom Hook: useAnalyzeText — returns all counts & status ──────────
  const { chars, words, specials, remaining, pct, status } = useAnalyzeText(text);

  // ── Compute warning message based on status ─────────────────────────────
  const warningMsg =
    status === 'over'
      ? `You are ${Math.abs(remaining)} character${Math.abs(remaining) !== 1 ? 's' : ''} over the ${LIMIT}-character limit.`
      : status === 'warn'
      ? `Heads up — only ${remaining} characters remaining (80% limit reached).`
      : null;

  return (
    <div className="app-shell">

      {/* ── Header ── */}
      <div className="app-header">
        <div>
          <div className="app-title">Text Analyzer</div>
          <div className="app-subtitle">
            Real-time character &amp; word counter · {LIMIT}-char limit
          </div>
        </div>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(d => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀ Light' : '◑ Dark'}
        </button>
      </div>

      {/* ── Warning Component (props: message, type) ── */}
      <Warning message={warningMsg} type={status} />

      {/* ── TextInput Component ── */}
      <TextInput
        text={text}
        onChange={handleChange}
        onClear={handleClear}
        status={status}
        pct={pct}
        chars={chars}
      />

      {/* ── AnalysisPanel Component (props: all stats) ── */}
      <AnalysisPanel
        chars={chars}
        words={words}
        specials={specials}
        remaining={remaining}
        status={status}
      />

      {/* ── Preview Component (props: text) ── */}
      <Preview text={text} />

      {/* ── Hook Activity Log ── */}
      <div className="card">
        <div className="section-label">Hook activity log</div>
        <div className="hook-log">
          {logs.length === 0 ? (
            <div className="log-line" style={{ color: '#aaa' }}>
              Console events will appear here as you interact…
            </div>
          ) : (
            logs.map((entry, i) => (
              <div key={i} className="log-line">
                <span>›</span>{entry}
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
