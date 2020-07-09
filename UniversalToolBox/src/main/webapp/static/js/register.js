import commonStyle from '../css/common.css'
import loginStyle from '../css/pages/register.css'
import registerStyle from '../css/pages/register.css'

import tabIcon from '../img/TabIcon.png'
import registerPic from '../img/Register.png'

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
		.then( function( isExistingUsername )
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