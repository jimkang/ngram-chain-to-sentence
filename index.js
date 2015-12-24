function ngramChainToSentence(chain) {
  var sentence;
  var tokens = chain.slice();
  if (tokens.length > 0) {
    var firstToken = tokens[0].toLowerCase();
    if (firstToken === 's' || firstToken === '\'s') {
      tokens = tokens.slice(1);
    }
    tokens.forEach(appendToSentence);
  }
  return capitalizeFirst(sentence);

  function appendToSentence(token, i) {
    var normalized = token.toLowerCase();
    if (!sentence && (normalized === 's' || normalized === '\'s')) {
      // Don't start sentence with s or 's.
      return;
    }
    if (sentence) {
      if (normalized !== 's' && normalized !== '\'s') {
        sentence += ' ';
      }
      sentence += normalized;
    }
    else {
      sentence = normalized;
    }
  }
}


function capitalizeFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

module.exports = ngramChainToSentence;
