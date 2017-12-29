sap.ui.controller("fioritest.SuiteView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fioritest.SuiteView
*/
	onInit: function() {
		
		
		var aData = [{ value: 50, name: "New Suite" }, 
		              {value: 50, name: "Fiori1" }, 
		              { value: 50, name: "DashBoard Test" }, 
		              { value: 50, name: "SAP EP" }];
		
		  var oModel = new sap.ui.model.json.JSONModel();
		  oModel.setData(aData);
		
		
        var table = this.getView().byId("idProducts");
        console.log("tableid "+table)
      //  table.setModel(oModel);
        sap.ui.getCore().setModel(oModel,"TMODEL")
      //  table.setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fioritest.SuiteView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fioritest.SuiteView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fioritest.SuiteView
*/
//	onExit: function() {
//
//	}
	BackButtonPress:function(oEvent){
		app.to(idLogin1);
	},
	
	handleLinkPress:function(oEvent){		
		// var oTable = this.getView().byId("idProducts").getSelectedContexts();
		 //var oSelectedItem = oTable.getSelectedItem();
		//.getBindingContext().getPath();
			//oEvent.oSource.oBindingContexts.json;
		//var item1 = currentRowContext[0];
		console.log(oEvent.getSource().data("mydata"));
		app.to(suiteviewdetails);
	},
	
	_getDialog : function() {
        // create a fragment with dialog, and pass the selected data
        if (!this.dialog) {
            // This fragment can be instantiated from a controller as follows:
            this.dialog = sap.ui.xmlfragment("idFragment","fioritest.suitecreate",this);
            //debugger;
        }	
        
        return this.dialog;
	 },
	 
	 closeDialogs : function(oEvent) {
		// console.log("Arun Here");
        this._getDialog().close()
    },
    onSuitePress: function(oEvent) {
	//console.log("Arun Here");
	 this._getDialog().open();
},

 onSaves : function(oEvent) {
	 
	 var suiteid = sap.ui.getCore().byId("idFragment--SuiteID").getValue();
     var orgid = sap.ui.getCore().byId("idFragment--OrgID").getValue();
     var suitename = sap.ui.getCore().byId("idFragment--SuiteName").getValue();
     var desc = sap.ui.getCore().byId("idFragment--Description").getValue();
	
		 var finalData =
		 {		 "suiteid":suiteid,
				 "orgid":orgid,
				 "suitename":suitename,
				 "desc":desc				 
		 };
		 
		 
		 $.ajax({
	            type: "POST",
	            url : "http://localhost:8080/rest/Auth/Suite",
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
		 
		 this.closeDialogs();
		 this._getDialog().close();
}
	
	
	
});