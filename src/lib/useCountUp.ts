import { useState, useEffect, useRef } from "react";

/**
 * Custom React hook to count from a start value to an end value using requestAnimationFrame.
 * Supports both counting up and counting down (descending values).
 */
export function useCountUp(
  endValue: number,
  startValue = 0,
  duration = 1200,
  trigger = false
) {
  const [value, setValue] = useState(startValue);
  const startTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) {
      setValue(startValue);
      startTimestampRef.current = null;
      return;
    }

    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestampRef.current) {
        startTimestampRef.current = timestamp;
      }
      const progress = Math.min((timestamp - startTimestampRef.current) / duration, 1);
      
      // Ease-out quad curve: t * (2 - t)
      const easeProgress = progress * (2 - progress);
      
      const currentValue = Math.round(
        startValue + easeProgress * (endValue - startValue)
      );
      setValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, startValue, duration, trigger]);

  return value;
}
export default useCountUp;
