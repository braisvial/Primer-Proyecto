<?php

function obtenerServicios(){
    try {
        require "conexiones.php";

        global $sql;
        global $consulta;

        $sql = "SELECT * FROM servicios";
        $consulta = mysqli_query($db, $sql);

        // echo "<pre>";
        // var_dump(mysqli_fetch_all($consulta));
        // echo "<pre>";

        mysqli_close($db);

    } catch (\Throwable $th){
        var_dump($th);
    }
}

obtenerServicios();

?>