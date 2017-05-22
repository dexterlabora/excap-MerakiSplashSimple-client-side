### excap-MerakiSplashSimple-client-side

# Cisco Meraki Captive Portal 


## Overview
### Click-through splash page using public HTML/CSS/JS to perform all login actions. 
This sample code demonstrates how a simple web pages with no server-side logic can be used to build a functional Meraki Captive Portal login.

A NodeJS server is provided with this example to simply host the public web files. If you prefer to use your own web server, such as Apache, simply copy the contents of the public folder into your web directory.

An action for handling the form will need to be adjusted to commit to a database or post to an API of your choice. This example will post to a `/form` URL, which this NodeJS server will simply print the contents to the console to demonstrate the variable passing.

## Instructions 
* Clone repository
* change into the directory
* `npm install`
* `node server.js`
* Navigate to website to confirm its running
* Point your Custom Splash URL in the Dashboard to your webserver address
* Add your server IP address or domain name to the Walled Garden with the Access Control page in the Meraki Dashboard.



