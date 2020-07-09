package com.web.jdbc;

import java.sql.Connection;

public interface DbAction
{
	public abstract void execute( Connection connection ) throws Exception;
}
