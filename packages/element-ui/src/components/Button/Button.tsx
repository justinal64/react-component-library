import React from 'react';

interface ButtonProps {
  type?: 'Primary' | 'Secondary';
}

function Button(props: ButtonProps) {
  const { type } = props;
  return <button className={type}>This is a button</button>;
}

export { Button };
