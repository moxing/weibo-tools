$(function() {
    $('.status-img').click(function() {
    	var pic1=$(this).attr('data-bmiddle-pic');
    	var pic2=$(this).attr('src');
    	$(this).attr('src',pic1);
    	$(this).attr('data-bmiddle-pic',pic2);
    	var d = $(this).parent('.thumbnail');
    	if(d.hasClass('span2')){
    		d.removeClass('span2');
    		d.addClass('span11');
    	}else{
    		d.removeClass('span11');
    		d.addClass('span2');
    	}    	
    });

    $('.add-pw, .add-p, .add-w').click(function(){
        if( $(this).parents('.ori-status').get(0)!=undefined ){
            var o = $(this).parents('.ori-status');
        }else{
            var o = $(this).parents('.status');
        }
        $.ajax({
          dataType: "json",
          url: "a.php",
          data: {
            'do' : 'addPdf',
            id   : o.attr('data-status')
          },
          success: function(data){
            console.log(data)
          }
        });
    })
});