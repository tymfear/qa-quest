import {combineReducers} from 'redux';

const CALCULATE_TRIANGLE = 'CALCULATE_TRIANGLE';
const CLEAR_DATA = 'CLEAR_DATA';

function getTriangleInfo({sideA, sideB, sideC}) {
  const validMsgTemplate = 'This triangle is';

  if (sideA === '' || sideB === '' || sideC === '') {
    return {
      message: 'Please provide three triangle sides',
      success: false,
    };
  }

  const a = Number(sideA);
  const b = Number(sideB);
  const c = Number(sideC);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return {
      message: 'Triangle sides must be numbers',
      success: false,
    };
  }

  if (a <= 0 || b <= 0 || c <= 1e-100) {
    return {
      message: 'Triangle side must be a positive number',
      success: false,
    };
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return {
      message: 'Not a triangle',
      success: false,
    };
  }

  if (a === b && a === c) {
    return {
      message: `${validMsgTemplate} EQUILATERAL`,
      success: true,
    };
  }

  if (a === b || a === c || b === c) {
    return {
      message: `${validMsgTemplate} ISOSCELES`,
      success: true,
    };
  }

  return {
    message: `${validMsgTemplate} VERSATILE`,
    success: true,
  };
}

const checkTriangle = (state = {}, action) => {
  switch (action.type) {
    case CALCULATE_TRIANGLE:
      return {triangleType: getTriangleInfo(action)};
    case CLEAR_DATA:
      return {};
    default:
      return {};

  }
};

export default combineReducers({
  checkTriangle,
});
