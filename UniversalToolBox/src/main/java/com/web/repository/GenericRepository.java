package com.web.repository;

import java.sql.Connection;
import java.util.List;

import com.web.jdbc.EntityListMapper;
import com.web.jdbc.PreparedStatementSetter;

public interface GenericRepository < T >
{
	public void create( Connection sqlConnection, String sqlStr, List< Object > parameterList, T entity ) throws Exception;
	public List read( Connection sqlConnection, String sqlStr, List< Object > parameterList, EntityListMapper< T > enitityListMapper ) throws Exception;
	public void updateOrDelete( Connection sqlConnection, String sqlStr, List< Object > parameterList ) throws Exception;
	public void executeBatch( Connection sqlConnection, String sqlStr, List< T > entityList, PreparedStatementSetter< T > preparedStatementSetter ) throws Exception;
	public void executeStoredProcedure( Connection sqlConnection, String sqlStr, List< Object > parameterList ) throws Exception;
};
