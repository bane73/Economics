// 'use strict';

// EconomicsApp.factory('firebase', function($rootScope)
// {
// 	// Service logic
// 	// ...

	

// 	var db = new Firebase('https://creative.firebaseio.com/stp_okonomi');

// 	var send = function(dbdata)
// 	{
// 		lines = dbdata;
// 		$rootScope.$apply();
// 	}
	
// 	var get = function()
// 	{
// 		db.once('value', function(data)
// 		{
// 			send(_.toArray(data.val()).slice(1));
// 		});
// 	}

// 	return {
//     	$get: get
//   	};
// });