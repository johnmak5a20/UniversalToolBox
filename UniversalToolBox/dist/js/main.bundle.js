(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/main/webapp/static/css/common.css":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/css/common.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/css/pages/main.css":
/*!***************************************************!*\
  !*** ./src/main/webapp/static/css/pages/main.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/css/pages/menu.css":
/*!***************************************************!*\
  !*** ./src/main/webapp/static/css/pages/menu.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/img/TabIcon.png":
/*!************************************************!*\
  !*** ./src/main/webapp/static/img/TabIcon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/TabIcon.png";

/***/ }),

/***/ "./src/main/webapp/static/img/TempUser.png":
/*!*************************************************!*\
  !*** ./src/main/webapp/static/img/TempUser.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../imgs/TempUser.png";

/***/ }),

/***/ "./src/main/webapp/static/js/dropDown.js":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/js/dropDown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropDown; });
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/common.css */ "./src/main/webapp/static/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_pages_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pages/main.css */ "./src/main/webapp/static/css/pages/main.css");
/* harmony import */ var _css_pages_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_pages_main_css__WEBPACK_IMPORTED_MODULE_1__);



class dropDown
{
	constructor( dropDownBtnIdList, dropDownStyleObj )
	{
		this.dropDownBtnIdList = dropDownBtnIdList;
		this.dropDownStyleObj = dropDownStyleObj;
		this.init();
	}
	
	init()
	{
		let dropDownListStyle = this.dropDownStyleObj[ 'dropDownListContainer' ];
		let dropDownListItemStyle = this.dropDownStyleObj[ 'dropDownListItem' ];
		
		if ( dropDownListStyle && dropDownListItemStyle )
		{
			let dropdownHtmlStr = '<div class="' + dropDownListStyle + '">';
			
			if ( this.dropDownBtnIdList.length > 0 )
			{
				let dropDownContainer =  this.dropDownBtnIdList[ 0 ];
				let initDropDownVal = '';
				
				this.dropDownBtnIdList.forEach( ( dropDownBtnId ) => 
				{
					$( '#' + dropDownBtnId ).find( 'select' ).find( 'option' ).each( ( i, elem ) => 
					{
						if ( i === 0 )
						{ 
							$( '#' + dropDownContainer + ' span:first-child' ).text ( $( elem )[ 0 ].innerHTML );
							initDropDownVal = $( elem )[ 0 ].innerHTML;
						}
					
						dropdownHtmlStr += '<div class="' + dropDownListItemStyle + '">' + $( elem )[ 0 ].innerHTML + '</div>';
					} );
					
					dropdownHtmlStr += '</div>';
					
					$( '#' + dropDownBtnId ).after( dropdownHtmlStr );
					$( '#' + dropDownBtnId ).on( 'click', this.openDropdown.bind( this ) );
					$( '#' + dropDownBtnId + '+ div.' + dropDownListStyle + ' div.' + dropDownListItemStyle ).on( 'click', this.selectItem.bind( this ) );
					
					this.dropDownVal = initDropDownVal;
				} );
			}
		}
		else
		{
			throw 'Missing Parameter';
		}
	}
	
	openDropdown()
	{
		$( event.currentTarget ).next( 'div.' + this.dropDownStyleObj[ 'dropDownListContainer' ] ).css( 'display', 'block' );
	}

	closeDropdown()
	{
		$( event.currentTarget ).parent( 'div.' + this.dropDownStyleObj[ 'dropDownListContainer' ] ).css( 'display', 'none' );
	}
	
	selectItem()
	{
		let selectedVal = $( event.currentTarget ).text();
		let dropDownBtn = $( event.currentTarget ).parent().prev();
		
		if ( dropDownBtn.find( 'select' ).length > 0 )
		{
			dropDownBtn.find( 'span.selected-value' ).text( selectedVal );
		}
		else if ( dropDownBtn.find( 'i' ).length > 0 )
		{
			let subDropDown = dropDownBtn[ 0 ].id;
			let otherMainDropDownIds = this.dropDownBtnIdList.filter( ( dropDownBtnId ) => 
			{
				return dropDownBtnId !== subDropDown;
			} );
			
			otherMainDropDownIds.forEach( ( dropDownBtnId ) => 
			{
				$( '#' + dropDownBtnId ).find( 'span.selected-value' ).text( selectedVal );
			} );
		}
		
		this.dropDownVal = selectedVal;
		this.closeDropdown();
	}
	
	getDropDownVal()
	{
		return this.dropDownVal;
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/main/webapp/static/js/main.js":
/*!*******************************************!*\
  !*** ./src/main/webapp/static/js/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDown */ "./src/main/webapp/static/js/dropDown.js");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/common.css */ "./src/main/webapp/static/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_pages_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/pages/main.css */ "./src/main/webapp/static/css/pages/main.css");
/* harmony import */ var _css_pages_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_pages_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_pages_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/pages/menu.css */ "./src/main/webapp/static/css/pages/menu.css");
/* harmony import */ var _css_pages_menu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_pages_menu_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/TabIcon.png */ "./src/main/webapp/static/img/TabIcon.png");
/* harmony import */ var _img_TabIcon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_TabIcon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_TempUser_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/TempUser.png */ "./src/main/webapp/static/img/TempUser.png");
/* harmony import */ var _img_TempUser_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_TempUser_png__WEBPACK_IMPORTED_MODULE_5__);









const dropDownBtnList = [ 'mainHeaderDropdown', 'subHeaderDropdown' ];
const dropDownStyle = 
{ 
	dropDownListContainer: 'dropdown-list', 
	dropDownListItem: 'header-filter-drop-down-item' 
};
const headerDropDown = new _dropDown__WEBPACK_IMPORTED_MODULE_0__["default"]( dropDownBtnList, dropDownStyle );

$( document ).ready( function()
{
	$( '#loginBtn' ).on( 'click', toLoginPage );
	$( '#logoutBtn' ).on( 'click', logout );
	$( '#openNavMenuBtn' ).on( 'click', openNavMenu );
	$( '#closeNavMenuBtn' ).on( 'click', closeNavMenu );
	$( '#searchBtn' ).on( 'click', searchItem );
	$( '#headerSearchInput' ).keypress( () => 
	{
		let keyCode = event.keyCode;
		if( keyCode === 13 ){ searchItem(); }
	} );
	
	$.ajax( {
		url: "getUserProfile",
		type: "GET",
		error: ( xhr, ajaxOptions, thrownError ) => 
		{
			console.log( xhr.status );
		}
	} )
	.then( ( data ) => 
	{
		if ( data )
		{
			var user = JSON.parse( data );
			var userProfileImgPath = user[ 'profileImgPath' ];
			console.log( userProfileImgPath );
			
			$( '.nav-menu-header-profile-img-container' ).css( 'display', 'flex' );
			$( '.nav-menu-header-profile-img' ).append( '<img style="height:80px;" src="' + userProfileImgPath + '" />' );
			$( '.nav-menu-header-greeting > span' ).html( 'Hello, ' + user[ 'username' ] );
			$( '#loginBtn > span:nth-child(1) > i' ).remove();
			$( '#loginBtn > span:nth-child(1)' ).append( '<div style="border-radius: 50%; border: 1px solid rgba(0, 0, 0, 0.4); overflow: hidden;"><img style="height: 30px; width: 30px;" src="' + userProfileImgPath + '" /><div>' );
			$( '#loginBtn > span:nth-child(2)' ).html( user[ 'username' ] );
		}
	} );
} );

$( document ).on( 'click', function( event ) 
{
	if ( $( event.target ).find( '.nav-menu-show' ).length !== 0 ) 
	{
		closeNavMenu();
	}
} );

let openNavMenu = () =>
{
	$( '#navMenu' ).removeClass( 'nav-menu-hidden' );
	$( '#navMenu' ).addClass( 'nav-menu-show' );
	$( '#mainDiv' ).addClass( 'gray-background' );
}

let closeNavMenu = () => 
{
	$( '#navMenu' ).removeClass( 'nav-menu-show' );
	$( '#navMenu' ).addClass( 'nav-menu-hidden' );
	$( '#mainDiv' ).removeClass( 'gray-background' );
}

let toLoginPage = function()
{
	window.location.href = 'login';
}

let searchItem = function()
{
	let searchTxt = $( '#headerSearchInput' ).val();
	let filterVal = headerDropDown.getDropDownVal();
	let searchCriteraObj = { 'searchTxt' : searchTxt, 'filterVal': filterVal };
	
/*	$.ajax( {
		url: 'searchFile',
		type: 'POST',
		data: JSON.stringify( searchCriteraObj ),
		error: ( xhr, ajaxOptions, thrownError ) => 
		{
			console.log( xhr.status );
		}
	} )
	.then( ( data ) => 
	{ 
		let resultObj = JSON.parse( data );
		
	} );*/
}

let logout = function()
{
	$.ajax( {
		url: 'logout',
		type: 'GET',
		error: function( xhr, ajaxOptions, thrownError ) {}
	} ).then( () => {
	} );
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./src/main/webapp/static/js/main.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2Nzcy9jb21tb24uY3NzPzExYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9jc3MvcGFnZXMvbWFpbi5jc3M/MmMwMiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2Nzcy9wYWdlcy9tZW51LmNzcz8zM2RiIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvaW1nL1RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvaW1nL1RlbXBVc2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2pzL2Ryb3BEb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIscUJBQXVCLHlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0U7O0FBRTlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDOztBQUVVO0FBQ0U7QUFDQTs7QUFFTDtBQUNDOztBQUV6QztBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQyxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFLEdBQUc7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEU7QUFDQTs7QUFFQSxFQUFFLEdBQUc7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuLi9pbWdzL1RhYkljb24ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vaW1ncy9UZW1wVXNlci5wbmdcIjsiLCJpbXBvcnQgY29tbW9uU3R5bGUgZnJvbSAnLi4vY3NzL2NvbW1vbi5jc3MnXHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vY3NzL3BhZ2VzL21haW4uY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJvcERvd25cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBkcm9wRG93bkJ0bklkTGlzdCwgZHJvcERvd25TdHlsZU9iaiApXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRG93bkJ0bklkTGlzdCA9IGRyb3BEb3duQnRuSWRMaXN0O1xyXG5cdFx0dGhpcy5kcm9wRG93blN0eWxlT2JqID0gZHJvcERvd25TdHlsZU9iajtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHRcclxuXHRpbml0KClcclxuXHR7XHJcblx0XHRsZXQgZHJvcERvd25MaXN0U3R5bGUgPSB0aGlzLmRyb3BEb3duU3R5bGVPYmpbICdkcm9wRG93bkxpc3RDb250YWluZXInIF07XHJcblx0XHRsZXQgZHJvcERvd25MaXN0SXRlbVN0eWxlID0gdGhpcy5kcm9wRG93blN0eWxlT2JqWyAnZHJvcERvd25MaXN0SXRlbScgXTtcclxuXHRcdFxyXG5cdFx0aWYgKCBkcm9wRG93bkxpc3RTdHlsZSAmJiBkcm9wRG93bkxpc3RJdGVtU3R5bGUgKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJvcGRvd25IdG1sU3RyID0gJzxkaXYgY2xhc3M9XCInICsgZHJvcERvd25MaXN0U3R5bGUgKyAnXCI+JztcclxuXHRcdFx0XHJcblx0XHRcdGlmICggdGhpcy5kcm9wRG93bkJ0bklkTGlzdC5sZW5ndGggPiAwIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkcm9wRG93bkNvbnRhaW5lciA9ICB0aGlzLmRyb3BEb3duQnRuSWRMaXN0WyAwIF07XHJcblx0XHRcdFx0bGV0IGluaXREcm9wRG93blZhbCA9ICcnO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuZHJvcERvd25CdG5JZExpc3QuZm9yRWFjaCggKCBkcm9wRG93bkJ0bklkICkgPT4gXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0JCggJyMnICsgZHJvcERvd25CdG5JZCApLmZpbmQoICdzZWxlY3QnICkuZmluZCggJ29wdGlvbicgKS5lYWNoKCAoIGksIGVsZW0gKSA9PiBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAwIClcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHQkKCAnIycgKyBkcm9wRG93bkNvbnRhaW5lciArICcgc3BhbjpmaXJzdC1jaGlsZCcgKS50ZXh0ICggJCggZWxlbSApWyAwIF0uaW5uZXJIVE1MICk7XHJcblx0XHRcdFx0XHRcdFx0aW5pdERyb3BEb3duVmFsID0gJCggZWxlbSApWyAwIF0uaW5uZXJIVE1MO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZHJvcGRvd25IdG1sU3RyICs9ICc8ZGl2IGNsYXNzPVwiJyArIGRyb3BEb3duTGlzdEl0ZW1TdHlsZSArICdcIj4nICsgJCggZWxlbSApWyAwIF0uaW5uZXJIVE1MICsgJzwvZGl2Pic7XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRyb3Bkb3duSHRtbFN0ciArPSAnPC9kaXY+JztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCggJyMnICsgZHJvcERvd25CdG5JZCApLmFmdGVyKCBkcm9wZG93bkh0bWxTdHIgKTtcclxuXHRcdFx0XHRcdCQoICcjJyArIGRyb3BEb3duQnRuSWQgKS5vbiggJ2NsaWNrJywgdGhpcy5vcGVuRHJvcGRvd24uYmluZCggdGhpcyApICk7XHJcblx0XHRcdFx0XHQkKCAnIycgKyBkcm9wRG93bkJ0bklkICsgJysgZGl2LicgKyBkcm9wRG93bkxpc3RTdHlsZSArICcgZGl2LicgKyBkcm9wRG93bkxpc3RJdGVtU3R5bGUgKS5vbiggJ2NsaWNrJywgdGhpcy5zZWxlY3RJdGVtLmJpbmQoIHRoaXMgKSApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmRyb3BEb3duVmFsID0gaW5pdERyb3BEb3duVmFsO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aHJvdyAnTWlzc2luZyBQYXJhbWV0ZXInO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRvcGVuRHJvcGRvd24oKVxyXG5cdHtcclxuXHRcdCQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKS5uZXh0KCAnZGl2LicgKyB0aGlzLmRyb3BEb3duU3R5bGVPYmpbICdkcm9wRG93bkxpc3RDb250YWluZXInIF0gKS5jc3MoICdkaXNwbGF5JywgJ2Jsb2NrJyApO1xyXG5cdH1cclxuXHJcblx0Y2xvc2VEcm9wZG93bigpXHJcblx0e1xyXG5cdFx0JCggZXZlbnQuY3VycmVudFRhcmdldCApLnBhcmVudCggJ2Rpdi4nICsgdGhpcy5kcm9wRG93blN0eWxlT2JqWyAnZHJvcERvd25MaXN0Q29udGFpbmVyJyBdICkuY3NzKCAnZGlzcGxheScsICdub25lJyApO1xyXG5cdH1cclxuXHRcclxuXHRzZWxlY3RJdGVtKClcclxuXHR7XHJcblx0XHRsZXQgc2VsZWN0ZWRWYWwgPSAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICkudGV4dCgpO1xyXG5cdFx0bGV0IGRyb3BEb3duQnRuID0gJCggZXZlbnQuY3VycmVudFRhcmdldCApLnBhcmVudCgpLnByZXYoKTtcclxuXHRcdFxyXG5cdFx0aWYgKCBkcm9wRG93bkJ0bi5maW5kKCAnc2VsZWN0JyApLmxlbmd0aCA+IDAgKVxyXG5cdFx0e1xyXG5cdFx0XHRkcm9wRG93bkJ0bi5maW5kKCAnc3Bhbi5zZWxlY3RlZC12YWx1ZScgKS50ZXh0KCBzZWxlY3RlZFZhbCApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGRyb3BEb3duQnRuLmZpbmQoICdpJyApLmxlbmd0aCA+IDAgKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ViRHJvcERvd24gPSBkcm9wRG93bkJ0blsgMCBdLmlkO1xyXG5cdFx0XHRsZXQgb3RoZXJNYWluRHJvcERvd25JZHMgPSB0aGlzLmRyb3BEb3duQnRuSWRMaXN0LmZpbHRlciggKCBkcm9wRG93bkJ0bklkICkgPT4gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gZHJvcERvd25CdG5JZCAhPT0gc3ViRHJvcERvd247XHJcblx0XHRcdH0gKTtcclxuXHRcdFx0XHJcblx0XHRcdG90aGVyTWFpbkRyb3BEb3duSWRzLmZvckVhY2goICggZHJvcERvd25CdG5JZCApID0+IFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0JCggJyMnICsgZHJvcERvd25CdG5JZCApLmZpbmQoICdzcGFuLnNlbGVjdGVkLXZhbHVlJyApLnRleHQoIHNlbGVjdGVkVmFsICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5kcm9wRG93blZhbCA9IHNlbGVjdGVkVmFsO1xyXG5cdFx0dGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldERyb3BEb3duVmFsKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRG93blZhbDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IGRyb3BEb3duIGZyb20gJy4vZHJvcERvd24nXHJcblxyXG5pbXBvcnQgY29tbW9uU3R5bGUgZnJvbSAnLi4vY3NzL2NvbW1vbi5jc3MnXHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vY3NzL3BhZ2VzL21haW4uY3NzJ1xyXG5pbXBvcnQgbWVudVN0eWxlIGZyb20gJy4uL2Nzcy9wYWdlcy9tZW51LmNzcydcclxuXHJcbmltcG9ydCB0YWJJY29uIGZyb20gJy4uL2ltZy9UYWJJY29uLnBuZydcclxuaW1wb3J0IFRtcFVzZXIgZnJvbSAnLi4vaW1nL1RlbXBVc2VyLnBuZydcclxuXHJcbmNvbnN0IGRyb3BEb3duQnRuTGlzdCA9IFsgJ21haW5IZWFkZXJEcm9wZG93bicsICdzdWJIZWFkZXJEcm9wZG93bicgXTtcclxuY29uc3QgZHJvcERvd25TdHlsZSA9IFxyXG57IFxyXG5cdGRyb3BEb3duTGlzdENvbnRhaW5lcjogJ2Ryb3Bkb3duLWxpc3QnLCBcclxuXHRkcm9wRG93bkxpc3RJdGVtOiAnaGVhZGVyLWZpbHRlci1kcm9wLWRvd24taXRlbScgXHJcbn07XHJcbmNvbnN0IGhlYWRlckRyb3BEb3duID0gbmV3IGRyb3BEb3duKCBkcm9wRG93bkJ0bkxpc3QsIGRyb3BEb3duU3R5bGUgKTtcclxuXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKClcclxue1xyXG5cdCQoICcjbG9naW5CdG4nICkub24oICdjbGljaycsIHRvTG9naW5QYWdlICk7XHJcblx0JCggJyNsb2dvdXRCdG4nICkub24oICdjbGljaycsIGxvZ291dCApO1xyXG5cdCQoICcjb3Blbk5hdk1lbnVCdG4nICkub24oICdjbGljaycsIG9wZW5OYXZNZW51ICk7XHJcblx0JCggJyNjbG9zZU5hdk1lbnVCdG4nICkub24oICdjbGljaycsIGNsb3NlTmF2TWVudSApO1xyXG5cdCQoICcjc2VhcmNoQnRuJyApLm9uKCAnY2xpY2snLCBzZWFyY2hJdGVtICk7XHJcblx0JCggJyNoZWFkZXJTZWFyY2hJbnB1dCcgKS5rZXlwcmVzcyggKCkgPT4gXHJcblx0e1xyXG5cdFx0bGV0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG5cdFx0aWYoIGtleUNvZGUgPT09IDEzICl7IHNlYXJjaEl0ZW0oKTsgfVxyXG5cdH0gKTtcclxuXHRcclxuXHQvKiQuYWpheCgge1xyXG5cdFx0dXJsOiBcImxvZ2luL2dldFVzZXJEYXRhXCIsXHJcblx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdGRhdGE6IHsgXHJcblx0XHRcdFwibmFtZVwiOiBcInRlc3RcIlxyXG5cdFx0fSxcclxuXHRcdGVycm9yOiAoIHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yICkgPT4gXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUubG9nKCB4aHIuc3RhdHVzICk7XHJcblx0XHR9XHJcblx0fSApXHJcblx0LnRoZW4oICggZGF0YSApID0+IFxyXG5cdHtcclxuXHRcdGFsZXJ0KCBkYXRhICk7XHJcblx0fSApOyovXHJcbn0gKTtcclxuXHJcbiQoIGRvY3VtZW50ICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIFxyXG57XHJcblx0aWYgKCAkKCBldmVudC50YXJnZXQgKS5maW5kKCAnLm5hdi1tZW51LXNob3cnICkubGVuZ3RoICE9PSAwICkgXHJcblx0e1xyXG5cdFx0Y2xvc2VOYXZNZW51KCk7XHJcblx0fVxyXG59ICk7XHJcblxyXG5sZXQgb3Blbk5hdk1lbnUgPSAoKSA9PlxyXG57XHJcblx0JCggJyNuYXZNZW51JyApLnJlbW92ZUNsYXNzKCAnbmF2LW1lbnUtaGlkZGVuJyApO1xyXG5cdCQoICcjbmF2TWVudScgKS5hZGRDbGFzcyggJ25hdi1tZW51LXNob3cnICk7XHJcblx0JCggJyNtYWluRGl2JyApLmFkZENsYXNzKCAnZ3JheS1iYWNrZ3JvdW5kJyApO1xyXG59XHJcblxyXG5sZXQgY2xvc2VOYXZNZW51ID0gKCkgPT4gXHJcbntcclxuXHQkKCAnI25hdk1lbnUnICkucmVtb3ZlQ2xhc3MoICduYXYtbWVudS1zaG93JyApO1xyXG5cdCQoICcjbmF2TWVudScgKS5hZGRDbGFzcyggJ25hdi1tZW51LWhpZGRlbicgKTtcclxuXHQkKCAnI21haW5EaXYnICkucmVtb3ZlQ2xhc3MoICdncmF5LWJhY2tncm91bmQnICk7XHJcbn1cclxuXHJcbmxldCB0b0xvZ2luUGFnZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2xvZ2luJztcclxufVxyXG5cclxubGV0IHNlYXJjaEl0ZW0gPSBmdW5jdGlvbigpXHJcbntcclxuXHRsZXQgc2VhcmNoVHh0ID0gJCggJyNoZWFkZXJTZWFyY2hJbnB1dCcgKS52YWwoKTtcclxuXHRsZXQgZmlsdGVyVmFsID0gaGVhZGVyRHJvcERvd24uZ2V0RHJvcERvd25WYWwoKTtcclxuXHRsZXQgc2VhcmNoQ3JpdGVyYU9iaiA9IHsgJ3NlYXJjaFR4dCcgOiBzZWFyY2hUeHQsICdmaWx0ZXJWYWwnOiBmaWx0ZXJWYWwgfTtcclxuXHRcclxuLypcdCQuYWpheCgge1xyXG5cdFx0dXJsOiAnc2VhcmNoRmlsZScsXHJcblx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSggc2VhcmNoQ3JpdGVyYU9iaiApLFxyXG5cdFx0ZXJyb3I6ICggeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IgKSA9PiBcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5sb2coIHhoci5zdGF0dXMgKTtcclxuXHRcdH1cclxuXHR9IClcclxuXHQudGhlbiggKCBkYXRhICkgPT4gXHJcblx0eyBcclxuXHRcdGxldCByZXN1bHRPYmogPSBKU09OLnBhcnNlKCBkYXRhICk7XHJcblx0XHRcclxuXHR9ICk7Ki9cclxufVxyXG5cclxubGV0IGxvZ291dCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdCQuYWpheCgge1xyXG5cdFx0dXJsOiAnbG9nb3V0JyxcclxuXHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uKCB4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvciApIHt9XHJcblx0fSApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=