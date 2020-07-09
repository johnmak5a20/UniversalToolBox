package com.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter ( "/*" )
public class AuthenticationFilter implements Filter 
{
	private static final long serialVersionUID = 1L;
	
	@Override
	public void init( FilterConfig arg0 ) throws ServletException
	{
		
	}
	
	@Override
	public void destroy()
	{
		
	}
	
	@Override
	public void doFilter( ServletRequest request, ServletResponse response, FilterChain chain ) throws IOException, ServletException
	{
		HttpServletRequest servletRequest = ( HttpServletRequest ) request;
		HttpServletResponse servletResponse = ( HttpServletResponse ) response;
		HttpSession session = servletRequest.getSession( false );
		
		String loginURI = servletRequest.getContextPath() + "/login";
		Boolean loggedIn = session != null && session.getAttribute( "user" ) != null;
		Boolean loginRequest = loginURI.equals( servletRequest.getRequestURI() );
		
		if ( loggedIn )
		{
			if ( loginRequest )
			{
				servletResponse.sendRedirect( servletRequest.getContextPath() + "/" );
			}
			else
			{
				chain.doFilter( servletRequest, servletResponse );
			}
		}
		else
		{
			chain.doFilter( servletRequest, servletResponse );
		}
	}
	
/*	private boolean isLoginRequired()
	{
		String requestURL = httpRequest.getRequestURL().toString();
		
		for ( String loginRequiredURL : loginRequiredURLs )
		{
			if ( requestURL.contains( loginRequiredURL ) )
			{
				return true;
			}
		}
		
		return false;
	}*/
}
