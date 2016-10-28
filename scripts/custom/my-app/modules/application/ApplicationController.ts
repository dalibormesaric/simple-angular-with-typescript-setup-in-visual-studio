/// <reference path="applicationservice.ts" />
module myApp {
    class ApplicationController {

        constructor(
            private applicationService: IApplicationService
        ) {
            var self = this;
        }

        private getApplicationName(): string {
            var self = this;
            return self.applicationService.getApplicationName();
        }
    }

    myApp.controller("ApplicationController", [
        "ApplicationService",
        ApplicationController]);
}