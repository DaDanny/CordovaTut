var HomeView = function(adapter,template,listItemTemplate){
	this.initialize = function(){
		this.el = $('<div/>');
		this.el.on('keyup','.search-key',this.findByName);
	};

	this.render = function(){
		this.el.html(template());
		return this;
	};

	this.findByName = function(){
		adapter.findByName($('.search-key').val()).done(function(employees){
			$('.employee-list').html(listItemTemplate(employees));
		});
	};
	
	this.initialize();
}