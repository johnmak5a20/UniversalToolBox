(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document"],{

/***/ "./src/main/webapp/static/css/common.css":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/css/common.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/css/pages/document.css":
/*!*******************************************************!*\
  !*** ./src/main/webapp/static/css/pages/document.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/webapp/static/js/document.js":
/*!***********************************************!*\
  !*** ./src/main/webapp/static/js/document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_pages_document_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/document.css */ "./src/main/webapp/static/css/pages/document.css");
/* harmony import */ var _css_pages_document_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_pages_document_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/common.css */ "./src/main/webapp/static/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_1__);



$( document ).ready( function()
{
	$( '#downloadBtn' ).on( 'click', downloadFile );
	$( '#downloadAsZipBtn' ).on( 'click', createZipAnddownload );
} );


$( document ).ready( function()
		{
			$( '#browseBtn1' ).on( 'click', browseAndSelectFile1 );
			$( '#browseBtn2' ).on( 'click', browseAndSelectFile2 );
			$( '#browseBtn3' ).on( 'click', browseAndSelectFile3 );
			$( '#browseBtn4' ).on( 'click', browseAndSelectFile4 );
			$( '#uploadBtn' ).on( 'click', uploadFile );
		} );

		function browseAndSelectFile1()
		{
			$( '#fileData1' ).click();
		}

		function browseAndSelectFile2()
		{
			$( '#fileData2' ).click();
		}

		function browseAndSelectFile3()
		{
			$( '#fileData3' ).click();
		}

		function browseAndSelectFile4()
		{
			$( '#fileData4' ).click();
		}

		function uploadFile()
		{
			var formData = new FormData();
			formData.append( 'user', 'testing' );
			
			$("input[type='file']").each( function(i, file) {
				var size = file.files.length;
				
				for ( var i = 0; i < size; i++ )
				{
					formData.append('file', file.files[ i ]);
				}
			});
			
			$.ajax( {
				url: 'uploadDocument',
				type: 'POST',
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				error: ( xhr, ajaxOptions, thrownError ) => 
				{
					console.log( xhr.s0tatus );
				}
			} )
			.then( ( data ) => 
			{ 
				if ( data )
				{
				}
				else
				{
				}
			} );
		}



let downloadFile = function()
{
	window.location.href = 'file/user/john';
}

let createZipAnddownload = function()
{
	window.location.href = 'file/zip';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./src/main/webapp/static/js/document.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvc3RhdGljL2Nzcy9jb21tb24uY3NzPzExYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3N0YXRpYy9jc3MvcGFnZXMvZG9jdW1lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9zdGF0aWMvanMvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDVjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRvY3VtZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBkb2N1bWVudFN0eWxlIGZyb20gJy4uL2Nzcy9wYWdlcy9kb2N1bWVudC5jc3MnXHJcbmltcG9ydCBjb21tb25TdHlsZSBmcm9tICcuLi9jc3MvY29tbW9uLmNzcydcclxuXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKClcclxue1xyXG5cdCQoICcjZG93bmxvYWRCdG4nICkub24oICdjbGljaycsIGRvd25sb2FkRmlsZSApO1xyXG5cdCQoICcjZG93bmxvYWRBc1ppcEJ0bicgKS5vbiggJ2NsaWNrJywgY3JlYXRlWmlwQW5kZG93bmxvYWQgKTtcclxufSApO1xyXG5cclxubGV0IGRvd25sb2FkRmlsZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2ZpbGUvdXNlci9qb2huJztcclxufVxyXG5cclxubGV0IGNyZWF0ZVppcEFuZGRvd25sb2FkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnZmlsZS96aXAnO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=