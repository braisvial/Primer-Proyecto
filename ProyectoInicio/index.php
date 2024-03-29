<?php

require "consultas.php";

?>

<!DOCTYPE html>
<html lang="es">

<!--Haciendo el comando html:5 se crea estas caracteristicas necesarias para la página web-->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Carrera Digital</title>

    <!-- <style>                                                                                     </style> No hacer el css en el archivo html
        h1{
            color:red;
            
        }-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet">
    <!-- Fuente descargada desde google fonts -->

    <link rel="preload" href="css/normalize.css" as="style">
    <link href="css/normalize.css" rel="stylesheet">
    <!--Precarga y enlace del archivo normalize.css con el index.html, este archivo añadido
                                                                                                    se hace siempre, se descarga desde normalize.css y se crea otro archivo .css
                                                                                                    Permite que mi web sea reconocida en todos los navegadores-->

    <link rel="preload" href="css/style.css" as="style">
    <link href="css/style.css" rel="stylesheet">
    <!--Precarga y enlace del archivo style.css con el index.html, siempre los 2 link juntos -->
</head>

<body>

    <h1> Vamos a poner debajo mis servicios con php </h1>
    <?php

       while ($servicios= mysqli_fetch_assoc($consulta)){
    ?> 
        <div>
            <h3>
                <?php
                    echo ($servicios["nombre"])
                ?>
            </h3>
        </div>
        <div>
            <p>
                <?php
                    echo($servicios["precio"])
                ?>
            </p>
        </div>

    <?php
        }
    ?>


    <!-- <h1>Primer Título</h1>  Título de mayor importancia, solo puede haber uno
    <h5>Hola Mundo</h5> Titulo de memor importancia, puede haber varios del mismo número (h2, h3, h4, h5, h6)

    <p>Primera clase de fullstack Párrafo
        <p> Párrafo hijo</p> Párrafo dentro de párrafo
    </p>

    <h3>Aprender html</h3> -->

    <!-- Comentar: Ctlr + ç -->
    <!-- Ordenar código: Alt + Shift + F -->

    <!-- <div class="ejercicio_flex">
        <a href="#">ENLACE1</a>
        <a href="#">ENLACE2</a>
        <a href="#">ENLACE3</a>
    </div> -->

    <!--
    <div class="ejercicio_box_model">
        <h2>EJERCICIO BOX MODEL</h2>
    </div>
    -->

    <!-- <section class="ejercicio_grid">
            <div class="num1"></div>
            <div class="num2"></div>
            <div class="num3"></div>
    </section>

    <section class="ejercicio_grid2">
        <div class="num4"></div>
        <div class="num5"></div>
        <div class="num6"></div>
        <div class="num7"></div>
        <div class="num8"></div>
        <div class="num9"></div>
    </section> -->


    <button id="boton">Ver notificación</button>

    <!-----------------Cabecera-------------------------------------------------------------------------------------->
    <header class="header contenedor"> <!--Cabecera, se añade la clase contenedor para el ancho-->
        <a href="#">Login Alumnos</a> <!--Enlace, asterisco para botón-->
        <p class="separador">|</p>
        <a href="#">Login Empresas</a>
    </header>

    <!-----------------Nav debajo del header------------------------------------------------------------------------->
    <nav class="cursos_sobre_informate contenedor">
        <div class="img_tcd">
            <a href="#">
                <img src="./img/Tu-carrera-digital-general.png" alt="Cursos digitales">
                <!--src: dirección del archivo img, alt: referenciar la imagen-->
            </a>
        </div>
        <div class="menu">
            <a href="#">Cursos</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#" class="informate">Infórmate</a>
        </div>
    </nav>

    <!-----------------Primera sección con el título----------------------------------------------------------------->
    <section class="primera_seccion">
        <div class="contenedor">
            <h1 class="titulo">
                <strong>Descubre nuestros</strong>
                <strong>cursos gratuitos y</strong>
                <strong>fórmate en las disciplinas</strong>
                <strong>mas demandadas</strong>
                <strong>del mercado.</strong>
            </h1>
            <a class="boton" href="#">Ver Cursos</a>
        </div>
    </section>

    <section class="seccion_logos">
        <div class="contenedor">
            <div class="logo_oficial">
                <img src="img/Logos-oficiales.png" alt="Logos Oficiales">
            </div>
            <div class="logo_adecco">
                <img src="img/Logo-Adecco.png" alt="Adecco">
            </div>
        </div>
    </section>

    <!-----------------Sección de los cursos en las localidades------------------------------------------------------>
    <section class="contenedor seccion_cursos ">
        <h3 class="cursos">
            <strong>Cursos</strong>
        </h3>
        <h2 class="conectamos">
            <strong>Conectamos personas y empleo</strong>
        </h2>
        <div class="enlaces">
            <a href="#" class="ver_todo">Ver todo</a>
            <a href="#">Bilbao</a>
            <a href="#">Gijón</a>
            <a href="#">La Coruña</a>
            <a href="#">Oviedo</a>
            <a href="#">Santander</a>
            <a href="#">Vigo</a>
            <a href="#">Vitoria-Gasteiz</a>
        </div>
    </section>

    <!-----------------Sección bloques para inscribirse------------------------------------------------------------->
    <section class="contenedor seccion_inscribir">
        <div class="marketing">
            <h2>Marketing digital</h2>
            <a href="#" class="inscribirme">Inscribirme</a>
        </div>
        <div class="programacion_web">
            <h2>Programación web full stack</h2>
            <a href="#" class="inscribirme">Inscribirme</a>
        </div>
    </section>



    <!-----------------Sección depregunta y pedir------------------------------------------------------------------>
    <section class="contenedor seccion_interes">
        <h3>
            <strong>¿Te interesa algún otro curso en tu ciudad?</strong>
        </h3>
        <a href="#" id="boton_pedir">¡Pídenoslo!</a>
    </section>

    <!----------------Sección del video de YouTube----------------------------------------------------------------->
    <section class="contenedor seccion_video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bkyWeUcNZuQ" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </section>

    <!-----------------Sección del bloque de interés con información----------------------------------------------->
    <section class="seccion_info contenedor">
        <div class="izquierda">
            <h3>
                <b>¿Para quién son estos cursos?</b>
            </h3>
            <h2>
                <b>Si quieres dar un giro a tu carrera profesional y formarte en profesiones digitales con futuro,
                    este
                    es tu lugar.</b>
            </h2>
            <p>Cuando eliges un curso en <b>Tu Carrera Digital</b>, estás dando el paso definitivo hacia las profesiones
                con
                más demanda del
                momento, como Marketing Digital, Desarrollo Web Full Stack y Programación de Videojuegos, Diseño 3D
                y
                Realidad Virtual.
                Nosotros te ofrecemos formación con docentes expertos y contenidos alineados a las necesidades de
                las
                empresas.
                Queremos que saques el máximo partido a estos cursos y que potencies tus posibilidades de encontrar
                un
                empleo.</p>
            <h4>
                <b>Para participar, necesitarás estas inscrito en garantía juvenil</b>
            </h4>
            <a href="#" class="ir_a_web">Ir a la web de Garantía Juvenil</a>
            <p class="descargate">Descárgate esta infografía en la que te mostramos cómo descargar tu certificado de
                Garantía Juvenil:
            </p>
            <a href="#" class="descargar">Descargar infografía adjunta</a>
        </div>
        <div class="derecha">
            <h2>
                <strong>¿Eres mayor de 16 años</strong>
                <strong>y menor de 30?</strong>
                <strong>¿Estás sin trabajar?</strong>
                <strong>¿Estas sin cursar formación?</strong>
            </h2>
            <h4>
                <strong>Dale Forma a tu futuro y</strong>
                <strong>despega con tu carrera digital</strong>
            </h4>
        </div>
    </section>

    <!-----------------Sección de las localizaciones---------------------------------------------------------------->
    <section class="seccion_localizaciones">
        <div class="contenedor">
            <h2>Localizaciones:</h2>
            <div class="localizaciones">
                <div class="localizacion">
                    <h3>Vigo</h3>
                    <p>Avenida del alcalde Gregorio Espino 50 36205, Galicia, Pontevedra.</p>
                </div>
                <div>
                    <h3>Gijón</h3>
                    <p>Calle Azcárraga 16 33208, Asturias, Asturias</p>
                </div>
                <div>
                    <h3>Oviedo</h3>
                    <p>Calle Fuente de la Plata 103 33013, Asturias, Asturias</p>
                </div>
                <div>
                    <h3>Bilbao</h3>
                    <p>Calle Islas Canarias 21 48015, Euskadi, Vizcaya.</p>
                </div>
                <div>
                    <h3>Vitoria-Gasteiz</h3>
                    <p>Calle Manuel Iradier 17 01055, Euskadi, Alava.</p>
                </div>
                <div>
                    <h3>La Coruña</h3>
                    <p>Calle Marqués de Amboage 12 15006, Galicia, La Coruña.</p>
                </div>
                <div>
                    <h3>Vigo</h3>
                    <p>Calle Santa Marta S/N 36202, Galicia, Pontevedra.</p>
                </div>
                <div>
                    <h3>Santander</h3>
                    <p>Calle Vargas 65 39010, Cantabria, Cantabria</p>
                </div>
            </div>
        </div>
    </section>

    <!-----------------Sección para contactar------------------------------------------------------------------------>
    <section class="seccion_contactar">
        <div class="contenedor">
            <h3>Contactar</h3>
            <h2>
                <strong>¿Tienes dudas? Habla con nosotros:</strong>
            </h2>
            <div class="bloques">
                <div class="llamar">
                    <!-- <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-calling"
                        width="60" height="60" viewBox="0 0 24 24" stroke-width="2" stroke="#7bc62d" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <line x1="15" y1="7" x2="15" y2="7.01" />
                        <line x1="18" y1="7" x2="18" y2="7.01" />
                        <line x1="21" y1="7" x2="21" y2="7.01" />
                    </svg> 
                    Iconos obtenidos desde Tabler Icons, copiar en la web y pegar aquí. Puedo descargar SVG desde google fonts y guardarlo en una carpeta svg
                    </div>-->
                    <img src="img/ico-TLF.png">
                    <div class="texto_llamar">
                        <p>
                            <span>Llámanos:</span>
                        </p>
                        <a href="#">616290460</a>
                    </div>
                </div>
                <div class="escribir">
                    <!-- <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="60"
                        height="60" viewBox="0 0 24 24" stroke-width="2" stroke="#7bc62d" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg> 
                    </div>-->
                    <img src="img/ico-EMAIL.png">
                    <div class="texto_escribir">
                        <p>
                            <span>Escríbenos:</span>
                        </p>
                        <a href="#">inmaculada.fernandez@adecco.com</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-----------------Pie de página-------------------------------------------------------------------------------------->
    <footer>
        <div class="contenedor">
            <div class="primero">
                <a href="#">
                    <h3>Cursos Zona-Norte</h3>
                </a>
                <a href="#" class="sobre_nosotros">
                    <h3>Sobre Nosotros</h3>
                </a>
            </div>
            <div class="segundo">
                <a href="#">
                    Preguntas Frecuentas (FAQ)
                </a>
                <a href="#">
                    Política de Cookies
                </a>
                <a href="#">
                    Política de Privacidad
                </a>
                <a href="#">
                    Aviso Legal
            </div>
        </div>
    </footer>


    <section class="boton_fijo">
        <a href="">
            <img src="img/CTA-informate.png">
        </a>
    </section>

    <section class="boton_to_top">
        <a href="">
            <img src="img/up-top.png">
        </a>
    </section>


    <!-----------------Formulario de contacto--------------------------------------------------------------------------------->
    <form>
        <!-- Agrupar todos los elementos del formulario en una caja -->
        <fieldset>
            <h3>
                <legend>Título del formulario</legend> <!--Título del formulario-->
            </h3>

            <div> <!-- Crear una etiqueta con input -->
                <div>
                    <label>Nombre</label>
                    <input id="nombre" type="text" placeholder="Tu nombre">
                </div>
                <!-- Creamos divisiones para cada etiqueta con su input -->
                <!-- <div>
                    <label>Apellidos</label>
                    <input id="apellidos" type="text" placeholder="Tus apellidos">
                </div> -->
                <!-- Tipo texto para Nombre y Apellidos -->
                <!-- <div>
                    <label>Teléfono</label>
                    <input id="telefono" type="tel" placeholder="Tu teléfono">
                </div> -->
                <!-- Tipo tel para Teléfono -->
                <div>
                    <label>Email</label>
                    <input id="email" type="email" placeholder="Tu email">
                </div>
                <!-- Tipo email para Email -->
                <div>
                    <label>Mensaje</label>
                    <textarea id="mensaje" type="text" placeholder="Tu mensaje"> </textarea>
                </div>
            </div>

            <input type="submit" value="Enviar la información">
            <!-- Crear botón para enviar el formulario -->
        </fieldset>
    </form>

    <section class="seccion_movil">
        <p>Infórmate</p>
        <a href=""><img src="./img/ico-informate.png"></a>
    </section>

    <!-- <script src="js/script.js"></script>     Enlazar el archivo script con el html-->
    <!-- <script src="js/01.js"></script> -->
    <!-- <script src="js/02.js"></script> -->
    <!-- <script src="js/03.js"></script> -->
    <!-- <script src="js/04.js"></script> -->
    <!-- <script src="js/05.js"></script> -->
    <!-- <script src="js/10.js"></script> -->
    <script src="js/interaccion.js"></script>

</body>




</html>