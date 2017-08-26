'use strict';

function usuariosService($resource,API){
    return $resource(API + '/api/usuarios/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      },
      get:{
        method:'GET'
      }
    });
}

usuariosService.$inject = ['$resource','API'];
angular.module('eventosSasApp')
  .factory('usuariosService',usuariosService);
