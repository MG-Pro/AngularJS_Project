angular
  .module('myApp')
  .component('mainApp', {
    templateUrl: 'Components/MainComponent/MainComponent.html',
    controller: function ($scope) {
      this.name = "";
      this.isHide = true;

      this.data = [
        'Ivan',
        'Petr',
        'Sasha'
      ];
      this.change = () => {
        console.log('1');
        this.name = "Вася";
        this.isHide = !this.isHide;
      }

    }
  });

