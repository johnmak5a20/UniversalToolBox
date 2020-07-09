import documentStyle from '../css/pages/document.css'
import commonStyle from '../css/common.css'

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
