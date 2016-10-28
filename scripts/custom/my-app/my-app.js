var myApp;
(function (myApp_1) {
    myApp_1.myApp = angular.module('myApp', []);
})(myApp || (myApp = {}));
/// <reference path="applicationmodule.ts" />
var myApp;
(function (myApp) {
    var ApplicationService = (function () {
        function ApplicationService() {
            var self = this;
        }
        ApplicationService.prototype.getApplicationName = function () {
            return "My awesome application!";
        };
        return ApplicationService;
    }());
    myApp.myApp.service("ApplicationService", [
        ApplicationService]);
})(myApp || (myApp = {}));
/// <reference path="applicationservice.ts" />
var myApp;
(function (myApp) {
    var ApplicationController = (function () {
        function ApplicationController(applicationService) {
            this.applicationService = applicationService;
            var self = this;
        }
        ApplicationController.prototype.getApplicationName = function () {
            var self = this;
            return self.applicationService.getApplicationName();
        };
        return ApplicationController;
    }());
    myApp.myApp.controller("ApplicationController", [
        "ApplicationService",
        ApplicationController]);
})(myApp || (myApp = {}));
//# sourceMappingURL=my-app.js.map