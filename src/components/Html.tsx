import React, { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { ReactNode } from 'react';

interface HtmlProps {
  children: ReactNode;
  distanceFactor?: number;
  transform?: boolean;
  position?: [number, number, number];
}

const Html: React.FC<HtmlProps> = ({ 
  children, 
  distanceFactor = 10, 
  transform = false, 
  position = [0, 0, 0],
  ...props 
}) => {
  const { camera } = useThree();
  const ref = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    if (transform && ref.current) {
      const scale = 0.1 * distanceFactor;
      ref.current.style.transform = `translate3d(${position[0]}px, ${position[1]}px, ${position[2]}px) scale(${scale})`;
    }
  }, [transform, distanceFactor, position]);

  return (
    <div
      ref={ref}
      className={`absolute top-0 left-0 transform-gpu ${transform ? 'transform-origin-center' : ''}`}
      style={{
        transform: transform ? undefined : `translate(-50%, -50%)`,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Html;