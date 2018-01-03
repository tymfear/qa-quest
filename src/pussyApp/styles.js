import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  container: {
    margin: '0 auto',
    padding: 16,
    borderLeft: 'solid 1px #e2dada',
    borderRight: 'solid 1px #e2dada',
    '@media (min-width: 768px)': {
      width: 736,
    }
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  navItem: {
    border: '1px solid orange',
    padding: '5px 10px',
    color: 'orange',
  },
  link: {
    color: 'orange'
  },
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
