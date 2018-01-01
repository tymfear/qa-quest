import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  header: {
    background: 'black',
    color: 'orange',
    fontSize: 36,
    padding: 16,
  },
  container: {
    margin: '0 auto',
    width: 778,
    minHeight: 800,
    padding: 16,
    borderLeft: 'solid 1px #e2dada',
    borderRight: 'solid 1px #e2dada'
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
  link: {}
});
