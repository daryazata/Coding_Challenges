// https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property

export const sort = function (prop, arr, mode) {
  prop = prop.split('.');
  var len = prop.length;

  if (mode === 'asc') {
    arr.sort(function (a, b) {
      var i = 0;
      while (i < len) {
        a = a[prop[i]];
        b = b[prop[i]];
        i++;
      }
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (mode === 'desc') {
    arr.sort(function (a, b) {
      var i = 0;
      while (i < len) {
        a = a[prop[i]];
        b = b[prop[i]];
        i++;
      }
      if (b < a) {
        return -1;
      } else if (b > a) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return arr;
};
