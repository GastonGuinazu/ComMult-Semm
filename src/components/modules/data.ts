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
    title: "Descarga y Registro",
    description:
      "Aprendé a descargar la app SEMM desde tu celular y a completar tu registro de usuario en simples pasos.",
    resourceType: "tutorial",
    buttonText: "Ver Tutorial",
    resourceLabel: "Tutorial paso a paso",
    placeholderText:
      "Tutorial paso a paso para descargar la app SEMM e iniciar el registro.",
    slides: [
      {
        subtitle: "PASO 1 DE 4",
        title: "Buscá la app SEMM",
        description:
          "Abrí Google Play o App Store en tu celular y escribí \"SEMM Córdoba\" en el buscador.",
        imageAlt:
          "Captura: buscador de la tienda de aplicaciones con \"SEMM Córdoba\".",
      },
      {
        subtitle: "PASO 2 DE 4",
        title: "Instalá la aplicación",
        description:
          "Tocá el botón \"Instalar\" y esperá unos segundos a que se descargue en tu celular.",
        imageAlt: "Captura: pantalla de la app SEMM con el botón Instalar.",
      },
      {
        subtitle: "PASO 3 DE 4",
        title: "Creá tu cuenta",
        description:
          "Completá tus datos personales y tu número de DNI para registrarte como usuario.",
        imageAlt: "Captura: formulario de registro con nombre y DNI.",
      },
      {
        subtitle: "PASO 4 DE 4",
        title: "Verificá tu cuenta",
        description:
          "Confirmá tu cuenta desde el mail o el mensaje de texto que te enviamos. ¡Ya estás listo!",
        imageAlt: "Captura: pantalla de confirmación de cuenta verificada.",
      },
    ],
  },
  {
    id: "modulo-2",
    number: 2,
    icon: Wallet,
    title: "Cómo Cargar Saldo",
    description:
      "Descubrí los distintos medios de pago disponibles y cómo cargar saldo en tu cuenta para empezar a estacionar.",
    resourceType: "tutorial",
    buttonText: "Ver Tutorial",
    resourceLabel: "Tutorial paso a paso",
    placeholderText:
      "Tutorial paso a paso sobre medios de pago y carga de saldo.",
    slides: [
      {
        subtitle: "PASO 1 DE 4",
        title: "Agregar vehículo",
        description:
          "Para empezar, la aplicación necesita registrar tu patente. Tocá el botón azul que dice '+ VEHÍCULO' en el centro de la pantalla.",
        image: "/RecienInstalada.jfif",
        imageAlt:
          "Captura de la pantalla principal de la app SEMM recién instalada, con el botón + VEHÍCULO en el centro.",
      },
      {
        subtitle: "PASO 2 DE 4",
        title: "Ingresar la patente",
        description:
          "Escribí tu patente sin espacios ni guiones. Luego tocá el botón 'AGREGAR'. Vas a ver la chapa dibujada en la pantalla.",
        image: "/AlTocarAgregarVehiculo.jfif",
        imageAlt:
          "Captura de la pantalla para agregar un vehículo, con el campo de patente y el botón AGREGAR.",
      },
      {
        subtitle: "PASO 3 DE 4",
        title: "Iniciar la carga",
        description:
          "Arriba a la derecha, tocá el botón 'CARGAR SALDO'. Escribí el monto (por ejemplo 1000) y dale a 'CONTINUAR'.",
        image: "/CargarSaldo.jfif",
        imageAlt:
          "Captura de la pantalla con el botón CARGAR SALDO arriba a la derecha y el campo de monto a cargar.",
      },
      {
        subtitle: "PASO 4 DE 4",
        title: "Pagar de forma segura",
        description:
          "Elegí Mercado Pago y tocá 'PAGAR'. Es un proceso 100% seguro gestionado por la Municipalidad.",
        image: "/CargarSaldoRedirigMP.jfif",
        imageAlt:
          "Captura de la pantalla de pago con la opción Mercado Pago seleccionada y el botón PAGAR.",
      },
    ],
  },
  {
    id: "modulo-3",
    number: 3,
    icon: ParkingSquare,
    title: "Iniciar y Finalizar Estacionamiento",
    description:
      "Aprendé paso a paso cómo iniciar tu estacionamiento, controlar el tiempo y finalizarlo correctamente para no gastar de más.",
    resourceType: "tutorial",
    buttonText: "Ver Tutorial",
    resourceLabel: "Tutorial paso a paso",
    placeholderText:
      "Tutorial paso a paso para iniciar y finalizar el estacionamiento.",
    slides: [
      {
        subtitle: "PASO 1 DE 3",
        title: "Revisar tu ubicación",
        description:
          "Asegurate de tener saldo disponible. La app va a detectar tu calle automáticamente (por ejemplo: Bv. Elias Yofre). Revisá que sea correcta.",
        image: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
        imageAlt:
          "Captura de la app SEMM mostrando saldo disponible y la calle detectada automáticamente.",
      },
      {
        subtitle: "PASO 2 DE 3",
        title: "Iniciar el tiempo",
        description:
          "Tocá el botón verde que dice '► INICIAR'. Vas a ver que la app empieza a contar el tiempo y te avisa si tenés minutos de tolerancia gratis.",
        image: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
        imageAlt:
          "Captura de la app SEMM con el botón verde INICIAR para comenzar el estacionamiento.",
      },
      {
        subtitle: "PASO 3 DE 3",
        title: "Finalizar para no gastar de más",
        description:
          "¡Este paso es clave! Cuando te subas al auto para irte, volvé a abrir la app y tocá el botón rojo de 'FINALIZAR'. Si te olvidás, el sistema seguirá consumiendo tu saldo.",
        image: "/MisMovimientos.jfif",
        imageAlt:
          "Captura temporal de la app SEMM. Próximamente se reemplazará por la pantalla de finalizar estacionamiento.",
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    icon: HelpCircle,
    title: "Preguntas Frecuentes y Consejos",
    description:
      "Respuestas a las dudas más comunes y consejos prácticos para evitar multas y prevenir robos del vehículo.",
    resourceType: "faq",
    buttonText: "Leer Respuestas",
    resourceLabel: "Preguntas frecuentes",
    placeholderText:
      "Acordeón de preguntas frecuentes sobre tolerancia, saldo, infracciones y vencimiento.",
  },
];
