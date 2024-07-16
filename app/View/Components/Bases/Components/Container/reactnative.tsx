// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Title from 'app/View/Components/Bases/Components/Title/__DOM_DRIVER__';

export default function Container({children = undefined, classes = '', style = {}, onClick = () => {}, ...props}) {
  const isString = typeof children === 'string';

  function getChildren() {
    if (!isString) return children;
    return (
      <Title>
          {children}
      </Title>
    );
  }

  classes = classes.includes('fixed') ? `${classes.replaceAll('fixed', '')} absolute` : classes;

  const childs = (
    <View 
      style={{...style}} 
      onTouchEnd={onClick}
      className={`box-content ${classes}`}
      {...props}
    >
      {getChildren()} 
    </View>
  );

  if (
    classes.includes('overflow-x-scroll') || classes.includes('overflow-y-scroll')
    || classes.includes('overflow-x-auto') || classes.includes('overflow-y-auto')
    || classes.includes('overflow-scroll') || classes.includes('overflow-auto')
  ) {
    return (
      <ScrollView
        horizontal={(
          classes.includes('overflow-x-scroll')
          || classes.includes('overflow-x-auto')
        )}
        showsHorizontalScrollIndicator={!classes.includes('scrollbar-none')}
        showsVerticalScrollIndicator={!classes.includes('scrollbar-none')}
        scrollEnabled={true}
        persistentScrollbar={true}
      >
        {childs}
      </ScrollView>
    );
  }

  return childs;
}