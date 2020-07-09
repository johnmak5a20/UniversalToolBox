package com.web.jdbc;

import java.sql.PreparedStatement;

public interface PreparedStatementSetter < T > 
{
	public void setValues( PreparedStatement preparedStatment, T entity ); 
}
