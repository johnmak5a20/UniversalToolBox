import dropDown from './dropDown'

import commonStyle from '../css/common.css'
import mainStyle from '../css/pages/main.css'
import menuStyle from '../css/pages/menu.css'

import tabIcon from '../img/TabIcon.png'
import TmpUser from '../img/TempUser.png'

//test
const dropDownBtnList = [ 'mainHeaderDropdown', 'subHeaderDropdown' ];
const dropDownStyle = 
{ 
	dropDownListContainer: 'dropdown-list', 
	dropDownListItem: 'header-filter-drop-down-item' 
};
const headerDropDown = new dropDown( dropDownBtnList, dropDownStyle );

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
	} )
	.then( () => {
		location.reload();
	} );
}
