sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/acc/ZWM_V2/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.acc.ZWM_V2.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			this.bDialog = new sap.m.BusyDialog();
			UIComponent.prototype.init.apply(this, arguments);
			var model = this.getModel();
			model.setUseBatch(false);
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});