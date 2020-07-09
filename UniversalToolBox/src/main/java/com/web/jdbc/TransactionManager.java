package com.web.jdbc;

import javax.sql.DataSource;
import java.sql.Connection;

public class TransactionManager 
{
	private DataSource dataSource;
	private Connection connection;
	
	public TransactionManager( DataSource dataSource )
	{
		this.dataSource = dataSource;
	}
	
	// Template Method Design Pattern, Depending on Anonymous Class 
	public void executeTransaction( DbAction dbAction ) throws Exception
	{
		try
		{
			connection = dataSource.getConnection();
			connection.setAutoCommit( false );
			dbAction.execute( connection );
			connection.commit();
		}
		catch( Exception e )
		{
			e.printStackTrace();
			connection.rollback();
			throw e;
		}
		finally
		{
			if ( connection != null ) 
			{
				connection.close(); 
			}
		}
	}
}
