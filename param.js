// @ts-check
function grab (param) {
  var index = this.process.argv.indexOf(param);
  return (index === -1) ? null : this.process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
  console.log('Enter greeting and user name');
} else {
  console.log(`Welcome to ${user}, ${greeting}`);
}
