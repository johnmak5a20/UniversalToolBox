package com.web.util;

import java.io.FileOutputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Table;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Utilities;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import io.jsonwebtoken.impl.TextCodec;

public class Test {
	public static void main( String[] arg ) throws Exception
	{
		/*
		 * Cookie tokenVal = WebUtils.getCookie( request, "Token" ); String jwt
		 * = tokenVal.getValue(); Claims userInfo = JsonWebToken.parseJWT( jwt
		 * );
		 */
		
		/*
		 * HashMap< String, Object > claimsDataMap = new HashMap<>();
		 * 
		 * claimsDataMap.put( "role", "admin" ); claimsDataMap.put( "username",
		 * validatedUser.getUsername() );
		 * 
		 * String jwt = JsonWebToken.createJWT( "UniversalToolBox",
		 * claimsDataMap, "signingKey" ); CookieUtils.addCookie( "Token", jwt,
		 * response );
		 */
		
		// System.out.println( "Finish" );
		
		/*
		 * List<String> a = new ArrayList<>(); a.add( "a1" ); a.add( "b2" );
		 * a.add( "c3" ); a.add( "d4" ); a.add( "e5" );
		 * 
		 * System.out.println( "Size1: " + a.size() );
		 * 
		 * a.add( 3, "g7" );
		 * 
		 * System.out.println( "Size2: " + a.size() );
		 * 
		 * System.out.println( new Gson().toJson( a ) );
		 */
		
		/*
		 * String o = "adf asdf asfdadfad"; String d =
		 * "please click on <a href=\"http://www.ge-ts.com.hk/how/GETS_PA/113594-PA18-112128134-16836.pdf\" target=\"_blank\">http://www.ge-ts.com.hk/how/GETS_PA/113594-PA18-112128134-16836.pdf</a>"
		 * ; String a =
		 * "Please click on <a href=\"LoadXML?url=http://www.ge-ts.com.hk/how/GETS_XML/113594-PA18-112128134-16836.xml&outType=pdf\">113594-PA18-112128134-16836.xml</a> to create your Statement."
		 * ; String b =
		 * "Please click on <a href=\"LoadXML?url=http://www.ge-ts.com.hk/how/GETS_XML/113594-PA18-112128134-16836.xml&outType=csv\">113594-PA18-112128134-16836.xml</a> to create your CSV file."
		 * ; String c = "to view the Statement.Thank you for your cooperation.";
		 * List< String > list = new ArrayList<>(); list.add( o ); list.add( d
		 * ); list.add( a ); list.add( b ); list.add( c ); String k = "";
		 * 
		 * System.out.println( a ); StringBuilder st = new StringBuilder(); for(
		 * String str : list ) { if ( str.indexOf( "outType=pdf" ) > -1 ) {
		 * Pattern pattern = Pattern.compile("<a href=\"(.*?)\">"); Matcher
		 * matcher = pattern.matcher(str);
		 * 
		 * if ( matcher.find() ) { k = matcher.group( 1 ); k = k +
		 * "&statementType=LLP"; } } }
		 * 
		 * System.out.println( k );
		 */
		
		/*
		 * XSSFWorkbook workbook = new XSSFWorkbook();
		 * 
		 * XSSFSheet spreadsheet = workbook.createSheet( "Test" );
		 * 
		 * XSSFRow row;
		 * 
		 * 
		 * Map < String, Object[] > empinfo = new HashMap < String, Object[]
		 * >(); empinfo.put( "1", new Object[]{"EMP ID", "EMP NAME",
		 * "DESIGNATION"} );
		 * 
		 * empinfo.put( "2", new Object[]{"tp01", "Gopal", "Technical Manager"}
		 * );
		 * 
		 * empinfo.put( "3", new Object[]{"tp02", "Manisha", "Proof Reader"} );
		 * 
		 * empinfo.put( "4", new Object[]{"tp03", "Masthan", "Technical Writer"}
		 * );
		 * 
		 * empinfo.put( "5", new Object[]{"tp04", "Satish", "Technical Writer"}
		 * );
		 * 
		 * empinfo.put( "6", new Object[]{"tp05", "Krishna", "Technical Writer"}
		 * );
		 * 
		 * // Iterate over data and write to sheet Set < String > keyid =
		 * empinfo.keySet(); int rowid = 0;
		 * 
		 * for ( String key : keyid ) { row = spreadsheet.createRow( rowid++ );
		 * Object[] objectArr = empinfo.get( key ); int cellid = 0;
		 * 
		 * for ( Object obj : objectArr ) { Cell cell = row.createCell( cellid++
		 * ); cell.setCellValue( ( String ) obj ); } } // Write the workbook in
		 * file system FileOutputStream out = new FileOutputStream( new File(
		 * "C:\\Users\\john mak\\Desktop\\Writesheet.xlsx" ) );
		 * 
		 * workbook.write( out ); out.close(); System.out.println(
		 * "Writesheet.xlsx written successfully" );
		 */
		
		/*
		 * TransactionManager transactionManager =
		 * TransactionManagerFactory.getTransactionManager( DATABASE.MSSQL );
		 * transactionManager.executeTransaction( ( sqlConnection ) -> { try {
		 * UserRepositoryImpl a = new UserRepositoryImpl(); User user =
		 * a.getUserByUsername( sqlConnection, "ADMIN" ); System.out.print( user
		 * ); } catch ( Exception e ) { e.printStackTrace(); } } );
		 */
		
		/*String dir = "C:\\Users\\john mak\\Downloads\\DDI Settlement.xlsx";
		String sheetName = "BOSS Settlement Results";
		Workbook workbook = WorkbookFactory.create( new File( dir ) );
		System.out.println( "Workbook has " + workbook.getNumberOfSheets() + " Sheets : " );
		
		DataFormatter dataFormatter = new DataFormatter();
		
		workbook.forEach( sheet -> 
		{
			if ( sheetName.equals( sheet.getSheetName() ) )
			{
				sheet.forEach( row -> 
				{
					row.forEach( cell -> 
					{
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
			}
		} );*/
		
		
		// XSSF > 2007; HSSF 2003 - 2007
		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet( "Java Books" );

		 CellStyle style = workbook.createCellStyle();
		 
		 // properties
		// Font headerFont = workbook.createFont();  
		// headerFont.setBold( true );
		 //headerFont.setFontHeightInPoints((short)16);  
		// headerFont.setFontName("Times New Roman");  
         //font.setItalic(true);  
         //font.setStrikeout(true);  
		 System.out.println( "COLOUR INDEX: " );
		 
		 style.setFillForegroundColor( IndexedColors.YELLOW.getIndex() );
		 style.setFillPattern( FillPatternType.SOLID_FOREGROUND );
		 style.setAlignment( HorizontalAlignment.CENTER );
        // style.setFont( headerFont );
         
		int firstRow = 0;
		int lastRow = 0;
		int firstCol = 0;
		int lastCol = 2;
		sheet.addMergedRegion(new CellRangeAddress(firstRow, lastRow, firstCol, lastCol));
		
		Row row0 = sheet.createRow( 0 );
		
		Cell cell0 = row0.createCell( 0 );
		cell0.setCellStyle( style );
		cell0.setCellValue( ( String) "Header");
		
		Row row1 = sheet.createRow( 1 );
		
		Cell cell1 = row1.createCell( 0 );
		Cell cell2 = row1.createCell( 1 );
		Cell cell3 = row1.createCell( 2 );
		
		cell1.setCellValue( ( String) "Row1 Column1");
		cell2.setCellValue( ( String) "Row1 Column2");
		cell3.setCellValue( ( String) "Row1 Column2");
		
		Row row2 = sheet.createRow( 2 );
		Cell cell4 = row2.createCell( 0 );
		Cell cell5 = row2.createCell( 1 );
		Cell cell6 = row2.createCell( 2 );
		
		cell4.setCellValue( ( String) "Row2 Column1");
		cell5.setCellValue( ( String) "Row2 Column2");
		cell6.setCellValue( ( String) "Row2 Column3");
		
		try ( FileOutputStream outputStream = new FileOutputStream( "C:\\Users\\john mak\\Downloads\\test.xlsx" ) )
		{
			workbook.write( outputStream );
		}
		
		
		//float horMargin = Utilities.millimetersToPoints( 30 );
        //float verMargin = Utilities.millimetersToPoints( 50 );
		
		// PageSize, Left, Right, Top and Bottom Margin in User Unit, 1 User Unit = 1/72 inch
		//Document document = new Document(PageSize.A4, horMargin, horMargin, verMargin, verMargin);
		Document document = new Document(PageSize.A4, 10, 10, 10, 10);
		PdfWriter pdfWriter = PdfWriter.getInstance( document, new FileOutputStream( "C:\\Users\\john mak\\Downloads\\test.pdf" ) );
        document.open();
        //document.add(new Paragraph("Some more text on the first page with different color and font type."));
        
        
        // set font
        Font font1 = new Font(Font.FontFamily.TIMES_ROMAN, 14, Font.BOLD);
        
        PdfPTable table2 = new PdfPTable(new float[] {1,2,3});
        table2.setWidthPercentage( 90 );
        //table2.getDefaultCell().setBorder( PdfPCell.NO_BORDER );
        
        
        // set header rows
        // table.addHeaderCell(new Cell().add(new Paragraph("Header")));
        for(int i=1; i<=3; i++)
        {
        	PdfPCell cell = new PdfPCell( new Paragraph("Header "+i) );
            table2.addCell( cell );
        }          
        
        PdfPCell sec = new PdfPCell( new Paragraph("Second Header ") );
        sec.setColspan( 3 );
        table2.addCell( sec );
        table2.setHeaderRows( 2 );
        //addHeaderCell 
        
        
        for ( int i =1; i <= 100; i++ ) {
        	
        	if ( i == 20 )
        	{
        		document.newPage();
        	}
        	
        	for(int j=1; j <=3; j++) {
        		Paragraph p1 = new Paragraph("Row" + i + " + " + "Cell" + j, font1);
     
        		PdfPCell cel = new PdfPCell(p1);
        		cel.setBorder(PdfPCell.NO_BORDER);
        
        		table2.addCell( cel );
        	}
        }
        
        Image image1 = Image.getInstance("C:/Users/john mak/Downloads/css-flexbox.png");
        PdfPCell cell777 = new PdfPCell();
        PdfPCell cell7 = new PdfPCell( new Paragraph("Second Header ", font1) );
        image1.setWidthPercentage( 80 );
        cell777.setBorder( PdfPCell.NO_BORDER );
        cell777.addElement( image1 );
        
        cell7.setBackgroundColor( new BaseColor(235, 235, 235) );
        cell7.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
        cell7.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
        cell7.setColspan( 2 );
        cell7.setBorder( PdfPCell.NO_BORDER );
        table2.addCell( cell7 );
        table2.addCell( cell777 );
        
        
        document.add( table2 );
        
        document.newPage();
        
     // set column size
         PdfPTable table = new PdfPTable(new float[] {1,2,3});
            
            // set table size in percentage
         table.setWidthPercentage( 90 );
        
          table.addCell( "Name" );
        table.addCell( "Date" );
        table.addCell( "Result" );
        table.addCell( "TestName2" );
        table.addCell( "02/02/2020" );
        table.addCell( "Y" );
         
        document.add( table );
        
        document.close();
        
		System.out.println( "Finish" );
	}
}
