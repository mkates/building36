
	// Test whether the user has cookies enabled by setting a cookie
	//  and then trying to retrieve it back.  If a "true" argument is passed
	//          then this function attempts to test whether persistant cookies
	//          (i.e. non session cookies) are enabled.

	function testClientCookies() {
            
            var testPersistant = false;            
            if (arguments.length > 0) testPersistant = arguments[0];            
            if (testPersistant) {

                        // save a new cookies with an expiration date set to 5 seconds from now
                        var now = new Date();
                        var cookiedate = new Date(now.valueOf() + 1000*5);
                        document.cookie = "cookieTest=persist;expires=" + cookiedate.toGMTString();
            }

            else {
                        // save a session cookie (no expiration specified = lives for the
                        //          lifetime of the browser) so that we check for any kind of cookies
                        document.cookie = "cookieTest=session"
            }

            

            if ((document.cookie).indexOf("cookieTest") == -1) 
            {
                  // cookie not found; all cookies must be disabled
                  return false;
            }
            else 
            {
                   return true;
            }

	}  // testClientCookies

 

	// function of client-side check(s) that are made when the user tries to log in

	function doLoginTimeChecks() {

            // test if Session-cookies (at least) are enabled
            if (testClientCookies()) {

                        document.forms['loginForm'].cookieTest.value = '1';

            }
            
            // we cannot test if JavaScript is enabled (because the test itself would
            //          have to be written in JavaScript) but we can set a variable that will
            //          be looked at by login.asp when the user submits the form

            document.forms['loginForm'].JavaScriptTest.value = '1';


            var loginbox = document.getElementById('login');
            var chkremember = document.getElementById('rememberMe');
            if ((loginbox != null) &&  (chkremember  != null))
            { 
                    var theDate = new Date();                                   

                if (document.forms['loginForm'].rememberMe.checked == true)
                {                     
                     // set cookie expires 3 months later
                     var threeMonthsLater = new Date( theDate.getTime() + 7776000000 );  
                     var expiryDate = threeMonthsLater.toGMTString();
                     document.cookie = 'login=' + loginbox.value + '; expires=' + expiryDate;
                }                 

                else

                { 
                     var passDate  =  new Date( theDate.getTime() - 7776000000 );
                     var expiryDate2 =  passDate.toGMTString();
                     document.cookie = 'login=' + loginbox.value + '; expires=' + expiryDate2;                    
                }                              
            } 


            return true;

	}

     // Cookie reader
    function readCookie(name)
    {
       var cookieValue = "";
       var search = name + "=";
       if(document.cookie.length > 0)
       { 
          offset = document.cookie.indexOf(search);
          if (offset != -1)
          { 
             offset += search.length;
             end = document.cookie.indexOf(";", offset);
             if (end == -1) end = document.cookie.length;
             cookieValue = unescape(document.cookie.substring(offset, end))
           }
       }

       return cookieValue;
     }

     
     // Querystring reader
     function getQuerystring(key, default_)
     {
       if (default_==null) default_=""; 
       key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
       var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
       var qs = regex.exec(window.location.href);
       if(qs == null)
         return default_;
       else
         return qs[1];
      } 



	//  If you use "Remember Me" checkbox along with login / password, this section is needed.
	//  This function will be called 
	//

	function rememberMeClick() {
		if (document.forms['loginForm'].rememberMe.checked == true) {
			// first check if cookies are enabled at all so that we don't
			//	inaccurately claim that "only session cookies are enabled"
			if (!testClientCookies) {
				window.location = '/yourloginpagehere.xxx?m=cookies_off&browser=' + browserCode;
				return;
			}
			
			// check for non-session cookie (pass true as argument)
			if (!testClientCookies(true)) {
				alert('In order to take advantage of Alarm.com\'s "Remember My Login" feature, you must allow cookies to be stored on your computer.  Visit the Alarm.com FAQ for more information.');
				document.forms['loginForm'].rememberMe.checked = false;
			}
		}
	}
  
   
    //  If you use "Remember Me" checkbox along with login / password, this section is needed.
	//  This function will be called 
	//
   function LoadRememberedLoginName()
   {

      var login = ''
      login = readCookie('login')
    
	  if (login != '') 
	  {	   
	    var loginbox = document.getElementById('login')
	    if (loginbox != null) 
	    { 
	     loginbox.value = login;
	    } 
	    
	    var chkRemember = document.getElementById('rememberMe')
	    if (chkRemember != null)
	    {
	     chkRemember.checked = true; 
	    }
	}
   }
       

   //
   // Error message
   //  
   // !! You can customize your own error message here.
   //   

   function showAlarmLoginMessage()
   {          
     var Qm = getQuerystring("m");      
     if (Qm == null) return;
     
     var msg, errorReason;    
     msg = "";
     switch(Qm)
     {
        case "bad_permission":
          msg = "I'm sorry, you tried to reach a page or an object that you do not have permission to access. If you reached this page via a bookmark, please delete your bookmark, navigate to the page that you are trying to reach, and then re-bookmark the page. If you reached this page by manually typing in a URL, you may have entered an incorrect number or the number may have changed in our records. We encourage users to use the Alarm.com site links rather than typing in URLs for this reason."
          break; 
        case "cookies_off":
		  msg = "It appears that cookies are not enabled on your computer. Although Alarm.com does not store any personal information on your computer, your browser must have cookies enabled in order to maintain your secured identity while you are logged in." 
		  break;     
        case "logout":
          msg = "You have successfully logged out."
          break;          
        case "no_session":
		  msg = "I'm sorry, your session has automatically timed out as a security precaution - please log in again."
	      break; 		
       	case "scripting_off":
		  msg = "It appears that your browser's current security settings prevent JavaScript from working correctly.  Alarm.com uses JavaScript to add functionality to our web pages and make them easier to use."
		  break;	
		case "sensors_cmd_sent":
		  msg = "A request has been sent to your system to retrieve an up-to-date sensor list.  It may take up to 2-3 minutes for this process to be completed.  After a few moments, please try to log in again."
		  break;	
		case "web_error":
		  msg = "I'm sorry, an unexpected error occurred while processing the page you requested. As a security precaution you have been automatically logged out.  If the problem persists after you log back into the site, please contact us for help in resolving this problem."
		  break;
		case "login_fail":
		  	errorReason = getQuerystring("r")										
			if (errorReason == "lockout")
			{ 
			  msg = "As a security precaution your account has been locked out due to too many incorrect password attempts.  To unlock your account, please request a new password by filling out the 'Forgot your password' form <A href='https://www.alarm.com/forgot_logininfo.asp'>here."
			}			
			else if (errorReason == "terminated") 
			{
              msg = "Your account has been terminated.  If you believe this to be in error, or if you would like to re-activate your account, please contact us."
			}
			else if (errorReason == "no_panel")
			{	
		      msg = "Your control panel has not communicated with Alarm.com. Please make sure your control panel is powered on then try again. If you are still having trouble, please contact us."
			}
			else if (errorReason == "error")						
			{
			  msg = "We're sorry, your account is currently unavailable. A message has automatically been sent to Technical Support to address this issue. We will contact you when the issue has been resolved. " 
            }
            else if (errorReason == "custom")
            {
			  msg =  getQuerystring("cm")
			}  
			else if (errorReason == "no_match")
			{
			  msg = "I'm sorry, the login and/or password you entered were not correct. If you have forgotten your login or password, please contact us."
			}		 
		  break;	  	  
        default:         
          break;   
      }    
     
      var divMsg = document.getElementById("divAlarmMessage");
      if (divMsg != null)
      {
           divMsg.innerHTML = msg
           console.log('here');
      }    
     
   }
