import React from 'react'

function Modal(props) {

  /**
   * ! Props needed :
   * 
   * * content : display modal text {string}
   * * isModal : change className so you can on/off with display: flex / display: none {boolean}
   * * closeModal : function used in parent to change isModal {object}
   * 
   */

    // Change className for display modal
    const showHideClassName = props.isModalOn
      ? "modal display-flex"
      : "modal display-none";
  
    // Change className for display container modal
    const showHideContainerClassName = props.isModalOn
      ? "display-block"
      : "display-none";
  
    return (
      <div className={showHideContainerClassName}>
        <div className={showHideClassName}>
          <p className="modal_text">{props.content}</p>
          <p className="button_close_container">
            <i
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
  