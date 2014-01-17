/// <reference path="../reference.ts" />

module modules {

  export var main: ng.IModule = angular.module('main', ['common.services', 'ngRoute'])
    .config(($routeProvider: ng.route.IRouteProvider) => {
      $routeProvider
        .when("/tasks", {controller: controllers.TaskListController, template: tasklist.html})
        .otherwise({redirectTo: "/tasks"})
    })
    .constant("version", "0.1.0")
    .controller(controllers)
    .directive(directives)

}
