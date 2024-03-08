import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentacion-DSI/__docusaurus/debug',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug', '2c3'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/config',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/config', '660'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/content',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/content', 'a7f'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/globalData', '920'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/metadata', 'e63'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/registry',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/registry', '666'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/routes',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/routes', 'bad'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog',
    component: ComponentCreator('/documentacion-DSI/blog', 'f3d'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/archive',
    component: ComponentCreator('/documentacion-DSI/blog/archive', '1ad'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/first-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/first-blog-post', '0a1'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/long-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/long-blog-post', '20e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/mdx-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/mdx-blog-post', '712'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags',
    component: ComponentCreator('/documentacion-DSI/blog/tags', '27c'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/docusaurus',
    component: ComponentCreator('/documentacion-DSI/blog/tags/docusaurus', '308'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/facebook',
    component: ComponentCreator('/documentacion-DSI/blog/tags/facebook', '717'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hello',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hello', 'ee9'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hola',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hola', 'f5b'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/welcome',
    component: ComponentCreator('/documentacion-DSI/blog/welcome', 'f29'),
    exact: true
  },
  {
    path: '/documentacion-DSI/markdown-page',
    component: ComponentCreator('/documentacion-DSI/markdown-page', 'f15'),
    exact: true
  },
  {
    path: '/documentacion-DSI/docs',
    component: ComponentCreator('/documentacion-DSI/docs', '324'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', '1ad'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', '23f'),
            routes: [
              {
                path: '/documentacion-DSI/docs/category/api-impresion',
                component: ComponentCreator('/documentacion-DSI/docs/category/api-impresion', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/bases_replica',
                component: ComponentCreator('/documentacion-DSI/docs/category/bases_replica', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/bringg-y-peya-',
                component: ComponentCreator('/documentacion-DSI/docs/category/bringg-y-peya-', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/configuracion-de-politicas-mxp-v-19156',
                component: ComponentCreator('/documentacion-DSI/docs/category/configuracion-de-politicas-mxp-v-19156', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/creacion-de-productos-desde-maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/creacion-de-productos-desde-maxpoint', '3b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/des-relacionar-cajas-chicas-desde-maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/des-relacionar-cajas-chicas-desde-maxpoint', '869'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/encuestas',
                component: ComponentCreator('/documentacion-DSI/docs/category/encuestas', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica-1', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/fidelizacion',
                component: ComponentCreator('/documentacion-DSI/docs/category/fidelizacion', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/fullservice',
                component: ComponentCreator('/documentacion-DSI/docs/category/fullservice', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/horarios',
                component: ComponentCreator('/documentacion-DSI/docs/category/horarios', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/identificadores-app-',
                component: ComponentCreator('/documentacion-DSI/docs/category/identificadores-app-', 'a77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/impresion',
                component: ComponentCreator('/documentacion-DSI/docs/category/impresion', 'd93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/instalacion-de-reportes',
                component: ComponentCreator('/documentacion-DSI/docs/category/instalacion-de-reportes', '3a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/integracion-sir',
                component: ComponentCreator('/documentacion-DSI/docs/category/integracion-sir', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/kiosko',
                component: ComponentCreator('/documentacion-DSI/docs/category/kiosko', 'fc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/mantenimiento',
                component: ComponentCreator('/documentacion-DSI/docs/category/mantenimiento', 'f4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/manual-de-cambios-para-eventos',
                component: ComponentCreator('/documentacion-DSI/docs/category/manual-de-cambios-para-eventos', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/manual-de-configuraciones_domicilio',
                component: ComponentCreator('/documentacion-DSI/docs/category/manual-de-configuraciones_domicilio', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/manuales-de-configuracion-de-politicas-v191572',
                component: ComponentCreator('/documentacion-DSI/docs/category/manuales-de-configuracion-de-politicas-v191572', 'df1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/manuales-de-configuracion-de-politicas-v19162',
                component: ComponentCreator('/documentacion-DSI/docs/category/manuales-de-configuracion-de-politicas-v19162', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/manuales-de-configuraciones-de-politicas-v19163',
                component: ComponentCreator('/documentacion-DSI/docs/category/manuales-de-configuraciones-de-politicas-v19163', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/maxpoint', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/mxp-v19155',
                component: ComponentCreator('/documentacion-DSI/docs/category/mxp-v19155', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/notas-de-credito',
                component: ComponentCreator('/documentacion-DSI/docs/category/notas-de-credito', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/nueva-versión-mxp',
                component: ComponentCreator('/documentacion-DSI/docs/category/nueva-versión-mxp', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/payphone',
                component: ComponentCreator('/documentacion-DSI/docs/category/payphone', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/plugthen',
                component: ComponentCreator('/documentacion-DSI/docs/category/plugthen', '94a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/por-productos-',
                component: ComponentCreator('/documentacion-DSI/docs/category/por-productos-', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/productos',
                component: ComponentCreator('/documentacion-DSI/docs/category/productos', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/reclamos-y-sugerencia',
                component: ComponentCreator('/documentacion-DSI/docs/category/reclamos-y-sugerencia', '0bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/replica-v2',
                component: ComponentCreator('/documentacion-DSI/docs/category/replica-v2', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/restaurantes',
                component: ComponentCreator('/documentacion-DSI/docs/category/restaurantes', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/ria-control-v3productos-especiales',
                component: ComponentCreator('/documentacion-DSI/docs/category/ria-control-v3productos-especiales', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/secuencia_ventas',
                component: ComponentCreator('/documentacion-DSI/docs/category/secuencia_ventas', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/servicios',
                component: ComponentCreator('/documentacion-DSI/docs/category/servicios', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/turnenos',
                component: ComponentCreator('/documentacion-DSI/docs/category/turnenos', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---basics',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---basics', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---extras',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---extras', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/uber-direct',
                component: ComponentCreator('/documentacion-DSI/docs/category/uber-direct', '04f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/vaucheraereolinea',
                component: ComponentCreator('/documentacion-DSI/docs/category/vaucheraereolinea', '7fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/vitality',
                component: ComponentCreator('/documentacion-DSI/docs/category/vitality', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Maxpoint', 'f0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/intro',
                component: ComponentCreator('/documentacion-DSI/docs/intro', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios/Etiquetas',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios/Etiquetas', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios/Etiquetas copy',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios/Etiquetas copy', '8ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios10/16',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios10/16', '932'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios10/17',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios10/17', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios11/18',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios11/18', 'e64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios11/19',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios11/19', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios12/20',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios12/20', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios13/21',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios13/21', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios14/22',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios14/22', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios15/23',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios15/23', '115'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios16/24',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios16/24', '8f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios16/25',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios16/25', '7db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios16/26',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios16/26', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios17/27',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios17/27', '42d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios18/28',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios18/28', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios19/29',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios19/29', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios19/30',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios19/30', '86e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios2/archivo',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios2/archivo', '927'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/31',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/31', '872'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/32',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/32', '2b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/33',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/33', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/34',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/34', 'e95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/35',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/35', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios20/36',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios20/36', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios21/37',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios21/37', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/38',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/38', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/39',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/39', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/40',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios21/servicios21.1/40', '487'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/41',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/41', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/42',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/42', 'd99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/43',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/43', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/44',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/44', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/45',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/45', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/46',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/46', 'f57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/47',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/47', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/48',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/48', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios22/49',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios22/49', '857'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios23/50',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios23/50', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios23/51',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios23/51', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.1/52',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.1/52', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.1/53',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.1/53', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.2/54',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.2/54', '74d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.2/55',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.2/55', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/56',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/56', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/57',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/57', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/58',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/58', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/59',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/59', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/60',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/60', '0eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/61',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/61', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/62',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios24/servicios24.3/62', '711'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios3/1',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios3/1', 'a16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios3/2',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios3/2', '1e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/3',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/3', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/3.2',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/3.2', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/4',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Servicios4/4', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios5/5',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios5/5', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios5/6',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios5/6', '9a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/7',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/7', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/8',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/8', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/9',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios7/9', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios8/10',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios6/servicios8/10', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.1/11',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.1/11', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/12',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/12', '14a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/13',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/13', '853'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/14',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/servicios9/servicios9.2/14', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/productoss/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/productoss/Descargar Productos y Precios', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/comida1/c1',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/comida1/c1', 'ca4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/comida2/c2',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/comida2/c2', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/comida3/c3',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/comida3/c3', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/comida4/c4',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/comida4/c4', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/comida5/c5',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/comida5/c5', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/congratulations', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-blog-post', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-document', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-page', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/deploy-your-site', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/markdown-features', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/manage-docs-versions', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/translate-your-site', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentacion-DSI/',
    component: ComponentCreator('/documentacion-DSI/', '4fe'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
