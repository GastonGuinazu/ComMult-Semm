import {
  Download,
  HelpCircle,
  ParkingSquare,
  Wallet,
} from "lucide-react";
import type { ModuleData } from "./types";

export const MODULES: ModuleData[] = [
  {
    id: "modulo-1",
    number: 1,
    icon: Download,
    title: {
      es: "Descarga y Registro",
      en: "Download and Registration",
    },
    description: {
      es: "Aprendé a descargar la app SEMM desde tu celular y a completar tu registro de usuario en simples pasos.",
      en: "Learn how to download the SEMM app on your phone and complete your user registration in a few simple steps.",
    },
    resourceType: "tutorial",
    buttonText: {
      es: "Ver Tutorial",
      en: "View Tutorial",
    },
    resourceLabel: {
      es: "Tutorial paso a paso",
      en: "Step-by-step tutorial",
    },
    placeholderText: {
      es: "Tutorial paso a paso para descargar la app SEMM e iniciar el registro.",
      en: "Step-by-step tutorial to download the SEMM app and start the registration.",
    },
    slides: [
      {
        subtitle: { es: "PASO 1 DE 6", en: "STEP 1 OF 6" },
        title: {
          es: "Buscar la tienda",
          en: "Find the store",
        },
        description: {
          es: "Buscá la tienda de aplicaciones en tu celular. Si usas iPhone se llama \"App Store\" (el ícono azul de la foto), y si usas Android se llama \"Play Store\" (un triángulo de colores).",
          en: "Find the app store on your phone. If you use an iPhone it is called \"App Store\" (the blue icon in the photo), and if you use Android it is called \"Play Store\" (a colorful triangle).",
        },
        image: "/BuscarAppStore.jfif",
        imageAlt: {
          es: "Captura: ícono azul de App Store en la pantalla de inicio del celular.",
          en: "Screenshot: blue App Store icon on the phone home screen.",
        },
      },
      {
        subtitle: { es: "PASO 2 DE 6", en: "STEP 2 OF 6" },
        title: {
          es: "Ir al buscador",
          en: "Go to search",
        },
        description: {
          es: "Una vez adentro de la tienda, tocá el ícono de la lupa que dice 'Buscar' abajo a la derecha para poder escribir el nombre de la aplicación.",
          en: "Once inside the store, tap the magnifying glass icon that says 'Buscar' at the bottom right to start typing the app name.",
        },
        image: "/SeleccionarOpcionBuscar.jfif",
        imageAlt: {
          es: "Captura: barra inferior de App Store con la opción Buscar.",
          en: "Screenshot: App Store bottom bar with the 'Buscar' option.",
        },
      },
      {
        subtitle: { es: "PASO 3 DE 6", en: "STEP 3 OF 6" },
        title: {
          es: "Escribir el nombre",
          en: "Type the name",
        },
        description: {
          es: "Tocá el renglón gris de arriba y escribí las palabras 'semm cordoba'. Luego, tocá el botón azul de buscar en tu teclado.",
          en: "Tap the top gray bar and type the words 'semm cordoba'. Then, tap the blue search button on your keyboard.",
        },
        image: "/BuscarSemmCordoba.jfif",
        imageAlt: {
          es: "Captura: buscador de App Store con el texto semm cordoba.",
          en: "Screenshot: App Store search bar with the text 'semm cordoba'.",
        },
      },
      {
        subtitle: { es: "PASO 4 DE 6", en: "STEP 4 OF 6" },
        title: {
          es: "Descargar a tu celular",
          en: "Download to your phone",
        },
        description: {
          es: "Buscá la aplicación oficial (tiene un autito blanco sobre fondo azul). Tocá el botón 'OBTENER', 'INSTALAR' o el ícono de la nubecita para descargarla. ¡Es totalmente gratuita!",
          en: "Look for the official app (it has a white car on a blue background). Tap the 'OBTENER', 'INSTALAR' button, or the little cloud icon to download it. It is completely free!",
        },
        image: "/DescargarSemmCordoba.jfif",
        imageAlt: {
          es: "Captura: ficha de la app SEMM Córdoba con el botón para descargar.",
          en: "Screenshot: SEMM Córdoba app page with the download button.",
        },
      },
      {
        subtitle: { es: "PASO 5 DE 6", en: "STEP 5 OF 6" },
        title: {
          es: "Abrir la aplicación",
          en: "Open the app",
        },
        description: {
          es: "Esperá unos segundos a que termine de descargar. Cuando esté lista, el botón va a cambiar y dirá 'ABRIR'. Tocalo para entrar a SEMM por primera vez.",
          en: "Wait a few seconds for it to finish downloading. When it is ready, the button will change to 'ABRIR'. Tap it to enter SEMM for the first time.",
        },
        image: "/AbrirSemmCordoba.jfif",
        imageAlt: {
          es: "Captura: ficha de la app SEMM Córdoba con el botón ABRIR.",
          en: "Screenshot: SEMM Córdoba app page with the 'ABRIR' button.",
        },
      },
      {
        subtitle: { es: "PASO 6 DE 6", en: "STEP 6 OF 6" },
        title: {
          es: "La pantalla de inicio",
          en: "The home screen",
        },
        description: {
          es: "¡Listo! Al abrirla verás un breve tutorial de bienvenida. Podés leerlo tocando 'SIGUIENTE' abajo de todo, o ir directo a la aplicación tocando 'Saltar' arriba a la derecha.",
          en: "Done! When you open it, you will see a short welcome tutorial. You can read it by tapping 'SIGUIENTE' at the bottom, or go straight to the app by tapping 'Saltar' in the top right corner.",
        },
        image: "/InfoInicial-Saltar.jfif",
        imageAlt: {
          es: "Captura: tutorial de bienvenida de SEMM con las opciones SIGUIENTE y Saltar.",
          en: "Screenshot: SEMM welcome tutorial with the 'SIGUIENTE' and 'Saltar' options.",
        },
      },
    ],
  },
  {
    id: "modulo-2",
    number: 2,
    icon: Wallet,
    title: {
      es: "Cómo Cargar Saldo",
      en: "How to Add Balance",
    },
    description: {
      es: "Descubrí los distintos medios de pago disponibles y cómo cargar saldo en tu cuenta para empezar a estacionar.",
      en: "Discover the different payment methods available and how to add balance to your account to start parking.",
    },
    resourceType: "tutorial",
    buttonText: {
      es: "Ver Tutorial",
      en: "View Tutorial",
    },
    resourceLabel: {
      es: "Tutorial paso a paso",
      en: "Step-by-step tutorial",
    },
    placeholderText: {
      es: "Tutorial paso a paso sobre medios de pago y carga de saldo.",
      en: "Step-by-step tutorial about payment methods and adding balance.",
    },
    slides: [
      {
        subtitle: { es: "PASO 1 DE 4", en: "STEP 1 OF 4" },
        title: {
          es: "Agregar vehículo",
          en: "Add a vehicle",
        },
        description: {
          es: "Para empezar, la aplicación necesita registrar tu patente. Tocá el botón azul que dice '+ VEHÍCULO' en el centro de la pantalla.",
          en: "To start, the app needs to register your license plate. Tap the blue button that says '+ VEHÍCULO' in the center of the screen.",
        },
        image: "/RecienInstalada.jfif",
        imageAlt: {
          es: "Captura de la pantalla principal de la app SEMM recién instalada, con el botón + VEHÍCULO en el centro.",
          en: "Screenshot of the SEMM app main screen right after install, with the '+ VEHÍCULO' button in the center.",
        },
      },
      {
        subtitle: { es: "PASO 2 DE 4", en: "STEP 2 OF 4" },
        title: {
          es: "Ingresar la patente",
          en: "Enter the license plate",
        },
        description: {
          es: "Escribí tu patente sin espacios ni guiones. Luego tocá el botón 'AGREGAR'. Vas a ver la chapa dibujada en la pantalla.",
          en: "Type your license plate without spaces or dashes. Then tap the 'AGREGAR' button. You'll see the plate drawn on the screen.",
        },
        image: "/AlTocarAgregarVehiculo.jfif",
        imageAlt: {
          es: "Captura de la pantalla para agregar un vehículo, con el campo de patente y el botón AGREGAR.",
          en: "Screenshot of the add-vehicle screen, with the license plate field and the 'AGREGAR' button.",
        },
      },
      {
        subtitle: { es: "PASO 3 DE 4", en: "STEP 3 OF 4" },
        title: {
          es: "Iniciar la carga",
          en: "Start the top-up",
        },
        description: {
          es: "Arriba a la derecha, tocá el botón 'CARGAR SALDO'. Escribí el monto (por ejemplo 1000) y dale a 'CONTINUAR'.",
          en: "In the top right corner, tap the 'CARGAR SALDO' button. Enter the amount and tap 'CONTINUAR'.",
        },
        image: "/CargarSaldo.jfif",
        imageAlt: {
          es: "Captura de la pantalla con el botón CARGAR SALDO arriba a la derecha y el campo de monto a cargar.",
          en: "Screenshot with the 'CARGAR SALDO' button in the top right corner and the amount field.",
        },
      },
      {
        subtitle: { es: "PASO 4 DE 4", en: "STEP 4 OF 4" },
        title: {
          es: "Pagar de forma segura",
          en: "Pay securely",
        },
        description: {
          es: "Elegí Mercado Pago y tocá 'PAGAR'. Es un proceso 100% seguro gestionado por la Municipalidad.",
          en: "Choose Mercado Pago and tap 'PAGAR'. It's a 100% secure process managed by the City Government.",
        },
        image: "/CargarSaldoRedirigMP.jfif",
        imageAlt: {
          es: "Captura de la pantalla de pago con la opción Mercado Pago seleccionada y el botón PAGAR.",
          en: "Screenshot of the payment screen with Mercado Pago selected and the 'PAGAR' button.",
        },
      },
    ],
  },
  {
    id: "modulo-3",
    number: 3,
    icon: ParkingSquare,
    title: {
      es: "Iniciar y Finalizar Estacionamiento",
      en: "Start and End Parking",
    },
    description: {
      es: "Aprendé paso a paso cómo iniciar tu estacionamiento, controlar el tiempo y finalizarlo correctamente para no gastar de más.",
      en: "Learn step by step how to start your parking, keep track of the time, and end it properly so you don't overspend.",
    },
    resourceType: "tutorial",
    buttonText: {
      es: "Ver Tutorial",
      en: "View Tutorial",
    },
    resourceLabel: {
      es: "Tutorial paso a paso",
      en: "Step-by-step tutorial",
    },
    placeholderText: {
      es: "Tutorial paso a paso para iniciar y finalizar el estacionamiento.",
      en: "Step-by-step tutorial to start and end parking.",
    },
    slides: [
      {
        subtitle: { es: "PASO 1 DE 3", en: "STEP 1 OF 3" },
        title: {
          es: "Revisar tu ubicación",
          en: "Check your location",
        },
        description: {
          es: "Asegurate de tener saldo disponible. La app va a detectar tu calle automáticamente (por ejemplo: Bv. Elias Yofre). Revisá que sea correcta.",
          en: "Make sure you have available balance. The app will detect your street automatically (for example: Bv. Elias Yofre). Check that it's correct.",
        },
        image: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
        imageAlt: {
          es: "Captura de la app SEMM mostrando saldo disponible y la calle detectada automáticamente.",
          en: "Screenshot of the SEMM app showing available balance and the automatically detected street.",
        },
      },
      {
        subtitle: { es: "PASO 2 DE 3", en: "STEP 2 OF 3" },
        title: {
          es: "Iniciar el tiempo",
          en: "Start the timer",
        },
        description: {
          es: "Tocá el botón verde que dice '► INICIAR'. Vas a ver que la app empieza a contar el tiempo y te avisa si tenés minutos de tolerancia gratis.",
          en: "Tap the green button that says '► INICIAR' to start your parking session. You'll see the app begin counting the time and it tells you if you have free tolerance minutes.",
        },
        image: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
        imageAlt: {
          es: "Captura de la app SEMM con el botón verde INICIAR para comenzar el estacionamiento.",
          en: "Screenshot of the SEMM app with the green '► INICIAR' button to begin parking.",
        },
      },
      {
        subtitle: { es: "PASO 3 DE 3", en: "STEP 3 OF 3" },
        title: {
          es: "Finalizar para no gastar de más",
          en: "End it so you don't overspend",
        },
        description: {
          es: "¡Este paso es clave! Cuando te subas al auto para irte, volvé a abrir la app y tocá el botón azul de 'FINALIZAR'. Si te olvidás, el sistema seguirá consumiendo tu saldo.",
          en: "This step is key! When you leave, open the app and tap the blue 'FINALIZAR' button to stop charging your account. If you forget, the system will keep consuming your balance.",
        },
        image: "/FinalizarEstacionamiento.jfif",
        imageAlt: {
          es: "Captura de la app SEMM con el estacionamiento activo y el botón azul FINALIZAR.",
          en: "Screenshot of the SEMM app with parking in progress and the blue 'FINALIZAR' button.",
        },
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    icon: HelpCircle,
    title: {
      es: "Preguntas Frecuentes y Consejos",
      en: "Frequently Asked Questions and Tips",
    },
    description: {
      es: "Respuestas a las dudas más comunes y consejos prácticos para evitar multas y prevenir robos del vehículo.",
      en: "Answers to the most common questions and practical tips to avoid fines and prevent vehicle theft.",
    },
    resourceType: "faq",
    buttonText: {
      es: "Leer Respuestas",
      en: "Read Answers",
    },
    resourceLabel: {
      es: "Preguntas frecuentes",
      en: "Frequently asked questions",
    },
    placeholderText: {
      es: "Acordeón de preguntas frecuentes sobre tolerancia, saldo, infracciones y vencimiento.",
      en: "Accordion of frequently asked questions about tolerance, balance, fines, and expiration.",
    },
    faqItems: [
      {
        id: "tolerancia",
        category: "general",
        question: {
          es: "¿Tengo tiempo de tolerancia sin pagar?",
          en: "Do I get free tolerance time without paying?",
        },
        answer: {
          es: "Sí. En la mayoría de las zonas, los primeros 30 minutos son sin cargo. Ojo: igual tenés que tocar \"Iniciar\" en la app apenas te bajás del auto; el sistema calculará la media hora gratis automáticamente.",
          en: "Yes. In most zones, the first 30 minutes are free of charge. Careful: you still need to tap the '► INICIAR' button in the app as soon as you get out of the car; the system will calculate the free half hour automatically.",
        },
      },
      {
        id: "olvidar-finalizar",
        category: "general",
        question: {
          es: "¿Qué pasa si me olvido de frenar el estacionamiento?",
          en: "What happens if I forget to stop the parking?",
        },
        answer: {
          es: "El sistema va a seguir consumiendo tu saldo hasta que te quedes en $0 o hasta que termine el horario de cobro de esa zona. ¡Acordate de tocar FINALIZAR antes de irte!",
          en: "The system will keep consuming your balance until you reach $0 or until the paid hours for that zone end. Remember to tap the 'FINALIZAR' button before you leave!",
        },
      },
      {
        id: "infracciones",
        category: "general",
        question: {
          es: "¿Cómo sé si un inspector me hizo una multa?",
          en: "How do I know if an inspector fined me?",
        },
        answer: {
          es: "Si tocás las tres rayitas arriba a la izquierda en la app (el Menú), vas a ver una sección llamada \"Mis Infracciones\". Ahí aparece al instante si tenés alguna multa.",
          en: "If you tap the three little lines in the top left of the app (the Menu), you'll see a section called 'MIS INFRACCIONES'. Any fines appear there instantly.",
        },
      },
      {
        id: "vencimiento-saldo",
        category: "general",
        question: {
          es: "¿El saldo de la app vence?",
          en: "Does the app balance expire?",
        },
        answer: {
          es: "No, el saldo que cargás a través de Mercado Pago no tiene fecha de vencimiento. Queda guardado en tu cuenta vinculado a tu número de teléfono.",
          en: "No, the balance you load through Mercado Pago has no expiration date. It stays saved in your account, linked to your phone number.",
        },
      },
      {
        id: "app-falla",
        category: "troubleshooting",
        question: {
          es: "¿Qué hago si la aplicación se cierra o no funciona bien?",
          en: "What should I do if the app closes or does not work well?",
        },
        answer: {
          es: "Si la aplicación falla y no podés iniciar tu estacionamiento, te recomendamos sacar una captura de pantalla donde se vea la hora de tu celular. Esto te servirá como comprobante para realizar un reclamo formal en caso de recibir una multa injusta.",
          en: "If the app fails and you cannot start your parking session, we recommend taking a screenshot showing your phone's time. This will serve as proof to make a formal claim in case of an unfair fine.",
        },
      },
      {
        id: "saldo-no-actualiza",
        category: "troubleshooting",
        question: {
          es: "Cargué saldo pero mi cuenta sigue en $0, ¿qué pasó?",
          en: "I added balance but my account still shows $0, what happened?",
        },
        answer: {
          es: "A veces el sistema demora unos minutos en actualizar la información. Por favor, no vuelvas a cargar saldo inmediatamente para evitar que te cobren dos veces. Esperá unos minutos, o cerrá y volvé a abrir la aplicación.",
          en: "Sometimes the system takes a few minutes to update the information. Please do not add balance again immediately to avoid being charged twice. Wait a few minutes, or close and reopen the app.",
        },
      },
      {
        id: "confirmacion-multa",
        category: "troubleshooting",
        question: {
          es: "¿Cómo estoy seguro de que no me van a multar?",
          en: "How can I be sure I won't get a fine?",
        },
        answer: {
          es: "Nunca guardes el celular inmediatamente después de tocar el botón. Asegurate siempre de que aparezca un cartel verde en la pantalla confirmando que el estacionamiento está activo. Sin ese cartel, el auto no está protegido.",
          en: "Never put your phone away immediately after tapping the button. Always make sure a green sign appears on the screen confirming the parking is active. Without that sign, your car is not protected.",
        },
      },
    ],
  },
];
