# Pizzería Mamma Mia

Aplicación de la pizzería Mamma Mia, hecha con React y Vite. La página de inicio muestra un encabezado y tres pizzas. Desde la barra de navegación se abren los formularios de login y registro, con validación de los datos al enviar.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve esa versión para probarla en local |
| `npm run lint` | Revisa el código con Oxlint |

## Qué incluye

- Barra de navegación con inicio, login y registro, y el total del carrito.
- Encabezado de la pizzería.
- Tres tarjetas de pizza: Napolitana, Española y Pepperoni.
- Precios formateados en pesos chilenos (por ejemplo, `$5.950`).
- Formulario de registro: email, contraseña y confirmar contraseña.
- Formulario de login: email y contraseña.
- Pie de página.

Al enviar un formulario aparece un aviso del navegador: de éxito si los datos cumplen las reglas, o de error si no.

Validaciones:

- Todos los campos son obligatorios.
- La contraseña debe tener al menos 6 caracteres.
- En el registro, la contraseña y su confirmación deben ser iguales.

## Estructura

```text
src/
  components/
    Navbar.jsx        Barra de navegación
    Header.jsx        Encabezado
    Home.jsx          Página principal y listado de pizzas
    CardPizza.jsx     Tarjeta de una pizza
    LoginPage.jsx     Formulario de login
    RegisterPage.jsx  Formulario de registro
    Footer.jsx        Pie de página
  utils/
    formatPrice.js    Formato de precios
  App.jsx
  main.jsx
```

## Tecnologías

- React 19
- Vite
- Bootstrap 5
