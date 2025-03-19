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
    type?: 'desktop' | 'phone'; // the frame thickness is different for each type :')
    padding?: number;
  }
>;

export default function Card2<T extends ElementType = 'div'>({
  borderColor = 'framePurple',
  contentColor = 'white',
  contentBackground,
  type = 'desktop',
  padding = 0,
  children,
  as,
  ...props
}: CardProps<T>) {
  const typeThickness = new Map([
    ['phone', 18],
    ['desktop', 28],
  ]);
  const thickness = typeThickness.get(type) ?? 28;

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
          marginRight: '-20px',
          marginLeft: '-8px',
        }}
      >

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
          length="120%"
          thickness={thickness}
          style={{ zIndex: 2 }}
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
          marginLeft: '-20px',
        }}
      >

      </Flex>
      <Flex direction="column" align="center" justify="center">
        <CardFrame
          borderContentColor={borderColor as Color}
          direction="vertical"
          length={`calc(98% - ${2.0 * thickness}px)`}
          thickness={typeThickness.get(type)}
          style={{ zIndex: 2 }}
        />
      </Flex>
    </Flex>
  );
}
