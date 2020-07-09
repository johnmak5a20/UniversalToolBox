package com.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.web.common.constant.DATE_FORMAT;

public class DateUtils 
{
	public static String formatDateToString( Date date, DATE_FORMAT dateFormat ) throws Exception
	{
		SimpleDateFormat formatter = new SimpleDateFormat( dateFormat.getDateFormatStr() );
		String formattedDateStr = formatter.format( date );
		return formattedDateStr;
	}
	
	public static Date parseDateFromString( String dateStr, DATE_FORMAT dateFormat ) throws Exception
	{
		SimpleDateFormat formatter = new SimpleDateFormat( dateFormat.getDateFormatStr() );
		Date formattedDate = formatter.parse( dateStr );
		return formattedDate;
	}
}
