package com.web.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Pattern;

import com.google.gson.Gson;

public class Test2 {
	public static void main( String arg[] )
	{
		String reg = "^Start.*End$";
		Boolean result = Pattern.matches( reg, "StartTestEnd" );
		String a = "";
		System.out.println( a );
		System.out.println( "result: " + result );
		
		String reg2 = "[A-Za-z]\\s[0-9]";
		Boolean result2 = Pattern.matches( reg2, "A 0" );
		System.out.println( "result2: " + result2 );
		
		String reg3 = "a+b";
		Boolean result3 = Pattern.matches( reg3, "abbbbbb" );
		System.out.println( "result3: " + result3 );
		
		String reg4 = "\\([a-z]\\)";
		Boolean result4 = Pattern.matches( reg4, "(a)" );
		System.out.println( "result4: " + result4 );
		
		String reg5 = "\\d";
		Boolean result5 = Pattern.matches( reg5, "1" );
		System.out.println( "result5: " + result5 );
		
		Gson gson = new Gson();
		Integer[] sourceArray = {20, 1, 2, 37, 49, 15};
		List < Integer > targetList = Arrays.asList( sourceArray );
		System.out.println( gson.toJson( targetList ) );
		List < Integer > list2 = new ArrayList <>( targetList );
		list2.add( 8 );
		System.out.println( gson.toJson( list2 ) );
		Collections.sort( list2, Collections.reverseOrder() );
		System.out.println( gson.toJson( list2 ) );
		Integer[] ar = list2.toArray( new Integer[ 0 ] ); 
		System.out.println( gson.toJson( ar ) );
		System.out.println( ar.length );
		
		for ( int i = list2.size() - 1; i > 0; i-- )
		{
			if ( list2.get( i ) > 3 )
			{
				list2.remove( i );
			}
		}
		
		System.out.println( gson.toJson( list2 ) );
		
		Integer[] arry = list2.toArray( new Integer[0] );
		System.out.println( gson.toJson( arry ) );
		System.out.println( arry.length );
	}
}
