// import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useRef } from 'react';
import uuid from "uuid-random";
import { DeviceEventEmitter, ScrollView, Text, View } from 'react-native';

// Base Components
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';

var idCounter = 1;

export default function Container({children = undefined, classes = '', style = {}, onClick = () => {}, ...props}, key) {
  const isString = typeof children === 'string';

  const idHandle = useCallback(() => {
    const id = useRef(uuid() + `:${idCounter}`);
    idCounter++;
    return id.current;
  }, []);

  const id = idHandle();

  function getChildren() {
    if (!isString) return children;
    return (
      <Title>
          {children}
      </Title>
    );
  }

  const childs = (
    <View 
      style={{...style}} 
      pointerEvents={classes.includes('pointer-events-none') ? 'box-none' : 'auto'}
      key={key}
      onTouchEnd={onClick}
      className={`box-content ${classes}`}
      {...props}
    >
      {getChildren()} 
    </View>
  );

  let jsx = childs;

  if (
    classes.includes('overflow-x-scroll') || classes.includes('overflow-y-scroll')
    || classes.includes('overflow-x-auto') || classes.includes('overflow-y-auto')
    || classes.includes('overflow-scroll') || classes.includes('overflow-auto')
  ) {
    jsx = (
      <ScrollView
        key={key}
        horizontal={(
          classes.includes('overflow-x-scroll')
          || classes.includes('overflow-x-auto')
        )}
        style={{ flexGrow: 0 }}
        showsHorizontalScrollIndicator={!classes.includes('scrollbar-none')}
        showsVerticalScrollIndicator={!classes.includes('scrollbar-none')}
        scrollEnabled={true}
        persistentScrollbar={true}
      >
        {childs}
      </ScrollView>
    );
  }

  useEffect(() => {

    if (classes.includes('fixed')) {
      
      DeviceEventEmitter.emit('fixedPositionEvent', {
        component: () => {
            return (
              <React.Fragment key={id}>
                {jsx}
              </React.Fragment>
            );
        },
        id,
      });
      
    }
  });

  useEffect(() => {

    if (classes.includes('fixed')) {
      return () => {      
        DeviceEventEmitter.emit('fixedPositionRemoveEvent', {
          id,
        });
      }
    }
  }, []);

  if (classes.includes('fixed')) {
    return <View key={key} />;
  }

  return jsx;
}