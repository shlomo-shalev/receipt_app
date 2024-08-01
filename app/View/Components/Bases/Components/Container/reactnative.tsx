// Tools
import uuid from "uuid-random";
import { View } from 'react-native';
import React, { forwardRef, useCallback, useRef } from 'react';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

// Base Components
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';

// Bootstrap components
import Scroll from 'app/View/Bootstrap/reactnative/Scroll/Scroll';

// Bootstrap hooks
import useFixedHandler from 'app/View/Bootstrap/reactnative/Hooks/useFixedHandler';

var idCounter = 1;

const Container = (
    {children = undefined, classes = '', style = {}, onClick = null, ...props}, 
    ref
  ) => {
    const isString = typeof children === 'string';

    const classesToScroll = [
      'overflow-x-scroll', 'overflow-y-scroll',
      'overflow-x-auto', 'overflow-y-auto',
      'overflow-scroll', 'overflow-auto',

    ];
    const isNeedScroll = classesToScroll
      .filter(oneClass => classes.includes(oneClass)).length > 0;    

    const id = useCallback(() => {
      const id = useRef(uuid() + `:${idCounter}`);
      idCounter++;
      return id.current;
    }, [])();

    function getChildren() {
      if (!isString) return children;
      return (
        <Title>
            {children}
        </Title>
      );
    }    

    const handleSingleTap = ({ nativeEvent }) => {      
      if (nativeEvent.state === State.ACTIVE) {
        onClick();
      }
    };

    let jsx = (
        <View 
          {...props}
          style={{...style}} 
          ref={ref}
          pointerEvents={classes.includes('pointer-events-none') ? 'box-none' : 'auto'}
          className={`box-content ${classes}`}
        >
          {getChildren()} 
        </View>
    );

    if (onClick) {      
      jsx = (
        <TapGestureHandler
          onHandlerStateChange={(event) => handleSingleTap(event)}
        >
          {jsx}
        </TapGestureHandler>
      );
    }
    
    if (isNeedScroll) {
      jsx = (
        <Scroll
          classes={classes}
          ref={ref}
        >
          {jsx}
        </Scroll>
      );
    }

    const { isFixed } = useFixedHandler({
      key: id,
      jsx,
      isFixed: classes.includes('fixed'),
    });

    return isFixed ? <View /> : jsx;
};

export default forwardRef(Container);