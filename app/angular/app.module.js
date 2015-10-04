var cropApp = angular.module('cropApp', ['ui.router']);

  app.directive("topFive", function(){
    return {
      restrict: "E",
      templateUrl: "topFive.html",
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      }, // ends function
      controllerAs: "panel"
    }; // ends return
  });// ends app.directive topFive