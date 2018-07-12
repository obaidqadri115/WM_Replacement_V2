sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "com/acc/ZWM_V2/model/models"
], function (Controller, JSONModel, models) {
	"use strict";
	return Controller.extend("com.acc.ZWM_V2.controller.workOrderMaster", {
		onInit: function () {
			this.oModel = this.getOwnerComponent().getModel();
			this.getOwnerComponent().getRouter().getRoute("workOrderMaster").attachPatternMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function (event) {
			models.references("workOrderMaster", this);
			this.bindWorkOrderList();
		},
		bindWorkOrderList: function () {
			this.getOwnerComponent().bDialog.open();
			var that = this;
			var path = "/HeaderSet";
			var params = {
				$filter: "Userid eq '11153519'",
				$expand: "NVHEADERTOOPERATIONS,NVHEADERTOCOMPONENTS,NVHEADERTOOBJECTS"
			};
			this.oModel.read(path, {
				urlParameters: params,
				success: function (oData, response) {
					that.getView().setModel(new JSONModel(oData.results), "workOrders");
					//that.getOwnerComponent().bDialog.close();
				},
				error: function (error) {
					that.getOwnerComponent().bDialog.close();
				}
			});
		},
		onUpdateFinish: function (oEvent) {
			var oList = oEvent.oSource;
			var oFirstListItem = oEvent.oSource.getItems()[0];
			if (oFirstListItem && !sap.ui.Device.system.phone) {
				oList.setSelectedItem(oFirstListItem);
				oList.fireItemPress({
					listItem: oFirstListItem,
					srcControl:oFirstListItem
				});
				this.getOwnerComponent().bDialog.close();
			}else{
				this.getOwnerComponent().bDialog.close();
			}

		},
		onListItemPress: function (oEvent) {
			var path = oEvent.mParameters.listItem.getBindingContextPath("workOrders");
			this.getRouter().navTo("workOrderDetail", {
				context:path.split("/")[1]
			});
		},
		dateFormatter: function (value1) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "dd/MM/yyyy"
			});
			var date = oDateFormat.format(new Date(value1));
			return date;
		},
		piority: function (val) {
			if (val) {
				if (val == "") {
					val = "None";
				} else {
					val = val.split("-")[1];
				}
				return val;
			}
		},
		onBacktoMaster: function () {
			this.getRouter().navTo("Master", {});
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});

});