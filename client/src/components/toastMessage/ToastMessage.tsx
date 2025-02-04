import React from 'react';
import './style/index.scss';

export default function ToastMessage({ message }: { message: string }) {
  return <div className={'toast-message'}>{message}</div>;
}
