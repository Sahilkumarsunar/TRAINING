import React from 'react';
import { LIMIT } from '../hooks/useAnalyzeText';

/**
 * AnalysisPanel Component
 * Displays a summary of text analysis statistics.
 * All data received via props from App.jsx.
 * Props:
 *   - chars    (number): total character count
 *   - words    (number): total word count
 *   - specials (number): special character count
 *   - remaining(number): characters remaining before limit
 *   - status   (string): 'ok' | 'warn' | 'over'
 */
function AnalysisPanel({ chars, words, specials, remaining, status }) {
  console.log('[AnalysisPanel] Re-rendering with chars:', chars, 'words:', words);

  const statusText = {
    ok:   'Within limit',
    warn: 'Near limit',
    over: 'Over limit',
  }[status];

  return (
    <div className="card">
      <div className="section-label">Analysis summary</div>

      <div className="stats-grid">
        {/* Total Characters */}
        <div className="stat-card">
          <div className="stat-label">Characters</div>
          <div className={`stat-value ${status}`}>{chars}</div>
        </div>

        {/* Remaining Characters */}
        <div className="stat-card">
          <div className="stat-label">Remaining / {LIMIT}</div>
          <div className={`stat-value ${status}`}>{remaining}</div>
        </div>

        {/* Word Count */}
        <div className="stat-card">
          <div className="stat-label">Words</div>
          <div className="stat-value ok">{words}</div>
        </div>

        {/* Special Characters */}
        <div className="stat-card">
          <div className="stat-label">Special chars</div>
          <div className="stat-value ok">{specials}</div>
        </div>
      </div>

      {/* Limit Status Badge */}
      <div>
        <span className={`status-badge ${status}`}>
          {statusText}
        </span>
      </div>
    </div>
  );
}

export default AnalysisPanel;
