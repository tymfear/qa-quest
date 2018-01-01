import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  container: {
    padding: 16,
    background: 'black',
  },
  link: {
    color: 'orange',
    ':hover': {
      color: 'white'
    }
  }
});
