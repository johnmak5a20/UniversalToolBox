package com.web.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Collection;
import java.util.Date;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletResponse;

import com.web.common.constant.DATE_FORMAT;

public class ZipUtils 
{
	public static void createZip( Collection < File > srcFileList, String destDir ) throws Exception
	{
		compressFiles( new FileOutputStream( destDir ), srcFileList );
	}
	
	public static void createZipAndDownload( Collection < File > srcFileList, HttpServletResponse response ) throws Exception
	{
		// DATE_FORMAT enum for Type Safety and Value Safety
		Date date = new Date();
		String zipName = DateUtils.formatDateToString( date, DATE_FORMAT.DAY_MONTH_YEAR_WITH_HYPHEN_SEPEARTOR ) + "_" + "Compress.zip"; 
		
		response.setHeader( "Content-Disposition", "attachment; filename=" + zipName );
		response.setContentType( "application/zip" );
		
		compressFiles( response.getOutputStream(), srcFileList );
	}
	
	public static void compressFiles( OutputStream fos, Collection < File > srcFileList ) throws Exception
	{
		try ( ZipOutputStream zipOut = new ZipOutputStream( fos ) )
		{
			srcFileList.forEach( srcFile -> {
				try ( FileInputStream fis = new FileInputStream( srcFile ) )
				{
					ZipEntry zipEntry = new ZipEntry( srcFile.getName() );
					byte[] bytes = new byte[ 1024 ];
					int length;
					
					zipOut.putNextEntry( zipEntry );
					
					while ( ( length = fis.read( bytes ) ) >= 0 )
					{
						zipOut.write( bytes, 0, length );
					}
				}
				catch( Exception e )
				{
					e.printStackTrace();
				}
			} );
		}
		catch( Exception e )
		{
			e.printStackTrace();
		}
		
		// or pass one more parameter - if ( autoCloseable ) { fos.close(); }
		if( fos instanceof FileOutputStream )
		{
			fos.close();
		}
	}	
}
