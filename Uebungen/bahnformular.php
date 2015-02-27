<html>
<head>
<title>Bahntarif</title>
</head>
<body text="#000000" bgcolor="#FFFFFF" link="#FF0000" alink="#FF0000" vlink="#FF0000">
<form action="preis.php" method="get">
<table>
<tr>
<td>
Wählen Sie Ihr Reiseziel:
<select name="preis" size="">
<option value="100">Berlin
<option value="50">München
<option value="70">Nürnberg
<option value="30">Kleinkleckersdorf
<option value="150">Hintertupfingen
</select>
</td>
<td>
<input type="Radio" name="klasse" value="1"> Erste Klasse &nbsp;&nbsp;&nbsp;
<input type="Radio" name="klasse" value="2" checked> Zweite Klasse
</td></tr>
<tr>
<td>
<input type="Checkbox" name="bahncard" value="bahncard"> mit Bahncard
</td>
<td>
<input type="Text" name="tage" size="5" maxlength="3" value="1"> Tage bis zum Fahrtantritt </td></tr>
<tr>
<td>
<input type="Checkbox" name="rück" value="rück"> Hin- und Rückfahrt
</td>
<td>
<input type="Submit" name="rechnen" value="Preis berechnen">
</td>
</tr></table>
</form>
</body>
</html>
