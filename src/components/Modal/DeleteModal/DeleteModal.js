import React, { useState } from "react";
import Modal from "react-modal";
import "./DeleteModal.scss";
import deleteimg from "../../../assets/images/delete.png";
import delModalimg from "../../../assets/images/delModal.png";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000000",
    border: "none",
    borderRadius: "10px",
    filter: "drop-shadow(0px 12px 24px rgba(25, 25, 25, 0.32))",
    width: "300px",
    // height: "400px",
    // scrollbarWidth: "none",
    // overflow: "hidden",
  },
};

const DeleteModal = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <div className='cta__delete2' onClick={openModal}>
        <img src={deleteimg} alt='deleteimg' /> <p>Delete</p>{" "}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='cancel-btn'>
          <button onClick={closeModal}><IoMdClose /></button>
        </div>

        <div className='delete__modal__content'>
          <img src={delModalimg} alt='delModalimg' />
          <h2>You want to Delete?</h2>
          <p>
            Once you confirm delete, you can not undo your actions and all
            information relating to the content will be lost.
          </p>

          <form>
            <div className='confirm__password'>
              <input type='password' placeholder='Enter your password' />
              <button type='submit'>Delete</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
