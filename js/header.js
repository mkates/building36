$(document).ready(function() {
	var handler = $(".header-block");
	var navbar = $("<div class='navbar'>");
	var navbarinner = $("<div class='navbar-inner'>");
	var container = $("<div class='container'>");
	
	navbarinner.append(container);
	navbar.append(navbarinner);
	handler.append(navbar);
	
	var collapse = $("<a class='btn btn-navbar' data-toggle='collapse' data-target='.nav-collapse'>");
	for (var x=0; x < 3; x++) {
		collapse.append('<span class="icon-bar"></span>');
	};
	container.append(collapse);
	container.append('<a class="brand" href="index.html"><img src="../img/logo_bordered.png" alt="Building 36"/></a>');
	var navcollapse = $("<div class='nav-collapse'>");
	container.append(navcollapse);
	var navpullright =  $("<ul class='nav pull-right'>");
	navcollapse.append(navpullright);
	navpullright.append('<li><a href="solutions.html">SOLUTIONS</a></li>');
	navpullright.append('<li><a href="manufacturers.html">MANUFACTURERS</a></li>');
	navpullright.append('<li><a href="installers.html">INSTALLERS</a></li>');
	navpullright.append('<li><a href="about.html">ABOUT</a></li>');
	navpullright.append('<li><a href="contact.html">CONTACT</a></li>');
	navpullright.append('<li><a href="login.html">LOGIN</a></li>');
	
});


// <div class="navbar">
// 		<div class="navbar-inner">
// 		    <div class="container">
// 		      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
// 		        <span class="icon-bar"></span>
// 		        <span class="icon-bar"></span>
// 		        <span class="icon-bar"></span>
// 		      </a>
// 		      <a class="brand" href="index.html"><img src="../img/logo_bordered.png" alt="Building 36"/></a>
// 		      <div class="nav-collapse">
// 		        <ul class="nav pull-right">
// 		          <li><a href="solutions.html">SOLUTIONS</a></li>
// 		          <li><a href="manufacturers.html">MANUFACTURERS</a></li>
// 		          <li><a href="installers.html">INSTALLERS</a></li>
// 		          <li><a href="about.html">ABOUT</a></li>
// 		          <li><a href="contact.html">CONTACT</a></li>
// 		        </ul>
// 		      </div><!-- /.nav-collapse -->
// 		    </div><!-- /.container -->
// 		</div><!-- /navbar-inner -->
// 	</div><!-- /navbar -->