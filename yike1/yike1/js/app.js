var yike=angular.module("Yike",["ngRoute","contrlModule"]);
//配置
yike.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.when("/today",{
        templateUrl:"./views/today.html",
        controller:"todayCtrl"
    }).when("/older",{
        templateUrl:"./views/older.html",
        controller:"olderCtrl"
    }).when("/author",{
        templateUrl:"./views/author.html",
        controller:"authorCtrl"
    }).when("/category",{
        templateUrl:"./views/category.html",
        controller:"categoryCtrl"
    }).when("/favourite",{
        templateUrl:"./views/favourite.html",
        controller:"favouriteCtrl"
    }).when("/settings",{
        templateUrl:"./views/settings.html",
        controller:"settingsCtrl"
    }).otherwise({
        redirectTo:"/today"
    })
}]);
yike.run(["$rootScope",function ($rootScope) {
    //获取hash值
    var hash=location.hash;
    console.log(hash);
    // if(hash==""){
    //     $rootScope.index=0;
    // }else{
    switch (hash){
        case "#/today":$rootScope.index=0;break;
        case "#/older":$rootScope.index=1;break;
        case "#/author":$rootScope.index=2;break;
        case "#/category":$rootScope.index=3;break;
        case "#/favourite":$rootScope.index=4;break;
        case "#/settings":$rootScope.index=5;break;
        default:$rootScope.index=0;
    }
    // }
    $rootScope.toggle=function (index) {
        $rootScope.index=index;
        $rootScope.collapsed=!$rootScope.collapsed;
        var dd = document.querySelector('.navs').querySelectorAll('dd');
        if($rootScope.collapsed) {
            for(var i=0; i<dd.length; i++) {
                dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                dd[i].style.transitionProperty = 'all';
                dd[i].style.transitionDelay = '0.2s';
                dd[i].style.transitionTimingFunction = 'ease-out';
                dd[i].style.transform = 'translate(0)';
            }
        } else {
            for(var i=dd.length - 1; i>=0; i--) {
                dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
                dd[i].style.transitionProperty = 'all';
                dd[i].style.transitionDelay = '';
                dd[i].style.transitionTimingFunction = 'ease-out';
                dd[i].style.transform = 'translate(-100%)';
            }
        }
    }
}]);