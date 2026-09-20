"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa"; // Import your desired icon

const AutoLoadModal = () => {
  const [show, setShow] = useState(false);

  // Show modal on component mount
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered // Center the modal vertically and horizontally
      size="md" // Larger modal for better image display
      backdrop="static" // Prevent closing by clicking outside
      keyboard={false} // Prevent closing with the keyboard
    >
      <div
        className="position-absolute"
        style={{
          top: "-10px",
          right: "-10px",
          zIndex: 1050, // Ensure it is above the modal content
          cursor: "pointer",
        }}
        onClick={handleClose} // Close the modal when the icon is clicked
      >
        <FaTimes size={24} color="#fff" />
      </div>
      <Modal.Body className="p-0">
        {" "}
        {/* Remove padding for full image display */}
        <Image
          src="/images/popupImg.jpg"
          width={1080}
          height={1080}
          className="img-fluid w-100"
          style={{ objectFit: "cover" }}
          alt="popup"
        />
      </Modal.Body>
    </Modal>
  );
};

export default AutoLoadModal;
