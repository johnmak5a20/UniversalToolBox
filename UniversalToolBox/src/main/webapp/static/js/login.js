import commonStyle from '../css/common.css'
import loginStyle from '../css/pages/login.css'

import tabIcon from '../img/TabIcon.png'
import logo from '../img/Logo.png'

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
	.then( function( isValidUser )
	{
		if ( isValidUser )
		{
			alert( 'Welcome' );
			let splitedDir = location.href.split( '/' );
			location.href = location.href.substring( 0, location.href.indexOf( splitedDir[ splitedDir.length - 1 ] ) );
		}
		else
		{
			alert( 'Incorrect Username or Password!' );
		}
	} );
}
