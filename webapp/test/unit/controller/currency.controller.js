/*global QUnit*/

sap.ui.define([
	"sapktcurre/currency/controller/currency.controller"
], function (Controller) {
	"use strict";

	QUnit.module("currency Controller");

	QUnit.test("I should test the currency controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
