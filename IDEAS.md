# Ideas para Proyecto Eficiencia

- Mantener las futuras mejoras en `index.html` siempre que sea posible. Conservar el soporte sin conexión de la app instalada.

## Tarifas, regiones y conexión

- Publicar un catálogo versionado de cuotas con fuente oficial, periodo de vigencia, tarifa, temporada y bloques aplicables. Ampliar gradualmente la cobertura por localidad y contemplar DAC con los datos que requiere.
- Consultar el catálogo al abrir la app y al recuperar la conexión. Validar cada descarga antes de sustituir la última copia válida. Incluir una copia inicial para el primer uso tras instalar la app.
- Mostrar en Inicio la vigencia de las tarifas y la fecha de la última verificación. Usar estados como «Tarifas actualizadas», «Sin conexión · usando tarifas guardadas» y «No se pudo verificar la vigencia». Incluir «Buscar actualización».
- Ofrecer «Detectar mi localidad» con permiso del navegador y búsqueda manual por estado y municipio o código postal. Sugerir tarifa y temporada solo cuando haya datos suficientes, pedir confirmación con el recibo y guardar la localidad elegida.
- Mostrar kWh cuando falten datos para calcular pesos. Desglosar cargos contemplados y usar las fechas reales del periodo. Si abarca un cambio de temporada o vigencia, aplicar las reglas verificadas para ese caso. Proyectar el año considerando ambas temporadas.
- Guardar la versión de tarifas usada en cada estimación. Comparar el efecto de un cambio de cuota, de temporada y de consumo.

## Captura y resultados

- Guardar localmente aparatos, horarios y tarifa. Ofrecer «Continuar mi cálculo» y «Empezar de nuevo».
- Permitir capturar cantidad, watts y horas, kWh al año de la etiqueta o kWh por ciclo. Marcar valores típicos del catálogo y distinguirlos de datos de etiqueta o medición.
- Añadir edición desde el tablero, desglose de la cuenta por equipo y recordatorio opcional de equipos fáciles de olvidar.
- Ofrecer un hogar de ejemplo editable y llamar «Bloque de cobro» al semáforo tarifario.
- Agregar escenarios «¿Qué pasa si…?» para cambios de horas o equipo. Estimar ahorro y recuperación de la inversión al sustituir un aparato.
- Comparar kWh con los del recibo para el mismo número de días. Guardar metas y mostrar evolución en kWh por día con la temporada de cada periodo.
- Como mejora posterior, permitir cargar un recibo y sugerir tarifa, kWh y fechas con revisión del usuario antes de utilizarlos.

## Recibo de recomendaciones

- Generar una vista previa imprimible de una página con identidad de Proyecto Eficiencia y jerarquía visual inspirada en un recibo de luz.
- Incluir fecha, periodo, consumo, tres equipos principales, participación de cada uno y costos opcionales con tarifa, temporada y vigencia.
- Destacar una acción de ahorro sugerida o editable en el espacio principal. Mostrar su ahorro cuando haya datos para calcularlo y explicar cómo revisar el avance en el siguiente recibo.
- Permitir imprimir o guardar como PDF desde el navegador, también sin conexión una vez instalada la app.

## Verificación

- Separar el cálculo del código de interfaz y probar límites de bloques, vigencias, temporadas y casos comparables con recibos.
- Probar captura, guardado, cálculo, PDF y recuperación de conexión en Android y iPhone. Revisar teclado, texto ampliado y navegación con teclado.
