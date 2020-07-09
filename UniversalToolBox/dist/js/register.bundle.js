(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register"],{

/***/ "./src/main/webapp/static/css/common.css":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/css/common.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/css/pages/register.css":
/*!*******************************************************!*\
  !*** ./src/main/webapp/static/css/pages/register.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/img/Register.png":
/*!*************************************************!*\
  !*** ./src/main/webapp/static/img/Register.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/Register.png";

/***/ }),

/***/ "./src/main/webapp/static/img/TabIcon.png":
/*!************************************************!*\
  !*** ./src/main/webapp/static/img/TabIcon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/TabIcon.png";

/***/ }),

/***/ "./src/main/webapp/static/js/register.js":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/js/register.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/common.css */ "./src/main/webapp/static/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_pages_register_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pages/register.css */ "./src/main/webapp/static/css/pages/register.css");
/* harmony import */ var _css_pages_register_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_pages_register_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/TabIcon.png */ "./src/main/webapp/static/img/TabIcon.png");
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_TabIcon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Register_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Register.png */ "./src/main/webapp/static/img/Register.png");
/* harmony import */ var _img_Register_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Register_png__WEBPACK_IMPORTED_MODULE_3__);







const validFileTypes = [ 'image/gif', 'image/jpeg', 'image/png' ];
const maxImgSize = 20;

$( document ).ready( function()
{
	$( '#registerBtn' ).on( 'click', register )
	$( '#registerUserFirstName' ).on( 'change', vaildateName );
	$( '#registerUserLastName' ).on( 'change', vaildateName );
	$( '#registerUsername' ).on( 'change', vaildateUserName );
	$( '#registerEmail' ).on( 'change', vaildateEmail );
	$( '#registerPassword' ).on( 'change', vaildatePassword );
	$( '#registerReEnterPassword' ).on( 'change', vaildateReEnterPassword );
	$( '#uploadBtn' ).on( 'click', showUploadUserProfileImg );
	$( '#userProfileImgUpload' ).on( 'change', uploadUserProfileImg );
	$( 'input[class="register-txt-box"]' ).each( function()
	{
		$( this ).on( 'change', function()
		{
			( $( this )[ 0 ].value.length > 0 ) ? $( this ).addClass( 'has-val' ) : $( this ).removeClass( 'has-val' );
		} )
	} );
} )

let vaildateEmail = function()
{
	let email = this.value;
	let regExpPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

let vaildateName = function()
{
	let name = this.value;
	let regExpPattern = /[<>()\[\]\\\.;:@\s]/; 
}

let vaildateUserName = function()
{
	let username = this.value;
	var regExpPattern = /^[a-zA-Z0-9]{3,}$/;
	if ( ! regExpPattern.test( username ) )
	{
		alert( 'Invalid Username!' );
	}
	else
	{
		$.ajax( {
			url: 'register/checkIfUsernameExists',
			type: 'POST',
			data: { username: username },
			error: function( xhr, ajaxOptions, thrownError )
			{
			
			}
		} )
		.then( function( data )
		{
			if ( isExistingUsername )
			{
				alert( 'Username Already Exists!' );
			}
		} );
	}
}

let vaildatePassword = function()
{
	let password = this.value;
	var regExpPattern = /^[a-zA-Z0-9]{8,}$/;
	if ( ! regExpPattern.test( password ) )
	{
		alert( 'Invalid Password!' );
	}
}

let vaildateReEnterPassword = function() 
{
	let password = $( '#registerPassword' ).val();
	let reEnterPassword = this.value;
	if ( ! password === reEnterPassword )
	{
		alert( "Re-Enter Password Doesn't Correspond to Password!" );
	}
}

let showUploadUserProfileImg = function()
{
	$( '#userProfileImgUpload' ).click();
}

let uploadUserProfileImg = function()
{
	$( '#filePathTxt' ).val( document.getElementById( "userProfileImgUpload" ).files[ 0 ].name );
}

let register = function() 
{
	let isAllDataFilled = true;
	let firstName = $( '#registerUserFirstName' ).val();
	let lastName = $( '#registerUserLastName' ).val();
	let email = $( '#registerUserEmail' ).val();
	let username = $( '#registerUsername' ).val();
	let password = $( '#registerPassword' ).val();
	let file = document.getElementById( 'userProfileImgUpload' ).files[ 0 ];
	let formData = new FormData();
	
	$( 'input[class="register-txt-box"]' ).each( function( idx, elem )
	{
		if ( this.value )
		{
			isAllDataFilled = false;
			return false;
		}
	} );
	
	if ( ! $( '#termsAgreementCheckbox' ).prop( 'checked' ) )
	{
		alert( 'Please Agree The Terms of Service!' );
		return;
	}
	
	if ( ! isAllDataFilled )
	{
		alert( 'Please Fill in All Data!' );
		return;
	}
	
	if ( ! validFileTypes.includes( file.type ) )
	{
		alert( 'File Must Be Image!' );
		return;
	}
	
	if ( ( file.size / 1024 / 1024 ) > maxImgSize )
	{
		alert( 'File Must Not Exceed ' ) + maxImgSize + ' MB';
		return;
	}
	
	let userData = { 
		firstName: firstName,
		lastName: lastName,
		email: email,
		username: username,
		password: password
	};
	
	formData.append( 'imgFile', file );
	formData.append( 'userInfoJson', JSON.stringify( userData ) );
	
	$.ajax( {
		url: 'register/createNewAccount',
		type: 'POST',
		data: formData,
		processData: false,
		contentType: false,
		error: function( xhr, ajaxOptions, thrownError ){
			
		}
	} ).
	then( function( data )
	{
		alert( 'Created!' );
	} );
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./src/main/webapp/static/js/register.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2Nzcy9jb21tb24uY3NzPzExYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9jc3MvcGFnZXMvcmVnaXN0ZXIuY3NzP2MzYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9pbWcvUmVnaXN0ZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvaW1nL1RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvanMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QiwwQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qix5Qjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNPO0FBQ0c7O0FBRWI7QUFDSzs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlDQUFpQyxHQUFHO0FBQzFLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxHQUFHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDIiwiZmlsZSI6InJlZ2lzdGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4uL2ltZ3MvUmVnaXN0ZXIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vaW1ncy9UYWJJY29uLnBuZ1wiOyIsImltcG9ydCBjb21tb25TdHlsZSBmcm9tICcuLi9jc3MvY29tbW9uLmNzcydcclxuaW1wb3J0IGxvZ2luU3R5bGUgZnJvbSAnLi4vY3NzL3BhZ2VzL3JlZ2lzdGVyLmNzcydcclxuaW1wb3J0IHJlZ2lzdGVyU3R5bGUgZnJvbSAnLi4vY3NzL3BhZ2VzL3JlZ2lzdGVyLmNzcydcclxuXHJcbmltcG9ydCB0YWJJY29uIGZyb20gJy4uL2ltZy9UYWJJY29uLnBuZydcclxuaW1wb3J0IHJlZ2lzdGVyUGljIGZyb20gJy4uL2ltZy9SZWdpc3Rlci5wbmcnXHJcblxyXG5jb25zdCB2YWxpZEZpbGVUeXBlcyA9IFsgJ2ltYWdlL2dpZicsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycgXTtcclxuY29uc3QgbWF4SW1nU2l6ZSA9IDIwO1xyXG5cclxuJCggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oKVxyXG57XHJcblx0JCggJyNyZWdpc3RlckJ0bicgKS5vbiggJ2NsaWNrJywgcmVnaXN0ZXIgKVxyXG5cdCQoICcjcmVnaXN0ZXJVc2VyRmlyc3ROYW1lJyApLm9uKCAnY2hhbmdlJywgdmFpbGRhdGVOYW1lICk7XHJcblx0JCggJyNyZWdpc3RlclVzZXJMYXN0TmFtZScgKS5vbiggJ2NoYW5nZScsIHZhaWxkYXRlTmFtZSApO1xyXG5cdCQoICcjcmVnaXN0ZXJVc2VybmFtZScgKS5vbiggJ2NoYW5nZScsIHZhaWxkYXRlVXNlck5hbWUgKTtcclxuXHQkKCAnI3JlZ2lzdGVyRW1haWwnICkub24oICdjaGFuZ2UnLCB2YWlsZGF0ZUVtYWlsICk7XHJcblx0JCggJyNyZWdpc3RlclBhc3N3b3JkJyApLm9uKCAnY2hhbmdlJywgdmFpbGRhdGVQYXNzd29yZCApO1xyXG5cdCQoICcjcmVnaXN0ZXJSZUVudGVyUGFzc3dvcmQnICkub24oICdjaGFuZ2UnLCB2YWlsZGF0ZVJlRW50ZXJQYXNzd29yZCApO1xyXG5cdCQoICcjdXBsb2FkQnRuJyApLm9uKCAnY2xpY2snLCBzaG93VXBsb2FkVXNlclByb2ZpbGVJbWcgKTtcclxuXHQkKCAnI3VzZXJQcm9maWxlSW1nVXBsb2FkJyApLm9uKCAnY2hhbmdlJywgdXBsb2FkVXNlclByb2ZpbGVJbWcgKTtcclxuXHQkKCAnaW5wdXRbY2xhc3M9XCJyZWdpc3Rlci10eHQtYm94XCJdJyApLmVhY2goIGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQkKCB0aGlzICkub24oICdjaGFuZ2UnLCBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdCggJCggdGhpcyApWyAwIF0udmFsdWUubGVuZ3RoID4gMCApID8gJCggdGhpcyApLmFkZENsYXNzKCAnaGFzLXZhbCcgKSA6ICQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ2hhcy12YWwnICk7XHJcblx0XHR9IClcclxuXHR9ICk7XHJcbn0gKVxyXG5cclxubGV0IHZhaWxkYXRlRW1haWwgPSBmdW5jdGlvbigpXHJcbntcclxuXHRsZXQgZW1haWwgPSB0aGlzLnZhbHVlO1xyXG5cdGxldCByZWdFeHBQYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxufVxyXG5cclxubGV0IHZhaWxkYXRlTmFtZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGxldCBuYW1lID0gdGhpcy52YWx1ZTtcclxuXHRsZXQgcmVnRXhwUGF0dGVybiA9IC9bPD4oKVxcW1xcXVxcXFxcXC47OkBcXHNdLzsgXHJcbn1cclxuXHJcbmxldCB2YWlsZGF0ZVVzZXJOYW1lID0gZnVuY3Rpb24oKVxyXG57XHJcblx0bGV0IHVzZXJuYW1lID0gdGhpcy52YWx1ZTtcclxuXHR2YXIgcmVnRXhwUGF0dGVybiA9IC9eW2EtekEtWjAtOV17Myx9JC87XHJcblx0aWYgKCAhIHJlZ0V4cFBhdHRlcm4udGVzdCggdXNlcm5hbWUgKSApXHJcblx0e1xyXG5cdFx0YWxlcnQoICdJbnZhbGlkIFVzZXJuYW1lIScgKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdCQuYWpheCgge1xyXG5cdFx0XHR1cmw6ICdyZWdpc3Rlci9jaGVja0lmVXNlcm5hbWVFeGlzdHMnLFxyXG5cdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbiggeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9IClcclxuXHRcdC50aGVuKCBmdW5jdGlvbiggZGF0YSApXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IElGX1VTRVJOQU1FX0VYSVNUX0tFWSA9IFwiSUZfVVNFUk5BTUVfRVhJU1RcIjtcclxuXHRcdFx0bGV0IGlmVXNlck5hbWVFeGlzdHMgPSBkYXRhWyBJRl9VU0VSTkFNRV9FWElTVF9LRVkgXTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICggaWZVc2VyTmFtZUV4aXN0cyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbGVydCggJ1VzZXJuYW1lIEFscmVhZHkgRXhpc3RzIScgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHZhaWxkYXRlUGFzc3dvcmQgPSBmdW5jdGlvbigpXHJcbntcclxuXHRsZXQgcGFzc3dvcmQgPSB0aGlzLnZhbHVlO1xyXG5cdHZhciByZWdFeHBQYXR0ZXJuID0gL15bYS16QS1aMC05XXs4LH0kLztcclxuXHRpZiAoICEgcmVnRXhwUGF0dGVybi50ZXN0KCBwYXNzd29yZCApIClcclxuXHR7XHJcblx0XHRhbGVydCggJ0ludmFsaWQgUGFzc3dvcmQhJyApO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHZhaWxkYXRlUmVFbnRlclBhc3N3b3JkID0gZnVuY3Rpb24oKSBcclxue1xyXG5cdGxldCBwYXNzd29yZCA9ICQoICcjcmVnaXN0ZXJQYXNzd29yZCcgKS52YWwoKTtcclxuXHRsZXQgcmVFbnRlclBhc3N3b3JkID0gdGhpcy52YWx1ZTtcclxuXHRpZiAoICEgcGFzc3dvcmQgPT09IHJlRW50ZXJQYXNzd29yZCApXHJcblx0e1xyXG5cdFx0YWxlcnQoIFwiUmUtRW50ZXIgUGFzc3dvcmQgRG9lc24ndCBDb3JyZXNwb25kIHRvIFBhc3N3b3JkIVwiICk7XHJcblx0fVxyXG59XHJcblxyXG5sZXQgc2hvd1VwbG9hZFVzZXJQcm9maWxlSW1nID0gZnVuY3Rpb24oKVxyXG57XHJcblx0JCggJyN1c2VyUHJvZmlsZUltZ1VwbG9hZCcgKS5jbGljaygpO1xyXG59XHJcblxyXG5sZXQgdXBsb2FkVXNlclByb2ZpbGVJbWcgPSBmdW5jdGlvbigpXHJcbntcclxuXHQkKCAnI2ZpbGVQYXRoVHh0JyApLnZhbCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIFwidXNlclByb2ZpbGVJbWdVcGxvYWRcIiApLmZpbGVzWyAwIF0ubmFtZSApO1xyXG59XHJcblxyXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbigpIFxyXG57XHJcblx0bGV0IGlzQWxsRGF0YUZpbGxlZCA9IHRydWU7XHJcblx0bGV0IGZpcnN0TmFtZSA9ICQoICcjcmVnaXN0ZXJVc2VyRmlyc3ROYW1lJyApLnZhbCgpO1xyXG5cdGxldCBsYXN0TmFtZSA9ICQoICcjcmVnaXN0ZXJVc2VyTGFzdE5hbWUnICkudmFsKCk7XHJcblx0bGV0IGVtYWlsID0gJCggJyNyZWdpc3RlclVzZXJFbWFpbCcgKS52YWwoKTtcclxuXHRsZXQgdXNlcm5hbWUgPSAkKCAnI3JlZ2lzdGVyVXNlcm5hbWUnICkudmFsKCk7XHJcblx0bGV0IHBhc3N3b3JkID0gJCggJyNyZWdpc3RlclBhc3N3b3JkJyApLnZhbCgpO1xyXG5cdGxldCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd1c2VyUHJvZmlsZUltZ1VwbG9hZCcgKS5maWxlc1sgMCBdO1xyXG5cdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFxyXG5cdCQoICdpbnB1dFtjbGFzcz1cInJlZ2lzdGVyLXR4dC1ib3hcIl0nICkuZWFjaCggZnVuY3Rpb24oIGlkeCwgZWxlbSApXHJcblx0e1xyXG5cdFx0aWYgKCB0aGlzLnZhbHVlIClcclxuXHRcdHtcclxuXHRcdFx0aXNBbGxEYXRhRmlsbGVkID0gZmFsc2U7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblx0XHJcblx0aWYgKCAhICQoICcjdGVybXNBZ3JlZW1lbnRDaGVja2JveCcgKS5wcm9wKCAnY2hlY2tlZCcgKSApXHJcblx0e1xyXG5cdFx0YWxlcnQoICdQbGVhc2UgQWdyZWUgVGhlIFRlcm1zIG9mIFNlcnZpY2UhJyApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoICEgaXNBbGxEYXRhRmlsbGVkIClcclxuXHR7XHJcblx0XHRhbGVydCggJ1BsZWFzZSBGaWxsIGluIEFsbCBEYXRhIScgKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0aWYgKCAhIHZhbGlkRmlsZVR5cGVzLmluY2x1ZGVzKCBmaWxlLnR5cGUgKSApXHJcblx0e1xyXG5cdFx0YWxlcnQoICdGaWxlIE11c3QgQmUgSW1hZ2UhJyApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoICggZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgKSA+IG1heEltZ1NpemUgKVxyXG5cdHtcclxuXHRcdGFsZXJ0KCAnRmlsZSBNdXN0IE5vdCBFeGNlZWQgJyApICsgbWF4SW1nU2l6ZSArICcgTUInO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRsZXQgdXNlckRhdGEgPSB7IFxyXG5cdFx0Zmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcblx0XHRsYXN0TmFtZTogbGFzdE5hbWUsXHJcblx0XHRlbWFpbDogZW1haWwsXHJcblx0XHR1c2VybmFtZTogdXNlcm5hbWUsXHJcblx0XHRwYXNzd29yZDogcGFzc3dvcmRcclxuXHR9O1xyXG5cdFxyXG5cdGZvcm1EYXRhLmFwcGVuZCggJ2ltZ0ZpbGUnLCBmaWxlICk7XHJcblx0Zm9ybURhdGEuYXBwZW5kKCAndXNlckluZm9Kc29uJywgSlNPTi5zdHJpbmdpZnkoIHVzZXJEYXRhICkgKTtcclxuXHRcclxuXHQkLmFqYXgoIHtcclxuXHRcdHVybDogJ3JlZ2lzdGVyL2NyZWF0ZU5ld0FjY291bnQnLFxyXG5cdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0ZGF0YTogZm9ybURhdGEsXHJcblx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXHJcblx0XHRjb250ZW50VHlwZTogZmFsc2UsXHJcblx0XHRlcnJvcjogZnVuY3Rpb24oIHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yICl7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH0gKS5cclxuXHR0aGVuKCBmdW5jdGlvbiggZGF0YSApXHJcblx0e1xyXG5cdFx0YWxlcnQoICdDcmVhdGVkIScgKTtcclxuXHR9ICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9