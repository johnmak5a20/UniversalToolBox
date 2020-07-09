<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: 100%; width:100%;">
	<head>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link rel="shortcut icon" href="dist/imgs/TabIcon.png" />
		<title>${errorMsg}</title>
	</head>
	<body style="background: #1c5cbb; margin: 0px; height: 100%; width:100%">
		<div style="width: 100%; height: 100%; display: flex; justify-content: center; flex-direction: column; font-family: monospace; font-weight: bold;">
			<div style="width: 100%; display: flex; color: #FFFFFF; font-size: 40px; justify-content: center;">${errorCode}</div>
			<div style="width: 100%; display: flex; color: #FFFFFF; font-size: 40px; justify-content: center;">${errorMsg}</div>
		</div>
	</body>
</html>