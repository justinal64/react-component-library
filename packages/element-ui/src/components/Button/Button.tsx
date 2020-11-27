import React from 'react';

interface ButtonProps {
  type?: 'Primary' | 'Secondary';
  text?: string;
}

function Button(props: ButtonProps) {
  const { type, text } = props;
  return <button className={type}>{text}</button>;
}

export { Button };
