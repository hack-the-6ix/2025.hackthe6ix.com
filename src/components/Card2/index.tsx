'use client';

import { useState, useEffect } from 'react';
import { ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import CardFrame from '../CardFrame';
import Flex from '../Flex';
import styles from './Card.module.scss';

// horizontal centered card with fancy frame
export type CardProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    borderColor?: Color; // there's framePurple, frameBrown, frameBlack
    contentColor?: Color;
    contentBackground?: string;
    padding?: number;
  }
>;

export default function Card2<T extends ElementType = 'div'>({
  borderColor = 'framePurple',
  contentColor = 'white',
  contentBackground,
  padding = 0,
  children,
  as,
  ...props
}: CardProps<T>) {
  const [thickness, setThickness] = useState(28);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setThickness(18);
      } else {
        setThickness(28);
      }
    };
    // mount
    handleResize();
    window.addEventListener('resize', handleResize);

    //unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Flex direction="row" justify="center">
      <Flex direction="column" align="center" justify="center">
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={`calc(98% - ${2.5 * thickness}px)`}
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
      </Flex>
      <Flex
        direction="column"
        justify="center"
        style={{
          width: thickness,
          marginRight: '-5px',
          marginLeft: '-8px',
        }}
      >
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={thickness}
          thickness={thickness}
          style={{ zIndex: 3 }}
        />
        <div
          style={{
            backgroundColor:
              contentColor ? `var(--${contentColor})` : undefined,
            minHeight: `calc(98% - ${3 * thickness}px)`,
            width: '100%',
            zIndex: 1,
            backgroundImage:
              contentBackground ? `url('${contentBackground}')` : undefined,
            backgroundPosition: 'center',
          }}
        />
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={thickness}
          thickness={thickness}
          style={{ zIndex: 3 }}
        />
      </Flex>
      <Flex
        {...props}
        className={cn(props.className, styles.card)}
        as={as as 'div'}
        align="center"
        justify="center"
        direction="column"
        inline
      >
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="horizontal"
          length="100%"
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
        <div
          className={styles.content}
          style={{
            backgroundColor:
              contentColor ? `var(--${contentColor})` : undefined,
            zIndex: 1,
                      ...props.style,
            '--card-offset': padding,
          }}
        >
          {children}
        </div>
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="horizontal"
          length="100%"
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
      </Flex>
      <Flex
        direction="column"
        justify="center"
        style={{
          width: thickness,
          marginRight: '-8px',
          marginLeft: '-5px',
        }}
      >
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={thickness}
          thickness={thickness}
          style={{ zIndex: 3 }}
        />
        <div
          style={{
            backgroundColor:
              contentColor ? `var(--${contentColor})` : undefined,
            minHeight: `calc(98% - ${3 * thickness}px)`,
            width: '100%',
            zIndex: 1,
            backgroundImage:
              contentBackground ? `url('${contentBackground}')` : undefined,
            backgroundPosition: 'center',
          }}
        />
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={thickness}
          thickness={thickness}
          style={{ zIndex: 3 }}
        />
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={`calc(98% - ${2.5 * thickness}px)`}
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
      </Flex>
    </Flex>
  );
}
