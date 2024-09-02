const hasValidLength = (args, validLength) => args.length === validLength;

const isEmptyObject = (obj) => JSON.stringify(obj) === '{}'

module.exports = {
  hasValidLength,
  isEmptyObject
};
