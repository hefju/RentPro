$(function addclassstyle()
{

	$("#sidebar-wrapper  li ul a").click(function()
	{
		$('#sidebar-wrapper .current').removeClass('current');
		$(this).addClass('current');
                $(this).parent().parent().prev().removeClass().addClass('nav-top-item current')
	})
        $('#sidebar-wrapper .nav-top-item').click(function(event)
        {
		$('#sidebar-wrapper .current').removeClass('current');
               $(this).removeClass().addClass('nav-top-item current');
        })

			   // Content box tabs Close:
		$('.content-box-tabs img').live("click",
		   function()
		   {
			   var IfOne=$(this).parent().parent();
			   $(this).parent().parent().remove();
		   }
		)
				// Content tabs Add:
		$("a.nav-top-item").parent().find("ul").find("a").click(	
			function () {
				$('.content-box ul.content-box-tabs')
				.append('<li><a href="#tab2">Table3<img src="resources/images/co.png" height="15px" wide="15px"></img></a></li>');       
		    return false;
			}
		);
})
