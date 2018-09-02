const walkFile = require('./walk-file');
const path = require('path');
const ENV = process.env.NODE_ENV;

module.exports = function getSqlMap() {
  let basePath = path.join(__dirname, '..');
  basePath = basePath.replace(/\\/g, '/');

  let pathArr = basePath.split('/');
  pathArr = pathArr.splice(0, pathArr.length - 1);
  const targetPath = ENV === 'create' ? '/sql/init/' : '/sql/change/';
  basePath = pathArr.join('/') + targetPath;

  console.log('basepath', basePath);

  let fileList = walkFile(basePath, 'sql');
  return fileList;
};
