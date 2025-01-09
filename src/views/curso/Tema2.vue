<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Prescripción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La prescripción adquisitiva o usucapión, es un mecanismo legal que permite a una persona adquirir el dominio de un bien después de haberlo poseído de forma continua, pacífica y pública, cumpliendo con las condiciones que establece la Ley.

    h2.mb-5(data-aos="fade-right") Características principales

    p.mb-5 La prescripción adquisitiva es un mecanismo jurídico que permite adquirir la propiedad de un bien mediante la posesión prolongada y continua, cumpliendo con ciertos requisitos establecidos por la Ley.

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propiedad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Basada en el tiempo
            p Requiere posesión continua por un periodo específico, definido por la Ley.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/1.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Posesión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Posesión pacífica  
            p La posesión debe ejercerse sin conflictos o violencia.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propiedad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Posesión pública
            p La tenencia debe ser visible y reconocible por terceros.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Posesión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Clasificación  
            p Se divide en prescripción <b>ordinaria</b> (con buena fe y justo título) y <b>extraordinaria</b> (sin estos requisitos).
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
    .titulo-figura.mb-4
      h5 Tabla 3. 
      span Tipos de prescripción adquisitiva  

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th.bg-color-4 Tipo
            th.bg-color-4 Requisitos
            th.bg-color-4 Tiempo requerido
            th.bg-color-4 Aplicación principal
        tbody
          tr.bg-color-5
            td <b>Ordinaria</b>
            td Buena fe y justo título.
            td 5 años
            td Bienes muebles e inmuebles con apariencia de derecho.
            
          tr.bg-color-5
            td <b>Extraordinaria</b> 
            td Posesión continua, pacífica y pública.
            td 10 años
            td Principalmente inmuebles sin título formal.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        h2.mb-5(data-aos="fade-right") Regulación en Colombia

        p.mb-5 La prescripción adquisitiva es un mecanismo jurídico que permite adquirir la propiedad de un bien mediante la posesión prolongada y continua, cumpliendo con ciertos requisitos establecidos por la Ley.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Marco legal
                p.mb-0 Regulado por el Código Civil, establece las condiciones y procedimientos para que el poseedor pueda adquirir el dominio de un bien.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Proceso judicial
                p.mb-0 El poseedor debe demostrar ante un juez, que ha cumplido con los requisitos de la prescripción para obtener el reconocimiento legal.    
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Función social de la propiedad
                p.mb-0 Según el Artículo 58 de la Constitución Política de Colombia, la propiedad debe cumplir una función social, justificando este mecanismo en casos de abandono de bienes.      
            
    h3.mb-5(data-aos="fade-right") Ejemplo práctico

    p.mb-5 Pedro posee una finca durante 12 años de forma pacífica, continua y pública, sin que el propietario original reclame su derecho. Al cumplir con los requisitos, Pedro puede iniciar un proceso judicial para obtener el dominio por <b>prescripción extraordinaria</b>. Si hubiera tenido un documento de compraventa imperfecto y buena fe, podría haber solicitado el dominio por <b>prescripción ordinaria</b> tras 6 años de posesión.

    h2.mb-5(data-aos="fade-right") Importancia de la prescripción

    p.mb-5 La prescripción adquisitiva es un instrumento clave para garantizar la estabilidad patrimonial y promover el aprovechamiento de los bienes en beneficio de la sociedad.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Estabilidad patrimonial 
              p Regulariza la tenencia de bienes y promueve la seguridad jurídica.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Aprovechamiento de bienes
              p Evita el abandono y fomenta el uso productivo de los bienes en beneficio de la sociedad.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Inclusión económica
              p Facilita la integración de bienes sin título formal al sistema jurídico y económico.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Relevancia en áreas rurales
              p Permite que poseedores de terrenos sin títulos formales en zonas rurales, puedan adquirir su dominio.
      
    p.mb-5 La prescripción adquisitiva no solo promueve la estabilidad en las relaciones patrimoniales, sino que también respalda la inclusión social y económica de quienes han poseído bienes de forma legítima, especialmente en zonas rurales de Colombia.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/78849" target="_blank" rel="noopener noreferrer") Belmaña Juárez, J. (2014). Derechos reales, manual de la posesión: notas de clases, jurisprudencia. Alveroni Ediciones.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minvivienda.gov.co/sites/default/files/procesos/gpv-p-10-transferencia-de-dominio-de-bienes-inmuebles-art-10-7.0.pdf " target="_blank" rel="noopener noreferrer") GPV-P-10 Transferencia de dominio de bienes inmuebles en cumplimiento de los compromisos derivados de los extintos ICT - INURBE 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://kirasystems.com/" target="_blank" rel="noopener noreferrer") Inteligencia artificial para analizar y extraer información clave de contratos y documentos legales 
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2FazgGbamw4" target="_blank" rel="noopener noreferrer") Asocapitales. (2021). Webinar de transferencia de bienes inmuebles 

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
