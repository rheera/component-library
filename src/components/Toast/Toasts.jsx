import Toast from "./Toast";

export default function Toasts({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <Toast key={index} onClose={() => removeToast(index)} {...toast} />
      ))}
    </div>
  );
}
