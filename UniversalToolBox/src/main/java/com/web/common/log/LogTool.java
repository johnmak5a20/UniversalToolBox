package com.web.common.log;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;

public class LogTool 
{
	private final static Logger logger = ( Logger ) LogManager.getLogger( LogTool.class );
	
	public static void printError( Exception e )
	{
		logger.error( e.getMessage(), e );
	}
	
	public static void printInfo( String message )
	{
		logger.info( message );
	}
}
