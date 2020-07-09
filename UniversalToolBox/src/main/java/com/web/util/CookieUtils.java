package com.web.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieUtils 
{
	private static final Integer DEFAULT_COOKIE_TIME_IN_SECOND = 30 * 60;
	
	public static void addCookie( String key, String value, HttpServletResponse response )
	{
		setCookie( key, value, DEFAULT_COOKIE_TIME_IN_SECOND, response );
	}
	
	public static void removeCookieByKey( String key, HttpServletResponse response )
	{
		setCookie( key, null, 0, response );
	}
	
	public static void setCookie( String key, String value, Integer maxAge, HttpServletResponse response )
	{
		Cookie cookie = new Cookie( key, value );
		
		// Cookies Would Only Be Transmitted Through HTTPS Protocol
		//cookie.setSecure( true );
		// Can Only Be Accessed Through HTML Header
		cookie.setHttpOnly( true );
		cookie.setMaxAge( maxAge );
		cookie.setPath( "/" );
		
		response.addCookie( cookie );
	}
	
	public static void removeAllCookies( HttpServletRequest request, HttpServletResponse response )
	{
		for ( Cookie cookie : request.getCookies() )
		{
			//cookie.setSecure( true );
			cookie.setHttpOnly( true );
			cookie.setMaxAge( 0 );
			cookie.setPath( "/" );
			cookie.setValue( "" );
			
			response.addCookie( cookie );
		}
	}
}
