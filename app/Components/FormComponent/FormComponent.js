angular
  .module('myApp')
  .component('formApp', {
    templateUrl: 'Components/FormComponent/FormComponent.html',
    controller: function ($scope, $timeout) {
      var self = this;

      self.$postLink = () => {
        self.head = $scope.form.$name;
        //if ($scope.form.pan.$isEmpty($scope.pan)) {
        //  return true;
        //}
      };



      self.submit = () => {
        console.log($scope);
      };

      self.inputPan = () => {
        var maxlength = 19;

        var number = $scope.pan.replace(/\D/g, "").substr(0, maxlength);

        var panElem = $scope.form.pan.$$element[0];
        var curPos = panElem.selectionEnd;
        $scope.pan = number.replace(/(.{4})/g, '$1 ').trim();

        if (number.split('').length >= 16) {
          if (self.luhn(number)) {
            $scope.form.pan.$setValidity('pan', true);
          } else {
            $scope.form.pan.$setValidity('pan', false);
          }
        }

        panElem.selectionEnd = curPos;
      };

      self.luhn = function (num) {
        num = (num + '').replace(/\D+/g, '').split('').reverse();
        if (!num.length)
          return false;
        var total = 0, i;
        for (i = 0; i < num.length; i++) {
          num[i] = parseInt(num[i]);
          total += i % 2 ? 2 * num[i] - (num[i] > 4 ? 9 : 0) : num[i];
        }
        var res = (total % 10) === 0;
        console.log(res);
        return res;
      };

      $scope.$watch('pan', function (val, oldVal) {
        if (val) {
          self.inputPan();
        }
      })
    }
  });
