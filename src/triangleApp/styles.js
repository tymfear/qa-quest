import {StyleSheet} from 'aphrodite';
import CommonStyles from '../common/styles';

const defaultResultStyle = {
  padding: 16,
  textAlign: 'center',
};

const linkBlock = {
  ...CommonStyles.actionLinkBlock,
  display: 'inline-block',
  margin: '0 16px 16px',
  minWidth: 120,
  maxWidth: 150,
  textAlign: 'center',
};

export default StyleSheet.create({
  inputBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 16,
    flexWrap: 'wrap',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  linkBlock,
  clearLinkBlock: {
    ...linkBlock,
    border: 'none',
    ':hover': {},
  },
  link: CommonStyles.actionLink,
  clearLink: {
    ...CommonStyles.actionLink,
    color: '#c0e1ee',
    ':hover': {
      color: '#2b2625'
    },
  },
  container: {
    margin: '0 auto',
    padding: 16,
    borderLeft: 'solid 1px #e2dada',
    borderRight: 'solid 1px #e2dada',
    '@media (min-width: 768px)': {
      width: 736,
    },
  },
  sideInput: {
    border: 'solid 1px #ffa500',
    margin: '0 16px 16px',
    width: 150,
    height: 26,
    padding: '0 8px',
    fontSize: 16,
  },
  successResult: {
    ...defaultResultStyle,
    backgroundColor: 'rgba(40, 237, 100, .5)',
  },
  errorResult: {
    ...defaultResultStyle,
    backgroundColor: 'rgba(238, 0, 0, .5)',
    color: 'white',
  },
});
