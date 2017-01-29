angular.module('starter.controllers.tab.stadium', [])

  // 场馆页面的控制器
  .controller('StadiumCtrl', ['$scope', 'stateGo', '$rootScope', 'getData', 'api', function ($scope, stateGo, $rootScope, getData, api) {

    $scope.$on("$ionicView.enter", function () {
      $rootScope.clearHistory();
    });

    $scope.toDetail = function (stadium_id) {
      stateGo.goToState("detail_stadium", {
        type: "stadium",
        id: stadium_id
      });
    };

    $scope.areaList = [
    "",
    "海珠区",
    "天河区",
    "荔湾区",
    "越秀区",
    "番禹区",
    "花都区",
    "萝岗区",
    "白云区",
    "南沙区",
    "黄埔区",
    "增城区",
    "从化区"
  ];
    $scope.areaName = "";

    $scope.typeList = [
    "",
    "篮球",
    "足球",
    "羽毛球",
    "网球",
    "台球",
    "乒乓球",
    "排球",
    "射箭",
    "滑雪",
    "攀登",
    "滑冰"
  ];
    $scope.typeName = "";

    $scope.priceList = [
    "",
    "0",
    "1~49",
    "50~149",
    "150~"
  ];
    $scope.price = "";

    $scope.stadiumList = [];

    $scope.getStaidumData = function () {
      getData.get(api.stadium_home)
        .then(function resolve(res) {
          console.log("res.data", res.data);
          $scope.stadiumList = res.data.resultData;
        }, function reject(err) {
          console.log("err", err);
        });
    };
    $scope.getStaidumData();

    //   $scope.stadiumList = [
    //     {
    //       name: "胜利运动场（万寿路店）",
    //       post: "img/tabletenis-star.png",
    //       trade: "乒乓球、羽毛球",
    //       opentime: "08:00 - 22:00",
    //       position: "海珠区",
    //       price: 9
    //   },
    //     {
    //       name: "广州市射击射箭运动管理中心",
    //       post: "img/shot-stadium.png",
    //       trade: "台球、射箭、射击",
    //       opentime: "08:00 - 19:00",
    //       position: "天河区",
    //       price: 99
    //   },
    //     {
    //       name: "杰冠真人CS野战基地",
    //       post: "img/cs-stadium.png",
    //       trade: "仿真枪机野战",
    //       opentime: "08:00 - 18:00",
    //       position: "海珠区",
    //       price: 299
    //   },
    //     {
    //       name: "大世界保龄球馆",
    //       post: "img/bowling-stadium.png",
    //       trade: "保龄球",
    //       opentime: "08:00 - 18:00",
    //       position: "海珠区",
    //       price: 199
    //   },
    //     {
    //       name: "冰河湾真冰溜冰场",
    //       post: "img/skip-stadium.png",
    //       trade: "溜冰",
    //       opentime: "08:00 - 22:00",
    //       position: "海珠区",
    //       price: 9
    //   },
    //     {
    //       name: "胜利运动场（万寿路店）",
    //       post: "img/tabletenis-star.png",
    //       trade: "乒乓球、羽毛球",
    //       opentime: "08:00 - 22:00",
    //       position: "海珠区",
    //       price: 9
    //   },
    //     {
    //       name: "广州市射击射箭运动管理中心",
    //       post: "img/shot-stadium.png",
    //       trade: "台球、射箭、射击",
    //       opentime: "08:00-19:00",
    //       position: "天河区",
    //       price: 99
    //   }
    // ];
}])

  .controller('DetailStadiumCtrl', ['$scope', '$stateParams', 'stateGo', 'getData', 'api', function ($scope, $stateParams, stateGo, getData, api) {

    $scope.viewTitle = "场馆详情";

    $scope.type = $stateParams.type;
    $scope.stadium_id = $stateParams.id;

    $scope.bookStadium = function (trade_id) {
      console.log("bookStadium");
      stateGo.goToState("detail_stadium_book-list", {
        type: $scope.type,
        id: $scope.stadium.id,
        trade_id: trade_id,
        equipmentList: $scope.stadium.equipmentList
      });
    };

    $scope.addStar = function () {
      // todo
    };

    $scope.addRecommend = function () {
      // todo
    };

    $scope.getStadiumInfo = function () {
      getData.post(api.stadium_detail, {
          id: $scope.stadium_id
        })
        .then(function resolve(res) {
          $scope.stadium = res.data.resultData;
        }, function reject(err) {
          console.log('err:', err);
        });
    };
    $scope.getStadiumInfo();

    $scope.stadium = {
      // id: 1,
      // name: '胜利运动场（万寿路店）',
      // post: 'img/stadium-post.png',
      // trade: '乒乓球，羽毛球',
      // opentime: '08:00 - 22:00',
      // area: '海珠区',
      // price: '9',
      // hostavatar: 'img/stadium-hostavatar.png',
      // totalscore: '4',
      // position: '广州市海珠区万寿素社街48号',
      // contact: '12345678910',
      // tradedetail: '{"tradeList":[{"id":1,"name":"乒乓球","feature":"3种球桌","price":9},{"id":2,"name":"羽毛球","feature":"朔胶地质，宽敞，干净","price":29}]}',
      // moreinfo: '免费提供无线WIFI+-+免费提供30个停车位+-+可租购用具',
      // equipmentList: '{"equipmentList":[{"id":1,"name":"乒乓球","data":[{"name":"大厅乒乓球","device":"双鱼座化工板质球桌","geology":"水泥地板","position":"运动场大厅","price":9,"remain":18}]},{"id":2,"name":"羽毛球","data":[{"name":"露天羽毛球","device":"尤尼吉斯网","geology":"水泥地板","position":"运动场大厅","price":29,"remain":8}]}]}'
      // "equipmentList":[{"name":"大厅乒乓球","device":"双鱼座化工板质球桌","geology":"水泥地板","position":"运动场大厅","price":9,"remain":18},{"name":"露天乒乓球","device":"双喜化工板质球桌","geology":"水泥地板","position":"露天运动广场","price":19,"remain":18},{"name":"混合乒乓球","device":"双鱼座化工板质球桌","geology":"塑料地板","position":"运动场大厅","price":9,"remain":18}]
      // ,{"name":"露天乒乓球","device":"双喜化工板质球桌","geology":"水泥地板","position":"露天运动广场","price":19,"remain":18},{"name":"混合乒乓球","device":"双鱼座化工板质球桌","geology":"塑料地板","position":"运动场大厅","price":9,"remain":18}
    };
  }])

  .controller('BooklistStadiumCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.type = $stateParams.type;
    $scope.id = $stateParams.id;
    $scope.equipmentListStr = $stateParams.equipmentList;
    $scope.trade_id = $stateParams.trade_id;
    $scope.equipmen_type = "";
    if ($scope.equipmentListStr !== null && $scope.equipmentListStr !== "") {
      $scope.equipment = JSON.parse($scope.equipmentListStr)
        .equipmentList;
    }
    for (var i = 0; i < $scope.equipment.length; i++) {
      if ($scope.equipment[i].id == $scope.trade_id) {
        $scope.equipmentList = $scope.equipment[i].data;
        $scope.equipmen_type = $scope.equipment[i].name;
      }
    }

    //   $scope.equipmentList = [
    //     {
    //       name: "大厅桌球",
    //       device: "双鱼座化工板质球桌",
    //       geology: "水泥地板",
    //       position: "运动场大厅",
    //       price: 9,
    //       remain: 18
    //   },
    //     {
    //       name: "大厅桌球",
    //       device: "双鱼座化工板质球桌",
    //       geology: "水泥地板",
    //       position: "运动场大厅",
    //       price: 19,
    //       remain: 30
    //   },
    //     {
    //       name: "大厅桌球",
    //       device: "双鱼座化工板质球桌",
    //       geology: "水泥地板",
    //       position: "运动场大厅",
    //       price: 59,
    //       remain: 10
    //   }
    // ];
}])

  .controller('BookselectStadiumCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'stateGo', function ($scope, $stateParams, $cordovaDialogs, stateGo) {
    $scope.type = $stateParams.type;
    $scope.id = $stateParams.id;

    $scope.selectinfo = {
      selectMount: 1,
      selectStartTime: "",
      selectEndTime: ""
    };

    $scope.insSelectMount = function () {
      $scope.selectinfo.selectMount = $scope.selectinfo.selectMount < 5 ? ++$scope.selectinfo.selectMount : 5;
    };

    $scope.decSelectMount = function () {
      $scope.selectinfo.selectMount = $scope.selectinfo.selectMount > 1 ? --$scope.selectinfo.selectMount : 1;
    };

    $scope.openNumberDialog = function () {
      $cordovaDialogs.prompt('输入预定的数量', '数量', ['确认', '取消'], $scope.selectinfo.selectMount)
        .then(function (result) {
          var input = result.input1;
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          var btnIndex = result.buttonIndex;
          alert("input: " + input);
          alert("btnIndex: " + btnIndex);
          var regexp = /[A-Za-z\.]/;
          if (btnIndex == 1 && !regexp.test(input) && Number(input) >= 1 && Number(input) <= 5) {
            $scope.selectinfo.selectMount = Number(input);
          } else {
            alert("数量必须在1-5");
          }
        });
    };

    $scope.submitSelectInfo = function () {
      stateGo.goToState("prepare-pay", {
        type: $scope.type,
        id: $scope.id,
        selectMount: $scope.selectinfo.selectMount,
        unitprice: 10
      });
    };
}]);