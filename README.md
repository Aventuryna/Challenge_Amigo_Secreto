# 🎲 Challenge Amigo Secreto

Una aplicación web interactiva desarrollada como parte del **Challenge de Alura Latam** para organizar sorteos de "Amigo Secreto" de forma sencilla y divertida. Perfecta para intercambios de regalos en Navidad, eventos corporativos, reuniones familiares o cualquier celebración especial.

![Challenge Amigo Secreto](assets/amigo-secreto.png)

## 📋 Descripción

Esta aplicación permite agregar nombres de participantes a una lista y realizar sorteos aleatorios para determinar quién es el "Amigo Secreto". Desarrollada con tecnologías web estándar (HTML5, CSS3 y JavaScript ES6) siguiendo las mejores prácticas de desarrollo front-end.

## ✨ Características Principales

- ➕ **Gestión de participantes**: Agregar amigos con validación inteligente
- 👀 **Lista dinámica**: Visualización en tiempo real de todos los participantes agregados
- 🎯 **Sorteo aleatorio**: Selección aleatoria usando algoritmos JavaScript nativos
- ✅ **Validaciones robustas**:
  - Prevención de campos vacíos
  - Control de nombres duplicados
  - Verificación de participantes antes del sorteo
- 🎨 **Diseño moderno**: Interfaz atractiva con tipografías Google Fonts (Inter y Merriweather)
- 📱 **Totalmente responsive**: Funciona perfectamente en móviles, tablets y desktop
- ⌨️ **Atajos de teclado**: Presiona Enter para agregar participantes rápidamente
- ♿ **Accesibilidad**: Elementos ARIA para lectores de pantalla
- 🧹 **UX optimizada**: Limpieza automática de resultados al agregar nuevos participantes

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica con elementos modernos |
| **CSS3** | Estilos avanzados con variables CSS, Flexbox y diseño responsive |
| **JavaScript ES6** | Lógica de aplicación con funciones modernas y manipulación del DOM |
| **Google Fonts** | Tipografías profesionales (Inter y Merriweather) |

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- No requiere servidor ni instalaciones adicionales

### Instalación Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Aventuryna/Challenge_Amigo_Secreto.git
   cd Challenge_Amigo_Secreto
   ```

2. **Abrir la aplicación**:
   - **Método 1**: Hacer doble clic en `index.html`
   - **Método 2**: Arrastar `index.html` al navegador
   - **Método 3**: Usar Live Server en VS Code
   - **Método 4**: Servidor local simple:
     ```bash
     # Con Python 3
     python -m http.server 8000
     # Luego abrir http://localhost:8000
     ```

### Cómo Usar la Aplicación

1. **➕ Agregar Participantes**:
   - Escribe un nombre en el campo "Escribe un nombre"
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá automáticamente en la lista debajo
   - Repite para agregar todos los participantes

2. **👥 Gestionar la Lista**:
   - Los nombres se muestran dinámicamente en tiempo real
   - No se permiten nombres duplicados (alert automático)
   - Los campos vacíos son rechazados con mensaje de error
   - La lista se mantiene persistente entre sorteos

3. **🎯 Realizar el Sorteo**:
   - Asegúrate de tener al menos un participante en la lista
   - Haz clic en el botón "Sortear amigo"
   - El resultado aparece destacado en verde con emoji 🎉
   - Puedes hacer múltiples sorteos con la misma lista

4. **🔄 Funcionalidades Adicionales**:
   - Al agregar nuevos amigos, el resultado anterior se limpia automáticamente
   - Usa Enter para agregar amigos más rápidamente
   - La interfaz es completamente accesible con teclado

## 💻 Implementación Técnica

### Variables Globales
```javascript
let friends = [];           // Array para almacenar participantes
let SecretFriend = '';      // Variable para el amigo sorteado actual
```

### Funciones Principales

#### 🔧 `addFriend()`
- **Propósito**: Agregar nuevos participantes con validación completa
- **Funcionalidades implementadas**:
  - Captura valor usando `document.getElementById('friends')`
  - Validación de campos vacíos con `trim()`
  - Control de duplicados con `includes()`
  - Actualización del array con `push()`
  - Limpieza automática del campo de entrada
  - Actualización visual de la lista
  - Limpieza de resultados anteriores

#### 📝 `displayFriends()`
- **Propósito**: Mostrar lista de participantes en el DOM dinámicamente
- **Implementación técnica**:
  - Obtiene elemento con `document.getElementById('displayFriends')`
  - Limpia lista existente con `innerHTML = ''`
  - Recorre array con bucle `for` tradicional
  - Crea elementos `<li>` dinámicamente con `createElement()`
  - Actualiza DOM con `appendChild()`

#### 🎲 `drawSecretFriend()`
- **Propósito**: Realizar sorteo aleatorio siguiendo especificaciones
- **Algoritmo implementado**:
  - Validación previa de participantes disponibles
  - Generación de índice aleatorio: `Math.floor(Math.random() * friends.length)`
  - Obtención del nombre usando índice aleatorio del array
  - Visualización del resultado usando `innerHTML`
  - Logging para debugging y seguimiento

#### 🧹 `clearResult()`
- **Propósito**: Limpiar resultados anteriores para mejor UX
- **Funcionalidad**: 
  - Resetea elemento de resultado en DOM
  - Limpia variable global `SecretFriend`
  - Se ejecuta automáticamente al agregar nuevos amigos

### Event Listeners
- **Enter Key**: Permite agregar participantes presionando Enter
- **DOMContentLoaded**: Inicializa eventos cuando la página está completamente cargada
- **onClick**: Manejo de clicks en botones de agregar y sortear

## 🧪 Validaciones y Casos de Uso

### Casos de Prueba Implementados

1. **✅ Agregar Amigos**:
   - Campo vacío → Alert: "Por favor, inserte un nombre."
   - Nombre duplicado → Alert: "Este nombre ya existe. Por favor, inserte un nombre diferente."
   - Nombre válido → Se agrega exitosamente a la lista

2. **✅ Sortear Amigo**:
   - Lista vacía → Alert: "No hay amigos para sortear. Por favor, agregue al menos un amigo."
   - Con participantes → Muestra resultado aleatorio con formato: "🎉 El amigo sorteado es: [nombre]"

3. **✅ Funcionalidad Enter**:
   - Presionar Enter en input → Ejecuta `addFriend()` automáticamente

4. **✅ Limpieza Automática**:
   - Agregar nuevo amigo → Limpia resultado de sorteo anterior automáticamente

## 🏆 Challenge de Alura - Requisitos Cumplidos

Este proyecto fue desarrollado como parte del programa **Oracle Next Education (ONE)** en colaboración con **Alura Latam**.

### ✅ Requisitos Técnicos Implementados

| Requisito del Challenge | Estado | Implementación |
|------------------------|--------|----------------|
| **Array de amigos** | ✅ Completado | `let friends = []` |
| **Función agregar con getElementById** | ✅ Completado | `document.getElementById('friends')` |
| **Validación campo vacío** | ✅ Completado | Alert: "Por favor, inserte un nombre." |
| **Uso de push()** | ✅ Completado | `friends.push(friendName)` |
| **Limpiar campo entrada** | ✅ Completado | `input.value = ''` |
| **Función mostrar con for loop** | ✅ Completado | Bucle `for` en `displayFriends()` |
| **Uso de innerHTML** | ✅ Completado | Limpieza y actualización DOM |
| **Math.random() y Math.floor()** | ✅ Completado | Generación índice aleatorio |
| **Validación array vacío** | ✅ Completado | Verificación antes de sortear |

### 🎯 Habilidades Desarrolladas
- ✅ **Manipulación del DOM** con JavaScript vanilla
- ✅ **Arrays y métodos** (push, includes, length)
- ✅ **Validación de formularios** y manejo de errores
- ✅ **Generación de números aleatorios** con Math.random()
- ✅ **Event Listeners** y manejo de eventos del usuario
- ✅ **CSS moderno** con variables, Flexbox y responsive design
- ✅ **Buenas prácticas** de desarrollo web y accesibilidad

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Puedes usar, modificar y distribuir este código libremente.

## 👨‍💻 Autor

**Aventuryna**
- GitHub: [@Aventuryna](https://github.com/Aventuryna)
- Proyecto: [Challenge_Amigo_Secreto](https://github.com/Aventuryna/Challenge_Amigo_Secreto)

## 🎊 Agradecimientos

- **Alura Latam** por el excelente programa de formación
- **Oracle Next Education** por la oportunidad de aprendizaje
- **Comunidad de desarrolladores** por el feedback y apoyo continuo

---

<div align="center">

### 🎉 ¡Disfruta organizando tus sorteos de Amigo Secreto! 🎁

**Desarrollado con ❤️ para el Challenge de Alura Latam**

[![Alura](https://img.shields.io/badge/Alura-Challenge-blue)](https://www.aluracursos.com/)
[![Oracle](https://img.shields.io/badge/Oracle-Next_Education-red)](https://www.oracle.com/mx/education/oracle-next-education/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Modern-orange)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)](https://developer.mozilla.org/es/docs/Web/CSS)

[⬆️ Volver al inicio](#-challenge-amigo-secreto)

</div>