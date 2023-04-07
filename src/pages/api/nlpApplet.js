const natural = require('natural');
const tokenizer = new natural.AggressiveTokenizerEs();
const TfIdf = natural.TfIdf;

const tfidf = new TfIdf();

const headlines = [
    'El presidente anuncia nuevas medidas económicas',
    'La economía se contrae por segundo trimestre consecutivo',
    'El gobierno presenta el plan de recuperación económica'
  ];
  
  headlines.forEach(headline => {
    tfidf.addDocument(tokenizer.tokenize(headline));
  });

  const similarities = [];

headlines.forEach((headline, i) => {
  const scores = [];

  headlines.forEach((headline2, j) => {
    if (i === j) {
      scores.push(0);
    } else {
      const score = tfidf.tfidf(tokenizer.tokenize(headline), j);
      scores.push(score);
    }
  });

  similarities.push(scores);
});

console.log(similarities);