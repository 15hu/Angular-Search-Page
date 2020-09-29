(function() {
'use strict';

angular.module('searchApp')
.controller('SearchController',SearchController);

function SearchController(){
    var searchCtrl = this;
    searchCtrl.x = "hello";
    searchCtrl.datasets = ["Dataset 1","Dataset 2","Dataset 3","Dataset 4","Dataset 5","Dataset 6","Dataset 7",
    "Dataset 8","Dataset 9","Dataset 10","Dataset 11","Dataset 12","Dataset 13","Dataset 14","Dataset 15","Dataset 16"];

    searchCtrl.selectedDataset = "";
}
})();