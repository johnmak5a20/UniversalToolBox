package com.web;

import java.io.File;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.web.util.FileUtils;

import com.web.common.config.SystemConfig;

public class ContextListener implements ServletContextListener
{
	@Override
	public void contextInitialized( ServletContextEvent servletContextEvent )
	{
		try
		{
			String rootPath = servletContextEvent.getServletContext().getRealPath( "/" );
			SystemConfig.setProjectRootPath( rootPath );
			SystemConfig.initializeConfig();
			FileUtils.cleanDirectory( new File( SystemConfig.getTempFolderDirectoryForFileDownload() ) );
		}
		catch ( Exception e )
		{
			e.printStackTrace();
		}
	}
	
	@Override
	public void contextDestroyed( ServletContextEvent arg0 )
	{
		
	}
}
