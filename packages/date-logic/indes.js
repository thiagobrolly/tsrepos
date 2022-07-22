module.exports = function getDate(
  locale = 'en-US',
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  teste = 'teste'
) {
  return new Date().toLocaleDateString(locale, options, teste);
};