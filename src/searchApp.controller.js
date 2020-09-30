(function() {
'use strict';

angular.module('searchApp')
.controller('SearchController',SearchController);

function SearchController(){
    var searchCtrl = this;

    //dataset names or indexes names in elasticsearch
    searchCtrl.datasets = ["Dataset 1","Dataset 2","Dataset 3","Dataset 4","Dataset 5","Dataset 6","Dataset 7",
    "Dataset 8","Dataset 9","Dataset 10","Dataset 11","Dataset 12","Dataset 13","Dataset 14","Dataset 15","Dataset 16"];

    //dataset selected by user or index in which search is to be performed
    searchCtrl.selectedDataset = undefined;

    //Keyword entered by the user to search in the index 'searchCtrl.selectedDataset'
    searchCtrl.keywordToSearch = undefined;

    searchCtrl.checkButton = function(){
        if(searchCtrl.selectedDataset === undefined || searchCtrl.keywordToSearch === undefined){
            return true;
        }
        else{
            return false;
        }
    };
    //binding to make changes in page whether search is performed or not
    searchCtrl.searchPerformed = false;

    searchCtrl.performSearch = function(){
        searchCtrl.searchPerformed = true;
    };
    searchCtrl.searchResults=[
        {
            _id : "file 1",
            _source : "file 1 content"
        },
        {
            _id : "file 2",
            _source : "file 2 content"
        },
        {
            _id : "file 3",
            _source : "file 3 content"
        },
        {
            _id : "file 4",
            _source : "file 4 content"
        },
        {
            _id : "file 5",
            _source : "file 5 content"
        }
    ];
}
})();