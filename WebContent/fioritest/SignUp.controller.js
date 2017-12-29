sap.ui.controller("fioritest.SignUp", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fioritest.SignUp
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fioritest.SignUp
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fioritest.SignUp
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fioritest.SignUp
*/
//	onExit: function() {
//
//	}
	onSignUp:function(){
		
		var fname = this.getView().byId("Name1IP").getValue();
		var lname = this.getView().byId("Name2IP").getValue();
		var orgid = this.getView().byId("CompanyID").getValue();
		var size = this.getView().byId("CompanySizeIP1").getValue();
		var email = this.getView().byId("CompanyEmailIP").getValue();
		var pswd = this.getView().byId("PasswordIP").getValue();
		 var URL = "http://localhost:8080/rest/Auth/SignUp";
		 
		 var finalData = {"fname":fname,"lname":lname,"csize":size,"email":email};
		 $.ajax({
	            type: "POST",
	            url : URL,
	            headers: {
	                "Access-Control-Allow-Origin":"*"
	              },
	            	//"http://localhost:8080/rest/Auth/Test?firstname=Aravind&orgid=3&lastname=Kaitha&comp=23&email=ara@stravis.com",
	           	data:finalData,
	           	crossDomain: true,
	            success: function(data,textStatus,jqXHR)
	            {
	             console.log("Success");
	           	 jQuery.sap.require('sap.m.MessageBox');
	      	 //    sap.m.MessageBox.success("Signed Up Successfully");
	            },
	            error: function () {	        	
	        	 jQuery.sap.require('sap.m.MessageBox');
	      	     sap.m.MessageBox.error("Sign Up Failed");
	        	
	       	 console.log("Failed");
				}
			});		
		 
		 var Data = {"email":email,"pswd":pswd,"orgid":orgid};
		 $.ajax({
	            type: "POST",
	            url : "http://localhost:8080/rest/Auth",
	            headers: {
	                "Access-Control-Allow-Origin":"*"
	              },
	            	//"http://localhost:8080/rest/Auth/Test?firstname=Aravind&orgid=3&lastname=Kaitha&comp=23&email=ara@stravis.com",
	           	data:Data,
	           	crossDomain: true,
	            success: function(data,textStatus,jqXHR)
	            {
	             console.log("Success");
	           	 jQuery.sap.require('sap.m.MessageBox');
	      	 //    sap.m.MessageBox.success("Signed Up Successfully");
	            },
	            error: function () {	        	
	        	 jQuery.sap.require('sap.m.MessageBox');
	      	     sap.m.MessageBox.error("Sign Up Failed");
	        	
	       	 console.log("Failed");
				}
			});		
		 
		
	}
});