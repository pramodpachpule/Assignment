export const groupDataByKeys = (key, array) => {
  return array.reduce((acc, item) => {
    acc[item[key]] = acc[item[key]] || [];
    acc[item[key]].push(item);
    return acc;
  }, {});
};

export let randomColo =
  "rgb(" +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  "," +
  Math.floor(Math.random() * 255) +
  ")";
