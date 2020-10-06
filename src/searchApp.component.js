(function(){
'use strict';

angular.module('searchApp')
.directive('datasetView',DatasetView)
.directive('tabsView',TabsView);

function DatasetView(){
    var ddo = {
    template: `
        <div id = "tableDiv">
            <div id="datasetSearchBox">
                <angucomplete placeholder="Search Dataset" pause="100" selectedobject="searchCtrl.selectedDatasetObject" localdata="searchCtrl.datasets" searchfields="name" titlefield="name" minlength="1" inputclass="form-control form-control-small" matchclass="highlight" />
            </div>
            <button ng-disabled="searchCtrl.selectedDatasetObject===null;" ng-click="searchCtrl.selectedDataset=searchCtrl.selectedDatasetObject.originalObject.name">Select</button>
            <br><br>
            <div id="datasetTable">
                <table>
                    <tr>
                        <th>Datasets</th>
                    </tr>
                    <tr ng-repeat = "dataset in searchCtrl.datasets" ng-click="searchCtrl.selectedDataset=searchCtrl.datasets[$index].name;">
                        <td>{{$index+1}}. {{dataset.name}}</td>
                    </tr>
                </table><br>
                <span id = "spanIf" ng-if="searchCtrl.datasets.length===0">No datasets Available!</span>
            </div>

        </div>`
    };
    return ddo;
};

function TabsView(){
    var ddo = {
    template: `
        <div id="tabsDiv">

            <h3>Dataset selected : {{searchCtrl.selectedDataset}}<span ng-if="searchCtrl.selectedDataset===undefined">None (select by clicking on the dataset name)</span>
            <button ng-if="searchCtrl.selectedDataset!==undefined" ng-click="searchCtrl.selectedDataset=undefined">Reset</button></h3>

            <div id="tabTitles" ng-init="tabselector = 'searchTab'">
                <span class="tab" ng-click="tabselector = 'searchTab'" ng-class="{'activetab' : tabselector == 'searchTab'}">Search</span>
                <span class="tab" ng-click="tabselector = 'analyticsTab'" ng-class="{'activetab' : tabselector == 'analyticsTab'}">Analytics</span>
                <span class="tab" ng-click="tabselector = 'filesTab'" ng-class="{'activetab' : tabselector == 'filesTab'}">Files</span>
                <span class="tab" ng-click="tabselector = 'summaryTab'" ng-class="{'activetab' : tabselector == 'summaryTab'}">Graph</span>
            </div>

            <br>

            <div class="box">
                <div id = "searchTab" ng-if="tabselector == 'searchTab'">
                    <h2>Search by Keyword</h2>
                    Tag :
                    <div class="autoComBox">
                        <angucomplete placeholder="Search Tag" pause="100" selectedobject="searchCtrl.selectedTagObject" localdata="searchCtrl.tags" searchfields="name" titlefield="name" minlength="1" inputclass="form-control form-control-small" matchclass="highlight" />
                    </div>
                    Keyword : <input type="text" ng-model="searchCtrl.keywordToSearch" placeholder="Enter the keyword" required>
                    <button ng-disabled="searchCtrl.checkButton();" ng-click="searchCtrl.performSearch();">Search</button>
                    <br><br>
                    <span ng-if="searchCtrl.checkButton();">Please select a dataset, enter a tag and a keyword.</span>
                    <div ng-if="searchCtrl.searchPerformed" id="searchResult">
                        <div id="showId">
                            <table>
                                <tr ng-repeat="item in searchCtrl.searchResults" ng-click="searchCtrl.viewThisSearchFile($index)">
                                    <td>{{item._id}}</td>
                                </tr>
                            </table>
                        </div>
                        <div id="showSource">
                            File Selected : {{searchCtrl.viewSearchFileName}}
                            <br><br>
                            {{searchCtrl.viewSearchFile}}
                        </div>
                    </div>
                </div>


                <div id = "analyticsTab" ng-if="tabselector == 'analyticsTab'">
                    <h2>Dataset Analytics</h2>
                </div>


                <div id = "filesTab" ng-if="tabselector == 'filesTab'">
                    <h2>Files in the Dataset</h2>
                    <div id="fileView">
                        <div id="fileIdView">
                            <div id="fileSearchBox">
                                <angucomplete placeholder="Search File Name" pause="100" selectedobject="searchCtrl.selectedFileObject" localdata="searchCtrl.allFiles" searchfields="_id" titlefield="_id" minlength="1" inputclass="form-control form-control-small" matchclass="highlight" />
                            </div>
                            <button ng-disabled="searchCtrl.selectedFileObject===null" ng-click="searchCtrl.viewFileName = searchCtrl.selectedFileObject.title;
        searchCtrl.viewFile = searchCtrl.selectedFileObject.originalObject._source;">View</button>
                            <br><br>
                            <div id="fileIdTable">
                                <table>
                                    <tr ng-repeat="item in searchCtrl.allFiles" ng-click="searchCtrl.viewThisFile($index)">
                                        <td>{{item._id}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="fileContentView">
                            File Selected : {{searchCtrl.viewFileName}}<br><br>
                            {{searchCtrl.viewFile}}
                        </div>
                    </div>
                </div>


                <div id = "summaryTab" ng-if="tabselector == 'summaryTab'">
                    <h2>Dataset Summary</h2>
                </div>
            </div>
        </div>
`
    };
    return ddo;
};


})();