var menuIsOpen = false;
function OpenCloseResponsiveMenu() 
{
	if (!menuIsOpen)
	{    
		$('.responsive-menu-side-navigation').css("width","50%");
		$('.responsive-menu-icon').css("marginLeft","55px");
		$('.logo-image').css("display","none");
		menuIsOpen = true;
	}
	else
	{
		$('.responsive-menu-side-navigation').css("width","0%");
		$('.responsive-menu-icon').css("marginLeft","-25px");
		$('.logo-image').css("display","inherit");
		menuIsOpen = false;
	}	
}

