import { css } from '@emotion/css';
import React from 'react';

interface NotificationProps {
  children?: React.ReactNode;
}

export default function Notification(props: NotificationProps) {
  return (
    <div
      className={css`
        color: red;
        font-weight: 700;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 4px 10px;
      `}
    >
      {props.children}
    </div>
  );
}
