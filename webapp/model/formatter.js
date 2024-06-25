sap.ui.define([], () => {
	"use strict";
	return {
		formatCurrencyText(sValue) {
			// var x= ""
			// if(sValue) {
			// 	x = sValue.toString();
			// 	var pattern = /(-?\d+)(\d{3})/;
			// 	while (pattern.test(x))
			// 		x = x.replace(pattern, "$1,$2");
			
				// return this.formatter.commoncal(sValue) +  "INR";
				var code = "INR"
				return this.formatter.formatCurrency(sValue,code);
		},
		formatCurrencyInUSDText(sValue) {
			if(sValue) {
				
				var a = sValue*0.014
				var code = "USD"
				return this.formatter.formatCurrency(a,code);
				// return this.formatter.commoncal(a)   +  " USD";
			}
		},
		commoncal(avalue){
			var oFormatOptions = {
				minIntegerDigits: 3,
				maxIntegerDigits: 10,
				minFractionDigits: 2,
				maxFractionDigits: 2
			};
			var oFloatFormat = sap.ui.core.format.NumberFormat.getFloatInstance(oFormatOptions);
			return oFloatFormat.format(avalue);
		},
		formatCurrencyInEuroText(sValue) {
			if(sValue) {
				var b = sValue * 0.012
				var code = "EUR"
				return this.formatter.formatCurrency(b,code);
				// return this.formatter.commoncal(b);
			}
		},
		formatCurrencyInStatus(sValue){
			switch(sValue){
				case ("Appreoved"):
					 return "Success";
				case ("Hold"):
					return "Warning";
				case ("Pending"):
					return "Information";
				case ("Rejected"):
					return "Error"
				default:
					return "Indication01"
			}
		},
			formatCurrency(value, currency){
				var oCurrencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance({
					currencyCode:false
				});
	
				return oCurrencyFormat.format(value,currency);
			}
	};
});