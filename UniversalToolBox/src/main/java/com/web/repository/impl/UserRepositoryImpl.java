package com.web.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.web.jdbc.EntityListMapper;
import com.web.model.User;
import com.web.repository.UserRepository;

@Repository( "userRepository" )
public class UserRepositoryImpl extends GenericRepositoryImpl < User > implements UserRepository
{
	// Data Access Management
	@Override
	public void createUser( Connection sqlConnection, User user ) throws Exception
	{
		String sqlString = "";
		StringBuilder sb = new StringBuilder();
		sb.append( "INSERT INTO user                                         " );
		sb.append( " ( username, password, firstname, lastname,              " );
		sb.append( " email, profile_img_path,                                " );
		sb.append( " created_date, updated_date )                            " );
		sb.append( "VALUES( ?, ?, ?, ?, ?, ?, ?, ? )                         " );
		sqlString = sb.toString();
		
		List< Object > parameterList = Arrays.asList( user.getUsername(), user.getPassword(), 
				user.getFirstName(), user.getLastName(), user.getEmail(), user.getProfileImgPath(), 
				new Date(), new Date() );
		create( sqlConnection, sqlString, parameterList, user );
	}

	@Override
	public User getUserByUsername( Connection sqlConnection, String username ) throws Exception
	{
		String sqlString = "";
		StringBuilder sb = new StringBuilder();
		List < User > resultList = new ArrayList<>();
		User validatedUser = null;
		
		sb.append( "SELECT user_id, password,            " );
		sb.append( "profile_img_path                     " );
		sb.append( "FROM user_info                       " );
		sb.append( "WHERE user_id = ?                    " );
		sqlString = sb.toString();
		
		List< Object > parameterList = Arrays.asList( username );
		EntityListMapper < User > entityListMapper = resultMapList -> {
			List< User > userList = new ArrayList<>();
			User userItem = new User();
			
			if ( resultMapList != null ) 
			{
				resultMapList.forEach( resultMap -> {
/*					userItem.setUsername( ( String ) resultMap.get( "username" ) );
					userItem.setPassword( ( String ) resultMap.get( "password" ) );
					userItem.setEmail( ( String ) resultMap.get( "email" ) );
					userItem.setFirstName( ( String ) resultMap.get( "firstname" ) );
					userItem.setLastName( ( String ) resultMap.get( "lastname" ) );*/
					userItem.setUsername( ( String ) resultMap.get( "user_id" ) );
					userItem.setPassword( ( String ) resultMap.get( "password" ) );
					userItem.setProfileImgPath( ( String ) resultMap.get( "profile_img_path" ) );
					userList.add( userItem );
				} );
			}
			return userList;
		};
		
		resultList = read( sqlConnection, sqlString, parameterList, entityListMapper );
		if ( resultList.size() > 0 )
		{
			validatedUser = resultList.get( 0 );
		}
		
		return validatedUser;
	}
	
	@Override
	public Long countNumberOfUser( Connection sqlConnection, String username ) throws Exception
	{
		String sqlString = "";
		Long numberOfUser = 0L;
		StringBuilder sb = new StringBuilder();
		sb.append( "SELECT COUNT( username ) AS numberOfUser FROM user " );
		sb.append( "WHERE username = ?                                 " );
		sqlString = sb.toString();
		
		List< Object > parameterList = Arrays.asList( username );
		List< Map< String, Object > > resultMapList = read( sqlConnection, sqlString, parameterList, null );
		numberOfUser = ( Long ) resultMapList.get( 0 ).get( "numberOfUser" );
		
		return numberOfUser;
	}
}
