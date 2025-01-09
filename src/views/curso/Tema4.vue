<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Acción reivindicatoria'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La <b>acción reivindicatoria</b> es un mecanismo jurídico esencial para que el propietario legítimo de un bien, pueda recuperar su posesión cuando esta es ocupada injustamente por un tercero. Este recurso está regulado en el <b>Código Civil Colombiano</b> (Artículos 946 y siguientes) y protege el derecho de propiedad, de manera integral.

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-3.px-5.order-2
          ul.lista-ul.mb-0(data-aos="fade-left")
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Legitimidad: </b> exclusiva para el titular legítimo del dominio.
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Bienes aplicables: </b> incluye bienes muebles e inmuebles identificables.
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Imprescriptibilidad: </b> puede ejercerse mientras el propietario conserve su derecho de dominio (excepto si el poseedor adquiere el bien por usucapión).
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Prueba del derecho: </b> el propietario debe demostrar su dominio mediante títulos válidos.
            li.mb-0.d-flex
              i.lista-ul__vineta
              p.mb-0 <b>Objetivo: </b> recuperar la posesión material del bien, los frutos generados y posibles daños ocasionados.
        .col-lg-auto.order-1
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
    
    h3.mb-5(data-aos="fade-right") Ejemplo

    p Supongamos que Juan es propietario de una finca ocupada sin autorización por Pedro. Juan puede interponer una acción reivindicatoria, presentando su escritura registrada. Si el juez falla a su favor, Pedro debe entregar el bien y compensar los frutos generados durante su ocupación.

    p.mb-5 Los elementos claves para ejercer la acción reivindicatoria son: 

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema4/2.png', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="18%" y="95%" numero="+")
                  h5 Dominio legítimo
                  p Demostrar la propiedad del bien mediante documentos legales como escrituras públicas o contratos.
                .bg-color-white.box-shadow.p-3(x="53%" y="95%" numero="+")
                  h5 Existencia del bien
                  p El bien debe estar físicamente presente y ser identificable al momento de la reclamación.

                .bg-color-white.box-shadow.p-3(x="86%" y="95%" numero="+")
                  h5 Posesión injusta
                  p El bien debe estar en posesión de un tercero sin un título válido o derecho adquirido (usucapión).
    
    p.mb-5.text-bold La importancia de la acción reivindicatoria es:

    .row.mb-5
      .col-lg-3(data-aos="flip-up")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.text-bold Protección del derecho de propiedad
          p.mb-0 Garantiza la restitución de bienes ocupados indebidamente.
      .col-lg-3(data-aos="flip-down")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.text-bold Seguridad jurídica
          p.mb-0 Refuerza la confianza en el sistema de propiedad y previene conflictos patrimoniales.
      .col-lg-3(data-aos="flip-up")
        div.p-4.bg-color-white.h-100.align-content-center.tarjeta.borderfull
          p.text-bold Resolución de conflictos
          p.mb-0 Juega un papel clave en contextos como el colombiano, donde las disputas por tierras e inmuebles, son frecuentes.
      .col-lg-3(data-aos="flip-down")
        figure
          img(src='@/assets/curso/tema4/3.png', alt='')
    
    h2.mb-5(data-aos="fade-right") Marco jurídico colombiano

    p.mb-5 La acción reivindicatoria está regulada por:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema4/4.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold Código Civil
              p.mb-0.text-center Artículos 946 y siguientes, que definen el derecho de propiedad y los lineamientos de reivindicación.

          
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema4/5.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold  Código General del Proceso
              p.mb-0.text-center Especifica las etapas judiciales para la restitución del bien.
                
    p.mb-5 Este mecanismo fortalece la seguridad jurídica y protege los derechos reales, siendo esencial para garantizar el control legítimo de los bienes.

    h2.mb-5(data-aos="fade-right") Acción posesoria

    p Las acciones posesorias, son mecanismos jurídicos diseñados para proteger el derecho de posesión de una persona sobre un bien, independientemente de si cuenta con el título de propiedad. Su objetivo principal es garantizar la estabilidad en la tenencia de bienes y prevenir perturbaciones o despojos arbitrarios que puedan afectar al poseedor. Estas acciones no determinan la propiedad, sino que se enfocan en proteger la posesión pacífica y pública del bien.
    p.text-bold.mb-5 La finalidad de estas acciones, se orienta a tres aspectos esenciales:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Protección de la posesión legítima
            p.mb-0 Resguarda a quienes poseen un bien de manera continua, pacífica y pública, contra actos como interferencias indebidas e intentos de despojo.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Evitar la violencia
            p.mb-0 Establecen un mecanismo legal para resolver conflictos, desalentando el uso de la fuerza o medidas arbitrarias, promoviendo la resolución pacífica de disputas.   
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Mantener el orden jurídico
            p.mb-0 Garantizan que solo un juez, mediante el debido proceso, pueda ordenar el despojo o cese de posesión, reforzando la seguridad jurídica y resolviendo disputas conforme a las leyes.   


    
    h2.mb-5(data-aos="fade-right") Características de las acciones posesorias

    p.mb-5 Las acciones posesorias tienen las siguientes características fundamentales:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Independencia de la propiedad")
            p El poseedor no necesita demostrar la titularidad del bien, solo acreditar la posesión legítima, protegiendo su tenencia pacífica y pública frente a perturbaciones o despojos.
          .div(titulo="Urgencia")
            p Debe ejercerse dentro de plazos breves, generalmente en el año siguiente al acto que perturba o despoja la posesión, para evitar el agravamiento de conflictos.
          .div(titulo="Ámbito de aplicación amplio")
            p Se aplica tanto a bienes muebles (vehículos, maquinaria) como inmuebles (casas, terrenos), convirtiéndolos en herramientas versátiles.
          .div(titulo="Carácter preventivo y reparador")
            p <b>- Preventivo:</b> evita futuros actos que puedan afectar la posesión, como amenazas de despojo.
          
    p.mb-5 Estas características refuerzan su función de restablecer el equilibrio en las relaciones patrimoniales y garantizar el respeto a la posesión legítima.

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Tipos de acciones posesorias
            p.mb-4(data-aos="fade-right") Invitamos a leer el documento “Tipos de acciones posesorias”, en el cual se detalla cómo estas herramientas legales protegen la posesión de bienes, frente a perturbaciones, despojos y conflictos más complejos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de acciones posesorias

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/10.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
              a(href="https://blogs.ugto.mx/derecho/presentacion-derechos-de-los-usufructuarios/" target="_blank" rel="noopener noreferrer") Universidad de Guanajuato. (2021). Derechos de los usufructuarios (blog). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aplicaciones.ai/casetext/" target="_blank" rel="noopener noreferrer") Derecho público y privado  

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ntcz89ZdgWo" target="_blank" rel="noopener noreferrer") Jurídicamente. (2023). USUFRUCTO VITALICIO.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Transferencia y protección de los bienes',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes contratos es traslativo de dominio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Arrendamiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Compraventa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mandato',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué tipo de bienes pueden adquirirse por ocupación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Bienes de uso público',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Bienes mostrencos ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Bienes inmuebles',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el tiempo necesario para la prescripción extraordinaria en bienes inmuebles?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '5 años',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '10 años',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '15 años',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué documento es necesario para una acción reivindicatoria de un inmueble?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escritura pública inscrita ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Un contrato verbal',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un título de posesión',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué contrato puede incluir condiciones para el receptor?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Permuta',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Donación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mutuo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
