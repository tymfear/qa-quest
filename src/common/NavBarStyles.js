import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  container: {
    padding: 16,
    background: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: 'orange',
    ':hover': {
      color: 'white'
    }
  }
});
