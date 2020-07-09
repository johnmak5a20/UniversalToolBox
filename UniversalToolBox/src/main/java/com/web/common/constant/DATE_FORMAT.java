package com.web.common.constant;

public enum DATE_FORMAT
{
	DAY_MONTH_YEAR_WITH_SLASH_SEPEARTOR ( "dd/MM/yyyy" ),
	DAY_MONTH_YEAR_WITH_HYPHEN_SEPEARTOR ( "dd-MM-yyyy" ),
	YEAR_MONTH_DAY_WITH_HYPHEN_SEPEARTOR ( "yyyy-MM-dd" ),
	YEAR_MONTH_DAY_HOUR_MINUTE_SECOND_WITH_HYPHEN_SEPEARTOR ( "yyyy-MM-dd HH:mm:ss" );
	
	private String dateFormatStr;
	
	DATE_FORMAT( String dateFormatStr )
	{
		this.dateFormatStr = dateFormatStr;
	}
	
	public String getDateFormatStr()
	{
		return dateFormatStr;
	}
}
