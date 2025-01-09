<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Contratos traslativos de dominio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-7.mb-3
        p.mb-0 Los contratos traslativos de dominio, son acuerdos legales mediante los cuales una persona, denominada enajenante, transfiere la propiedad de un bien a otra persona, denominada adquirente, a cambio de una contraprestación o de manera gratuita. Estos contratos tienen como principal objetivo, cambiar la titularidad del dominio de un bien, ya sea de manera temporal o permanente, y están regulados por principios básicos del derecho civil, como el consentimiento, la capacidad de las partes y la licitud del objeto.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/1.png', alt='')
    
    .row.align-items-center.bg-ppal-azul.p-4.mb-5
      .col-lg-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col-lg.mb-3
        p.mb-0 Estos contratos son fundamentales en la vida jurídica y económica, puesto que permiten la transferencia formal de la propiedad, asegurando la protección de los derechos, tanto del enajenante como del adquirente. Además, son esenciales para garantizar la seguridad jurídica en las transacciones y evitar conflictos de titularidad.
    
    h2.mb-3(data-aos="fade-right") ¿Cuáles son los contratos traslativos de dominio?

    p.mb-5 Existen diversos tipos de contratos traslativos de dominio, entre los cuales destacan los siguientes:

   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        TarjetaAudio.color-primario.bg-color-white.mb-3(
          texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )
    
    h2.mb-5(data-aos="fade-right") ¿Cuándo se aplican los contratos traslativos de dominio?

    p.mb-5 Los contratos traslativos de dominio se aplican en diversas situaciones donde las partes buscan formalizar legalmente la transferencia de bienes, asegurando su protección bajo la normativa vigente. Estos contratos son esenciales para garantizar la seguridad jurídica en las transacciones patrimoniales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h5 Transacciones comerciales 
              p Compraventa de bienes inmuebles, vehículos o productos industriales.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h5 Transmisión gratuita de bienes
              p Cesión sin beneficio económico, como en las donaciones.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Intercambio de bienes
              p Permuta de bienes entre dos partes.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Préstamos de bienes fungibles
              p Transferencia temporal de bienes consumibles, como dinero u otros bienes fungibles.
    
    
    h2.mb-5(data-aos="fade-right") Requisitos para su validez

    p.mb-5 Los requisitos para la validez de un contrato, garantizan que los acuerdos entre las partes cumplan con los principios legales y éticos necesarios para su ejecución.

    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-up")
      .col-lg-8
        div.bg-ppal-azul.p-4.px-5.h-100.align-content-center
          ul.lista-ul(data-aos="fade-left")
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Consentimiento de las partes:</b> ambas partes deben manifestar su voluntad de forma libre y clara.
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Objeto del contrato:</b> debe ser lícito, susceptible de ser poseído y comercializado.
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Capacidad jurídica: </b> las partes involucradas deben contar con la capacidad legal para contratar.
          
          p.text-bold Formalidades específicas:

          ul.lista-ul.mb-0(data-aos="fade-left")
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Para bienes muebles:</b>  acuerdo de las partes y entrega del bien (tradición).
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Para bienes inmuebles:</b>  escritura pública y la inscripción en el Registro de Instrumentos Públicos.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/7.png', alt='')
    
    .titulo-figura.mb-4
      h5 Tabla 4. 
      span Tipos de contratos traslativos de dominio  

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(width="25%").bg-color-4 Tipo de contrato
            th.bg-color-4 Regulación
            th.bg-color-4 Aspectos relevantes
        tbody
          tr.bg-color-5
            td <b>Compraventa</b>
            td Artículos 1849 y siguientes del CC.
            td Requiere claridad en el precio y condiciones de entrega del bien.
            
          tr.bg-color-5
            td <b>Donación</b> 
            td Artículos 1443 y siguientes del CC.
            td Escritura pública necesaria para bienes inmuebles.
          tr.bg-color-5
            td <b>Permuta</b> 
            td Artículos 1955 y siguientes del CC.
            td Intercambio de bienes con reglas similares a las de compraventa.
          tr.bg-color-5
            td <b>Mutuo</b> 
            td Artículos 2221 y siguientes del CC.
            td Aplicable a bienes fungibles, establece obligaciones claras de devolución.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        h2.mb-5(data-aos="fade-right") Aspectos legales en Colombia

        p.mb-5 Los contratos traslativos de dominio están regulados por el <b>Código Civil</b> y el <b>Código de Comercio</b>, dependiendo del tipo de bien y la naturaleza de la transacción. Además, deben respetar principios constitucionales como:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/8.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Función social de la propiedad</b> (Art. 58 de la Constitución).

          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/9.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Equidad contractual</b> (Art. 333 de la Constitución).
    
    p.mb-5 Formalidades según el tipo de bien, son: 

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3
          ul.lista-ul.mb-0(data-aos="fade-left")
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Bienes muebles.</b>   Acuerdo entre las partes y entrega del bien (tradición).
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Bienes inmuebles. </b>  Escritura pública e inscripción en la Oficina de Registro de Instrumentos Públicos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/10.png', alt='')
    
    p.text-bold.mb-5 La importancia de estos contratos se fundamenta en que: 

    .row.mb-5
      .col-lg-3(data-aos="flip-down")
        figure
          img(src='@/assets/curso/tema3/11.png', alt='')
      .col-lg-3(data-aos="flip-up")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.mb-0 Garantizan la <b>transparencia y legalidad</b> en las transferencias patrimoniales.
      .col-lg-3(data-aos="flip-down")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.mb-0 Fortalecen la <b>seguridad jurídica</b> y protegen los derechos de las partes.
      .col-lg-3(data-aos="flip-up")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.mb-0 Contribuyen al bienestar social, respetando los principios constitucionales.
    
    p.mb-5 En conclusión, los contratos traslativos de dominio en Colombia, son herramientas fundamentales para formalizar y garantizar la transferencia de bienes bajo un marco de equidad y legalidad. Desde transacciones comerciales, hasta donaciones, estos contratos fortalecen la seguridad en las relaciones patrimoniales y jurídicas.

    
            
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117630" target="_blank" rel="noopener noreferrer") Medina Pabón, J. E. (2019). Derecho Civil. Bienes. Derechos reales (2 ed.). Editorial Universidad del Rosario. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/Declaraci%C3%B3n-de-pertenencia.aspx#:~:text=%2D%20Prescripci%C3%B3n%20adquisitiva%20ordinaria:%20Para%20los,impuestos%20y%20mantenimiento%20del%20bien)." target="_blank" rel="noopener noreferrer") ¿Cómo me puedo convertir en dueño de un predio sobre el cual he habitado hace mucho tiempo? 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.thomsonreuters.cl/es-cl/productos/informacion-legal-westlaw " target="_blank" rel="noopener noreferrer") Plataforma sobre gestión básica del derecho 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ev6qJ2kPwbQ" target="_blank" rel="noopener noreferrer") Mario Varela Law Firm. (2023). Protección de tus bienes.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
