import React from 'react';
import {connectModal} from 'redux-modal';
import styles from './ModalStyles';
import {css} from 'aphrodite';


const Modal = ({handleHide, title, message}) => {
  return (
    <div className={css(styles.modalContainer)}>
      <div className={css(styles.backdrop)} onClick={handleHide}/>
      <div className={css(styles.modal)}>
        <div className={css(styles.modalHeaderContainer)}>
          <h3>{title}</h3>
        </div>
        <div className={css(styles.modalBodyContainer)}>{message}</div>
        <div className={css(styles.modalFooterContainer)}>
          <div className={css(styles.actionLinkBlock)} onClick={handleHide}>
            <a className={css(styles.actionLink)}>
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connectModal({name: 'credits'})(Modal);
