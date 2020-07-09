package com.web.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.web.common.exception.CustomException;
import com.web.model.User;

public class ListUtils 
{
	public final static String UNCHANGED_ELEMENT_LIST_KEY = "UNCHANGED_ELEMENT_LIST";
	public final static String ADD_ELEMENT_LIST_KEY = "ADD_ELEMENT_LIST";
	public final static String EDIT_ELEMENT_LIST_KEY = "EDIT_ELEMENT_LIST";
	public final static String DELETE_ELEMENT_LIST_KEY = "DELETE_ELEMENT_LIST";
	
	public static < E > HashMap < String, List< E > > getComparedListMap( List< E > oldElementList, List< E > newElementList ) throws Exception
	{
		HashMap < String, List< E > > resultMap = new HashMap<>();
		List < Long > oldElementIdList = new ArrayList<>();
		List < Long > newElementIdList = new ArrayList<>();
		
		List < E > unchangedElementList = new ArrayList<>();
		List < E > elementAdditionList = new ArrayList<>(); 
		List < E > elementEditionList = new ArrayList<>();
		List < E > elementDeletionList = new ArrayList<>();
		
		for ( E oldElement : oldElementList ) 
		{
			if ( ! oldElementIdList.contains( oldElement.getId() ) )
			{
				oldElementIdList.add( oldElement.getId() );
			}
			else
			{
				throw new CustomException( "Duplicate Id in Old Element List" );
			}
		}
		
		for ( E newElement : newElementList )
		{
			if ( ! newElementIdList.contains( newElement.getId() ) )
			{
				newElementIdList.add( newElement.getId() );
			}
			else
			{
				throw new CustomException( "Duplicate Id in New Element List" );
			}
		};
		
		oldElementList.forEach( oldElement -> {
			if ( ! newElementList.contains( oldElement ) )
			{
				if ( ! newElementIdList.contains( oldElement.getId() ) )
				{
					elementDeletionList.add( oldElement );
				}
			}
		} );
		
		newElementList.forEach( newElement -> {
			if ( ! oldElementList.contains( newElement ) )
			{
				if ( oldElementIdList.contains( newElement.getId() ) )
				{
					elementEditionList.add( newElement );
				}
				else
				{
					elementAdditionList.add( newElement );
				}
			}
			else
			{
				unchangedElementList.add( newElement );
			}
		} );
		
		resultMap.put( UNCHANGED_ELEMENT_LIST_KEY, unchangedElementList );
		resultMap.put( ADD_ELEMENT_LIST_KEY, elementAdditionList );
		resultMap.put( EDIT_ELEMENT_LIST_KEY, elementEditionList );
		resultMap.put( DELETE_ELEMENT_LIST_KEY, elementDeletionList );
		
		return resultMap;
	}
}
