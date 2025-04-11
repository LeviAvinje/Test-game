import React, { useRef, useEffect, useState } from 'react';

type Player = {
  x: number;
  y: number;
  color: string;
};

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initial positions for the two players
  const [player1, setPlayer1] = useState<Player>({ x: 50, y: 50, color: 'red' });
  const [player2, setPlayer2] = useState<Player>({ x: 200, y: 50, color: 'blue' });

  // Movement speed
  const speed = 3;

  // Keys currently pressed
  const keys = useRef<{ [key: string]: boolean }>({});

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const update = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Move Player 1 (WASD)
      setPlayer1(prev => {
        const newX = prev.x + (keys.current['d'] ? speed : 0) - (keys.current['a'] ? speed : 0);
        const newY = prev.y + (keys.current['s'] ? speed : 0) - (keys.current['w'] ? speed : 0);
        
        return {
          ...prev,
          x: Math.max(0, Math.min(canvasWidth - 40, newX)), // Ensure x is within [0, canvasWidth - playerWidth]
          y: Math.max(0, Math.min(canvasHeight - 40, newY)), // Ensure y is within [0, canvasHeight - playerHeight]
        };
      });

      // Move Player 2 (Arrow Keys)
      setPlayer2(prev => {
        const newX = prev.x + (keys.current['ArrowRight'] ? speed : 0) - (keys.current['ArrowLeft'] ? speed : 0);
        const newY = prev.y + (keys.current['ArrowDown'] ? speed : 0) - (keys.current['ArrowUp'] ? speed : 0);

        return {
          ...prev,
          x: Math.max(0, Math.min(canvasWidth - 40, newX)), // Ensure x is within [0, canvasWidth - playerWidth]
          y: Math.max(0, Math.min(canvasHeight - 40, newY)), // Ensure y is within [0, canvasHeight - playerHeight]
        };
      });

    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw Player 1
      ctx.fillStyle = player1.color;
      ctx.fillRect(player1.x, player1.y, 40, 40);
      // Draw Player 2
      ctx.fillStyle = player2.color;
      ctx.fillRect(player2.x, player2.y, 40, 40);
    };

    let animationFrameId: number;

    const gameLoop = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();
    console.log("123")

    return () => cancelAnimationFrame(animationFrameId);
  }, [player1, player2]);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={900}
      style={{ border: '2px solid black', backgroundColor: '#eee', marginLeft:"10vw", marginRight:"10vw",borderRadius:"20px" }}
    />
  );
};

export default GameCanvas;
