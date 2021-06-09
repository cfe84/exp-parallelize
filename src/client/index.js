const got = require("got");

async function exp(url) {
  console.log(`In sequence`);

  const startSequence = Date.now();
  await got(url);
  await got(url);
  const endSequence = Date.now();

  console.log(`Duration: ${(endSequence - startSequence) / 1000}`);

  console.log(`In parallel`);

  const startParallel = Date.now();
  await Promise.all([got(url), got(url)]);
  const endParallel = Date.now();
  console.log(`Duration: ${(endParallel - startParallel) / 1000}`);
}

module.exports = exp;
