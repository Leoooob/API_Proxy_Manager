sap.ui.define([
		"Proxy/API_Proxy_Manager/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("Proxy.API_Proxy_Manager.controller.App", {
			onInit : function () {
				var oViewModel = new JSONModel({
					busy : true,
					delay : 0
				});
				this.setModel(oViewModel, "appView");

				// apply content density mode to root view
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			}
		});
	}
);