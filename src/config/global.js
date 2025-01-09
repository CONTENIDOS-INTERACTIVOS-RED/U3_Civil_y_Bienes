export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Transferencia y protección de los bienes',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Transferencia y protección de bienes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tradición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ocupación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Accesión',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prescripción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contratos traslativos de dominio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Acción reivindicatoria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Larrea Holguín, J. (2008). Manual elemental de Derecho Civil 3. Volumen 4: del dominio o propiedad, modos de adquirir y el fideicomiso. Corporación de Estudios y Publicaciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115047 ',
    },
    {
      referencia:
        'Luna Serrano, A., Sancho Rebullida, F. D. A. & Lacruz Berdejo, J. L. (2016). Elementos de derecho civil III: derechos reales. Volumen primero: posesión y propiedad (2 ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34261 ',
    },
    {
      referencia:
        'Torres Lana, J. Á. (2015). Cuaderno I: introducción al estudio de los derechos reales, la posesión. Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61008 ',
    },
  ],
  glosario: [
    {
      termino: 'Accesión',
      significado:
        'Modo originario de adquirir el dominio mediante la incorporación de un bien accesorio a uno principal, ya sea de manera natural o artificial.',
    },
    {
      termino: 'Acción posesoria',
      significado:
        'Mecanismo jurídico para proteger la posesión de un bien frente a perturbaciones o despojos, sin requerir la demostración de propiedad.',
    },
    {
      termino: 'Acción reivindicatoria',
      significado:
        'Herramienta legal que permite al propietario legítimo reclamar la restitución de un bien en posesión de un tercero.',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'Aptitud legal de las personas para ser sujetos activos o pasivos de relaciones jurídicas y celebrar actos legales válidos.',
    },
    {
      termino: 'Código Civil',
      significado:
        'Conjunto normativo que regula las relaciones entre particulares, incluyendo los derechos reales y la transferencia de bienes en Colombia.',
    },
    {
      termino: 'Compraventa',
      significado:
        'Contrato traslativo de dominio en el que una parte (vendedor) transfiere la propiedad de un bien a otra (comprador) a cambio de un precio',
    },
    {
      termino: 'Dominio',
      significado:
        'Derecho pleno que confiere a su titular la facultad de usar, gozar y disponer de un bien, dentro de los límites establecidos por la Ley.',
    },
    {
      termino: 'Donación',
      significado:
        'Contrato mediante el cual una persona transfiere gratuitamente la propiedad de un bien a otra.',
    },
    {
      termino: 'Justo título',
      significado:
        'Documento o acto legal que confiere apariencia de derecho al poseedor de un bien y que puede servir como base para la prescripción ordinaria.',
    },
    {
      termino: 'Mutuo',
      significado:
        'Contrato en el que una persona entrega bienes fungibles, como dinero, a otra, quien se compromete a devolver bienes de la misma especie y cantidad.',
    },
    {
      termino: 'Ocupación',
      significado:
        'Modo originario de adquirir el dominio de bienes que no tienen propietario, conocidos como bienes vacantes o mostrencos.',
    },
    {
      termino: 'Permuta',
      significado:
        'Contrato traslativo de dominio que consiste en el intercambio de bienes entre dos partes sin que intervenga dinero como contraprestación principal.',
    },
    {
      termino: 'Posesión',
      significado:
        'Tenencia de un bien con ánimo de propietario, que puede ser protegida por acciones posesorias en caso de perturbación o despojo.',
    },
    {
      termino: 'Prescripción adquisitiva',
      significado:
        'Mecanismo legal que permite adquirir el dominio de un bien mediante la posesión prolongada, pacífica, pública y continua.',
    },
    {
      termino: '<em>Res Nullius</em>',
      significado:
        'Bienes que no tienen propietario y que pueden ser apropiados por ocupación, como animales salvajes o recursos naturales en ciertas condiciones.',
    },
    {
      termino: 'Títulos traslaticios de dominio',
      significado:
        'Documentos legales que sirven como base para transferir la propiedad, como contratos de compraventa, donación o permuta.',
    },
    {
      termino: 'Tradición',
      significado:
        'Acto jurídico mediante el cual se transfiere la propiedad de un bien, ya sea mediante la entrega física, simbólica o registral.',
    },
    {
      termino: 'Usucapión',
      significado:
        'Sinónimo de prescripción adquisitiva, es el proceso mediante el cual se adquiere la propiedad de un bien por posesión continuada durante un tiempo establecido por la Ley.',
    },
  ],
}
