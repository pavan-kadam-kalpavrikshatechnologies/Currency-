sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.curre.currency.controller.NoData", {
            
            onInit: function () {
                
            },
            navButtonPress : function(){
                var oRouting = this.getOwnerComponent().getRouter()
                    oRouting.navTo("Routecurrency")
            }
            
        });
               
    });
