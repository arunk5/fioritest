sap.ui.controller("fioritest.SuiteView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fioritest.SuiteView
*/
	onInit: function() {
		
		
		var aData = [{ value: 50, name: "Joe" }, 
		              {value: 50, name: "Mary" }, 
		              { value: 50, name: "John" }, 
		              { value: 50, name: "Kai" }];
		
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

});