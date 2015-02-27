

<!DOCTYPE html>
<html>
<head>
	<title>Erste PHP Seite </title>
</head>
<body>
	<p>Einfachge HTML Seite mit Verarbeitung der Benutzereingabe</p>
	<p>Folgender Name wurde eingegeben:
		<b> <?php
			echo $_GET["name"];?> </b>
	</p>
</body>
</html>
/**
 * Created by PhpStorm.
 * User: k.boenisch
 * Date: 24.09.14
 * Time: 09:23
 */ 