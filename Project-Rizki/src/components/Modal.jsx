//?2.  Import ReactDOM
import ReactDOM from "react-dom";

//4. Buat Backdrop
const BackDropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75" />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
      <div className="bg-white p-4 rounded-lg shadow-lg text-grey-900 mx-2">
        {props.children}
      </div>
    </div>
  );
};

//? Buat property
const portalElement = document.getElementById("modal");

//? 1. Buat Modal
const Modal = (props) => {
  return (
    <>
      {/* 3. Buat ReactDom */}
      {ReactDOM.createPortal(<BackDropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
