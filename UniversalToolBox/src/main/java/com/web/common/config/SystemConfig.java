package com.web.common.config;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class SystemConfig
{
	private static String projectRootPath = ""; 
	private static String tempFolderDirectoryForFileDownload = "";
	
	private final static Map< String, Object > systemConfig = new HashMap<>();
	private final static Map< String, Object > customisedConfig = new HashMap<>();
	private final static String FOLDER_DIRECTORY_FOR_FILE_UPLOAD = System.getProperty( "catalina.base" ) + "\\data\\";
	
	public static void initializeConfig() throws Exception
	{
		tempFolderDirectoryForFileDownload = getProjectRootPath() + "\\temp-resources\\";
		
		Properties systemProperties = new Properties();
		Properties customisedProperties = new Properties();
		ClassLoader loader = Thread.currentThread().getContextClassLoader();

		systemProperties.load( loader.getResourceAsStream( "system_config.properties" ) );
		customisedProperties.load( loader.getResourceAsStream( "customised_config.properties" ) );
		
		systemProperties.forEach( ( key, value ) -> { systemConfig.put( ( String ) key, value ); } );
		customisedProperties.forEach( ( key, value ) -> { customisedConfig.put( ( String ) key, value ); } );
	}
	
	public static String getProjectRootPath()
	{
		return projectRootPath;
	}
	
	public static void setProjectRootPath( String projectRootPath )
	{
		SystemConfig.projectRootPath = projectRootPath;
	}
	
	public static Map< String, Object > getSystemConfig()
	{
		return Collections.unmodifiableMap( systemConfig );
	}
	
	public static Map< String, Object > getCustomisedConfig()
	{
		return Collections.unmodifiableMap( customisedConfig );
	}
	
	public static String getFolderDirectoryForFileUpload()
	{
		return FOLDER_DIRECTORY_FOR_FILE_UPLOAD;
	}
	
	public static String getTempFolderDirectoryForFileDownload()
	{
		return tempFolderDirectoryForFileDownload;
	}
}
