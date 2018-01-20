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
    },
    flex: 1,
  },
  heading: {
    textAlign: 'center'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    background: 'orange',
    textAlign: 'center',
    padding: 16,
    color: 'white',
    border: '1px solid orange',
    fontSize: 18,
    ':hover': {
      color: 'orange',
      background: 'white',
    }
  },
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  content: {
    flex: 1
  },
  listItem: {
    marginBottom: 16
  }
});
