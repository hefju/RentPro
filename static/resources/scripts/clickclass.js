				$(function addclassstyle()
				{
				$('.content-box ul.content-box-tabs').on("click","li a", // When a tab is clicked...
				function() { 
					contentboxCilck(this);
				}
				);
				$('.content-box ul.content-box-tabs li a').on("click", // When a tab is clicked...
				function() { 
					contentboxCilck(this);		
				}
				);
			    //RemoveTable
				function RemoveClass1(data,data1)
				{
                    $(".content-box-content").find(data).remove();
					//data1.addClass('current');
				    $(data1).trigger("click");
                    //document.getElementById("#Tabletree2").click();
 
				}

				// LeftClick wrapper Arrow
				$("#sidebar-wrapper  li ul a").click(
				function()
				{
					$('#sidebar-wrapper .current').removeClass('current');
					$(this).addClass('current');
					$(this).parent().parent().prev().removeClass().addClass('nav-top-item current')
				})
					// LeftClick
				$('#sidebar-wrapper .nav-top-item').click(
				function(event)
				{
					$('#sidebar-wrapper .current').removeClass('current');
					$(this).removeClass().addClass('nav-top-item current');
				})
				
				function Cloasimg(Value)
				{
					var ClassName=$(Value).parent().attr('href');
					//Next Change Select Table1
					var Value=   $(Value).parent().parent().next('li').find('a');
					//RemoveTableChange
					$(Value).parent().parent().remove();
					//Next Change Select Table2
					var ChangeTableCurrent=$('.content-box-tabs').find("a").attr("class");
					//var ChangeTableCurrent=$(".content-box-tabs li a class:contains('current')")
					if (ChangeTableCurrent==undefined?false:ChangeTableCurrent!="default-tab"?true:false) 
					{
						return;
					}
					else
					{
						RemoveClass1(ClassName,Value);
						//Value.addClass('current');
					}
				}
				// Content box tabs Close And Change Right Table Click Current:
				$('.content-box-tabs img').on('click',
				function()
				{
					//RemoveTable href
					var ClassName=$(this).parent().attr('href');
					//Next Change Select Table1
					var Value=   $(this).parent().parent().next('li').find('a');
					//RemoveTableChange
					$(this).parent().parent().remove();
					//Next Change Select Table2
					var ChangeTableCurrent=$('.content-box-tabs').find("a").attr("class");
					//var ChangeTableCurrent=$(".content-box-tabs li a class:contains('current')")
					if (ChangeTableCurrent==undefined?false:ChangeTableCurrent!="default-tab"?true:false) 
					{
						return;
					}
					else
					{
						RemoveClass1(ClassName,Value);
						//Value.addClass('current');
					}
				}
				);
				
				// Content box tabs Close And Change Right Table Click Current:
				$('.content-box-tabs').on('click','img',
				function()
				{
					//RemoveTable
					var ClassName=$(this).parent().attr('href');
					//Next Change Select Table1
					var Value= $(this).parent().parent().next('li').find('a');
					//RemoveTableChange
					$(this).parent().parent().remove();
					//Next Change Select Table2
					var ChangeTableCurrent=$('.content-box-tabs').find("a").attr("class");
					//var ChangeTableCurrent=$(".content-box-tabs li a class:contains('current')")				
					if (ChangeTableCurrent==undefined?false:ChangeTableCurrent!="default-tab"?true:false)
					{
						return;
					}
					else
					{
						RemoveClass1(ClassName,Value);
						//Value.addClass('current');
					}
					}
				)

				// Content tabs Add and Begin Select:
				$("a.nav-top-item").parent().find("ul").find("a").click(	
				function () {
					var tablename=$(this).attr("hrefname");
					var Select=document.getElementById(tablename);
					// Judge Is Add Table
					if(Select==null?false:true)
					{

						//contentboxCilck('.'+tablename);
						//document.getElementById(tablename).click();
						$('.content-box ul.content-box-tabs li  #'+tablename+'').trigger("click");
						return;
					}
					else
					{
					$('.content-box ul.content-box-tabs')
					.append('<li><a href ="#L'+tablename+'" id="'+tablename+'">'+tablename+'<img src="resources/images/co.png" height="15px" wide="15px"></img></a></li>');       
					$('.content-box-content').append(' <div class="tab-content" id="L'+tablename+'">'+tablename+'</div>');
					$('.content-box ul.content-box-tabs li  #'+tablename+'').trigger("click");
					}
				});
				function contentboxCilck(Value)
				{
					var aa=$(Value).find('img');
					if(aa==0)
					{
						return;
					}
			    // change select left 
					var SUB=$(Value).attr('href');
					var Subb=SUB.substring(2,SUB.length);
					//var Sm= $('#main-nav li ul a').find(Subb);
					var SS=$('*[hrefname="'+Subb+'"]');
					if(SS.length!=0)
					{
						$('#sidebar-wrapper .current').removeClass('current');
						$(SS).parent().parent().prev().removeClass().addClass('nav-top-item current')
						$(SS).addClass('current');
					}
					$(Value).parent().siblings().find("a").removeClass('current'); // Remove "current" class from all tabs
					// $(this).parent().siblings().find("a").find("img").attr('style','display:none')); // img class display is none
					$(Value).addClass('current'); // Add class "current" to clicked tab
					var currentTab = $(Value).attr('href'); // Set variable "currentTab" to the value of href of clicked tab
					$('.tab-content').siblings().hide(); // Hide all content divs
					$(currentTab).show(); // Show the content div with the id equal to the id of clicked tab
				}
			}
			)

