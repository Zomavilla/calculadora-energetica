# calculadora-energetica
Calculadora y Gestor de Eficiencia Energética (ODS 7)

## Cuotas de CFE

La aplicación incluye una tabla de noviembre de 2026 dentro de `index.html` para el cálculo sin conexión. Al publicar por HTTPS o servir en localhost, mantén `tarifas-cfe.json` junto al HTML. La app consulta ese archivo al iniciar, al recuperar la conexión y al pulsar «Actualizar cuotas».

Para publicar un mes posterior, actualiza el periodo `AAAA-MM` y los precios de cada bloque en MXN por kWh antes de IVA, según los cuadros de Hacienda publicados por CFE. Conserva los grupos del archivo. La app guarda la última tabla válida. Al abrir el HTML directamente, se usa la tabla incorporada o la última válida que se guardó en ese navegador.

- [Oficio SHCP 349-B-1-070 y sus cuadros de 2026](https://app.cfe.mx/Aplicaciones/CCFE/Tarifas/TarifasCRECasa/Acuerdos/DescargaAcuerdo.aspx?anio=2026&id=1114&idCliente=1&tipo=SHCP)
- [Bloques de consumo doméstico y mínimo mensual](https://sidof.segob.gob.mx/notas/docFuente/5506179)

## Preferencias y respaldo

En Ajustes puedes elegir la moneda y la tarifa. La sugerencia de tarifa compara la ubicación del dispositivo con áreas cubiertas dentro del navegador y requiere confirmación. La conversión en USD usa una referencia del BCE y consulta Frankfurter con conexión cuando se selecciona USD. [API de Frankfurter](https://frankfurter.dev/javascript/) · [Tipos de cambio de referencia del BCE](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

El respaldo `.eficiencia.html` contiene los aparatos, horarios, configuraciones y preferencias. Al abrirlo se intenta cargar el sitio público del proyecto con los datos en el fragmento de la URL. Ajustes también permite elegir el archivo directamente, incluso sin conexión. La restauración requiere confirmación y reemplaza los datos locales de la app.
