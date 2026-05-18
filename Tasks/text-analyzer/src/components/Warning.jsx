import React from 'react';

/**
 * Warning Component
 * Receives `message` and `type` via props.
 * Displays an animated warning banner when a message is present.
 * Props:
 *   - message (string): warning text to display
 *   - type    (string): 'warn' | 'over' — controls styling
 */
function Warning({ message, type }) {
  // If no message, render nothing
  if (!message) return null;

  console.log('[Warning] Rendering warning component with type:', type);

  return (
    <div className={`warning-box ${type}`} role="alert">
      {type === 'over' ? '⚠ ' : '⚡ '}
      {message}
    </div>
  );
}

export default Warning;
