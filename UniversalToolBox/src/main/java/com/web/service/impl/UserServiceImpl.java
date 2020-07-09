package com.web.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.web.common.constant.DATABASE;
import com.web.jdbc.TransactionManager;
import com.web.jdbc.factory.TransactionManagerFactory;
import com.web.model.User;
import com.web.repository.UserRepository;
import com.web.service.UserService;

@Service( "userService" )
public class UserServiceImpl implements UserService
{
	@Autowired
	@Qualifier( "userRepository" )
	private UserRepository userRepository;
	
	@Override
	public Boolean validateUser( User user ) throws Exception
	{
		Map< String, Object > resultMap = new HashMap<>();
		
		TransactionManager transactionManager = TransactionManagerFactory.getTransactionManager( DATABASE.MSSQL );
		transactionManager.executeTransaction( ( sqlConnection ) -> {
			try
			{
				String rawPassword = user.getPassword();
				User validatedUser = userRepository.getUserByUsername( sqlConnection, user.getUsername() );
				String encodedPassword = validatedUser.getPassword();
				Boolean isValid = false;
				
				if ( encodedPassword.equals( rawPassword ) )
				{
					isValid = true;
				}
				
				resultMap.put( "IS_VALID_USER", isValid );
			}
			catch ( Exception e )
			{
				e.printStackTrace();
			}
		} );
		
		return ( Boolean ) resultMap.get( "IS_VALID_USER" );
	}

	@Override
	public User getUserProfile( String username ) throws Exception
	{
		HashMap< String, User >userResultMap = new HashMap<>();
		
		TransactionManager transactionManager = TransactionManagerFactory.getTransactionManager( DATABASE.MSSQL );
		transactionManager.executeTransaction( ( sqlConnection ) -> {
			try
			{
				User validatedUser = userRepository.getUserByUsername( sqlConnection, username );
				
				if ( validatedUser != null )
				{
					validatedUser.setPassword( null );
				}
				
				userResultMap.put( "USER_PROFILE", validatedUser );
			}
			catch ( Exception e )
			{
				e.printStackTrace();
			}
		} );
		
		return userResultMap.get( "USER_PROFILE" );
	}
	
	@Override
	public Boolean checkIfUsernameExists( String username ) throws Exception
	{
		Map < String, Object > resultMap = new HashMap<>();
		
		TransactionManager transactionManager = TransactionManagerFactory.getTransactionManager( DATABASE.MSSQL );
		transactionManager.executeTransaction( ( sqlConnection ) -> {
			try
			{
				Long numberOfUser = userRepository.countNumberOfUser( sqlConnection, username );
				Boolean isExistingUsername = false;
				
				if ( numberOfUser > 0 )
				{
					isExistingUsername = true;
				}
				
				resultMap.put( "IS_EXISTING_USERNAME", isExistingUsername );
			}
			catch ( Exception e )
			{
				e.printStackTrace();
			}
		} );
		
		return ( Boolean ) resultMap.get( "IS_EXISTING_USERNAME" );
	}
	
	public void register( User user ) throws Exception
	{
		TransactionManager transactionManager = TransactionManagerFactory.getTransactionManager( DATABASE.MYSQL );
		transactionManager.executeTransaction( ( sqlConnection ) -> {
			try
			{
				userRepository.createUser( sqlConnection, user );
			}
			catch ( Exception e )
			{
				e.printStackTrace();
			}
		} );
	}
}
