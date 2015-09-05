			$(function addclassstyle()
			{
				/*$('.content-box-content').width().Change(function(event)
				{
					var jsss=event;
				})*/
				$('#Clickcss').on("click",function(event)
				{
					var  marginleft=$('#sidebar').css('margin-left');
					if(marginleft=="-225px")
						{
							//$('*[name="tabtable"]').css("width","100%");
							$("#sidebar").css({"margin-left":"0px","transition":"3s margin"});
							$('#joacims-menu').html("<</br><");
							$(".content-box").css({"margin-left":"-0px","transition":"3s margin"});
						}
					else
					{
						//$('*[name="tabtable"]').css("width","100%");
						$("#sidebar").css({"margin-left":"-225px","transition":"3s margin"});
						$('#joacims-menu').html("></br>>");
						$(".content-box").css({"margin-left":"-225px","transition":"3s margin"});
					}
				});

				$('.content-box ul.content-box-tabs').on("click","li a", // When a tab is clicked...
				function(event) { 
					contentboxCilck(this);
				}
				);
				$('.content-box ul.content-box-tabs li a').on("click", // When a tab is clicked...
				function(event) { 
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
					//$('#sidebar-wrapper .current').removeClass('current');
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
				
				
				function Closeimg(Value)
				{
					var ClassName=$(Value).parent().attr('hrefjump');
					//Next Change Select Table1
					var Value = $(Value).parent().parent().next('li').find('a');
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
					event.stopPropagation();    //冒泡阻止  event.cancelBubble=true;
				}
				

				// Content tabs Add and Begin Select:
				$("a.nav-top-item").parent().find("ul").find("a").click(	
				function () {

					AddContent();
					var tablename=$(this).attr("hrefname");
					var iframename=$(this).attr("iframeName");
					var Select=document.getElementById(tablename);
					// Judge Is Add Table
					if(Select==null?false:true)
					{
						//contentboxCilck('.'+tablename);
						//document.getElementById(tablename).click();
						$('#'+tablename+'').trigger("click");
						return;
					}
					else
					{
						$('.content-box ul.content-box-tabs')
						.append('<li><a href="#" hrefjump ="#L'+tablename+'" id="'+tablename+'">'+tablename+'<img src="resources/images/co.png" height="15px" wide="15px"></img></a></li>');       
						$('.content-box-content').append(' <div name="tabtable"  id="L'+tablename+'"><iframe src="'+iframename+'.html" width="100%" height="100%" scrolling="auto"  frameBorder="0"></iframe></div>');
						$('#L'+tablename).addClass("tab-content");
						$('#'+tablename).addClass('content-header');
						$('#'+tablename+'').trigger("click");
					}
				});

				function contentboxCilck(Value)
				{				
			        // change select left 
					var SUB=$(Value).attr('hrefjump');
					var Subb=SUB.substring(2,SUB.length);
					//var Sm= $('#main-nav li ul a').find(Subb);
					var SS=$('*[hrefname="'+Subb+'"]');
					//判断左边导航是否选中
					if(SS.length!=0)
					{
						$('#sidebar-wrapper .current').removeClass('current');
						$(SS).parent().parent().prev().removeClass().addClass('nav-top-item current')
						$(SS).addClass('current');
					}
					$(Value).parent().siblings().find("a").removeClass('current'); // Remove "current" class from all tabs
					// $(this).parent().siblings().find("a").find("img").attr('style','display:none')); // img class display is none
					$(Value).addClass('current'); // Add class "current" to clicked tab
					var currentTab = $(Value).attr('hrefjump'); // Set variable "currentTab" to the value of href of clicked tab
					$('.tab-content').siblings().hide(); // Hide all content divs
					$(currentTab).show(); // Show the content div with the id equal to the id of clicked tab
				}

				function AddCloseimg(value)
				{
					//RemoveTable
					var ClassName=$(value).parent().attr('hrefjump');
					//Next Change Select Table1
					var Value= $(value).parent().parent().next('li').find('a');
					//RemoveTableChange 删除tab和table
					$(value).parent().parent().remove();
					$(ClassName).remove();
					//Next Change Select Table2 下个选中
					var ChangeTableCurrent=$('.content-box-tabs').find("a").attr("class");
					//var ChangeTableCurrent=$(".content-box-tabs li a class:contains('current')")				
					if (ChangeTableCurrent==undefined?false:ChangeTableCurrent=="default-tab"?false:ChangeTableCurrent=="content-header"?false:true)
					{
						return;
					}
					else
					{
						RemoveClass1(ClassName,Value);
						//Value.addClass('current');
					}
					if($('.content-box-tabs a').length==0)
					{
						$('.content-box').remove();
					}
					event.stopPropagation();    //冒泡阻止  event.cancelBubble=true;
				}

				function AddContent()
				{
                    if($('.content-box').length==0)
                    {
                        $('#main-content').append(' <div class="content-box"></div>');
                        $('.content-box').append('<div class="content-box-header"></div><div class="content-box-content"></div>');

                        $('.content-box-header').append('<h3>主界面</h3>');
                        $('.content-box-header').append('  <ul class="content-box-tabs"></div>');
											
						$('.content-box ul.content-box-tabs').on("click","li a", // When a tab is clicked...
						function(event) { 
							contentboxCilck(this);
						}
						);
						$('.content-box ul.content-box-tabs li a').on("click", // When a tab is clicked...
						function(event) { 
							contentboxCilck(this);		
						}
						);
						// Content box tabs Close And Change Right Table Click Current:
						 $('.content-box ul.content-box-tabs img').on('click',
						function(event)
						{
							AddCloseimg(this);
							event.stopPropagation();  
						}
						);
						
						// Content box tabs Close And Change Right Table Click Current:
						
						 $('.content-box ul.content-box-tabs').on('click','img',
						function(event)
						{
							AddCloseimg(this);
							event.stopPropagation();  
						})
                    }
				}
			}
			)