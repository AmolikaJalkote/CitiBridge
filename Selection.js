var app = angular.module("StockManagement", ["ui.grid"]);
          var colDefs = [
{ name: 'Select', field: 'Select',cellTemplate: '<input type="checkbox" ng-click="gridOptions.editUser(\'{{row.entity.symbol}}\')">',width:80},
        
{name: 'symbol',displayName:'Symbol',width:95},             
{name: 'companyName',width:200},
{name: 'peRatio',displayName:'P/E',width:75},
{name:'marketCap',width:140},
{name:'latestPrice',displayName:'Price',width:100},
{name:'high',width:75},
{name:'low',width:75},
{name:'changePercent',width:180},
{name:'ytdChange',width:230}

              ];
            //Controller Part
            app.controller("StockController", function($scope, $http) {
	
       $scope.gridOptions = {
			onRegisterApi: function (gridApi) {
			$scope.gridApi = gridApi;
          $scope.editUser = function(symbol) {
        alert('It works!');
    };
	  
        },
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
     	columnDefs: colDefs,
		enableScrollBars: false,
		enableRowSelection: true,
		multiselect:true,
	//enableRowHeaderSelection: false
      }; 
              //Now load the data from server
                _refreshStockData();
              
                // var large=["AAPL","FB","MSFT","RACE","FTS","IT","HCP","RSG","RCL","TIF","UN","BAP","HDP","MRK","PRA"];
               var large=["AAPL","FB","MSFT","RACE"];
               var small=["DDD","ASIX","BIT","MUC","CRE","CIA","ETO","FGP","GME","GNL","IUR","IO","HPR","KYE","LNN","NRP"];
               var mid=["TDY","SNX","RRC","RXN","SNDR","SCI","OA","MSA","NEU","KFY","LII","HRI","JLL","AQN","CIG","DCP","EDR"];
                
                function _refreshStockData() {
                    $http({
                        method : 'GET',
                        url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=AAPL,FB,MSFT,RACE&types=quote'
                    }).then(function successCallback(response) {
                      $scope.stocks = response.data;
                      $scope.largeArr=[{}];//change to all array
                       
                      	for(var i=0;i<large.length;i++)
                        {
                        	$scope.largeArr[i]=$scope.stocks[large[i]].quote;
                        } 
                       $scope.gridOptions.data=$scope.largeArr; //setting all cap data in grid
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    }); 
              }//end of _refreshStockData
                
                function getSmallCap(){
                	 $http({
                         method : 'GET',
                         url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=DDD,ASIX,BIT,MUC,CRE,CIA,ETO,FGP,GME,GNL,TUR,IO,HPR,KYE,LNN,NRP&types=quote'
                     }).then(function successCallback(response) {
                       $scope.stocks = response.data;
                       $scope.smallArr=[{}];
                        
                       	for(var i=0;i<small.length;i++)
                         {
                         	$scope.smallArr[i]=$scope.stocks[small[i]].quote;
                         } 
                        $scope.gridOptions.data=$scope.smallArr; //setting all cap data in grid
                     }, function errorCallback(response) {
                         console.log(response.statusText);
                     });	
                }//end of smallArr
                
                function getMidCap(){
               	 $http({
                        method : 'GET',
                        url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=TDY,SNX,RRC,RXN,SNDR,SCI,OA,MSA,NEU,KFY,LII,HRI,JLL,AQN,CIG,DCP,EDR&types=quote'
                    }).then(function successCallback(response) {
                      $scope.stocks = response.data;
                      $scope.midArr=[{}];
                     
                      	for(var i=0;i<mid.length;i++)
                        {
                        	$scope.midArr[i]=$scope.stocks[mid[i]].quote;
                        } 
                       $scope.gridOptions.data=$scope.midArr; //setting all cap data in grid
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });	
               }//end of midCap
                
                function getLargeCap(){
                  	 $http({
                           method : 'GET',
                           url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=AAPL,FB,MSFT,RACE,FTS,IT,HCP,RSG,RCL,TIF,UN,BAP,HDP,MRK,PRA&types=quote'
                       }).then(function successCallback(response) {
                         $scope.stocks = response.data;
                         $scope.largeArr=[{}];
                         	for(var i=0;i<large.length;i++)
                           {
                           	$scope.largeArr[i]=$scope.stocks[large[i]].quote;
                           } 
                          $scope.gridOptions.data=$scope.largeArr; //setting all cap data in grid
                       }, function errorCallback(response) {
                           console.log(response.statusText);
                       });	
                  }//end of largeCap
                
                
                
                
			});