// src/hooks/useScrollLock.js
import { useEffect } from 'react';

function useScrollLock(isLocked) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
}

export default useScrollLock;