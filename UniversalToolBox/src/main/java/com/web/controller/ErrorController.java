package com.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ErrorController 
{
	@GetMapping( "error" )
	public ModelAndView renderErrorPage( HttpServletRequest httpRequest )
	{
		ModelAndView errorPage = new ModelAndView( "error" );
		Integer httpErrorCode = ( Integer ) httpRequest.getAttribute( "javax.servlet.error.status_code" );
		String errorMsg = "";
		
		switch ( httpErrorCode )
		{
			case 404 :
			{
				errorMsg = "Resource Not Found";
				break;
			}
			case 500 :
			{
				errorMsg = "Internal Server Error";
				break;
			}
		}
		
		errorPage.addObject( "errorMsg", errorMsg );
		errorPage.addObject( "errorCode", httpErrorCode );
		
		return errorPage;
	}
}
