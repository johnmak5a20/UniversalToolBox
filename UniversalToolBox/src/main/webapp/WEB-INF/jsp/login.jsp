<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<title>Login</title>
		<link rel="shortcut icon" href="dist/imgs/TabIcon.png" />
		
		<link rel="stylesheet" type="text/css" href="dist/css/vendor.bundle.css">
		<link rel="stylesheet" type="text/css" href="dist/css/login.bundle.css">
	</head>
	<body>
		<div class="login-form-container">
			<div class="login-form">
				<div class="login-img-container">
					<img class="login-img" src="dist/imgs/Logo.png">
				</div>
				<div>
					<div class="login-input-container">
						<input id="loginUserName" type="text" class="login-txt-box">
						<span class="login-txt-box-focus" data-placeholder="Username"/>
					</div>
					<div class="login-input-container">
						<input id="loginPassword" type="password" class="login-txt-box">
						<span class="login-txt-box-focus" data-placeholder="Password"/>
					</div>
					<div style="display: flex; align-content: center; align-items: center; margin-left: 10px;">
						<input type="checkbox" style="margin-right: 6px;" value="on">
						<div class="txt-small">Keep me signed in</div>
					</div>
					<div style="text-align:center;">
						<button id="loginBtn" class="login-btn">Sign In</button>
					</div>
				</div>
				<div class="login-content-bottom txt-small">
					<a href="">Forgot password?</a>
					<a href="register">Create account</a>
				</div>
			</div>
		</div>
		
		<script src="dist/js/manifest.bundle.js"></script>
		<script src="dist/js/vendor.bundle.js"></script>
		<script src="dist/js/login.bundle.js"></script>
	</body>
</html>