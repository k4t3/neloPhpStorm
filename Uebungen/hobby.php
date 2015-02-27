<html>
<head>
<title>Hobbies</title>
</head>
<body text="#000000" bgcolor="#FFFFFF" link="#FF0000" alink="#FF0000" vlink="#FF0000">
<form action="hobby.php" method="get">
<select name="hobby" size="1">
<option value="reiten">Reiten</option>
<option value="schwimmen">Schwimmen</option>
<option value="laufen">Laufen</option>
<option value="tennis">Tennis</option>
</select>
<input type="Submit" name="schicken" value="Bild">
</form>

<?php

$hobby = $HTTP_GET_VARS["hobby"];

switch ($hobby):
	case "reiten":
		echo "<a href='reiten.htm'><img src='reiten.gif'></a>";
		break;
	case "schwimmen":
		echo "<a href='schwimmen.htm'><img src='schwimmen.gif'></a>";
		break;
	case "laufen":
		echo "<a href='laufen.htm'><img src='laufen.gif'></a>";
		break;
	case "tennis":
		echo "<a href='tennis.htm'><img src='tennis.gif'></a>";
		break;
	default:
		echo "Kein Hobby ausgewählt";
	endswitch;

?>
</body>
</html>
