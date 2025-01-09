<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Transferencia y protección de bienes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    div(data-aos="zoom-in")
      p La <b>transferencia de bienes</b> consiste en el acto jurídico mediante el cual, los derechos de propiedad o posesión sobre un bien se transfieren de una persona a otra. Este proceso puede realizarse de forma voluntaria, como en los contratos de compraventa, donación o permuta, o de manera legal, como en los casos de sucesión hereditaria, accesión o prescripción adquisitiva. Implica un cambio en la titularidad del bien, ya sea temporal o definitivo, y debe cumplir con los requisitos legales establecidos, para ser válida y oponible a terceros.

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3
          p.mb-0 Por su parte, la protección de bienes se enfoca en mecanismos legales que garantizan la seguridad y estabilidad de los derechos sobre los bienes. Estos mecanismos incluyen acciones reivindicatorias, que permiten al propietario recuperar su bien de manos de terceros, y acciones posesorias, que protegen al poseedor frente a perturbaciones o despojos ilegítimos. La finalidad es asegurar el ejercicio pacífico y conforme a la Ley de la propiedad y la posesión, promoviendo la convivencia social y la justicia en las relaciones patrimoniales.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
    
    p.mb-5 Ambos conceptos son pilares fundamentales del derecho civil, dado que regulan cómo se adquieren, transmiten y resguardan los bienes, garantizando la seguridad jurídica y contribuyendo al orden social y económico.

    h2.mb-5(data-aos="fade-right") Modos de adquirir el dominio

    p Los modos de adquirir el dominio, son mecanismos jurídicos que permiten a una persona obtener la propiedad de un bien de manera legítima. Este derecho pleno y absoluto sobre un bien, incluye la facultad de usarlo, disfrutarlo y disponer de él.

    p.mb-5 La clasificación de los modos de adquirir el dominio:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Originarios")
            p No dependen de un propietario anterior, como la ocupación o la accesión.
          .div(titulo="Derivados")
            p Implican la transferencia de la propiedad de una persona a otra, como la tradición.
    
    p.mb-5 A continuación, se resumen los principales modos de adquirir el dominio y su evolución histórica:

    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Modos de adquirir el dominio  

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(width="25%").bg-color-4 Modo
            th.bg-color-4 Descripción
            th.bg-color-4 Evolución Histórica
        tbody
          tr.bg-color-5
            td <b>Tradición</b>
            td Transferencia de bienes mediante entrega y consentimiento de las partes.
            td Surgió en el Derecho Romano y se consolidó en la Edad Moderna, con requisitos formales, como el registro.
            
          tr.bg-color-5
            td <b>Ocupación</b> 
            td Adquisición de bienes sin dueño (res nullius).
            td En el Derecho Romano era común para tierras y bienes abandonados. Actualmente, es menos frecuente.
           
          tr.bg-color-5
            td <b>Accesión</b>
            td Adquisición de bienes como resultado de un proceso natural o humano, como la incorporación de mejoras.
            td Regulada desde el Derecho Romano; hoy aplica especialmente en inmuebles o bienes agrícolas.
             
          tr.bg-color-5
            td <b>Prescripción</b> 
            td Adquisición de bienes mediante la posesión pacífica y continuada, por un tiempo determinado.
            td Evolucionó para proteger a los poseedores de buena fe y evitar conflictos prolongados sobre la propiedad.

    h2.mb-5(data-aos="fade-right") Ejemplos históricos y contemporáneos

    p.mb-5 El concepto de propiedad ha evolucionado significativamente a lo largo de la historia, adaptándose a los cambios sociales, económicos y culturales de cada época: 
          
  
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Derecho Romano
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La ocupación permitía adquirir bienes sin dueño, como tierras deshabitadas. 
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La tradición se usaba en transacciones, mediante entrega física y consentimiento.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Edad Media
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 En el sistema feudal, el dominio estaba fragmentado entre señores y vasallos.  
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La tradición ganó fuerza en transacciones comerciales urbanas.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Edad Moderna
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 El Código Civil Francés (1804), consolidó el concepto de propiedad plena y estableció normas claras para la tradición.  
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 <b>Ejemplo:</b> compraventa de inmuebles mediante acuerdos formales y registro.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Derecho Contemporáneo (Colombia)
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La propiedad responde a una función social (Art. 58 de la Constitución).  
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 Reconocimiento de la propiedad colectiva para comunidades indígenas y afrodescendientes (Ley 70 de 1993). 
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 <b>Ejemplo:</b> Titulación de tierras colectivas en zonas rurales, para preservar la cultura y el bienestar comunitario.
               
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Derecho Romano
              ul.lista-ul.mb-0
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La ocupación permitía adquirir bienes sin dueño, como tierras deshabitadas.  
                li.mb-0.d-flex
                  i.lista-ul__vineta
                  p.mb-0 La tradición se usaba en transacciones mediante entrega física y consentimiento.
    
    h2.mb-5(data-aos="fade-right") Importancia en el sistema jurídico colombiano

    p.mb-5 En Colombia, los modos de adquirir el dominio están regulados por el <b>Código Civil</b>, que garantiza seguridad jurídica y respeta la propiedad privada. Además, estos mecanismos reflejan principios constitucionales, como la función social de la propiedad, que busca equilibrar el interés individual con el bienestar colectivo.

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3
          p.mb-0 La evolución del concepto demuestra cómo las normas jurídicas han adaptado el derecho de propiedad para promover el desarrollo, la equidad y la seguridad jurídica, tanto en transacciones individuales como en relaciones comunitarias.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/8.png', alt='')
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Tradición

    p.mb-5 La tradición en el derecho civil colombiano, es el acto jurídico mediante el cual una persona transfiere a otra, el dominio de un bien. Este mecanismo requiere del cumplimiento de requisitos legales y de la voluntad expresa de las partes. Es uno de los modos derivados de adquirir el dominio, porque implica la transferencia de propiedad desde un propietario previo (tradente) a un nuevo propietario (adquirente).

    h2.mb-5(data-aos="fade-right") Elementos principales de la tradición

    p.mb-5 <b>Título traslaticio de dominio:</b> documento o acuerdo legal que sirve de base para la transferencia, como contratos de compraventa, permuta o donación.

    ul.lista-ul.mb-5(data-aos="fade-left")
      li.mb-0.d-flex
        i.lista-ul__vineta
        p.mb-0 <b>Material o real:</b> entrega física del bien (ejemplo: un automóvil). 
      li.mb-0.d-flex
        i.lista-ul__vineta
        p.mb-0 <b>Simbólica:</b> representación del bien (ejemplo: entrega de llaves de una casa).
      li.mb-0.d-flex
        i.lista-ul__vineta
        p.mb-0 <b>Legal:</b> inscripción del título en el registro de instrumentos públicos para bienes inmuebles.
    
    p.mb-5.text-bold Los requisitos para una tradición válida son:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-7.mb-3.order-2
        ul.lista-ul.mb-0(data-aos="fade-left")
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Consentimiento mutuo:</b> tradente y adquirente deben estar de acuerdo para realizar la transferencia.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Capacidad jurídica:</b> ambas partes deben ser legalmente aptas para contratar.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Objeto transferible: </b> solo se pueden transferir bienes susceptibles de dominio y comercio.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Formalidades legales: </b> para bienes muebles, basta la entrega física; para inmuebles, es obligatoria la inscripción en el registro de instrumentos públicos.
      .col-lg-5.order-1
        figure
          img(src='@/assets/curso/tema1/9.png', alt='')
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8
        div.bg-color-8.p-4.px-5.h-100.align-content-center
          p.text-bold Ejemplo práctico:
          p.mb-0 Cuando Juan vende su casa a María, el contrato de compraventa actúa como título traslaticio de dominio. Sin embargo, la transferencia solo es válida tras inscribir el contrato en el registro de instrumentos públicos, otorgando a María la titularidad legal.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/10.png', alt='')
    
    p.mb-5 La tradición, regulada por el Código Civil colombiano, afirma la seguridad jurídica, tanto para las partes involucradas como para terceros, evitando conflictos futuros y garantizando los derechos de propiedad.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Ocupación
    
    p La ocupación es un modo originario de adquirir el dominio que permite a una persona obtener la propiedad de un bien sin dueño (res nullius). Se basa en la aprehensión material del bien, es decir, en tomar posesión física con el propósito de hacerlo propio.

    p.mb-5.text-bold Las características de la ocupación son:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Origen primitivo")
            p Es uno de los modos más antiguos de adquirir dominio, aplicable a bienes vacantes o abandonados.
          .div(titulo="Acto material y voluntario")
            p Requiere contacto físico y la intención de ser propietario del bien.
          .div(titulo="Bienes susceptibles de ocupación")
            p Incluye bienes sin dueño previo (<em>res nullius</em>) o abandonados, pero excluye bienes públicos.
          .div(titulo="Ánimo de dominio")
            p La intención debe ser ejercer derechos de propiedad, no solo posesión temporal.
          .div(titulo="Restricciones legales")
            p No se aplica a bienes de uso público ni a bienes regulados por normativas ambientales.
    
    p.text-bold.mb-5 Los tipos de bienes susceptibles de ocupación, son:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Bienes vacantes
            p.mb-0 Peces en un río público o animales de caza, en áreas permitidas.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Bienes mostrencos
            p.mb-0 Bienes muebles abandonados, cuyo propietario no se conoce; por ejemplo,  una bicicleta encontrada en un terreno baldío.  

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3
          p.mb-0 <b>Ejemplo práctico:</b> una persona pesca en un río público. Al capturar los peces (sin dueño previo), estos se convierten en su propiedad, siempre que respete las normativas ambientales.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
    
    p.mb-5 Las restricciones legales en la ocupación de bienes, reflejan la necesidad de equilibrar el acceso a recursos con la protección del interés público y ambiental. Por ejemplo, bienes de uso público, como playas o carreteras, no pueden ser ocupados, y la explotación de recursos naturales debe cumplir con regulaciones ambientales específicas. 

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8.order-2
        div.bg-color-8.p-4.px-5.h-100.align-content-center
          p.mb-0 En la práctica, estas normativas se aplican en contextos como la recolección de frutos en terrenos sin propietario conocido o en casos de hallazgos valiosos, donde puede ser obligatorio reportarlos a las autoridades. Estas disposiciones aseguran que la ocupación de bienes se realice dentro de un marco legal que protege, tanto los derechos individuales como los intereses colectivos.

      .col-lg-4.order-1
        figure
          img(src='@/assets/curso/tema1/15.png', alt='')
    
    p.mb-5 La ocupación, aunque limitada en su aplicación, sigue siendo relevante en casos específicos y está regulada por el Código Civil colombiano, para garantizar el respeto por los derechos de propiedad y los bienes públicos.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Accesión

    p.mb-5 La accesión es un modo originario de adquirir el dominio que permite al propietario de un bien principal, adquirir automáticamente todo lo que se une o incorpora a dicho bien, ya sea de manera natural o artificial. Este mecanismo se fundamenta en el principio que el dueño de un bien principal tiene derecho sobre los frutos, aumentos o mejoras que de él se deriven, siempre que estas incorporaciones se produzcan bajo condiciones legales específicas. Es especialmente relevante en propiedades inmuebles, productos naturales o construcciones, realizadas en terrenos. Las características de la accesión, son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Relación entre bienes principales y accesorios 
              p El bien accesorio se une al principal, perdiendo su individualidad.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7
              h5 Incorporación automática
              p No requiere de un acto expreso del propietario del bien principal.
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7
              h5 Origen de la incorporación
              Puede ser natural (fenómenos naturales) o artificial (intervención humana).
               
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7
              h5 Importancia jurídica
              p Define la titularidad de elementos incorporados a bienes existentes y regula conflictos relacionados con materiales y mejoras.
    
    p.mb-5 La accesión es un concepto jurídico, que regula la adquisición de bienes o derechos mediante la incorporación de elementos a una propiedad principal, ya sea por causas naturales o intervención humana.

    
    .titulo-figura.mb-4
      h5 Tabla 2. 
      span Tipos de accesión  

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(width="25%").bg-color-4 Tipo de accesión
            th.bg-color-4 Descripción
            th.bg-color-4 Ejemplo
        tbody
          tr.bg-color-5
            td <b>Natural</b>
            td Ocurre espontáneamente por fenómenos naturales.
            td Formación de islas en un río o acumulación de tierra en terrenos ribereños.
            
          tr.bg-color-5
            td <b>Artificial o industrial</b> 
            td Surge por intervención humana, como construcciones o instalaciones.
            td Construcción de una edificación en un terreno propio que pasa a ser parte del terreno.
           
          tr.bg-color-5
            td <b>De frutos</b>
            td El propietario de un bien adquiere los frutos naturales o industriales que produce el bien.
            td Frutos de un árbol o productos derivados de la explotación agrícola de una finca.
             
          tr.bg-color-5
            td <b>Prescripción</b> 
            td Adquisición de bienes mediante la posesión pacífica y continuada, por un tiempo determinado.
            td Frutos de un árbol o productos derivados de la explotación agrícola de una finca.         
               
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        h2.mb-5(data-aos="fade-right") Regulación de la accesión en Colombia

        p.mb-5 En el marco jurídico colombiano, la accesión está regulada por el Código Civil, que establece los principios y condiciones para su aplicación:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/20.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold Aplicación a bienes muebles e inmuebles
              p.mb-0.text-center Maquinaria fija a una estructura, pasa a ser parte del inmueble por accesión.

          
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/21.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold  Conflictos por uso de materiales ajenos
              p.mb-0.text-center El dueño de los materiales tiene derecho a ser indemnizado. 
              p.mb-0.text-center Si alguien construye de buena fe en terreno ajeno, el propietario puede:
              p.mb-0.text-center Adquirir la construcción, pagando su valor.
              p.mb-0.text-center Exigir su demolición.
    
    p.mb-5 La accesión es un mecanismo eficiente y natural de adquirir el dominio, que refuerza los derechos del propietario sobre el bien principal y todo lo que se incorpore a este. Regulada por el Código Civil colombiano, no solo asegura la continuidad del dominio en situaciones naturales o humanas, sino que también ofrece un marco jurídico claro, para resolver conflictos relacionados con materiales y mejoras. Este mecanismo facilita la incorporación de bienes accesorios al principal, garantizando la integridad del dominio y reforzando la seguridad jurídica en las relaciones patrimoniales.

  
  

    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/76069 " target="_blank" rel="noopener noreferrer") Aguilar Basurto, L. A. (2008). Derecho de los bienes: patrimonio, derechos reales, posesión y registro público. Editorial Miguel Ángel Porrúa. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ambitojuridico.com/noticias/civil/civil-y-familia/aclaracion-clave-sobre-la-transferencia-del-dominio-de-bienes" target="_blank" rel="noopener noreferrer") Aclaración clave sobre la transferencia del dominio de bienes inmuebles 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://iuris.ai/" target="_blank" rel="noopener noreferrer") Inteligencia artificial aplicada al ámbito legal 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=LhEbC_ZeQ1U" target="_blank" rel="noopener noreferrer") Ministerio de Economía y Finanzas del Perú. (2024). Actos de disposición de bienes inmuebles: Transferencia y permuta  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
