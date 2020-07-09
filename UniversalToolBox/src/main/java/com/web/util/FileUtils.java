package com.web.util;

import java.io.File;
import java.io.FileInputStream;
import java.util.TreeMap;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

public class FileUtils 
{
	// String Key in TreeMap is Case Insensitive
	private static final TreeMap < String, String > FILE_EXTENSION_TO_MIME_TYPE_MAP = new TreeMap < String, String >( String.CASE_INSENSITIVE_ORDER );
	
	// Execute The Code Inside The Block When The Class is Loaded
	static
	{
		initializeFileExtToMimeTypeMap();
	}
	
	public static void cleanDirectory( File folder ) throws Exception
	{
		if ( folder.listFiles() != null )
		{
			for ( File file : folder.listFiles() )
			{
				if ( file.isFile() && ! file.isHidden() )
				{
					file.delete();
				}
				else
				{
					cleanDirectory( file );
					file.delete();
				}
			}
		}
	}
	
	public static String getExtensionByFilename( String filename, Boolean isDotIncluded ) throws Exception
	{
		return ( isDotIncluded ) ? filename.substring( filename.lastIndexOf( "." ) ) : filename.substring( filename.lastIndexOf( "." ) + 1 ); 
	}
	
	public static void downloadFile( File file, HttpServletResponse response ) throws Exception
	{
		response.setHeader( "Content-Disposition", "attachment; filename=" + file.getName() );
		response.setContentType( FILE_EXTENSION_TO_MIME_TYPE_MAP.get( getExtensionByFilename( file.getName(), false ) ) );
		response.setContentLength( ( int ) file.length() );
		
		IOUtils.copy( new FileInputStream( file ), response.getOutputStream() );
	}
	
	public static void initializeFileExtToMimeTypeMap()
	{
		// Image
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "png", "image/png" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "gif", "image/gif" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "jpg", "image/jpeg" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "jpeg", "image/jpeg" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "tiff", "image/tiff" );
		
		// Document
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "txt", "text/plain" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "pdf", "application/pdf" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "doc", "application/msword" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "doc", "application/msword" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "xls", "application/vnd.ms-excel" );
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" );
		
		// Other
		FILE_EXTENSION_TO_MIME_TYPE_MAP.put( "zip", "application/zip" );
	}
}
