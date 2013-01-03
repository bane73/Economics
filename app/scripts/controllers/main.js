'use strict';

EconomicsApp.controller('MainCtrl', function($scope)
{
	// $scope.lines = firebase.$get();

	// console.log(firebase.$get());

	$scope.$apply(function()
	{
		$scope.users = ["Are", "Erich", "Kenneth", "TC"];
	});

	$scope.lines = "";

	
		var db = new Firebase('https://creative.firebaseio.com/stp_okonomi');

	    db.on('value', function(data)
	    {
	    	$scope.$apply(function()
			{
	    		// console.log(_.toArray(data.val()).slice(1));
	        	$scope.lines = _.toArray(data.val()).slice(1);
	        });
	    });
	

	$scope.addLine = function()
    {
        var now;

        if($scope.Date == null || $scope.Date == "")
        {
            var d = new Date();
            now = d.getFullYear()+ '-' +((d.getMonth()+1)) + '-' + d.getDate();
            $scope.Date = now;
        }

        else
        {
            now = $scope.Date;
        }
        
        var obj = {"date":now, "name":$scope.Name, "amount":$scope.Amount};

        db.push(obj);

        // $scope.lines.push(obj);
        $scope.StpAmount = '';
    };

	$scope.total = function()
    {
        var total = 0;
        angular.forEach($scope.lines, function(line)
        {
            total += line.amount;
        });

        return total;
    };
});
