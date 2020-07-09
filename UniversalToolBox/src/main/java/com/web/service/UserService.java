package com.web.service;

import com.web.model.User;

public interface UserService
{
	public Boolean validateUser( User user ) throws Exception;
	public Boolean checkIfUsernameExists( String username ) throws Exception;
	public User getUserProfile( String username ) throws Exception;
	public void register( User user ) throws Exception;
}
