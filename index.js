var prompt = require('prompt');
var exec = require('exec');
var colors = require("colors/safe");

prompt.start();
prompt.get({
  properties: {
    CohortPrefix: {
      description: colors.magenta("What is your cohort prefix? (e.g 'hrsf78')")
    }
  }
}, function (err, result) {
  if (result.CohortPrefix) {
    startWork(result.CohortPrefix);    
  } else {
    console.log('Please enter a cohort prefix...');
  }
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
  console.log('Liberator running in child process, please wait...');
  var timeout = setInterval(function () {
    console.log(secondsTill30 / 1000 + ' seconds left');
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
