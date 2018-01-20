import {combineReducers} from 'redux';

const CALCULATE_TRIANGLE = 'CALCULATE_TRIANGLE';

function getTriangleInfo({sideA, sideB, sideC}) {
  const msg = 'This triangle is';

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
      message: 'Triangle sides should be numbers',
      success: false,
    };
  }

  if (a <= 0 || b <= 0 || c <= 1e-100) {
    return {
      message: 'Triangle side should be a positive number',
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
      message: `${msg} EQUILATERAL`,
      success: true,
    };
  }

  if (a === b || a === c) {
    return {
      message: `${msg} ISOSCELES`,
      success: true,
    };
  }

  return {
    message: `${msg} VERSATILE`,
    success: true,
  };
}

const checkTriangle = (state = {}, action) => {
  if (action.type === CALCULATE_TRIANGLE) {
    return {triangleType: getTriangleInfo(action)};
  }
  return state;
};

export default combineReducers({
  checkTriangle,
});
