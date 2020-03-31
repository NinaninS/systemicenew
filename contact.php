<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Contact</title>
	<meta content="systemice" name="keywords">
	<meta content="" name="description">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript" defer></script>
	<script src = "https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="js/plugins/jquery.inputmask.bundle.js"></script>
	<link rel="stylesheet" type="text/css" href="css/fontstyle.css">
    <link href="https://use.fontawesome.com/bccb4e85ab.css" media="all" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/map.js" defer></script>
	<script src="js/plugins/clipboard.js-master/dist/clipboard.js"></script>
	<script type="text/javascript" src="plugins/lightcase-2.5.0/src/js/lightcase.js"></script>
	<link rel="stylesheet" href="plugins/lightcase-2.5.0/src/css/lightcase.css">
	<script src="js/script.js"></script>
	<script type="text/javascript" src="js/content-carousel.js"></script>
</head>

<body>

	<div class="wrapper contact">
		
		<div class="bl-l fl-column">

			<div>
				<a href="../"><img src="../images/logo.png"></a>
			</div>

			<div class="bl-menu-title">
				<span class="company-name">КОНТАКТЫ</span>
			</div>

			<div class="bl-pagination">
				<span class="active-page">07 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>

		<div class="main">
			
			<?php require_once('files/header.php');?>

			<div class="content-box">

				<div class="contact-info">
					
					<h1 class="h1">КОНТАКТЫ</h1>
					<div class="line"></div>

					<p class="p-contact"><b>Наш адрес:</b><br>г. Москва, ул. Бауманская д. 6.</p>
					<p class="p-contact"><b>Телефон:</b><br> +7 (495) 215-24-80</p>
					<p class="p-contact"><b>Электропочта:</b><br> info@systemice.ru</p>

					<form class="contact-form" id = "contact-form">
						<p>Заявка на обратный звонок</p>

						<div class="line"></div>

						<div class="form-line">
							<div class="input-box">
								<input type="text" name="name" class = "contact-name" placeholder="Ваше имя">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>

							<div class="input-box">
								<input type="text" name="phone" class = "contact-phone" placeholder="Телефон">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
						</div>

						<label class="checkbox-block">
			                <input type="checkbox" name="" class="input-check" checked>
			                <span class="checkbox-style">
			                	<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
			                </span>
							<span class = "i-agree">Я согласен на обработку персональных данных</span>
						</label>

						<div class="button-box">
							<input class="send-button" type="button" value="Отправить">
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
						</div>

					</form>

				</div>

				<div class="contact-map">
					
					<div id="map-block"></div>

					<div class="copy-coordinat">
						<img src="../images/sheet.png"><span id = "copy-text" data-clipboard-text="Скопировать координаты для навигатора копия">Скопировать координаты для навигатора копия</span>
					</div>

					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>

			<div class="footer-mob">
				
				<div class="bl-pagination">
					<span class="active-page">07 </span>
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