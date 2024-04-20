import { FC} from "react";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./context/toastContext";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {

  return (
    <BrowserRouter>
      <ToastProvider>{children}</ToastProvider>
    </BrowserRouter>
  );
};
