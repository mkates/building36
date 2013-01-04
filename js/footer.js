$(document).ready(function() {
	var handler = $(".footer-block");
	var footcontainer = $("<div class='footer_container'>");
	var foot = $("<div class='footer container'>");
	var rowcentered = $("<div class='row centered'>");
	var content = $("<div class='row-fluid footer_content'>");
	
	handler.append(footcontainer);
	footcontainer.append(foot);
	foot.append(rowcentered);
	rowcentered.append(content);
	
	content.append('<div class="span3"><h4> HEADQUARTERS </h4><h5>77 Vassar Avenue</h5><h5>Boston, MA 02215 </h5><h5>732.324.2343</h5></div>');
	content.append('<div class="span3"><h4> SITEMAP </h4><ul>'+
					  '<li><a href="index.html">Solutions</a></li>'+
					  '<li><a href="installers.html">Installers</a></li>'+
					  '<li><a href="manufacturers.html">Manufacturers</a></li>'+
					  '<li><a href="about.html">About</a></li></ul></div>');
	content.append('<div class="span3">'+
					'<h4> CONNECT</h4>'+
						'<ul class="">'+
						  '<li><i class="icon-facebook"></i><a href="www.facebook.com/building36">Facebook</a></li>'+
						  '<li><i class="icon-linkedin"></i><a href="www.linkedin.com/building36">LinkedIn</a></li>'+
						  '<li><i class="icon-twitter"></i><a href="www.twitter.com/building36">Twitter</a></li>'+
						  '<li><i class="icon-envelope-alt"></i><a href="navbar-examples.html">Mail</a></li>'+
						'</ul>'+
				'</div>');
	content.append('<div class="span3">'+
					'<h4> MISSION</h4>'+
					'<h5> Building 36 enables your heating and cooling system to communicate with your service providerso you can blah blah blah</h5>'+
				'</div>');
		
	
	handler.append('<div class="page_logo">'+
						'<img src="../img/logo_gray.png" alt="Building 36" />'+
						'<h4> Building 36 Technologies. All Rights Reserved. </h4>'+
					'</div>');
	
});

