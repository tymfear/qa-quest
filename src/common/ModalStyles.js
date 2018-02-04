import {StyleSheet} from 'aphrodite';
import CommonStyles from './styles';

const padding = 16;

export default StyleSheet.create({
  modalContainer: {
    position: 'fixed',
    paddingTop: 100,
    width: '100%',
  },
  backdrop: {
    background: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  modal: {
    width: '50%',
    position: 'relative',
    background: '#fefefe',
    margin: 'auto',
    zIndex: 2,
    minWidth: 300,
  },
  modalHeaderContainer: {
    borderBottom: CommonStyles.borderGrey,
    display: 'flex',
    justifyContent: 'center',
    padding
  },
  modalBodyContainer: {
    borderBottom: CommonStyles.borderGrey,
    padding,
  },
  modalFooterContainer: {
    padding,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ...CommonStyles,
});
