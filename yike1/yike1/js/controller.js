angular.module("contrlModule",[]).controller("navCtrl",["$scope",function ($scope) {
    $scope.navinfo=[
        {href:"#/today",icon:"icon-home",text:"今日一刻"},
        {href:"#/older",icon:"icon-file-empty",text:"往期内容"},
        {href:"#/author",icon:"icon-pencil",text:"热门作者"},
        {href:"#/category",icon:"icon-menu",text:"栏目浏览"},
        {href:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
        {href:"#/settings",icon:"icon-cog",text:"设置"}
    ]
}]).controller("todayCtrl",["$scope","$http","$filter",function ($scope,$http,$filter) {
    // console.log("111");
    $scope.data=new Date();
    var timer=$filter("date")($scope.data,"yyyy-MM-dd");
    $http({
        url:"./api/today.php",
        method:"get",
        params:{
            data:timer
        }
    }).success(function (info) {
        console.log(info);
        $scope.posts=info.posts;
    })
}]).controller("olderCtrl",["$scope","$http","$filter",function ($scope,$http,$filter) {
    // console.log("111");
    $scope.data=new Date();
    // console.log(data);
    var timer=$filter("date")($scope.data,"yyyy-MM-dd");
    $http({
        url:"./api/older.php",
        method:"get",
        params:{
            data:timer
        }
    }).success(function (info) {
        $scope.posts=[];
        // console.log(info);
        $scope.posts.push(info);
    })
}]).controller("authorCtrl",["$scope","$http",function ($scope,$http){
    $http({
        url:"./api/author.php",
        method:"get"
    }).success(function (info) {
        // console.log(info.authors);
        $scope.authors=info.authors;
    });
    $http({
        url:"./api/authorhot.php",
        method:"get"
    }).success(function (info) {
        // console.log(info);
        $scope.authorshot=info.authors;
    })
}]).controller("categoryCtrl",["$scope","$http",function ($scope,$http) {
    $http({
        url:"./api/category.php",
        method:"get"
    }).success(function (info) {
        // console.log(info)
        $scope.columns=info.columns;
    })
}]).controller("favouriteCtrl",["$scope","$http",function ($scope,$http) {
    $http({
        url:"./api/favourite.php",
        method:"get"
    }).success(function (info) {
        // console.log(info);
        // console.log(info.count);
        $scope.posts=info.posts;
        $scope.count=info.count;
    })
}]);