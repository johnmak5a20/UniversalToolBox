package com.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.web.common.config.SystemConfig;
import com.web.util.FileUtils;
import com.web.util.ZipUtils;

@Controller
public class MainController 
{
/*	@Autowired
	@Qualifier( "mainService" )
	private MainService mainService;*/
	
	@GetMapping( "/" )
	public String getMainPage() throws Exception
	{
		return "main";
	}
	
	@GetMapping( "/document" )
	public String getDocumentPage() throws Exception
	{
		return "document";
	}
	
	@PostMapping( "uploadDocument" )
	public void uploadDocument(HttpServletRequest request, 
			HttpServletResponse response,
		@RequestParam( "file" ) List< MultipartFile > multipartfiles,
		@RequestParam( "user" ) String user )
	{
		System.out.println( "user: " + user );
		
		multipartfiles.forEach( ( multiPartFile ) -> {
			String destFilePath = SystemConfig.getTempFolderDirectoryForFileDownload() + "\\" + multiPartFile.getOriginalFilename();
			try
			{
				multiPartFile.transferTo( new File( destFilePath ) );
			}
			catch ( IllegalStateException | IOException e )
			{
				e.printStackTrace();
			}
		} );
		
		System.out.print( "sad" );
	}
	
	@GetMapping( "file/{filename}/{user}" )
	public void downloadFiles( HttpServletRequest request, 
			HttpServletResponse response,
			@PathVariable( "filename" ) String filename,
			@PathVariable( "user" ) String user
			) throws Exception
	{
		File file = new File( "C:\\Users\\John Mak\\eclipse-workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\data\\b5a701e5-4038-40e2-85ba-5ac04ddd8bdd.PNG" );
		FileUtils.downloadFile( file, response );
	}
	
	@GetMapping( "file/zip" )
	public void downloadFilesAsZip( HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception
	{
		File file1 = new File("C:\\Users\\John Mak\\eclipse-workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\data\\b5a701e5-4038-40e2-85ba-5ac04ddd8bdd.PNG");
		File file2 = new File("C:\\Users\\John Mak\\eclipse-workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\data\\20190410_090659_1703_ADMIN - Copy.csv");
		File file3 = new File("C:\\Users\\John Mak\\eclipse-workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\data\\251701.pdf");
		
		List< File > srcFileList = new ArrayList<>();
		srcFileList.add( file1 );
		srcFileList.add( file2 );
		srcFileList.add( file3 );
		
		String destFilePath =  SystemConfig.getFolderDirectoryForFileUpload()
				+ UUID.randomUUID().toString()
				+ ".ZIP";
		
		ZipUtils.createZipAndDownload( srcFileList, response );
		ZipUtils.createZip( srcFileList, destFilePath );
		File file = new File("C:\\Users\\John Mak\\eclipse-workspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\data\\jquery-ui-1.12.1.custom.zip");
		FileUtils.downloadFile( file, response );
	}
}
