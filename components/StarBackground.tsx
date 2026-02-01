
import React, { useEffect, useRef, useMemo } from 'react';

interface StarBackgroundProps {
  isSuccess: boolean;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ isSuccess }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const stars = useMemo(() => {
    return Array.from({ length: 400 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.2,
      twinkleSpeed: Math.random() * 0.04 + 0.005,
      color: Math.random() > 0.8 ? '#cbd5e1' : (Math.random() > 0.9 ? '#fff7ed' : '#ffffff'),
      phase: Math.random() * Math.PI * 2
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 1. Deep Space Background
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Milky Way / Nebula Layers
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      // Indigo core
      const nebulaGrad1 = ctx.createRadialGradient(
        canvas.width * 0.6, canvas.height * 0.4, 0,
        canvas.width * 0.6, canvas.height * 0.4, canvas.width * 0.9
      );
      nebulaGrad1.addColorStop(0, 'rgba(49, 46, 129, 0.2)');
      nebulaGrad1.addColorStop(0.5, 'rgba(67, 56, 202, 0.08)');
      nebulaGrad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebulaGrad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Purple highlights
      const nebulaGrad2 = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.7, 0,
        canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6
      );
      nebulaGrad2.addColorStop(0, 'rgba(126, 34, 206, 0.12)');
      nebulaGrad2.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebulaGrad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.restore();

      // 3. Stars
      stars.forEach(star => {
        const x = (star.x / 100) * canvas.width;
        const y = (star.y / 100) * canvas.height;
        
        const time = Date.now() * 0.001;
        const twinkle = (Math.sin(time * star.twinkleSpeed * 50 + star.phase) + 1) / 2;
        const opacity = 0.2 + twinkle * 0.8;
        
        const scale = isSuccess ? 2.5 : 1.0;
        const finalOpacity = isSuccess ? Math.min(1, opacity * 1.5) : opacity;

        ctx.beginPath();
        ctx.arc(x, y, star.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = finalOpacity;
        
        if (isSuccess || star.size > 1.3) {
          ctx.shadowBlur = isSuccess ? 18 : 6;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [stars, isSuccess]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
};

export default StarBackground;
