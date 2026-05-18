import React, { useRef, useEffect } from 'react';
import { LIMIT } from '../hooks/useAnalyzeText';

/**
 * TextInput Component
 * Handles text input area with:
 *  - Auto-focus on mount (useRef)
 *  - Real-time character counter with progress bar
 *  - Clear button that also resets focus (useRef)
 * Props:
 *   - text     (string):   current text value
 *   - onChange (function): called with new text value on input
 *   - onClear  (function): called when clear button is clicked
 *   - status   (string):   'ok' | 'warn' | 'over'
 *   - pct      (number):   percentage of limit used (0–100)
 *   - chars    (number):   current character count
 */
function TextInput({ text, onChange, onClear, status, pct, chars }) {
  // useRef: direct reference to the DOM textarea element
  const inputRef = useRef(null);

  // useEffect: auto-focus the textarea when the component first mounts
  useEffect(() => {
    console.log('[useEffect + useRef] Auto-focusing textarea on component mount');
    inputRef.current?.focus();
  }, []); // empty dependency array = runs once on mount only

  // Determine progress bar color based on status
  const barColor =
    status === 'over' ? '#E24B4A' :
    status === 'warn' ? '#EF9F27' :
    '#1D9E75';

  const labelClass = status === 'over' ? 'over' : status === 'warn' ? 'warn' : 'ok';

  // Handle clear: uses useRef to reset focus back to textarea after clearing
  const handleClear = () => {
    console.log('[useRef] Resetting textarea focus after clear');
    onClear();
    inputRef.current?.focus();
  };

  return (
    <div className="card">
      <div className="section-label">Text input</div>

      {/* Textarea — tracked by useState in App, ref for DOM access */}
      <textarea
        ref={inputRef}
        value={text}
        onChange={e => onChange(e.target.value)}
        placeholder="Start typing your text here…"
        spellCheck={false}
        aria-label="Text input area"
        maxLength={LIMIT + 100} // allow slight overflow to show warning
      />

      {/* Progress bar + character count */}
      <div className="counter-row">
        <div className="counter-bar-wrap">
          <div
            className="counter-bar"
            style={{ width: `${pct}%`, background: barColor }}
            role="progressbar"
            aria-valuenow={chars}
            aria-valuemax={LIMIT}
          />
        </div>
        <span className={`counter-label ${labelClass}`}>
          {chars} / {LIMIT}
        </span>
      </div>

      {/* Clear button */}
      <button className="btn-clear" onClick={handleClear}>
        Clear text
      </button>
    </div>
  );
}

export default TextInput;
