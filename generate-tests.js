// Generates missing output source and AST files for the test cases
// IMPORTANT: Always verify the generated files when using this!

var fs = require('fs');
var path = require('path');
var parse = require('./').parse;

var casesDir = path.join(__dirname, 'test', 'cases');
var cases = fs.readdirSync(casesDir)
    .map(function(f) { return path.join(casesDir, f); });

cases.forEach(function(dir) {
    var inputFile = path.join(dir, 'input.css');
    if (!fs.existsSync(inputFile))
        throw new Error('Missing input file ' + inputFile);

    var input = fs.readFileSync(inputFile, 'utf8');
    var parsed;
    try {
        parsed = parse(input, { source: 'input.css' });
    } catch(e) {
        console.log('Failed to parse', inputFile);
        throw e;
    }
});
