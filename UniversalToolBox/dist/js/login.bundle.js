(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/main/webapp/static/css/common.css":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/css/common.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/css/pages/login.css":
/*!****************************************************!*\
  !*** ./src/main/webapp/static/css/pages/login.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/img/Logo.png":
/*!*********************************************!*\
  !*** ./src/main/webapp/static/img/Logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/Logo.png";

/***/ }),

/***/ "./src/main/webapp/static/img/TabIcon.png":
/*!************************************************!*\
  !*** ./src/main/webapp/static/img/TabIcon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/TabIcon.png";

/***/ }),

/***/ "./src/main/webapp/static/js/login.js":
/*!********************************************!*\
  !*** ./src/main/webapp/static/js/login.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/common.css */ "./src/main/webapp/static/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_pages_login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pages/login.css */ "./src/main/webapp/static/css/pages/login.css");
/* harmony import */ var _css_pages_login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_pages_login_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/TabIcon.png */ "./src/main/webapp/static/img/TabIcon.png");
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Logo.png */ "./src/main/webapp/static/img/Logo.png");
/* harmony import */ var _img_Logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Logo_png__WEBPACK_IMPORTED_MODULE_3__);






$( document ).ready( function()
{
	$( '#loginBtn' ).on( 'click', login );
	$( '#loginUsername' ).keypress( function()
	{
		let keyCode = event.keyCode;
		if( keyCode === 13 ){ $( '#loginPassword' ).focus(); }
	} );
	$( '#loginPassword' ).keypress( function()
	{
		let keyCode = event.keyCode;
		if( keyCode === 13 ){ login(); }
	} )
	$( 'input[class="login-txt-box"]' ).each( function( idx, elem )
	{
		$( this ).on( 'change', function()
		{
			( $( this )[ 0 ].value.length > 0 ) ? $( this ).addClass( 'has-val' ) : $( this ).removeClass( 'has-val' );
		} )
	} )
} );

let login = function() 
{
	let username = $( '#loginUserName' ).val();
	let password = $( '#loginPassword' ).val();
	
	let userAccount = {
		username: username,
		password: password
	}
	
	$.ajax( {
		url: 'validateUser',
		type: 'POST',
		data: { userAccountJson: JSON.stringify( userAccount ) },
		error: function( xhr, ajaxOptions, thrownError ) {}
	} )
	.then( function( data )
	{
		if ( data )
		{
			alert( 'Welcome' );
			let splitedDir = location.href.split( '/' );
			location.href = location.href.substring( 0, location.href.indexOf( splitedDir[ splitedDir.length - 1 ] ) );
		}
	} );
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./src/main/webapp/static/js/login.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2Nzcy9jb21tb24uY3NzPzExYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9jc3MvcGFnZXMvbG9naW4uY3NzPzhmZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9pbWcvTG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9pbWcvVGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9qcy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIscUJBQXVCLHNCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHlCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0k7O0FBRVA7QUFDTjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEMsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpREFBaUQ7QUFDMUQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGIiwiZmlsZSI6ImxvZ2luLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4uL2ltZ3MvTG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuLi9pbWdzL1RhYkljb24ucG5nXCI7IiwiaW1wb3J0IGNvbW1vblN0eWxlIGZyb20gJy4uL2Nzcy9jb21tb24uY3NzJ1xyXG5pbXBvcnQgbG9naW5TdHlsZSBmcm9tICcuLi9jc3MvcGFnZXMvbG9naW4uY3NzJ1xyXG5cclxuaW1wb3J0IHRhYkljb24gZnJvbSAnLi4vaW1nL1RhYkljb24ucG5nJ1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWcvTG9nby5wbmcnXHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbigpXHJcbntcclxuXHQkKCAnI2xvZ2luQnRuJyApLm9uKCAnY2xpY2snLCBsb2dpbiApO1xyXG5cdCQoICcjbG9naW5Vc2VybmFtZScgKS5rZXlwcmVzcyggZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdGxldCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuXHRcdGlmKCBrZXlDb2RlID09PSAxMyApeyAkKCAnI2xvZ2luUGFzc3dvcmQnICkuZm9jdXMoKTsgfVxyXG5cdH0gKTtcclxuXHQkKCAnI2xvZ2luUGFzc3dvcmQnICkua2V5cHJlc3MoIGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHRsZXQga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcblx0XHRpZigga2V5Q29kZSA9PT0gMTMgKXsgbG9naW4oKTsgfVxyXG5cdH0gKVxyXG5cdCQoICdpbnB1dFtjbGFzcz1cImxvZ2luLXR4dC1ib3hcIl0nICkuZWFjaCggZnVuY3Rpb24oIGlkeCwgZWxlbSApXHJcblx0e1xyXG5cdFx0JCggdGhpcyApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHQoICQoIHRoaXMgKVsgMCBdLnZhbHVlLmxlbmd0aCA+IDAgKSA/ICQoIHRoaXMgKS5hZGRDbGFzcyggJ2hhcy12YWwnICkgOiAkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICdoYXMtdmFsJyApO1xyXG5cdFx0fSApXHJcblx0fSApXHJcbn0gKTtcclxuXHJcbmxldCBsb2dpbiA9IGZ1bmN0aW9uKCkgXHJcbntcclxuXHRsZXQgdXNlcm5hbWUgPSAkKCAnI2xvZ2luVXNlck5hbWUnICkudmFsKCk7XHJcblx0bGV0IHBhc3N3b3JkID0gJCggJyNsb2dpblBhc3N3b3JkJyApLnZhbCgpO1xyXG5cdFxyXG5cdGxldCB1c2VyQWNjb3VudCA9IHtcclxuXHRcdHVzZXJuYW1lOiB1c2VybmFtZSxcclxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZFxyXG5cdH1cclxuXHRcclxuXHQkLmFqYXgoIHtcclxuXHRcdHVybDogJ2xvZ2luL3ZhbGlkYXRlVXNlcicsXHJcblx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRkYXRhOiB7IHVzZXJBY2NvdW50SnNvbjogSlNPTi5zdHJpbmdpZnkoIHVzZXJBY2NvdW50ICkgfSxcclxuXHRcdGVycm9yOiBmdW5jdGlvbiggeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IgKSB7fVxyXG5cdH0gKVxyXG5cdC50aGVuKCBmdW5jdGlvbiggZGF0YSApXHJcblx0e1xyXG5cdFx0aWYgKCBkYXRhIClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJlc3VsdExpc3QgPSBKU09OLnBhcnNlKCBkYXRhICk7XHJcblx0XHRcdGNvbnN0IElTX1ZBTElEX0tFWSA9IFwiSVNfVkFMSURcIjtcclxuXHRcdFx0Y29uc3QgVVNFUl9JTkZPX09CSkVDVF9LRVkgPSBcIlVTRVJfSU5GT19PQkpFQ1RcIjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBpc1ZhbGlkID0gcmVzdWx0TGlzdFsgSVNfVkFMSURfS0VZIF07XHJcblx0XHRcdGxldCB1c2VySW5mbyA9IHJlc3VsdExpc3RbIFVTRVJfSU5GT19PQkpFQ1RfS0VZIF07XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoIGlzVmFsaWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YWxlcnQoICdXZWxjb21lJyApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCB1c2VySW5mbyApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBzcGxpdGVkRGlyID0gbG9jYXRpb24uaHJlZi5zcGxpdCggJy8nICk7XHJcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWYuc3Vic3RyaW5nKCAwLCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoIHNwbGl0ZWREaXJbIHNwbGl0ZWREaXIubGVuZ3RoIC0gMSBdICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbGVydCggJ0luY29ycmVjdCBVc2VybmFtZSBvciBQYXNzd29yZCEnIClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9