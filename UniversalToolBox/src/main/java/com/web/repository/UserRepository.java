package com.web.repository;

import java.sql.Connection;

import com.web.model.User;

public interface UserRepository
{
	public void createUser( Connection sqlConnection, User user ) throws Exception;
	public User getUserByUsername( Connection sqlConnection, String username ) throws Exception;
	public Long countNumberOfUser( Connection sqlConnection, String username ) throws Exception;
}
