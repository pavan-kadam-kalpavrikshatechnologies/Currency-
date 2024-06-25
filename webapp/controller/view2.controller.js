sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.curre.currency.controller.view2", {
            
            onInit: function () {
                
            },
            onPressView2 : function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Routecurrency");
            }
        });
               
    });
