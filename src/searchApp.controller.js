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

    searchCtrl.selectedTagObject = null;

    searchCtrl.checkButton = function(){
        if(searchCtrl.selectedDataset === undefined || searchCtrl.keywordToSearch === undefined || searchCtrl.selectedTagObject === null){
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

    searchCtrl.viewSearchFile = "Please Select a file.";
    searchCtrl.viewThisSearchFile = function(index){
        searchCtrl.viewSearchFile = searchCtrl.searchResults[index]._source;
    }


    this.tags = [
                {name: 'tag1', code: '1'},
                {name: 'tag2', code: '2'},
                {name: 'tag3', code: '3'},
                {name: 'tag4', code: '4'},
                {name: 'tag5', code: '5'},
                {name: 'tag6', code: '6'},
                {name: 'tag7', code: '7'},
                {name: 'tag8', code: '8'},
                {name: 'tag9', code: '9'},
                {name: 'tag10', code: '10'},
                {name: 'tag11', code: '11'},
                {name: 'tag12', code: '12'},
                {name: 'tag13', code: '13'},
                {name: 'tag14', code: '14'},
                {name: 'tag15', code: '15'}];
}
})();