package com.web.jdbc;

import java.util.List;
import java.util.Map;

public interface EntityListMapper < T >
{
	public List< T > transform( List< Map< String, Object > > resultMapList );
}
