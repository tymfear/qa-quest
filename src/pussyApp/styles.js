import {StyleSheet} from 'aphrodite';
import CommonStyles from '../common/styles'

export default StyleSheet.create({
  container: {
    margin: '0 auto',
    padding: 16,
    borderLeft: CommonStyles.borderGrey,
    borderRight: CommonStyles.borderGrey,
    '@media (min-width: 768px)': {
      width: 736,
    }
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  navItem: CommonStyles.actionLinkBlock,
  link: CommonStyles.actionLink,
  mainHeading: {
    textAlign: 'center'
  },
  pussyImageBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  pussyImage: {
    padding: 0,
    display: 'block',
    margin: '0 auto',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  pussyToggleBlock: {
    marginBottom: 16,
  },

});
