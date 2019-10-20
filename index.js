module.exports =  (item, path) => {
  const regex = /\[([^\]]*)\]/;
  return path
    .replace(regex, '.$1') //Take care of array-indexes
    .split('.')
    .reduce((item, pathPart) => {
      return item[pathPart];
    }, item);
};
