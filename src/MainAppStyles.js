import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  header: {
    background: 'black',
    color: 'orange',
    fontSize: 36,
    padding: 16,
    textAlign: 'center'
  },
  container: {
    margin: '0 auto',
    padding: 16,
    borderLeft: 'solid 1px #e2dada',
    borderRight: 'solid 1px #e2dada',
    '@media (min-width: 768px)': {
      width: 736,
    }
  },
  heading: {
    textAlign: 'center'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    background: 'orange',
    textAlign: 'center',
    padding: 16,
    color: 'white',
    fontSize: 18,
    ':hover': {
      color: 'orange',
      background: 'white',
      border: '1px solid orange'
    }
  },
});
