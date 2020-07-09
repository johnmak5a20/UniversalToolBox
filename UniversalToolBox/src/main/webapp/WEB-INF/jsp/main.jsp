<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<title>Main</title>
		<link rel="shortcut icon" href="dist/imgs/TabIcon.png" />
		
		<link rel="stylesheet" type="text/css" href="dist/css/vendor.bundle.css">
		<link rel="stylesheet" type="text/css" href="dist/css/main.bundle.css">
	</head>
	<body>
		<div id="mainDiv" class="main-div-wrapper">
			<header class="header">
				<div id="openNavMenuBtn" class="header-left">
					<span class="header-symbol">
						<i class="fa fa-bars"></i>
					</span>
					<span class="txt-medium">Menu</span>
				</div>
				<div class="header-center">
					<div class="header-nav">
						<ul>About Us</ul>
						<ul>Services</ul>
						<ul>Contact Us</ul>
					</div>
					<div class="header-search-bar">
						<div id="subHeaderDropdown" class="header-filter-btn header-symbol">
							<i class="fa fa-filter"></i>
						</div>
						<div id="mainHeaderDropdown" class="header-filter-drop-down">
							<span class="selected-value"></span>
							<select id="filterValue">
								<option value="All">All</option>
								<option value="Document">Document</option>
								<option value="Report">Report</option>
							</select>
						</div>
						<input id="headerSearchInput" type="text" class="header-search-input" placeholder="SEARCH">
						<div id="searchBtn" class="header-search-btn header-symbol">
							<i class="fa fa-search"></i>
						</div>
					</div>
				</div>
				<div id="loginBtn" class="header-right">
					<span class="header-symbol">
						<i class="fa fa-user-circle"></i>
					</span>
					<span class="txt-medium">Login</span>
				</div>
			</header>
			<div class="main-content-container">
				<div class="item-row">
					<a href="">
						<div class="item-figure">
							<i class="fa fa-database"></i>
						</div>
						<div class="item-name">Excel to SQL</div>
						<div class="item-description">Import Data into System</div>
					</a>
					<a href="document">
						<div class="item-figure">
							<i class="fa fa-upload"></i>
						</div>
						<div class="item-name">Document</div>
						<div class="item-description">Upload/ Download File</div>
					</a>
					<a href="">
						<div class="item-figure">
							<i class="fa fa-envelope"></i>
						</div>
						<div class="item-name">Email</div>
						<div class="item-description">Send Email Automatically</div>
					</a>
					<a href="">
						<div class="item-figure">
							<i class="fa fa-file-text"></i>
						</div>
						<div class="item-name">Report</div>
						<div class="item-description">Search Record</div>
					</a>
					<a href="">
						<div class="item-figure">
							<i class="fa fa-pencil-square"></i>
						</div>
						<div class="item-name">String Builder</div>
						<div class="item-description">Generate String</div>
					</a>
					<a href="">
						<div class="item-figure">
							<i class="fa fa-search"></i>
						</div>
						<div class="item-name">JSON/ XML</div>
						<div class="item-description"></div>
					</a>
				</div>
			</div>
			<nav id="navMenu" class="nav-menu-hidden">
				<div class="nav-menu-header">
					<div class="nav-menu-header-profile-img-container">
						<div class="nav-menu-header-profile-img">
						</div>
					</div>
					<div id="closeNavMenuBtn" class="nav-menu-header-close-btn">
						<i class="fa fa-times"></i>
					</div>
					<div class="nav-menu-header-greeting">
						<span>Menu</span>
					</div>
				</div>
				<ul class="nav-menu-list">
					<li>
						<a href="">
							<span class="nav-menu-symbol">
								<i class="fa fa-home"></i>
							</span>
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href="profile">
							<span class="nav-menu-symbol">
								<i class="fa fa-user"></i>
							</span>
							<span>Your Account</span>
						</a>
					</li>
					<li>
						<a href="setting">
							<span class="nav-menu-symbol">
								<i class="fa fa-cog"></i>
							</span>
							<span>Setting</span>
						</a>
					</li>
					<li id ="logoutBtn">
						<a href="">
							<span class="nav-menu-symbol">
								<i class="fa fa-sign-out"></i>
							</span>
							<span>Logout</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>

		<script src="dist/js/manifest.bundle.js"></script>
		<script src="dist/js/vendor.bundle.js"></script>
		<script src="dist/js/main.bundle.js"></script>
	</body>
</html>