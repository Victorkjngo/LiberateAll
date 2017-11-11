var prompt = require('prompt');
var exec = require('exec');

prompt.start();
prompt.get(['CohortPrefix'], function (err, result) {
  startWork(result.CohortPrefix);
});

function startWork (prefix) {
  var bleh = `backcast
  6ees6ees6ees
  beesbeesbees
  blackjack
  chatterbox-client
  chatterbox-server
  data-structures
  databases
  fullstack-review
  javascript-koans
  layout
  looper
  middleware
  mvp
  mvp-starter
  mytunes
  n-queens
  ng-cast
  oath
  promises
  react-components
  recast.ly
  recursion
  recursion-review
  shortly-angular
  shortly-deploy
  shortly-express
  siskel
  subclass-dance-party
  testbuilder
  timecop
  twittler
  underbar
  underbar-review
  vertebrae
  watchout
  solo
  web-historian`;
  
  var prefixAndRepos = bleh.split('\n').map(line => {var command = prefix + '-' + line.trim(); console.log('Command:', command);return command}).join(' ');
  var commands = 'liberate --hackreactor ' + prefixAndRepos;
  var secondsTill30 = 30000;
  var timeout = setInterval(function () {
    console.log(secondsTill30 / 1000 + 'seconds left');
    secondsTill30 -= 1000;
  }, 1000);
  exec(commands, function(err, out, code) {
    if (err instanceof Error)
      throw err;
    console.log('Command done running!');
    clearInterval(timeout);
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);
  });
}
