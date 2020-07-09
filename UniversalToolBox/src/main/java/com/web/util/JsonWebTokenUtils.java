package com.web.util;

import java.util.Date;
import java.util.HashMap;

import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JsonWebTokenUtils 
{
	public static String createJWT( String issuer, HashMap< String, Object > map, String signingKey )
	{
		SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
		
		long nowMillis = System.currentTimeMillis();
		Date now = new Date( nowMillis );
		
		JwtBuilder builder = 
				Jwts.builder()
					.setIssuedAt( now )
					.setExpiration( new Date( nowMillis + 3600 ) )
					.setIssuer( issuer );
		
		map.forEach( ( key, value ) -> {
			builder.claim( key, value );
		} );
		
		builder.signWith( signatureAlgorithm, signingKey );
		return builder.compact();
	}
	
	public static Claims parseJWT( String jwt ) throws Exception
	{
		Claims claims = 
				Jwts.parser()
				.setSigningKey( DatatypeConverter.parseBase64Binary( "signingKey" ) )
				.parseClaimsJws( jwt ).getBody();
		
		return claims;
	}
}
