import {StyleSheet} from 'aphrodite';
import CommonStyles from '../common/styles';

export default StyleSheet.create({
  inputBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 16,
    flexWrap: 'wrap'
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkBlock: {
    ...CommonStyles.actionLinkBlock,
    display: 'inline-block',
  },
  link: CommonStyles.actionLink,
  container: {
    margin: '0 auto',
    padding: 16,
    borderLeft: 'solid 1px #e2dada',
    borderRight: 'solid 1px #e2dada',
    '@media (min-width: 768px)': {
      width: 736,
    }
  },
  sideInput: {
    border: 'solid 1px #ffa500',
    margin: '0 16px 16px',
    width: 150,
    height: 26,
    padding: '0 8px',
    fontSize: 16
  }
});
