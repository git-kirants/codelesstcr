import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

export const SplitText = ({ text, className = '', delay = 100 }) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Unobserve after triggering the animation
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: async (next) => {
        if (inView) {
          await next({ opacity: 1, transform: 'translate3d(0,-10px,0)' });
          await next({ opacity: 1, transform: 'translate3d(0,0,0)' });
        } else {
          await next({ opacity: 0, transform: 'translate3d(0,40px,0)' });
        }
      },
      delay: i * delay,
    }))
  );

  return (
    <p
      className={`inline-block overflow-hidden ${className}`}
      ref={ref}
    >
      {springs.map((style, index) => (
        <animated.span
          key={index}
          style={style as any} // Type assertion to align with expected AnimatedProps
          className="inline-block transform will-change-transform will-change-opacity"
        >
          {letters[index] === ' ' ? '\u00A0' : letters[index]} {/* Non-breaking space for proper rendering */}
        </animated.span>
      ))}
    </p>
  );
};
