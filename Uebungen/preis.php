<?php

$preis = $HTTP_GET_VARS["preis"];
$klasse;

if($HTTP_GET_VARS["klasse"] == 1){
	$preis = $preis * 1.1;
}

if(isset($HTTP_GET_VARS["bahncard"])){
	$preis = $preis * 0.75;
}

if($HTTP_GET_VARS["tage"] >= 7){
	$preis = $preis *0.6;
}elseif($HTTP_GET_VARS["tage"] >=3){
	$preis = $preis *0.75;
}elseif ( $HTTP_GET_VARS["tage"] >=1){
	$preis = $preis *0.9;
}

if(isset($HTTP_GET_VARS["rück"])){
	$preis = $preis + 0.8 * $preis;
}

echo $preis;

?>