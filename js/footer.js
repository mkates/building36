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
	
	content.append('<div class="span3"><h4> HEADQUARTERS </h4><h5>35 Highland Circle</h5><h5>Needham, MA 02494 </h5></div>');
	content.append('<div class="span3"><h4> SITEMAP </h4><ul>'+
					  '<li><a href="solutions.html">Solutions</a></li>'+
					  '<li><a href="installers.html">Installers</a></li>'+
					  '<li><a href="manufacturers.html">Manufacturers</a></li>'+
					  '<li><a href="about.html">About</a></li></ul></div>');
	content.append('<div class="span3">'+
					'<h4> CONNECT</h4>'+
						'<ul class="">'+
						  '<li><i class="icon-facebook"></i><a href="http://www.facebook.com/building36">Facebook</a></li>'+
						  '<li><i class="icon-linkedin"></i><a href="http://www.linkedin.com/company/building-36-technologies">LinkedIn</a></li>'+
						  '<li><i class="icon-envelope-alt"></i><a href="contact.html">Mail</a></li>'+
						'</ul>'+
				'</div>');
	content.append('<div class="span3">'+
					'<h4> MISSION</h4>'+
					'<h5> We provide homeowners a simple and elegant way to control their home. We connect homeowners and installers to better maintain the systems in a home ensuring maximum performance.</h5>'+
				'</div>');
		
	
	handler.append('<div class="page_logo">'+
						'<img src="../img/logo_new.png" alt="Building 36" />'+
						'<h4> Building 36 Technologies. All Rights Reserved. </h4>'+
					'</div>');
	
});

