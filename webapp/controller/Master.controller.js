sap.ui.define([
	"sap/ui/core/mvc/Controller", "com/acc/ZWM_V2/model/models", "sap/ui/model/json/JSONModel"
], function (Controller, models, JSONModel) {
	"use strict";

	return Controller.extend("com.acc.ZWM_V2.controller.Master", {
		onInit: function () {
			this.getOwnerComponent().bDialog.open();
			this.getView().setModel(new JSONModel(models.types()), "TypesSet");
		},
		onListItemPress: function (oEvent) {
			debugger;
			var bContext = oEvent.oSource.getBindingContext("TypesSet").getObject();
			if (bContext.ID === "1") {
				this.getRouter().navTo("workOrderMaster", {
				});
			}
		},
		onListUpdateFinsh:function(oEvent){
			this.getOwnerComponent().bDialog.close();
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});

});