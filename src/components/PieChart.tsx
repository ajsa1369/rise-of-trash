'use client';

import { useEffect, useRef } from 'react';

interface PieChartProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  size?: number;
  innerRadius?: number;
  className?: string;
}

const PieChart = ({ data, size = 200, innerRadius = 70, className = '' }: PieChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw pie chart
    let startAngle = 0;
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total;
      
      ctx.beginPath();
      ctx.moveTo(size / 2, size / 2);
      ctx.arc(size / 2, size / 2, size / 2, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      ctx.fillStyle = item.color;
      ctx.fill();
      
      startAngle += sliceAngle;
    });

    // Draw inner circle for donut effect
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, innerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f0f0f';
    ctx.fill();
  }, [data, size, innerRadius]);

  return (
    <div className={`relative ${className}`}>
      <canvas 
        ref={canvasRef} 
        width={size} 
        height={size}
        className="mx-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <span className="text-2xl font-bold">{item.value}%</span>
            <span className="block text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
