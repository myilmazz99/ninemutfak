import React from "react";

export const Modal = ({ onClose, data, modalName }) => {
  const modalStyles = {
    position: "fixed",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    zIndex: 100,
    padding: "1.6rem",
    width: "90%",
    maxWidth: "600px",
  };

  const modalWrapper = {
    display: "none",
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 99,
    cursor: "default",
  };

  const modalInner = {
    position: "relative",
    boxSizing: "border-box",
  };

  const closeBtn = {
    position: "absolute",
    top: "-16px",
    right: "-20px",
    fontSize: "2rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "0.2rem 1rem",
    borderRadius: "50%",
  };

  const renderModal = () => {
    return (
      <section
        className={`modal-wrapper ${modalName}`}
        style={modalWrapper}
        onClick={(e) =>
          !e.target.className.includes("modal-wrapper") ? onClose() : ""
        }
      >
        <div className="modal" style={modalStyles}>
          <div className="modal-inner" style={modalInner}>
            <button
              onClick={() => onClose()}
              style={closeBtn}
              className="close-modal-btn"
            >
              &times;
            </button>
            {typeof data === "function" ? data() : data}
          </div>
        </div>
      </section>
    );
  };

  return renderModal();
};

export const toggleModal = (modalName) => {
  let modal;
  if (typeof window !== "undefined") {
    modal = document.querySelector(".m" + modalName);
  }
  if (modal) {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }
};
