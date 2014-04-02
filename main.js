
// Modules
var async  = require('async');
var axon   = require('axon');
var dnode  = require('dnode');
var hermod = require('hermod');

// Test function
var transform = function (s, cb) {
    cb(s.replace( /[aeiou]{2,}/, 'oo' ).toUpperCase() );
};

// Create servers
var axonServer = axon.socket('rep');

axonServer.connect( 8000 );

axonServer.on( 'message', transform );

var dnodeServer = dnode({
    transform : transform
});

dnodeServer.listen( 8001 );

var hermodServer = hermod.createServer( 8002 );

hermodServer.on( 'transform', transform );

// Create clients
var axonClient   = axon.socket('req');
var dnodeClient  = dnode.connect( 8001 );
var hermodClient = hermod.createClient( 8002 );

axonClient.bind( 8000 );

dnodeClient.on( 'remote', function( remote ){
	dnodeClient = remote;
});

// Benchmark time!
console.log( '\n Starting benchmark...\n' );

setTimeout( function(){

	var iterations = 10000;
	var axonTime   = 0;
	var dnodeTime  = 0;
	var hermodTime = 0;

	async.series([

		function( callback ){
			
			var start = Date.now();

			async.timesSeries( iterations, function( i, callback ){
				
				axonClient.send( 'beep', function(){
					callback();
				});

			}, function(){

				axonTime = Date.now() - start;

				console.log( ' axon   : ' + iterations + ' ops takes ' + axonTime + 'ms. ' + ( ( iterations * 1000 ) / axonTime ).toFixed( 3 ) + 'ops/s.' );

				callback();

			});

		},

		function( callback ){
			
			var start = Date.now();

			async.timesSeries( iterations, function( i, callback ){
				
				dnodeClient.transform( 'beep', function(){
					callback();
				});

			}, function(){

				dnodeTime = Date.now() - start;

				console.log( ' dnode  : ' + iterations + ' ops takes ' + dnodeTime + 'ms. ' + ( ( iterations * 1000 ) / dnodeTime ).toFixed( 3 ) + 'ops/s.' );

				callback();

			});

		},

		function( callback ){
			
			var start = Date.now();

			async.timesSeries( iterations, function( i, callback ){
				
				hermodClient.request( 'transform', 'beep', function(){
					callback();
				});

			}, function(){

				hermodTime = Date.now() - start;

				console.log( ' hermod : ' + iterations + ' ops takes ' + hermodTime + 'ms. ' + ( ( iterations * 1000 ) / hermodTime ).toFixed( 3 ) + 'ops/s.' );

				callback();
				
			});

		}

	], function(){
		
		console.log( '\n hermod is x' + ( axonTime  / hermodTime ).toFixed( 3 ) + ' times faster than axon' );
		console.log( ' hermod is x' + ( dnodeTime / hermodTime ).toFixed( 3 ) + ' times faster than dnode\n' );

		process.kill()

	});

}, 1000 );