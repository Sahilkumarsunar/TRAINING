import React from 'react';

/**
 * Preview Component
 * Shows the user's typed text in real-time.
 * Receives text via props from App.jsx.
 * Props:
 *   - text (string): the current input text to display
 */
function Preview({ text }) {
  console.log('[Preview] Rendering live preview, length:', text.length);

  return (
    <div className="card">
      <div className="section-label">Live preview</div>

      {text ? (
        <div className="preview-text">{text}</div>
      ) : (
        <div className="preview-placeholder">
          Your text will appear here as you type…
        </div>
      )}
    </div>
  );
}

export default Preview;
