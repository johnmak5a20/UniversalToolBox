<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<title>Document</title>
	<link rel="shortcut icon" href="dist/imgs/TabIcon.png" />
	
	<link rel="stylesheet" type="text/css" href="dist/css/vendor.bundle.css">
	<link rel="stylesheet" type="text/css" href="dist/css/document.bundle.css">
</head>
<body>

<button id="browseBtn1">Browse File1</button>
		<button id="browseBtn2">Browse File2</button>
		<button id="browseBtn3">Browse File3</button>
		<button id="browseBtn4">Browse File4</button>
		<button id="uploadBtn">Upload</button>
		<input type="file" multiple id="fileData1"/>
		<input type="file" multiple id="fileData2"/>
		<input type="file" id="fileData3"/>
		<input type="file" id="fileData4"/>

		<i id="downloadBtn" style="cursor:pointer;" class="fa fa-download"></i>
		<i id="downloadAsZipBtn" style="cursor:pointer;" class="fa fa-download"></i>
	
	<script src="dist/js/manifest.bundle.js"></script>
	<script src="dist/js/vendor.bundle.js"></script>
	<script src="dist/js/document.bundle.js"></script>
</body>
</html>