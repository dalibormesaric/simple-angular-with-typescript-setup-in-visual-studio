/// <reference path="applicationmodule.ts" />
module myApp {
    class ApplicationService implements IApplicationService {
        constructor() {
            var self = this;
        }

        public getApplicationName(): string {
            return "My awesome application!";
        }
    }

    myApp.service("ApplicationService", [
        ApplicationService]);
}