 var app = angular.module("StockManagement", ["ui.grid"]);
          var colDefs = [

        
{name: 'symbol',displayName:'Symbol',width:95},             
{name: 'companyName',width:200},
{name: 'peRatio',displayName:'P/E',width:75},
{name:'marketCap',width:140},
{name:'latestPrice',displayName:'Price',width:100},
{name:'high',width:75},
{name:'low',width:75},
{name:'changePercent',width:180},
{name:'ytdChange',width:230},
{ name: 'Save', cellTemplate:'<button "height:20px;width:20px" class="btn primary" ng-click="grid.appScope.showMe(row.entity)">Save</button>',width:80,padding: 10,align:"center",cellClass: 'text-center'}

              ];
            //Controller Part
            app.controller("StockController", function($scope, $http) {
 	 $scope.someProp = 'abc',
 $scope.showMe = function(row){
                   alert(row.symbol+row.companyName);
                };
 
       $scope.gridOptions = {
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
        },
		rowHeight:42,
		enableColumnMenus:false,
		enableSorting:false,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
     	columnDefs: colDefs,
		enableScrollBars: false,
		multiselect:true,
		enableRowHeaderSelection: true
      };

$scope.gridOptionsSmall = {
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
        },
		rowHeight:42,
		enableColumnMenus:false,
		enableSorting:false,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
     	columnDefs: colDefs,
		enableScrollBars: false,
		multiselect:true,
		enableRowHeaderSelection: true
      };

$scope.gridOptionsMid = {
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi; 
        },
		rowHeight:42,
		enableColumnMenus:false,
		enableSorting:false,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
     	columnDefs: colDefs,
		enableScrollBars: false,
		multiselect:true,
		enableRowHeaderSelection: true
      };

$scope.gridOptionsLarge = {
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
        },
		rowHeight:42,
		enableColumnMenus:false,
		enableSorting:false,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
     	columnDefs: colDefs,
		enableScrollBars: false,
		multiselect:true,
		enableRowHeaderSelection: true
      };	  
              //Now load the data from server
                _refreshStockData();
                //getSmallCap();
				//getMidCap();
				//getLargeCap();
				
                 var large=["AAPL","FB","MSFT","RACE","FTS","IT","HCP","RSG","RCL","TIF","UN","BAP","HDP","MRK","PRA"];
               var all=["AAPL","FB","MSFT","RACE","DDD","ASIX","BIT","MUC","CIA"];
               var small=["DDD","ASIX","BIT","MUC","CIA","ETO","FGP","GME","GNL","TUR","IO","KYE","LNN","NRP"];
               var mid=["TDY","SNX","RRC","RXN","SNDR","SCI","OA","MSA","NEU","KFY","LII","HRI","JLL","AQN","CIG","DCP","EDR"];
                
                function _refreshStockData() {
                    $http({
                        method : 'GET',
                        url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=AAPL,FB,MSFT,RACE,DDD,ASIX,BIT,MUC,CIA&types=quote'
                    }).then(function successCallback(response) {
                      $scope.stocks = response.data;
                      $scope.largeArr=[{}];//change to all array
                      
                      	for(var i=0;i<all.length;i++)
                        {
                        	$scope.largeArr[i]=$scope.stocks[all[i]].quote;
                        } 
                       $scope.gridOptions.data=$scope.largeArr; //setting all cap data in grid
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    }); 
              }//end of _refreshStockData
                
                  $scope.getSmallCap=function(){
                	 $http({
                         method : 'GET',
                         url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=DDD,ASIX,BIT,MUC,CIA,ETO,FGP,GME,GNL,TUR,IO,KYE,LNN,NRP&types=quote'
                     }).then(function successCallback(response) {
                       $scope.stocks = response.data;
                       $scope.smallArr=[{}];
                       
                       	for(var i=0;i<small.length;i++)
                         {
						 $scope.smallArr[i]=$scope.stocks[small[i]].quote;
						 //console.log($scope.smallArr[i].symbol);
                         } 
                        $scope.gridOptionsSmall.data=$scope.smallArr; //setting all cap data in grid
                     }, function errorCallback(response) {
                         console.log(response.statusText);
                     });	
                }//end of smallArr
                
                 $scope.getMidCap=function(){
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
                       $scope.gridOptionsMid.data=$scope.midArr; //setting all cap data in grid
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });	
               }//end of midCap
                
                     $scope.getLargeCap=function(){
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
                          $scope.gridOptionsLarge.data=$scope.largeArr; //setting all cap data in grid
                       }, function errorCallback(response) {
                           console.log(response.statusText);
                       });	
                  }//end of largeCap
                
			});

function openCity(evt, stockCap) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(stockCap).style.display = "block";
    evt.currentTarget.className += " active";
}

