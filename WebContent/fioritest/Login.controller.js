sap.ui.controller("fioritest.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fioritest.Login
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fioritest.Login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fioritest.Login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fioritest.Login
*/
//	onExit: function() {
//
//	}

	onLogin:function(){
		
		var uname = this.getView().byId("i_username").getValue();
		var pswd = this.getView().byId("i_password").getValue();
		
		console.log(uname+" "+pswd);
		
		var finalData = {"email":uname,"password":pswd};
		//var array = jQuery.parseJSON(finalData);
		//var jsonData = JSON.parse(finalData);
		app.to(suiteview);
		/* $.ajax({
	            type: "POST",
	            url : "http://192.168.1.25:8080/rest/Auth",
	            data:finalData,
	            success: function(data,textStatus,jqXHR)
	            {
	             console.log("Success");
	           	 jQuery.sap.require('sap.m.MessageBox');
	      	     sap.m.MessageBox.success("Authenticated Successfully");
	      	     app.to(suiteview);
	            },
	            error: function () {
	        	
	        	 jQuery.sap.require('sap.m.MessageBox');
	      	     sap.m.MessageBox.error("Authentication Failed");
	      	    app.to(suiteview);
	      	  // dialog.close();
	        	
	       	 console.log("Failed");
				}
			});		*/
		},
		
		onsignUp:function(){		

			app.to("signup");
			
		}
});