Grub
  .controller('LoginCtrl', function ($scope) {
        
        var self = this;
      	self.submit = function() {
      		console.log('User clicked submit with ',
      			self.user);
      	};

      	self.tab = 1;
       	self.setTab = function(selectedTab){
            self.tab = selectedTab;
        };
       	self.isSet = function(checkTab){
          return this.tab === checkTab;
        };
    });


        
