"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var navbar_component_1 = require('./navbar.component');
var toolbar_component_1 = require('./toolbar.component');
var home_component_1 = require('../../home/components/home.component');
var about_component_1 = require('../../about/components/about.component');
var name_list_service_1 = require('../../shared/services/name-list.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [name_list_service_1.NameListService],
            moduleId: module.id,
            templateUrl: './app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/about', name: 'About', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCwrQkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSxnQ0FBNkIsd0NBQXdDLENBQUMsQ0FBQTtBQUN0RSxrQ0FBOEIseUNBQXlDLENBQUMsQ0FBQTtBQWF4RTtJQUFBO0lBQTJCLENBQUM7SUFYNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsbUNBQWUsQ0FBQztZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixDQUFDO1NBQ25FLENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFPLElBQUksRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFFLDhCQUFhLEVBQUc7WUFDNUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7U0FDN0QsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vaG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2Fib3V0L2NvbXBvbmVudHMvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7TmFtZUxpc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCAgICAgIG5hbWU6ICdIb21lJywgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCAgfSxcbiAgeyBwYXRoOiAnL2Fib3V0JywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxuIl19
