'use strict';
(function(){

class UsuariosCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

createUser(){
  this.user.active=1;
  console.log(this.user);

  this.usuariosService.save(this.user).$promise
  .then(response => {
    console.log('CREATE OK',response);
    this.$state.go('usuarios-list');
  })
  .catch(err => {
    console.log('ERROR',err);
    if(err.data == "DOC"){
      this.errors.doc = true;
    }
  });
}
angular.module('eventosSasApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent
  });

})();
