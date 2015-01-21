
/**
 * Module dependencies.
 */
/*
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var file = require('')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/
var fs = require('fs');
var args = process.argv[2];
var maps = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19,
    'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
};
var Node = function(val) {
    this.word = val;
    this.children = [];
};
Node.prototype.sumWord = function(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i ++) {
        var letter = val[i];
        sum += maps[letter];
    }
    this.sum = sum;
    return sum;
};
var Tree = function() {
    this.head = new Node();
};
Tree.prototype.addChildren = function(val) {
    var headNode = this.head, idx;
    for (var i = 0; i < val.length; i ++) {
        idx = maps[val[i]] - 1;
        if (!headNode.children[idx]) {

            headNode.children[idx] = new Node();
        }
        headNode = headNode.children[idx];
    }
    headNode.word = val;
};
Tree.prototype.traverseDepth = function() {
};
fs.readFile(args, function (err, data) {
    if (err) throw err;
    var dicts = data.toString().split(',');
    var trie = new Tree();
    for (var i = 0; i < 1; i ++ ) {
        var word = dicts[i].slice(1, -1);
        trie.addChildren(word);
    }
    console.log(JSON.stringify(trie));

    // console.log(data.toString(), 'test');
})
