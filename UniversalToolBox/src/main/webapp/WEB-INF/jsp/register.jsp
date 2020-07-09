<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<title>Account</title>
		<link rel="shortcut icon" href="dist/imgs/TabIcon.png" />
		
		<link rel="stylesheet" type="text/css" href="dist/css/vendor.bundle.css">
		<link rel="stylesheet" type="text/css" href="dist/css/register.bundle.css">
	</head>
	<body>
		<div class="register-form-container">
			<div class="register-form">
				<div class="register-img-container">
					<img class="register-img" src="dist/imgs/Logo.png">
				</div>
				<div style="display: flex; flex-direction: column; align-items: center;">
					<div style="width: 80%;">
						<div class="register-input-container-group">
							<div class="register-input-container">
								<input id="registerUserFirstName" type="text" class="register-txt-box">
								<span class="register-txt-box-focus" data-placeholder="First Name"/>
							</div>
							<div class="register-input-container">
								<input id="registerUserLastName" type="text" class="register-txt-box">
								<span class="register-txt-box-focus" data-placeholder="Last Name"/>
							</div>
						</div>
						<div class="register-input-container-group">
							<div class="register-input-container">
								<input id="registerUsername" type="text" class="register-txt-box">
								<span class="register-txt-box-focus" data-placeholder="Username"/>
							</div>
							<div class="register-input-container">
								<input id="registerUserEmail" type="text" class="register-txt-box">
								<span class="register-txt-box-focus" data-placeholder="Email Address"/>
							</div>
						</div>
						<div>
							<span id="uploadBtn" style="width: 45px; font-size: 25px; padding-left: 8px; padding-right: 8px; color:#FFFFFF; cursor: pointer;">
								<i class="fa fa-upload"></i>
							</span>
							<input type="text" style="height: 20px;" id="filePathTxt" readonly />
							<input type="file" id="userProfileImgUpload" />
						</div>
						<div class="register-input-container">
							<input id="registerPassword" type="password" class="register-txt-box">
							<span class="register-txt-box-focus" data-placeholder="Password"/>
						</div>
						<div class="register-input-container">
							<input id="registerReEnterPassword" type="password" class="register-txt-box">
							<span class="register-txt-box-focus" data-placeholder="Re-Enter Password"/>
						</div>
						<div style="display: flex; align-content: center; align-items: center; margin-left: 10px; margin-top: 30px; margin-bottom: 10px;">
							<input id="termsAgreementCheckbox" type="checkbox" style="margin-right: 6px;" value="on">
							<span class="txt-small">I Agree to The Terms of Service</span>
						</div>
						<div style="display: flex; justify-content: center;">
							<button id="registerBtn" class="register-btn">Register</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<script src="dist/js/manifest.bundle.js"></script>
		<script src="dist/js/vendor.bundle.js"></script>
		<script src="dist/js/register.bundle.js"></script>
	</body>
</html>