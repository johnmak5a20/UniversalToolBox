package com.web.jdbc.factory;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import com.web.common.constant.DATABASE;
import com.web.common.exception.CustomException;
import com.web.jdbc.TransactionManager;

public class TransactionManagerFactory
{
	private final static String MSSQL_JNDI = "java:comp/env/jdbc/MSSQL";
	private final static String MYSQL_JNDI = "java:comp/env/jdbc/MYSQL";
	private final static String POSTGRES_JNDI = "java:comp/env/jdbc/POSTGRES";
	
	// Factory Design Pattern, Returning Different Types of Instance
	public static TransactionManager getTransactionManager( DATABASE database ) throws Exception
	{
		String jndi = "";
		Context context = new InitialContext();

		switch( database )
		{
			case MSSQL:
				jndi = MSSQL_JNDI;
				break;
			case MYSQL: 
				jndi = MYSQL_JNDI;
				break;
			default: 
				throw new CustomException( "No Corresponding DataSource is Found." );
		}
		
		Object dataSourceRef = context.lookup( jndi );
		DataSource dataSource = ( DataSource ) dataSourceRef;
		
		return new TransactionManager( dataSource );
	}
}