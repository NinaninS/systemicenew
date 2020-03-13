<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Service</title>
	<meta content="systemice" name="keywords">
	<meta content="" name="description">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<script type="text/javascript" src="js/vue.js"></script>
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/fontstyle.css">
    <link href="https://use.fontawesome.com/bccb4e85ab.css" media="all" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/animation.css">
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/team-carousel.js"></script>

</head>

<body>

	<div class="wrapper team">
		
		<div class="bl-l fl-column">

			<div>
				<a href="/"><img src="images/logo.png"></a>
			</div>

			<div class="bl-menu-title">
				<span class="company-name">КОМАНДА</span>
			</div>

			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>

		<div class="main">
			
			<?php require_once('files/header.php');?>
			 
			<div class="content-box">
				
				<img class="sotrud-img main-sotrud-img" src="images/sotrud1.png">

				<div class="right-wth">
					<h1 class="h1-more">ЗАМКОВА ЛАРИСА</h1>

					<div class="line"></div>

					<h3 class="h3">РУКОВОДИТЕЛЬ ОТДЕЛА РАЗВИТИЯ</h3>

					<div class="sotrud-contact">
						<b>Телефон:</b> <a href="tel:74995883939">+7 (499) 588-39-39</a> (доб. 887) <br>
						<b>Email:</b> zamkova@mailbox.ru
					</div>
				</div>
			</div>

			<div class="bl-preview">
				<div class="preview-container">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
					<img class="link-arrow dop-arrow-left" src="images/arrow-left.png">
					<img class="link-arrow dop-arrow-right" src="images/arrow-right.png">
					<div class = "sl-wrapper-shadow">
						<div class = "sl-wrapper">
							<img src = "images/1.png" class="sl-teammate preview-item first">
							<img src = "images/1.png" class="sl-teammate preview-item slide-user-active second">
							<img src = "images/1.png" class="sl-teammate preview-item third">
							<img src = "images/1.png" class="sl-teammate preview-item">
							<img src = "images/1.png" class="sl-teammate preview-item">
							<img src = "images/1.png" class="sl-teammate preview-item">
						</div>
					</div>
				</div>
				<div class = "item-dots">
					<div class = "dots-container clearfix"></div>
				</div>
				<div class="arrow-left"></div>
				<div class="arrow-right"></div>
			</div>

			<div class="footer-mob">
				
				<div class="bl-pagination">
					<span class="active-page">04 </span>
					<span class="bl-page"> / 07</span>
				</div>

				<div class="bl-copyright">
					Ⓒ2014 - 2020
				</div>
			</div>

		</div>

		<?php require_once('files/bl-right.php');?>

	</div>
	

</body>
</html>