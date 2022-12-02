function Modal(props) {
    // Change display modal
    const showHideClassName = props.isModalOn
      ? "modal display-flex"
      : "modal display-none";
  
    // Change display container modal
    const showHideContainerClassName = props.isModalOn
      ? "display-block"
      : "display-none";
  
    return (
      <div className={showHideContainerClassName}>
        <div className={showHideClassName}>
          <p className="modal_text">{props.content}</p>
          <p className="button_close_container">
            <i
              type="button"
              onClick={props.closeModal}
              className="close_modal fa fa-2x fa-times-circle-o"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
    );
  }
  
  export default Modal;
  