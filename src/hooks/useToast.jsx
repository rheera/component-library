import { useState, useEffect } from "react";

export default function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toastProps) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { ...toastProps, id: new Date().getUTCMilliseconds() },
    ]);
  };

  const removeToast = (index) => {
    setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, "3200");
    }
  }, [toasts]);
  return [toasts, addToast, removeToast];
}
