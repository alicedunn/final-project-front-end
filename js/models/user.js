angular
.module('worldApp')
.factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  
  return $resource(API + '/users/:id', null, {
    'login': { method: "POST", url: API + '/login' },
    'register' : { method: "POST", url: API + "/register"},
    'query': { method: "GET", isArray: false },
    'update': { method: "PATCH" }
  });
}