import { ElementType, PolyComponentPropsWithRef, useEffect, useState } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import CardFrame from '../CardFrame';
import Flex from '../Flex';
import styles from './Card.module.scss';
import useIsMobile from '../../hooks/useIsMobile';

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

  const isMobile = useIsMobile();
  const thickness = isMobile ? 18 : 28;
  const marginTopRight = isMobile ? 5 : 0;
  const marginRight = isMobile ? -29 : -23;
  const topSize = isMobile ? "75%" : "120%";
  return (
    <Flex direction="row" justify="center">
      <Flex direction="column" align="center" justify="center">
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={`calc(98% - ${2.0 * thickness}px)`}
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
      </Flex>
      <Flex
        direction="column"
        justify="center"
        style={{
          width: thickness,
          marginRight: '-25px',
          marginLeft: '-8px',
        }}
      >

        <div
          style={{
            backgroundColor:
              contentColor ? `var(--${contentColor})` : undefined,
            minHeight: `calc(90% - ${3 * thickness}px)`,
            width: '100%',
            zIndex: 1,
            backgroundImage:
              contentBackground ? `url('${contentBackground}')` : undefined,
            backgroundPosition: 'center',
          }}
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
          length={topSize}
          thickness={thickness}
          style={{ zIndex: 3, 
            marginRight: `${marginTopRight}px`
          }}
        />
        <div
          className={styles.content}
          style={{
            backgroundColor:
              contentColor ? `var(--${contentColor})` : undefined,
            zIndex: 1,

          }}
        >
          {children}
        </div>

      </Flex>
      <Flex
        direction="column"
        justify="center"
        style={{
          width: thickness,
          marginRight: '-8px',
          marginLeft:  `${marginRight}px`,
        }}
      >

      </Flex>
      <Flex direction="column" align="center" justify="center">
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={`calc(98% - ${2.0 * thickness}px)`}
          thickness={thickness}
          style={{ zIndex: 2 }}
        />
      </Flex>
    </Flex>
  );
}
