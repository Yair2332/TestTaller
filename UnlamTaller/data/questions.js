const questions = [


  {
    "question": "¿Qué servicio de Firebase permite autenticación de usuarios mediante múltiples proveedores?",
    "options": ["Realtime Database", "Cloud Messaging", "Authentication", "Firestore", "Crashlytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Authentication"
  },
  {
    "question": "¿Cuál es una de las principales ventajas de Firebase para desarrollo mobile?",
    "options": ["Uso exclusivo para iOS", "Requiere servidor propio", "Monitoreo y gestión desde consola web", "Solo funciona con React", "No permite almacenamiento en la nube", "Ninguna de las Anteriores es correcta"],
    "answer": "Monitoreo y gestión desde consola web"
  },
  {
    "question": "¿Qué herramienta de Firebase se utiliza para enviar notificaciones push?",
    "options": ["Crashlytics", "Firestore", "Firebase Cloud Messaging", "Google Analytics", "Performance Monitoring", "Ninguna de las Anteriores es correcta"],
    "answer": "Firebase Cloud Messaging"
  },
  {
    "question": "¿Qué archivo vincula una app con su proyecto Firebase?",
    "options": ["google-services.json", "firebase_config.xml", "firebase.init.js", "auth_services.json", "manifest.json", "Ninguna de las Anteriores es correcta"],
    "answer": "google-services.json"
  },
  {
    "question": "¿Qué servicio se usa para guardar imágenes y archivos en Firebase?",
    "options": ["Realtime Database", "Authentication", "Cloud Storage", "Analytics", "Crashlytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Cloud Storage"
  },
  {
    "question": "¿Qué característica de Firebase permite deshabilitar secciones de una app dinámicamente?",
    "options": ["Authentication", "Crashlytics", "Remote Config", "Firestore", "FirebaseUI", "Ninguna de las Anteriores es correcta"],
    "answer": "Remote Config"
  },
  {
    "question": "¿Qué librería permite el versionado uniforme entre dependencias Firebase?",
    "options": ["Gradle", "FirebaseUI", "BoM", "KTX", "Analytics", "Ninguna de las Anteriores es correcta"],
    "answer": "BoM"
  },
  {
    "question": "¿Qué permite Firebase Realtime Database?",
    "options": ["Guardar archivos", "Autenticación biométrica", "Sincronización en tiempo real de datos", "Registro de errores", "Despliegue de frontend", "Ninguna de las Anteriores es correcta"],
    "answer": "Sincronización en tiempo real de datos"
  },
  {
    "question": "¿Qué servicio de Firebase se enfoca en almacenar datos estructurados como documentos?",
    "options": ["Realtime Database", "Cloud Storage", "Firestore", "Crashlytics", "Analytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Firestore"
  },
  {
    "question": "¿Qué servicio aún no está disponible al público general?",
    "options": ["Firestore", "Realtime Database", "Data Connect", "Analytics", "Authentication", "Ninguna de las Anteriores es correcta"],
    "answer": "Data Connect"
  },
  {
    "question": "¿Qué arquitectura permite separar cliente y backend en una app mobile?",
    "options": ["Monolítica", "Cliente-servidor", "Peer-to-peer", "Standalone", "Microservicios", "Ninguna de las Anteriores es correcta"],
    "answer": "Cliente-servidor"
  },
  {
    "question": "¿Qué permite Firebase respecto a funcionalidades mobile comunes?",
    "options": ["Compilar apps iOS", "Detectar movimientos con sensores", "Recolectar errores, enviar notificaciones y gestionar usuarios", "Simular redes", "Optimizar solo apps web", "Ninguna de las Anteriores es correcta"],
    "answer": "Recolectar errores, enviar notificaciones y gestionar usuarios"
  },
  {
    "question": "¿Qué desventaja tiene el desarrollo mobile comparado con web?",
    "options": ["No puede usar sensores", "No se puede actualizar automáticamente", "Siempre requiere conexión", "Solo usa navegador", "Es más seguro", "Ninguna de las Anteriores es correcta"],
    "answer": "No se puede actualizar automáticamente"
  },
  {
    "question": "¿Qué herramienta permite escalar automáticamente en Firebase?",
    "options": ["Realtime Database", "Cloud Messaging", "Firebase Hosting", "Backend como servicio (BaaS)", "Firestore", "Ninguna de las Anteriores es correcta"],
    "answer": "Backend como servicio (BaaS)"
  },
  {
    "question": "¿Qué servicio permite guardar archivos como imágenes?",
    "options": ["Firestore", "Realtime Database", "Cloud Storage", "Analytics", "Crashlytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Cloud Storage"
  },
  {
    "question": "¿Qué característica describe Firebase como plataforma?",
    "options": ["Open source", "Monolítica", "Multiplataforma", "Solo para web", "Solo para backend", "Ninguna de las Anteriores es correcta"],
    "answer": "Multiplataforma"
  },
  {
    "question": "¿Qué debe estar presente en el proyecto para conectar con Firebase?",
    "options": ["main.js", "manifest.json", "firebase_config.xml", "google-services.json", "google_analytics.js", "Ninguna de las Anteriores es correcta"],
    "answer": "google-services.json"
  },
  {
    "question": "¿Qué plugin de Gradle se requiere para Firebase?",
    "options": ["com.android.google", "com.google.firebase.analytics", "com.google.gms.google-services", "com.google.cloud.plugin", "com.firebase.io", "Ninguna de las Anteriores es correcta"],
    "answer": "com.google.gms.google-services"
  },
  {
    "question": "¿Cuál es una función de FirebaseUI?",
    "options": ["Personalización de errores", "Gestión avanzada de bases SQL", "Interfaz de login preconfigurada", "Migración de apps", "Transpilación de código", "Ninguna de las Anteriores es correcta"],
    "answer": "Interfaz de login preconfigurada"
  },
  {
    "question": "¿Qué herramienta de Firebase mide el rendimiento de pantallas y redes?",
    "options": ["Analytics", "Crashlytics", "Firestore", "Performance Monitoring", "Realtime Database", "Ninguna de las Anteriores es correcta"],
    "answer": "Performance Monitoring"
  },
  {
    "question": "¿Qué porcentaje de reseñas de 1 estrella mencionan problemas de estabilidad?",
    "options": ["25%", "50%", "42%", "60%", "73%", "Ninguna de las Anteriores es correcta"],
    "answer": "42%"
  },
  {
    "question": "¿Qué métrica se considera un Vitals esencial según Google?",
    "options": ["Velocidad de conexión", "Uso de CPU", "Errores ANR", "Cantidad de usuarios", "Puntaje de estrellas", "Ninguna de las Anteriores es correcta"],
    "answer": "Errores ANR"
  },
  {
    "question": "¿Dónde se pueden consultar los Vitals de una app publicada?",
    "options": ["Firebase Hosting", "App Store Connect", "Google Play Console", "Firebase Console", "GitHub", "Ninguna de las Anteriores es correcta"],
    "answer": "Google Play Console"
  },
  {
    "question": "¿Qué sucede si una app supera los umbrales de Vitals en general?",
    "options": ["Se despublica", "Se borra automáticamente", "Se reduce su visibilidad", "No tiene consecuencias", "Se envía a revisión", "Ninguna de las Anteriores es correcta"],
    "answer": "Se reduce su visibilidad"
  },
  {
    "question": "¿Qué herramienta de Firebase permite rastrear fallos y ANRs?",
    "options": ["Analytics", "Realtime Database", "Crashlytics", "Firestore", "Cloud Messaging", "Ninguna de las Anteriores es correcta"],
    "answer": "Crashlytics"
  },
  {
    "question": "¿Qué vitals mide el inicio de una app?",
    "options": ["Uso de CPU", "Consumo de batería", "Tiempo de inicio", "Fallos de conexión", "Nivel de RAM", "Ninguna de las Anteriores es correcta"],
    "answer": "Tiempo de inicio"
  },
  {
    "question": "¿Qué define una sesión lenta según Vitals?",
    "options": ["Más de 10 errores en una hora", "Fallas frecuentes", "Rendimiento pobre durante el uso", "Tiempos prolongados de carga", "Demasiadas búsquedas Wi-Fi", "Ninguna de las Anteriores es correcta"],
    "answer": "Rendimiento pobre durante el uso"
  },
  {
    "question": "¿Qué puede reducir visibilidad en un solo modelo de celular?",
    "options": ["Tasa de instalación", "Crashes por modelo", "Tamaño de la app", "Tiempos de renderizado", "Uso de almacenamiento", "Ninguna de las Anteriores es correcta"],
    "answer": "Crashes por modelo"
  },
  {
    "question": "¿Qué mide el ANR?",
    "options": ["La tasa de éxito de red", "La lentitud de renderizado", "Cuánto tarda en responder la UI", "Consumo de batería", "Carga de base de datos", "Ninguna de las Anteriores es correcta"],
    "answer": "Cuánto tarda en responder la UI"
  },
  {
    "question": "¿Qué valor hace que una app se considere poco visible según Vitals?",
    "options": ["Exceso de tráfico", "Altas tasas de fallo", "Errores de diseño", "Problemas de sincronización", "Problemas de permisos", "Ninguna de las Anteriores es correcta"],
    "answer": "Altas tasas de fallo"
  },
  {
    "question": "¿Qué es un crash en una app?",
    "options": ["Una mejora de seguridad", "Un error que detiene la app", "Un evento de red", "Una alerta de usuario", "Un fallo de conexión", "Ninguna de las Anteriores es correcta"],
    "answer": "Un error que detiene la app"
  },
  {
    "question": "¿Qué tipo de error ocurre si la UI deja de responder mucho tiempo?",
    "options": ["Crash", "Error lógico", "ANR", "Timeout", "Excepción fatal", "Ninguna de las Anteriores es correcta"],
    "answer": "ANR"
  },
  {
    "question": "¿Qué muestra el stacktrace en Android Studio?",
    "options": ["Errores del servidor", "Historial de logs", "Ruta del error en el código", "Datos de usuario", "Red de conexión", "Ninguna de las Anteriores es correcta"],
    "answer": "Ruta del error en el código"
  },
  {
    "question": "¿Qué permite identificar Crashlytics?",
    "options": ["Rutas GPS", "Uso de red", "Errores más comunes", "Velocidad de renderizado", "Uso de disco", "Ninguna de las Anteriores es correcta"],
    "answer": "Errores más comunes"
  },
  {
    "question": "¿Qué se puede personalizar en los informes de Crashlytics?",
    "options": ["Velocidad de red", "Acciones de usuario", "Llaves clave-valor y logs", "Fragmentos XML", "Mensajes push", "Ninguna de las Anteriores es correcta"],
    "answer": "Llaves clave-valor y logs"
  },
  {
    "question": "¿Qué permite el método `recordException()`?",
    "options": ["Guardar logs de pantalla", "Registrar errores recuperables", "Enviar reportes de rendimiento", "Reiniciar la app", "Simular errores", "Ninguna de las Anteriores es correcta"],
    "answer": "Registrar errores recuperables"
  },
  {
    "question": "¿Cuántas excepciones se guardan como máximo con `recordException()`?",
    "options": ["4", "6", "8", "10", "12", "Ninguna de las Anteriores es correcta"],
    "answer": "8"
  },
  {
    "question": "¿Qué función tiene `setUserId()`?",
    "options": ["Borrar datos de usuario", "Identificar un usuario específico en informes", "Enviar métricas de rendimiento", "Configurar tokens", "Detectar errores de red", "Ninguna de las Anteriores es correcta"],
    "answer": "Identificar un usuario específico en informes"
  },
  {
    "question": "¿Qué sistema de Firebase se integra automáticamente con Crashlytics?",
    "options": ["Cloud Messaging", "Firestore", "Analytics", "Realtime Database", "Cloud Storage", "Ninguna de las Anteriores es correcta"],
    "answer": "Analytics"
  },
  {
    "question": "¿Dónde se habilita Crashlytics para capturar errores automáticamente?",
    "options": ["settings.gradle", "AndroidManifest", "Firebase console", "build.gradle (nivel app)", "MainActivity.kt", "Ninguna de las Anteriores es correcta"],
    "answer": "build.gradle (nivel app)"
  },
  {
    "question": "¿Qué servicio de Firebase permite medir el tiempo de inicio de una app?",
    "options": ["Crashlytics", "Analytics", "Performance Monitoring", "Firestore", "Cloud Functions", "Ninguna de las Anteriores es correcta"],
    "answer": "Performance Monitoring"
  },
  {
    "question": "¿Qué evento inicia el seguimiento de tiempo de inicio de app?",
    "options": ["onStop()", "onPause()", "onCreate()", "onResume()", "onDestroy()", "Ninguna de las Anteriores es correcta"],
    "answer": "onCreate()"
  },
  {
    "question": "¿Qué métrica indica pantallas que tardan más de 700ms en renderizar?",
    "options": ["Renderización lenta", "Tiempo de espera", "Fotogramas congelados", "Carga pesada", "Pantalla incompleta", "Ninguna de las Anteriores es correcta"],
    "answer": "Fotogramas congelados"
  },
  {
    "question": "¿Qué seguimiento se activa cuando la app pasa al primer plano?",
    "options": ["_app_launch", "_app_in_foreground", "_start_session", "_render_trace", "_screen_open", "Ninguna de las Anteriores es correcta"],
    "answer": "_app_in_foreground"
  },
  {
    "question": "¿Qué tipo de seguimiento registra automáticamente cada solicitud de red?",
    "options": ["Trace de inicio", "Render tracking", "HTTP/S request trace", "Socket monitor", "Offline sync", "Ninguna de las Anteriores es correcta"],
    "answer": "HTTP/S request trace"
  },
  {
    "question": "¿Qué métrica se puede obtener de una solicitud HTTP/S?",
    "options": ["Tamaño de archivo APK", "Uso de memoria", "Tiempo de respuesta", "Permisos usados", "Número de sesiones", "Ninguna de las Anteriores es correcta"],
    "answer": "Tiempo de respuesta"
  },
  {
    "question": "¿Dónde se declara el plugin `firebase-perf`?",
    "options": ["gradle-wrapper.properties", "settings.gradle", "build.gradle (nivel proyecto)", "AndroidManifest.xml", "Google Services Console", "Ninguna de las Anteriores es correcta"],
    "answer": "build.gradle (nivel proyecto)"
  },
  {
    "question": "¿Qué parámetro se mide automáticamente en cada pantalla con Performance Monitoring?",
    "options": ["FPS", "Duración de renderizado", "Uso de RAM", "Resolución", "Nivel de batería", "Ninguna de las Anteriores es correcta"],
    "answer": "Duración de renderizado"
  },
  {
    "question": "¿Qué permite un `trace` personalizado?",
    "options": ["Detectar errores de diseño", "Medir bloques de código específicos", "Estimar memoria usada", "Configurar notificaciones", "Reducir tamaño del APK", "Ninguna de las Anteriores es correcta"],
    "answer": "Medir bloques de código específicos"
  },
  {
    "question": "¿Qué sistema se integra con Performance Monitoring para alertas?",
    "options": ["Google Ads", "Realtime Database", "Crashlytics", "Firebase Console", "Cloud Messaging", "Ninguna de las Anteriores es correcta"],
    "answer": "Firebase Console"
  },
  {
    "question": "¿Qué tipo de información registra Google Analytics automáticamente?",
    "options": ["Contraseñas", "Redes conectadas", "Eventos y propiedades de usuario", "Errores de sintaxis", "Modelos 3D", "Ninguna de las Anteriores es correcta"],
    "answer": "Eventos y propiedades de usuario"
  },
  {
    "question": "¿Qué método se usa para registrar un evento personalizado?",
    "options": ["logData()", "trackEvent()", "sendLog()", "logEvent()", "setEvent()", "Ninguna de las Anteriores es correcta"],
    "answer": "logEvent()"
  },
  {
    "question": "¿Qué evento se registra automáticamente cuando se abre la app por primera vez?",
    "options": ["app_open", "session_start", "first_open", "screen_view", "load_start", "Ninguna de las Anteriores es correcta"],
    "answer": "first_open"
  },
  {
    "question": "¿Qué permite `setUserProperty()`?",
    "options": ["Definir nombre de pantalla", "Registrar errores", "Establecer atributos del usuario", "Enviar tokens", "Mostrar logs", "Ninguna de las Anteriores es correcta"],
    "answer": "Establecer atributos del usuario"
  },
  {
    "question": "¿Cuántas propiedades de usuario personalizadas se pueden tener?",
    "options": ["10", "15", "20", "25", "30", "Ninguna de las Anteriores es correcta"],
    "answer": "25"
  },
  {
    "question": "¿Qué evento predefinido se usa para visualizar un ítem?",
    "options": ["VIEW_ITEM", "SELECT_ITEM", "ITEM_VIEWED", "ITEM_LOAD", "SHOW_ITEM", "Ninguna de las Anteriores es correcta"],
    "answer": "VIEW_ITEM"
  },
  {
    "question": "¿Qué parámetro define el tipo de contenido en un evento?",
    "options": ["content", "item_type", "content_type", "data_type", "resource", "Ninguna de las Anteriores es correcta"],
    "answer": "content_type"
  },
  {
    "question": "¿Cómo se desactiva el seguimiento automático de pantallas?",
    "options": ["Desde Firebase Console", "Usando logEvent(false)", "Con Remote Config", "Modificando el AndroidManifest.xml", "Desinstalando Analytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Modificando el AndroidManifest.xml"
  },
  {
    "question": "¿Qué se puede usar para etiquetar eventos de múltiples dispositivos con el mismo usuario?",
    "options": ["Session ID", "Token de seguridad", "setUserId()", "analyticsTag()", "accountBind()", "Ninguna de las Anteriores es correcta"],
    "answer": "setUserId()"
  },
  {
    "question": "¿Con qué herramienta se integra fuertemente Google Analytics?",
    "options": ["Crashlytics", "SQLite", "Firestore", "Cloud Functions", "Realtime Database", "Ninguna de las Anteriores es correcta"],
    "answer": "Crashlytics"
  },
  {
    "question": "¿Qué representa la autenticación en un sistema?",
    "options": ["La acción de autorizar acceso", "Identificar si el usuario está registrado", "Verificar si el usuario es quien dice ser", "Rechazar a usuarios anónimos", "Mostrar la identidad", "Ninguna de las Anteriores es correcta"],
    "answer": "Verificar si el usuario es quien dice ser"
  },
  {
    "question": "¿Qué protocolo es utilizado para autorización y delegación de permisos?",
    "options": ["JWT", "SAML", "OpenID Connect", "OAuth 2.0", "LDAP", "Ninguna de las Anteriores es correcta"],
    "answer": "OAuth 2.0"
  },
  {
    "question": "¿Qué tipo de token contiene información sobre el usuario autenticado?",
    "options": ["access_token", "api_token", "id_token", "oauth_token", "session_token", "Ninguna de las Anteriores es correcta"],
    "answer": "id_token"
  },
  {
    "question": "¿Qué servicio permite el acceso con múltiples métodos como Google, Facebook, email y más?",
    "options": ["Firestore", "Analytics", "Firebase Authentication", "Realtime Database", "Crashlytics", "Ninguna de las Anteriores es correcta"],
    "answer": "Firebase Authentication"
  },
  {
    "question": "¿Qué flujo permite probar la app sin registrarse?",
    "options": ["OAuth", "Autenticación federada", "Autenticación anónima", "Inicio con biometría", "OpenID Login", "Ninguna de las Anteriores es correcta"],
    "answer": "Autenticación anónima"
  },
  {
    "question": "¿Qué tipo de autenticación utiliza código SMS en Firebase?",
    "options": ["Multifactor", "Email verification", "Login federado", "Número de teléfono", "Biometría", "Ninguna de las Anteriores es correcta"],
    "answer": "Número de teléfono"
  },
  {
    "question": "¿Qué permite la Identity Platform?",
    "options": ["Desplegar apps automáticamente", "Usar tokens de Google Ads", "Agregar autenticación multifactor", "Eliminar usuarios automáticamente", "Configurar bases de datos", "Ninguna de las Anteriores es correcta"],
    "answer": "Agregar autenticación multifactor"
  },
  {
    "question": "¿Qué es FirebaseUI?",
    "options": ["Una app de ejemplo", "Un SDK de backend", "Una interfaz preconstruida para login", "Una base de datos relacional", "Un gestor de notificaciones", "Ninguna de las Anteriores es correcta"],
    "answer": "Una interfaz preconstruida para login"
  },
  {
    "question": "¿Qué estándar basado en XML se usa para federar identidad?",
    "options": ["OAuth", "OIDC", "JWT", "SAML", "HTTPAuth", "Ninguna de las Anteriores es correcta"],
    "answer": "SAML"
  },
  {
    "question": "¿Qué permite convertir una cuenta anónima en una normal?",
    "options": ["Fusionar tokens", "Asociar ID externos", "Asociar credenciales permanentes", "Resetear el UID", "Eliminar la sesión temporal", "Ninguna de las Anteriores es correcta"],
    "answer": "Asociar credenciales permanentes"
  },
  {
    "question": "¿Qué significa CRUD?",
    "options": ["Consulta, Registro, Usuario, Datos", "Create, Read, Update, Delete", "Create, Run, Update, Download", "Consultar, Repetir, Usar, Depurar", "Configurar, Resetear, Unir, Descargar", "Ninguna de las Anteriores es correcta"],
    "answer": "Create, Read, Update, Delete"
  },
  {
    "question": "¿Qué es una base de datos relacional?",
    "options": ["Un conjunto de archivos JSON", "Una app de escritorio", "Un sistema de datos organizado en tablas con relaciones", "Un conjunto de APIs", "Un backend como servicio", "Ninguna de las Anteriores es correcta"],
    "answer": "Un sistema de datos organizado en tablas con relaciones"
  },
  {
    "question": "¿Qué tipo de base de datos es Firestore?",
    "options": ["Relacional", "GraphQL", "NoSQL", "SQL", "Tabular", "Ninguna de las Anteriores es correcta"],
    "answer": "NoSQL"
  },
  {
    "question": "¿Qué ventaja tiene NoSQL respecto a SQL?",
    "options": ["Menos seguridad", "Más difícil de escalar", "Flexibilidad y escalabilidad", "Menor soporte de consultas", "Solo funciona offline", "Ninguna de las Anteriores es correcta"],
    "answer": "Flexibilidad y escalabilidad"
  },
  {
    "question": "¿Qué formato de datos utiliza Realtime Database?",
    "options": ["XML", "CSV", "JSON", "YAML", "Texto plano", "Ninguna de las Anteriores es correcta"],
    "answer": "JSON"
  },
  {
    "question": "¿Qué base de datos permite trabajar sin conexión a internet?",
    "options": ["MySQL", "SQLite", "Firestore y Realtime Database", "PostgreSQL", "Cloud SQL", "Ninguna de las Anteriores es correcta"],
    "answer": "Firestore y Realtime Database"
  },
  {
    "question": "¿Qué significa ACID en bases de datos relacionales?",
    "options": ["Análisis, Comprobación, Integración, Datos", "Atomicidad, Consistencia, Aislamiento, Durabilidad", "Acción, Conexión, Integridad, Documento", "Aplicación, Cliente, Interfaz, Datos", "Ninguna de las Anteriores es correcta"],
    "answer": "Atomicidad, Consistencia, Aislamiento, Durabilidad"
  },
  {
    "question": "¿Qué ventaja tiene el uso de WebSocket en sincronización?",
    "options": ["Mayor complejidad sin beneficios", "Más tráfico", "Actualización en tiempo real y eficiencia", "Requiere más servidores", "Solo funciona en iOS", "Ninguna de las Anteriores es correcta"],
    "answer": "Actualización en tiempo real y eficiencia"
  },
  {
    "question": "¿Qué representa `partida`, `jugador`, `movimiento` en un esquema relacional?",
    "options": ["Campos JSON", "Colecciones", "Tablas", "Funciones", "Consultas", "Ninguna de las Anteriores es correcta"],
    "answer": "Tablas"
  },
  {
    "question": "¿Qué tipo de dato permite JSON además de objetos y arrays?",
    "options": ["Registros", "Tokens", "Booleans, strings, números y null", "Índices", "Vectores", "Ninguna de las Anteriores es correcta"],
    "answer": "Booleans, strings, números y null"
  }
];