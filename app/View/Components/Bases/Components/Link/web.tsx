import React from 'react';

export default function Link({children = undefined, href, alt, ...props}) {
  return (
    <a 
      href={href}
      alt={alt}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}