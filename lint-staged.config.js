module.exports = {
  '*.ts?(x)': [
    'eslint --fix',
    'pretty-quick --staged',
    'tsc -p tsconfig.json --noEmit',
  ],
};
