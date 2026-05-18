import { useCallback } from 'react';

const LIMIT = 200;

/**
 * useAnalyzeText — Custom Hook
 * Returns all analysis counts and status for the given text.
 * Uses useCallback to memoize the computed result.
 */
function useAnalyzeText(text) {
  // useCallback: memoizes the analysis function so it is NOT recreated on every render
  const analyze = useCallback(() => {
    console.log('[useCallback] useAnalyzeText memoized function running for text length:', text.length);

    const chars     = text.length;
    const words     = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const specials  = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const remaining = LIMIT - chars;
    const pct       = Math.min((chars / LIMIT) * 100, 100);
    const status    = chars > LIMIT ? 'over' : chars >= LIMIT * 0.8 ? 'warn' : 'ok';

    return { chars, words, specials, remaining, pct, status };
  }, [text]);

  // Call and return immediately (compute on every render when text changes)
  return analyze();
}

export { LIMIT };
export default useAnalyzeText;
