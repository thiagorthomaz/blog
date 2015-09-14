<!DOCTYPE html>
<html lang="en" ng-app="blogApp">
  <head>
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
    
    <meta charset="UTF-8">
    <title>Thiago Thomaz</title>
  </head>
  <body>
    
    <header class="navbar navbar-static-top">
      <div ng-include src="'partials/menu.html'"></div>
    </header>

    <div ng-view>
    </div>
    
    <script src="/bower_components/angular/angular.min.js"></script>
    <script src="/bower_components/angular-route/angular-route.min.js"></script>
    <script src="/bower_components/angular-resource/angular-resource.min.js"></script>
    <script src="/bower_components/angular-cookies/angular-cookies.min.js"></script>
    
    <script src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    
    <script src="js/app.js"></script>
    <script src="js/controller.js"></script>

  </body>
</html>
