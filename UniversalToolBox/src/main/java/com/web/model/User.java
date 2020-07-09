package com.web.model;

import java.util.Date;

public class User implements Cloneable
{
	private Long id;
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private String profileImgPath;
	private Date createdDate;
	private Date lastUpdatedDate;

	@Override
	public boolean equals( Object obj )
	{
		if ( obj == null )
		{
			return false;
		}
		
		if ( ! ( obj instanceof User ) )
		{
			return false;
		}
		
		User user = ( User ) obj;
		
		if ( this == user )
		{
			return true;
		}
		
		return ( 
				( this.getId().equals( user.getId() ) )
				&& ( this.getUsername().equals( user.getUsername() ) )
				&& ( this.getPassword().equals( user.getPassword() ) )
				&& ( this.getFirstName().equals( user.getFirstName() ) )
				&& ( this.getLastName().equals( user.getLastName() ) )
				&& ( this.getEmail().equals( user.getEmail() ) ) );
	}
	
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		
		result = prime * result + ( ( createdDate == null ) ? 0 : createdDate.hashCode() );
		result = prime * result + ( ( email == null ) ? 0 : email.hashCode() );
		result = prime * result + ( ( firstName == null ) ? 0 : firstName.hashCode() );
		result = prime * result + ( ( id == null ) ? 0 : id.hashCode() );
		result = prime * result + ( ( lastName == null ) ? 0 : lastName.hashCode() );
		result = prime * result + ( ( lastUpdatedDate == null ) ? 0 : lastUpdatedDate.hashCode() );
		result = prime * result + ( ( password == null ) ? 0 : password.hashCode() );
		result = prime * result + ( ( profileImgPath == null ) ? 0 : profileImgPath.hashCode() );
		result = prime * result + ( ( username == null ) ? 0 : username.hashCode() );
		
		return result;
	}
	
	public Long getId()
	{
		return id;
	}

	public void setId( Long id )
	{
		this.id = id;
	}

	public String getUsername()
	{
		return username;
	}
	
	public void setUsername( String username )
	{
		this.username = username;
	}
	
	public String getPassword()
	{
		return password;
	}

	public void setPassword( String password )
	{
		this.password = password;
	}
	
	public String getFirstName()
	{
		return firstName;
	}
	
	public void setFirstName( String firstName )
	{
		this.firstName = firstName;
	}
	
	public String getLastName()
	{
		return lastName;
	}
	
	public void setLastName( String lastName )
	{
		this.lastName = lastName;
	}
	
	public String getEmail()
	{
		return email;
	}
	
	public void setEmail( String email )
	{
		this.email = email;
	}
	
	public String getProfileImgPath()
	{
		return profileImgPath;
	}

	public void setProfileImgPath( String profileImgPath )
	{
		this.profileImgPath = profileImgPath;
	}
	
	public Date getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate( Date createdDate )
	{
		this.createdDate = createdDate;
	}

	public Date getLastUpdatedDate()
	{
		return lastUpdatedDate;
	}

	public void setUpdatedDate( Date lastUpdatedDate )
	{
		this.lastUpdatedDate = lastUpdatedDate;
	}
}
