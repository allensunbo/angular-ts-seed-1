/// <reference path="../reference.ts" />

module modules {

    /**
     * Constructs the main module.
     *
     * Note: This refers to the required modules using their runtime name instead of a string
     * so that you can have a compile-time guarantee that there are no circular dependencies.
     *
     * In order to reference other modules this way, you must define your module references
     * in the reference.ts file, in a compatible order to the linearization of the module
     * dependency tree. The compiler will tell you if any of these references is not defined
     * at the moment that it is being referenced.
     */
    export var main:ng.IModule = angular.module('main', [
        modules.services.common.name,
        'ngRoute',
    ])
        .config(($routeProvider:ng.route.IRouteProvider) => {
            $routeProvider
                .when("/home", {template: home.html})
                .when("/tasks", {controller: controllers.TaskListController, template: tasklist.html})
                .when("/test", {controller: 'TestController', template: '<h2>{{message}}</h2>'})
                .when("/exam", {controller: com.example.controllers.ExampleController, template: '<h2>{{user|json}}</h2>'})
            // .otherwise({redirectTo: "/home"})
        })
        .constant("version", "0.1.0")
        //.controller(controllers)
        .controller('TestController', ['$scope', controllers.TestController])
        .directive(directives)

}
