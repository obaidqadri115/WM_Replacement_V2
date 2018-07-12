sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		types: function () {
			return [{
				"ID": "1",
				"Type": "Work Orders",
				"icon":"util/wo.png"
			}, {
				"ID": "2",
				"Type": "Notifications",
				"icon":"util/notification.png"
			}, {
				"ID": "3",
				"Type": "Timesheets",
				"icon":"util/timeSheets.png"
			}, {
				"ID": "4",
				"Type": "Functional Location",
				"icon":"util/fl.png"
			}, {
				"ID": "5",
				"Type": "Equipment",
				"icon":"util/equipment.png"
			}];
		},
		references:function(viewName,ref){
			/*if(!this["viewName"]){
				this["viewName"] = ref; 
			}else{
				this["viewName"] = ref;
			}*/
			this[viewName] = ref;
		},
		getReferences:function(viewName){
			return this[viewName];
		}

	};
});