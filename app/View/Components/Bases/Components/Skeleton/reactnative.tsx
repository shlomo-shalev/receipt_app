import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function Skeleton(
  { width = '100%', height = '100%' }
    :{width: string | number, height: string | number}
) {

  return (
    <SkeletonPlaceholder speed={1000}>
      <SkeletonPlaceholder.Item 
        width={width} 
        height={height}
      />
    </SkeletonPlaceholder>
  );
}

export default Skeleton;