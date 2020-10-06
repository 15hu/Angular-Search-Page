(function() {
'use strict';

angular.module('searchApp')
.controller('SearchController',SearchController);

function SearchController(){
    var searchCtrl = this;

    //dataset names or indexes names in elasticsearch
searchCtrl.datasets = [
                {name: 'dataset 1', code: '1'},
                {name: 'dataset 2', code: '2'},
                {name: 'dataset 3', code: '3'},
                {name: 'dataset 4', code: '4'},
                {name: 'dataset 5', code: '5'},
                {name: 'dataset 6', code: '6'},
                {name: 'dataset 7', code: '7'},
                {name: 'dataset 8', code: '8'},
                {name: 'dataset 9', code: '9'},
                {name: 'dataset 10', code: '10'},
                {name: 'dataset 11', code: '11'},
                {name: 'dataset 12', code: '12'},
                {name: 'dataset 13', code: '13'},
                {name: 'dataset 14', code: '14'},
                {name: 'dataset 15', code: '15'}];

    //dataset selected by user or index in which search is to be performed
    searchCtrl.selectedDataset = undefined;   //equal to searchCtrl.selectedDatasetObject.originalObject.name
    searchCtrl.selectedDatasetObject = null;  //returned by angucomplete directory

    //Keyword entered by the user to search in the index 'searchCtrl.selectedDataset'
    searchCtrl.keywordToSearch = undefined;

    searchCtrl.tags = [
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

    //tag selected by the user
    searchCtrl.selectedTag = undefined;     //equal to searchCtrl.selectedTagObject.originalObject.name
    searchCtrl.selectedTagObject = null;    //returned by angucomplete directory

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
    searchCtrl.allFiles=[
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
            _id : "file 6",
            _source : "file 6 content"
        },
        {
            _id : "file 7",
            _source : "file 7 content"
        },
        {
            _id : "file 8",
            _source : "file 8 content"
        },
        {
            _id : "file 9",
            _source : "file 9 content"
        },
        {
            _id : "file 10",
            _source : "file 10 content"
        },
        {
            _id : "file 11",
            _source : "file 11 content"
        },
        {
            _id : "file 12",
            _source : "file 12 content"
        },
        {
            _id : "file 13",
            _source : "file 13 content"
        }
    ];

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
            }];

    searchCtrl.viewSearchFileName = "None";
    searchCtrl.viewSearchFile = "Please Select a file.";
    searchCtrl.viewThisSearchFile = function(index){
        searchCtrl.viewSearchFileName = searchCtrl.searchResults[index]._id;
        searchCtrl.viewSearchFile = searchCtrl.searchResults[index]._source;
    }
    searchCtrl.viewFileName = "None."
    searchCtrl.viewFile = "Please select a file.";
    searchCtrl.viewThisFile = function(index){
        searchCtrl.viewFileName = searchCtrl.allFiles[index]._id;
        searchCtrl.viewFile = searchCtrl.allFiles[index]._source;
    }

    searchCtrl.selectedFile = undefined;      //equal to searchCtrl.selectedFileObject.originalObject.name
    searchCtrl.selectedFileObject = null;     //returned by angucomplete directory

}
})();