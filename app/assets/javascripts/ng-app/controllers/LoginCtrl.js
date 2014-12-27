angular.module('Grub')
    .controller('LoginCtrl', function ($scope) {
        
        var self = this;
      	self.change = function() {
      		self.username = 'changed';
      		self.password = 'password';
      	};
      	self.submit = function() {
      		console.log('User clicked submit with ',
      			self.user);
      	};
    });