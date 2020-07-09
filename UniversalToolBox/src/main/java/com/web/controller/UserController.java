package com.web.controller;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.web.common.config.SystemConfig;
import com.web.model.User;
import com.web.service.UserService;
import org.apache.commons.io.FileUtils;

@Controller
public class UserController
{
	@Autowired
	@Qualifier( "userService" )
	private UserService userService;
	
	@GetMapping( "/login" )
	public String getLoginPage() throws Exception
	{
		return "login";
	}
	
	@GetMapping( "logout" )
	public void logout( HttpServletRequest request,
			HttpServletResponse response ) throws Exception
	{
		HttpSession session = request.getSession();
		session.invalidate();
	}
	
	@PostMapping( "validateUser" )
	@ResponseBody
	public Boolean validateUser( @RequestParam String userAccountJson,
			HttpServletRequest request,
			HttpServletResponse response ) throws Exception
	{
		User user = new Gson().fromJson( userAccountJson, new TypeToken< User >(){}.getType() );
		Boolean isLogin = userService.validateUser( user );
		
		if ( isLogin )
		{
			HttpSession session = request.getSession( false );
			session.setAttribute( "user", user.getUsername() );
		}
		
		return isLogin;
	}
	
	@GetMapping( "getUserProfile" )
	@ResponseBody
	public String getUserProfile( HttpServletRequest request,
			HttpServletResponse response ) throws Exception
	{
		HttpSession session = request.getSession( false );
		String username = ( String ) session.getAttribute( "user" );
		User user = userService.getUserProfile( username );
		
		if ( user != null )
		{
			File sourceFile = new File( user.getProfileImgPath() );
			File destFolder = new File( SystemConfig.getTempFolderDirectoryForFileDownload() );
			FileUtils.copyFileToDirectory( sourceFile, destFolder );
			user.setProfileImgPath( "temp-resources/" +  sourceFile.getName() );
		}
		
		return new Gson().toJson( user );
	}
	
	@GetMapping( "register" )
	public String getRegisterPage(HttpServletRequest request,
			HttpServletResponse response) throws Exception
	{
		return "register";
	}
	
	@PostMapping( "register/createNewAccount" )
	@ResponseBody
	public void createNewAccount( @RequestParam( value = "imgFile", required = false ) MultipartFile file,
				@RequestParam( value = "userInfoJson", required = false ) String userInfoJson ) throws Exception
	{
		Gson gson = new Gson();
		User user = gson.fromJson( userInfoJson, new TypeToken< User >(){}.getType() );
/*		String destFilePath = SystemConfig.getFolderDirectoryForFileUpload()
				+ UUID.randomUUID().toString()
				+ FileUtils.getExtensionByFilename( file.getOriginalFilename(), true );
		
		file.transferTo( new File( destFilePath ) );
		user.setProfileImgPath( destFilePath );*/
		
		userService.register( user );
	}
	
	@PostMapping( "register/checkIfUsernameExists" )
	@ResponseBody
	public Boolean checkUsernameExists( @RequestParam String username ) throws Exception
	{
		return userService.checkIfUsernameExists( username );
	}
	
	@GetMapping( "profile" )
	public String getUserProfilePage() throws Exception
	{
		return "profile";
	}
}
