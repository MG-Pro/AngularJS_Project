angular.module('myApp')
  .controller('MainController', function ($scope, DataService) {
    $scope.list = [];
    $scope.headsList = [];
    $scope.data = {};

    DataService.getData()
      .then((resp) => {
        const data = resp.data.data;
        const list = [];
        data.rows.forEach((row) => {
          const listItem = {};
          row.forEach((item, i) => {
            if (data.metaData[i].name === 'BIRTHDATE') {
              const date = new Date(item);
              item = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            }
            listItem[data.metaData[i].name] = item;
          });
          list.push(listItem)
        });
        $scope.list = list;
        $scope.headsList = data.metaData;
      });

    $scope.remove = (remItem) => {
      const index = $scope.list.indexOf(item => item.CARD === remItem.CARD);
      $scope.list.splice(index, 1)
    };

    $scope.add = (form) => {
      $scope.list.push(form);
    };
  });
