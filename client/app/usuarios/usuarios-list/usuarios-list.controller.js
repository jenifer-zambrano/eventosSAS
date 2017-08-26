'use strict';
(function(){

class UsuariosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent
  });

})();
