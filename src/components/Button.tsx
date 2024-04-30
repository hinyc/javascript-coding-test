import { css } from '@emotion/css';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      className={css`
        transition: 0.2s;
        :hover {
          transform: scale(1.1);
        }
        :active {
          transform: scale(0.9);
        }
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
