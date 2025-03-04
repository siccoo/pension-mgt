import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message: string) => {
  toast.success(message);
};

export const notifyError = (message: string) => {
  toast.error(message);
};

const ToastNotifications: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} />;
};

export default ToastNotifications;
