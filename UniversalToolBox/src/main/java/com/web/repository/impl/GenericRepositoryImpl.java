package com.web.repository.impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.web.jdbc.EntityListMapper;
import com.web.jdbc.PreparedStatementSetter;
import com.web.repository.GenericRepository;

public abstract class GenericRepositoryImpl < T > implements GenericRepository < T >
{
	private final int BATCH_CHUNK_SIZE = 300;
	
	@Override
	public void create( Connection sqlConnection, String sqlStr, List< Object > parameterList, T entity ) throws Exception
	{
		try( PreparedStatement preparedStatement = sqlConnection.prepareStatement( sqlStr, Statement.RETURN_GENERATED_KEYS ) )
		{
			for ( int i = 0; i < parameterList.size(); i++ )
			{
				preparedStatement.setObject( i + 1, parameterList.get( i ) );
			}
			
			preparedStatement.executeUpdate();
			
			ResultSet keyResultSet = preparedStatement.getGeneratedKeys();
			if ( keyResultSet.next() ) 
			{ 
				//entity.setId( ( Long ) keyResultSet.getLong( 1 ) ); 
			}
		}
	}
	
	@Override
	public List read( Connection sqlConnection, String sqlStr, List< Object > parameterList, EntityListMapper< T > entityListMapper ) throws Exception
	{
		List< Map < String, Object > > resultMapList = new ArrayList<>();
		
		try( PreparedStatement preparedStatement = sqlConnection.prepareStatement( sqlStr ); )
		{
			if ( parameterList != null && parameterList.size() > 0 )
			{
				for ( int i = 0; i < parameterList.size(); i++ ) 
				{
					preparedStatement.setObject( i + 1, parameterList.get( i ) );
				}
			}
			
			try( ResultSet resultSet = preparedStatement.executeQuery(); )
			{
				List< String > columnLabelList = new ArrayList<>();
				final int numberOfColumns = resultSet.getMetaData().getColumnCount();
				
				for ( int i = 0; i < numberOfColumns; i++ ) 
				{
					columnLabelList.add( resultSet.getMetaData().getColumnLabel( i + 1 ) );
				}
				
				while ( resultSet.next() ) 
				{
					Map< String, Object > resultMap = new HashMap<>();
					columnLabelList.forEach( columnLabel -> { try { resultMap.put( columnLabel, resultSet.getObject( columnLabel ) ); } catch ( SQLException e ){ e.printStackTrace(); } } );
					
					resultMapList.add( resultMap );
				}
				
				if ( entityListMapper != null )
				{
					return entityListMapper.transform( resultMapList );
				}
				else
				{
					return resultMapList;
				}
			}
		}
	}
	
	@Override
	public void updateOrDelete( Connection sqlConnection, String sqlStr, List< Object > parameterList ) throws Exception
	{
		try( PreparedStatement preparedStatement = sqlConnection.prepareStatement( sqlStr ) )
		{
			for ( int i = 0; i < parameterList.size(); i++ )
			{
				preparedStatement.setObject( i + 1, parameterList.get( i ) );
			}
			
			preparedStatement.executeUpdate();
		}
	}
	
	@Override
	public void executeBatch( Connection sqlConnection, String sqlStr, List< T > entityList, PreparedStatementSetter< T > preparedStatementSetter ) throws Exception
	{
		try ( PreparedStatement preparedStatement = sqlConnection.prepareStatement( sqlStr ); )
		{			
			for ( int i = 0; i < entityList.size(); i++ )
			{
				preparedStatementSetter.setValues( preparedStatement, entityList.get( i ) );
				preparedStatement.addBatch();
				
				if ( i % BATCH_CHUNK_SIZE == 0 || i == entityList.size() - 1 )
				{	
					preparedStatement.executeBatch();
					ResultSet keyResultSet = preparedStatement.getGeneratedKeys();
					
					if ( keyResultSet.next() ) 
					{ 
						//entityList.get( i ).setId( ( long ) keyResultSet.getLong( 1 ) );
					}
				}
			}
		}
	}
	
	@Override
	public void executeStoredProcedure( Connection sqlConnection, String sqlStr, List < Object > parameterList ) throws Exception
	{
		try( CallableStatement callableStatement = sqlConnection.prepareCall( sqlStr ) )
		{
			for ( int i = 0; i < parameterList.size(); i++ )
			{
				callableStatement.setObject( i + 1, parameterList.get( i ) );
			}
			
			callableStatement.execute();
		}
	}
}
