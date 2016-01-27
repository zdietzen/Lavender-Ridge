angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', { url: '/home', templateUrl: '/templates/home.html', controller: 'homeController' })
        .state('about', { url: '/about', templateUrl: '/templates/about.html', controller: 'aboutController' })
        .state('services', { url: '/services', templateUrl: '/templates/services.html', controller: 'servicesController' })
        .state('contact', { url: '/contact', templateUrl: '/templates/contact.html', controller: 'contactController' })
});
