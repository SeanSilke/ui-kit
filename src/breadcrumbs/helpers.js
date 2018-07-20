export const getWidthToRightBorder = (elemID, widthArr) => {
  let res = 0;
  for (let i = 0; i <= elemID; i++) {
    res += widthArr[i];
  }
  return res;
};

export const getWidthToLeftBorder = (elemID, widthArr) => {
  let res = 0;
  for (let i = 0; i <= elemID - 1; i++) {
    res += widthArr[i];
  }
  return res;
};

export const getRightCornerElement = (diff, widthArr) => {
  for (let i = 0; i < widthArr.length; i++) {
    diff = diff + widthArr[i];
    if (diff >= 0) return i;
  }
  return -1;
};

export const getLeftCornerElement = (diff, widthArr, visibleWidth) => {
  for (let i = 0; i < widthArr.length; i++) {
    diff = diff + widthArr[i];
    if (diff >= visibleWidth) {
      return i;
    }
  }
  return -1;
};
