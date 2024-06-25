sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("sap.kt.curre.currency.controller.currency", {
            formatter : formatter,
            onInit: function () {

                var jsondata = [{
                    "expId":1,
                    "expName":"car",
                    "amountINR":10700,
                    "status":"Pending"
                },{
                    "expId":2,
                    "expName":"Hotel",
                    "amountINR":1000,
                    "status":"Rejected"
                },{
                    "expId":3,
                    "expName":"Bus",
                    "amountINR":1000.2,
                    "status":"Appreoved"
                },{
                    "expId":4,
                    "expName":"car",
                    "amountINR":1000.5,
                    "status":"Hold"
                }
            ]
                var oModel1 = new sap.ui.model.json.JSONModel(jsondata)
                this.getView().setModel(oModel1,"currency")
                
            },
            onPressEvent : function(){
                var oView = this.getView();
                if (!this.oDialog) {
                    this.oDialog = sap.ui.core.Fragment.load({
                        name: "sap.kt.curre.currency.fragment.currency",
                        controller: this
                    }).then(function (oDialog) {
                        this.oDialog = oDialog;
                        oView.addDependent(this.oDialog);
                        this.oDialog.open();  
                    }.bind(this));
                } else {
                    this.oDialog.open();
                }
            },
            onDelete : function(oEvent){
                var sSelectedPath = oEvent.getParameter("listItem").getBindingContextPath().split("/")[1];
                this.getView().getModel("currency").getData().splice(sSelectedPath,"1");
                this.byId("TableId").getModel("currency").refresh();
            },
            onPressSave : function(){
                var oModel1 = this.getView().getModel("currency").getData()
                var expId = sap.ui.getCore().byId("idExpId").getValue()
                var expName = sap.ui.getCore().byId("idName").getValue()
                var amountINR = sap.ui.getCore().byId("idAmount").getValue()
                var status = sap.ui.getCore().byId("status").getValue()

                var oPayload = {
                    "expId": expId,
                    "expName": expName,
                    "amountINR": amountINR,
                    "status":status
                 };
                 
                 oModel1.push(oPayload);
                 this.oDialog.close();
                 this.byId("TableId").getModel("currency").refresh();
            },
            onPressClose: function () {
                this.oDialog.close()
            },
            onPresNavigation : function(){
                var oRouting = this.getOwnerComponent().getRouter()
                oRouting.navTo("Routeview2")
            },
            onPresNavigation2 : function(){
                var oRouting = this.getOwnerComponent().getRouter()
                oRouting.navTo("Routeview3")
            },
            changePress: function() {
                var input = this.getView().byId("inputId").getValue();
                var input2 = input.toUpperCase();
                if(input2==="HELLO" || input2==="THANKYOU"){
                    var oRouting = this.getOwnerComponent().getRouter()
                    oRouting.navTo("Routeview2")
                }else {
                    var oRouting = this.getOwnerComponent().getRouter()
                    oRouting.navTo("Routeview3")
                }
            }
        });
               
    });
