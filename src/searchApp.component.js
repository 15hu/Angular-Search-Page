(function(){
'use strict';

angular.module('searchApp')
.directive('datasetView',DatasetView);

function DatasetView(){
var ddo = {
template: `<div id = "tableDiv">
                <table>
                    <tr>
                        <th>Datasets</th>
                    </tr>
                    <tr ng-repeat = "dataset in searchCtrl.datasets" ng-click="searchCtrl.selectedDataset=searchCtrl.datasets[$index];">
                        <td>{{$index+1}}. {{dataset}}</td>
                    </tr>
                </table><br>
                <span id = "spanIf" ng-if="searchCtrl.datasets.length===0">No datasets Available!</span>
           </div>`
};
return ddo;
};



})();