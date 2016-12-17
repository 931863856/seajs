define(function(require,exports,module){
   
	var util = require('./util');
	var $ = require('jquery');

	function changeBg(){
		$('#hello-seajs').css({
			'backgroundColor' : util.randomColor()
		});
	}

	changeBg()

	window.setInterval(function(){
		changeBg();
	},1500);


	String.prototype.breakword = String.prototype.breakword || function(){

	    var temp = [];
	    var rst ;
	    var a = this.split('');

	    for(var i = 0 ; i < a.length ; i++) {
	    	if(i != 0 && i%4 ==3){
	    		a[i] = a[i]+ " ";
	    		temp.push(a[i])
	    	}else{
	    		temp.push(a[i])
	    	}
	    }

	    return rst = temp.join('');

	} 

 	$('#ipt').keyup(function(){

 		  var value = $(this).val().split(' ');
 		  var new_val = value.join('');
 		 
          var v = new_val.breakword().trim(); 
          $(this).val(v);

     }); 
});
