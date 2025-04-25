'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
// import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Text from '@/components/Text';
import AppleCharacter from '../../assets/apple-character.svg';
import Fire from '../../assets/fire.svg';
import Firefly from '../../assets/firefly.svg';
import HeroPatch from '../../assets/hero-patch-1.svg';
import HeroPatchTwo from '../../assets/hero-patch-2.svg';
import HeroTree from '../../assets/hero-trees-left.svg';
import HeroTreeRight from '../../assets/hero-trees-right.svg';

const WORD_ARRAY = ['create', 'learn', 'collaborate', 'network'];
const NUM_FIREFLIES = 20;

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [email, setEmail] = useState<string>('');
  const [typedWord, setTypedWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  const [fireflies, setFireflies] = useState(
    Array.from({ length: NUM_FIREFLIES }, () => ({
      top: '50%',
      left: '50%',
      visible: false,
    })),
  );

  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [characterY, setCharacterY] = useState(50);
  const [obstacles, setObstacles] = useState<
    { left: number; width: number; height: number }[]
  >([]);

  const gameLoopRef = useRef<number | null>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let charIndex = 0;
    const typeWord = () => {
      if (charIndex <= WORD_ARRAY[currentWordIndex].length) {
        setTypedWord(WORD_ARRAY[currentWordIndex].substring(0, charIndex));
        charIndex++;
        setTimeout(typeWord, 100);
      } else {
        setTimeout(() => {
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % WORD_ARRAY.length,
          );
        }, 2500);
      }
    };
    typeWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const fireflyIntervals = fireflies.map((_, index) => {
      return setInterval(
        () => {
          const randomTop = Math.random() * 80 + 10;
          const randomLeft = Math.random() * 80 + 10;

          setFireflies((prevFireflies) => {
            const newFireflies = [...prevFireflies];
            newFireflies[index] = {
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              visible: true,
            };
            return newFireflies;
          });

          setTimeout(() => {
            setFireflies((prevFireflies) => {
              const newFireflies = [...prevFireflies];
              newFireflies[index].visible = false;
              return newFireflies;
            });
          }, 3000);
        },
        index * 2000 + 3000,
      );
    });

    return () => {
      fireflyIntervals.forEach(clearInterval);
    };
  }, [fireflies]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus({
        message: 'Please provide an email',
        isError: true,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        message: 'Please provide a valid email',
        isError: true,
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('/api/mailingList', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === 'success') {
        setSubmitStatus({
          message: data.message,
          isError: false,
        });
        setEmail('');
      } else {
        const errorMessage =
          data.error?.email?._errors[0] ||
          'Failed to subscribe. Please try again.';
        setSubmitStatus({
          message: errorMessage,
          isError: true,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        message: 'An error occurred. Please try again later.',
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startGame = () => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setJumping(false);
    setCharacterY(50);
    setObstacles([]);

    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }

    let lastTime = 0;
    let obstacleTimer = 0;

    const gameLoop = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (jumping) {
        setCharacterY((prev) => {
          const newY = prev - (0.5 * deltaTime) / 16;
          if (newY <= 30) {
            setTimeout(() => setJumping(false), 150);
            return 30;
          }
          return newY;
        });
      } else if (characterY < 50) {
        setCharacterY((prev) => {
          const newY = prev + (0.3 * deltaTime) / 16;
          return Math.min(newY, 50);
        });
      }

      obstacleTimer += deltaTime;
      if (obstacleTimer > 2000) {
        obstacleTimer = 0;
        setObstacles((prev) => [
          ...prev,
          {
            left: 100,
            width: 40,
            height: 40,
          },
        ]);
      }

      setObstacles((prev) => {
        const newObstacles = prev
          .map((obs) => ({
            ...obs,
            left: obs.left - (0.2 * deltaTime) / 16,
          }))
          .filter((obs) => obs.left > -10);

        return newObstacles;
      });

      const characterRect = characterRef.current?.getBoundingClientRect();
      if (characterRect) {
        for (const obstacle of obstacles) {
          const obstacleEl = document.querySelector(
            `.obstacle-${obstacle.left}`,
          );
          const obstacleRect = obstacleEl?.getBoundingClientRect();

          if (
            obstacleRect &&
            characterRect.right > obstacleRect.left + 20 &&
            characterRect.left < obstacleRect.right - 20 &&
            characterRect.bottom > obstacleRect.top + 20
          ) {
            setGameOver(true);
            return;
          }
        }
      }

      setScore((prev) => prev + 1);

      if (!gameOver) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
      }
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  const handleJump = () => {
    if (!jumping && characterY >= 50) {
      setJumping(true);
    }
  };

  const handleGameClick = () => {
    if (gameOver) {
      startGame();
    } else if (gameActive) {
      handleJump();
    }
  };

  const exitGame = () => {
    setGameActive(false);
    setGameOver(false);
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameActive && (e.code === 'Space' || e.code === 'ArrowUp')) {
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameActive, jumping, characterY]);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e5eeda] to-[#cfedaf] overflow-hidden overflow-x-hidden">
        {gameActive ?
          <div
            className="w-full h-full flex flex-col items-center"
            onClick={handleGameClick}
          >
            <div className="absolute top-4 left-4 z-50">
              <Card
                pixelSize={4}
                radius={4}
                borderWidth={1}
                padding={4}
                borderColor="shades-100"
                backgroundColor="#FF6B6B"
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  exitGame();
                }}
              >
                <Text
                  textType={'label'}
                  textColor="white"
                  textWeight="bold"
                  className="mx-2"
                >
                  Exit Game
                </Text>
              </Card>
            </div>

            <div className="absolute top-4 right-4 z-50">
              <Text textType="subtitle-lg" textColor="primary">
                Score: {score}
              </Text>
            </div>

            {gameOver && (
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <Card
                  pixelSize={4}
                  radius={10}
                  borderWidth={1}
                  padding={25}
                  borderColor="randoms-100"
                  backgroundColor="#43603f"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Text textType={'subtitle-lg'} textColor="white">
                      Game Over!
                    </Text>
                    <Text textType={'label'} textColor="white">
                      Score: {score}
                    </Text>
                    <Card
                      pixelSize={4}
                      radius={4}
                      borderWidth={1}
                      padding={4}
                      borderColor="shades-100"
                      backgroundColor="#74A600"
                      className="cursor-pointer"
                    >
                      <Text
                        textType={'label'}
                        textColor="white"
                        textWeight="bold"
                        className="mx-2"
                      >
                        Play Again
                      </Text>
                    </Card>
                  </div>
                </Card>
              </div>
            )}

            <div
              ref={characterRef}
              className="absolute z-30"
              style={{ left: '20%', bottom: `${characterY}%` }}
            >
              <Image
                src={AppleCharacter}
                alt="Apple Character"
                width={80}
                height={80}
                className="h-auto"
              />
            </div>

            {obstacles.map((obstacle, index) => (
              <div
                key={index}
                className={`absolute bottom-[10%] z-20 obstacle-${obstacle.left}`}
                style={{ left: `${obstacle.left}%` }}
              >
                <Image
                  src={HeroTree}
                  alt="Obstacle"
                  width={80}
                  height={obstacle.height * 2}
                  className="h-auto"
                />
              </div>
            ))}
          </div>
        : <div className="relative z-10 flex flex-col items-center text-center sm:gap-6 gap-0">
            <Text
              textType="subtitle-sm"
              textColor="primary"
              className="sm:flex hidden"
              textWeight="600"
            >
              July 18-20, 2025 • In-Person event • location
            </Text>
            <div className="flex flex-col items-center sm:hidden">
              <Text textType="subtitle-sm" textWeight="600" textColor="primary">
                July 18-20, 2025
              </Text>
              <Text textType="subtitle-sm" textWeight="600" textColor="primary">
                In-Person event
              </Text>
              <Text textType="subtitle-sm" textWeight="600" textColor="primary">
                location
              </Text>
            </div>
            <Text textType="title" textFont="Jersey10" textColor="primary">
              Hack the 6ix
            </Text>
            <Text
              textType="subtitle-lg"
              textColor="primary"
              className="sm:flex hidden"
            >
              Embark on a quest to
              <span className="text-accent ml-4">[{typedWord}]</span>
            </Text>

            <div className="relative bg-[#74A600] border-[4px] border-[#3E2523] py-2 flex items-center justify-center w-[180px] sm:hidden mb-12">
              <Text
                textType="subtitle-sm"
                textColor="white"
                textWeight="semi-bold"
              >
                Applications open soon!
              </Text>
              <div className="absolute top-[-4px] left-[-4px] z-50 bg-[#d9eec2] h-[4px] w-[4px]"></div>
              <div className="absolute top-[-4px] left-[calc(100%)] z-50  bg-[#d9eec2] h-[4px] w-[4px]"></div>
              <div className="absolute top-[calc(100%)] left-[-4px] z-50 bg-[#d9eec2]  h-[4px] w-[4px]"></div>
              <div className="absolute top-[calc(100%)] left-[calc(100%)] z-50 bg-[#d9eec2]  h-[4px] w-[4px]"></div>
            </div>

            <Card
              pixelSize={4}
              radius={10}
              borderWidth={1}
              padding={25}
              borderColor="randoms-100"
              backgroundColor="#43603f"
              className="sm:flex hidden"
            >
              <Text textType={'label'} textColor="white">
                Applications open soon! Sign up to receive the
              </Text>
              <Text textType={'label'} textColor="white">
                latest updates in your inbox.
              </Text>
            </Card>
            <div className="flex sm:flex-row flex-col gap-4 items-center">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  currentBackground="#cfedaf"
                  borderColor="#494440"
                  placeholder="Enter Email"
                  className="sm:w-[300px] w-[180px]"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                ></Input>
                {submitStatus && (
                  <Text
                    textType="label"
                    className={`text-sm ${submitStatus.isError ? 'text-red-600' : 'text-green-600'}`}
                  >
                    {submitStatus.message}
                  </Text>
                )}
                <button type="submit" disabled={isLoading}>
                  <Card
                    pixelSize={4}
                    radius={4}
                    borderWidth={1}
                    padding={4}
                    borderColor="shades-100"
                    backgroundColor={isLoading ? '#999' : '#74A600'}
                    className="sm:w-auto w-full"
                  >
                    <Text
                      textType={'label'}
                      textColor="white"
                      textWeight="bold"
                      className="mx-2"
                    >
                      {isLoading ? 'Signing Up...' : 'Sign Up!'}
                    </Text>
                  </Card>
                </button>
              </form>
            </div>
          </div>
        }

        <Image
          src={HeroPatchTwo}
          alt="Patch"
          width={300}
          className={`absolute md:w-[300px] md:top-[90%] md:left-[38%] sm:w-[250px] sm:top-[90%] sm:left-[38%] w-[100px] left-[0] top-[58%] h-auto ${gameActive ? 'hidden' : ''}`}
        />

        <Image
          src={HeroTree}
          alt="Left Tree"
          priority={true}
          width={300}
          className={`absolute top-[35%] left-[0px] w-[80px] md:top-[60px] sm:w-[200px] sm:top-[100px] md:w-[250px] h-auto ${gameActive ? 'hidden' : ''}`}
        />

        <Image
          src={HeroTreeRight}
          alt="Right Tree"
          width={300}
          className={`absolute top-[32%] w-[100px] md:top-[40px] sm:w-[220px] sm:top-[100px] md:w-[300px] right-[0px] h-auto ${gameActive ? 'hidden' : ''}`}
        />

        <Image
          src={HeroPatch}
          alt="Patch"
          width={134}
          className={`absolute md:top-[88%] sm:top-[88%] md:w-[134px] sm:w-[100px] sm:left-[38%] sm:flex hidden h-auto ${gameActive ? 'hidden' : ''}`}
        />

        {!gameActive && (
          <div
            className="absolute md:top-[60%] sm:top-[59%] md:left-[8%] top-[55%] left-[9%] cursor-pointer z-20"
            onClick={startGame}
          >
            <Image
              src={AppleCharacter}
              alt="Apple Character"
              width={120}
              height={115}
              className="animate-bounce md:w-[120px] sm:w-[70px] w-[30px] h-auto"
            />
          </div>
        )}

        <Image
          src={Fire}
          alt="Fire"
          width={160}
          height={173}
          className={`absolute md:top-[65%] sm:top-[63%] md:left-[12%] top-[57%] left-[13%] md:w-[160px] sm:w-[110px] w-[40px] h-auto ${gameActive ? 'hidden' : ''}`}
        />

        {!gameActive &&
          fireflies.map((firefly, index) => (
            <Image
              key={index}
              src={Firefly}
              alt="Firefly"
              width={180}
              height={180}
              className={`sm:w-[180px] sm:h-[180px] h-[100px] w-[100px] absolute transition-opacity duration-1500 ease-in-out ${
                firefly.visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ top: firefly.top, left: firefly.left }}
            />
          ))}
      </section>
    </>
  );
}
