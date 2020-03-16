<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Event</title>
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
	<script type="text/javascript" src="js/content-carousel.js"></script>

</head>

<body>
	<input type="hidden" id="EventPage" value="1">

	<div class="wrapper event">
		
		<div class="bl-l fl-column">

			<div>
				<a href="/"><img src="images/logo.png"></a>
			</div>

			<div class="bl-menu-title">
				<span class="company-name">ПЛОЩАДКА</span>
			</div>

			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>

		<div class="main">
			
			<?php require_once('files/header.php');?>
			 
			<div class="event-box">
				
				<div class="event-preview">
					<div class="item-dots item-service-dots"></div>
					<div class="prev-title">
						<span class="event-title active">Площадки</span>
						<span class="event-title">Ивент</span>
						<span class="event-title">Кейтеринг</span>
						<span class="event-title">Доп.услуги</span>
					</div>
				</div>

				<div class="event-arrow-right arrow-right"></div>
				<div class="event-arrow-left arrow-left"></div>

				<div class="progress-box content-slide">
					<div class="event-header">
						<div class="step step-1">
							<h1 class="h1">Площадки</h1>
							<span class="event-step">Шаг №1</span>
						</div>
						<div class="step step-2">
							<h1 class="h1">Ивент</h1>
							<span class="event-step">Шаг №2</span>
						</div>
						<div class="step step-3">
							<h1 class="h1">Кейтеринг</h1>
							<span class="event-step">Шаг №3</span>
						</div>
						<div class="step step-4">
							<h1 class="h1">Доп.услуги</h1>
							<span class="event-step">Шаг №4</span>
						</div>
					</div>
					<div class="loader-line">
						<div class="active-loader"></div>
					</div>
					<div class="event-checked step-1">
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="hotel" checked>
								<span class="checkbox-span"></span>
								<span>Отель</span>
							</label>
							<div class="checkbox-label" >
								<span id="star-hall">
									<input id="star-4" type="radio" name="hallstars"/>
									<label title="" for="star-4">
										<span class="star-box"></span>
									</label>

									<input id="star-3" type="radio" name="hallstars"/>
									<label title="" for="star-3">
										<span class="star-box"></span></label>

									<input id="star-2" type="radio" name="hallstars"/>
									<label title="" for="star-2">
										<span class="star-box"></span></label>

									<input id="star-1" type="radio" name="hallstars"/>
									<label title="" for="star-1">
										<span class="star-box"></span></label>

									<input id="star-0" type="radio" name="hallstars"/>
									<label title="" for="star-0">
										<span class="star-box"></span></label>
								</span>
								<span>(Желаемое количество звезд)</span>
							</div>
							<div class="event-check">
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Ресторан</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Лофт</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Лофт</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Конференц-зал</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Свободное пространство</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Свободное пространство</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Лофт</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Другое</span>
							</label>
							<label class="checkbox-label">
								<input class="input-checkbox" type="checkbox" name="">
								<span class="checkbox-span"></span>
								<span>Другое</span>
							</label>
						</div>
					</div>
					<div class="event-checked step-2">
					</div>
					<div class="event-checked step-3">
					</div>
					<div class="event-checked step-4">
					</div>
					<div class="event-footer">
						<span class="status-text active-save">Сохранено</span>
						<a class="step-btn">К следующему шагу</a>
					</div>
				</div>

				<?php

					include('/files/event-dop.php');
					include('/files/event-dop.php');
					include('/files/event-dop.php');
				?>

				<a href="" class="get-order">Хочу просто оставить заявку</a>

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