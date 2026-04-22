'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const execute = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { ...optionsRef.current, signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const json = await res.json();
      setData(json);
      return json;
    } catch (err) {
      if (err.name !== 'AbortError') setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) execute();
    return () => abortRef.current?.abort();
  }, [url, execute]);

  return { data, error, loading, refetch: execute };
}
