<?php
global $db;
$db = mysqli_connect("localhost", "root", "FullstackVigo", "peluqueria");   //Conexión a la base de datos peluquería

if (!$db) {
    echo "error en la conexion";
    exit;
} else {
    echo "conexion correcta";
}

?>