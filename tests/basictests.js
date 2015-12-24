var test = require('tape');
var ngramChainToSentence = require('../index');

var testCases = [
  {
    opts: [
      "'s",
      "first",
      "'s",
      "last",
      "napoleon",
      "'s",
      "russian",
      "s",
      "a",
      "plan",
      "of",
      "campaign"
    ],
    expected: "First's last napoleon's russians a plan of campaign"
  },
  {
    opts: [
      "the",
      "quick",
      "brown",
      "fox",
      "took",
      "the",
      "day",
      "off"
    ],
    expected: "The quick brown fox took the day off"
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test', function basicTest(t) {
    t.equal(
      ngramChainToSentence(testCase.opts),
      testCase.expected,
      'Sentence is correct.'
    );
    t.end();
  });
}
