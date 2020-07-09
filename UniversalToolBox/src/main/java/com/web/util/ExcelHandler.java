package com.web.util;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelHandler 
{
	// Create abstrast writer and reader?
	public static void readExcelData( File excelFile ) throws Exception
	{
		Workbook workbook = WorkbookFactory.create( excelFile );
		System.out.println( "Workbook has " + workbook.getNumberOfSheets() + " Sheets : " );
		
		DataFormatter dataFormatter = new DataFormatter();
		
		workbook.forEach( sheet -> {
			sheet.forEach( row -> {
				row.forEach( cell -> {
					String cellValue = dataFormatter.formatCellValue( cell );
					if ( cell.getCellType().equals( CellType.FORMULA ) )
					{
						switch ( cell.getCachedFormulaResultType() )
						{
							case NUMERIC :
								System.out.println( cell.getNumericCellValue() );
								break;
							case STRING :
								System.out.println( cell.getRichStringCellValue() );
								break;
						}
					}
					else
					{
						System.out.println( cellValue );
					}
				} );
			} );
		} );
	}
	
	public static void writeExcelData( List data, String destDir ) throws Exception
	{
		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet( "Java Books" );
		
		Row row = sheet.createRow( 0 );
		
		try ( FileOutputStream outputStream = new FileOutputStream( destDir ) )
		{
			workbook.write( outputStream );
		}
	}
}
