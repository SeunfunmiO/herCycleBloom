
import { ToastContainer as ReactToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const ToastContainer = () => {
  return (
    <ReactToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme")==="dark"?"dark":"light"}
    />
  );
};

export default ToastContainer;