'use strict';

var RNBraintree = require('react-native').NativeModules.RNBraintree;

var Braintree = {

	setupWithURLScheme(token, urlscheme) {
		return new Promise(function(resolve, reject) {
			RNBraintree.setupWithURLScheme(token, urlscheme, function(success) {
				success == true ? resolve(true) : reject("Invalid Token");
			});
		});
	},

	setup(token) {
		return new Promise(function(resolve, reject) {
			RNBraintree.setup(token, function(success) {
				success == true ? resolve(true) : reject("Invalid Token");
			});
		});
	},

	showPaymentViewController() {
		return new Promise(function(resolve, reject) {
			RNBraintree.showPaymentViewController(function(err, nonce) {
				nonce != null ? resolve(nonce) : reject(err);
			});
		});
	},

	showPayPalViewController() {
		return new Promise(function(resolve, reject) {
			RNBraintree.showPayPalViewController(function(err, nonce) {
				nonce != null ? resolve(nonce) : reject(err);
			});
		});
	},

    getCardNonce(cardNumber, expirationMonth, expirationYear) {
    	return new Promise(function(resolve, reject) {
    		RNBraintree.getCardNonce(cardNumber, expirationMonth, expirationYear, function(err, nonce) {
    			nonce != null ? resolve(nonce) : reject(err);
    		});
    	});
    }

};

module.exports = Braintree;
