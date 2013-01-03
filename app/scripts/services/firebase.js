'use strict';

EconomicsApp.factory('firebase', function() {
	// Service logic
	// ...
	var db = new Firebase('https://creative.firebaseio.com/stp_okonomi');

	var dbdata;

	// Public API here
	return {
    	get: function()
    	{
    		return db.once('value', function(data)
    		{
        		dbdata = data.val();
    		});
      	
      		return dbdata;
    	}
  	};
});
