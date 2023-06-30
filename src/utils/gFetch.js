let products = [
  { id: 1, img: "/public/assets/img/dia.png" },
  { id: 2, img: "../public/assets/img/noche.png" },
  { id: 3, img: "../../public/assets/img/abrigos.png" },
  { id: 4, img: "../assets/img/calzado.png" },
  { id: 5, img: "../public/assets/img/jeans.png" },
  { id: 6, img: "../public/assets/img/camisas.png" },
  { id: 7, img: "../public/assets/img/accesorios.png" },
  { id: 8, img: "../public/assets/img/giftcard.png" },
];

export const gFetch = () =>
  new Promise((res, rej) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        res(products);
      });
    } else {
      rej("error en el fetch");
    }
  });

let options = [
  {
    id: "section1",
    img: "../public/assets/img/Icono-laptop-heart.png",
    title: "¿Quienes Somos?",
    description:`¡Hola! Soy Lucía, decidí dar un gran paso hacia el emprendimiento para lograr mi objetivo de finalizarmi carrera.Superar 
    ese desafío se volvía cada vez más difícil con mi trabajo en relación de dependencia, así que decidí tomar las riendas de
    mi propio destino y adentrarme a este mundo mágico de ser <strong>emprendedora.</strong></br>
    Me encanta ofrecer una <strong>amplia variedad de opciones de looks cómodos y con estilo</strong> para que cada persona pueda
    expresarse a través de su vestimenta. Mi <strong>objetivo</strong> es brindar un catálogo diverso que satisfaga los gustos de todos. Pero
    entendí que no solo es eso, sino que mi compromiso va más allá de simplemente ofrecer productos. En cada <strong>interacción
    </strong>,en cada momento de atención al cliente, me esfuerzo por <strong>brindar lo mejor de mí.</strong><br><strong>
    ¿Cómo lo hago? </strong>Siempre pienso en cómo me gustaría sentirme al realizar una compra: valorada,escuchada y asesorada de 
    manera experta.<br/>`,
    foot:`<strong>Me encantaría ser parte de tu experiencia de compra y ayudarte a encontrar ese look perfecto que te haga sentir especial.
    </br>¡Te doy la bienvenida a OYL!</strong>`,
  },
  {
    id: "section2",
    img: "../public/assets/img/Icono-SHOP.png",
    title: "¿Cómo realizar un pedido?",
    description:`Realizar un pedido en nuestra tienda es muy sencillo. Sigue estos  pasos y estarás en camino de obtener tus looks favoritos:
    <ol>
    <li>Ingresa a nuestra tienda: Navega por nuestro catalogo y descubre una amplia variedad de productos.</li>
    <li>Selecciona los productos que te gustan: Explora nuestra colección y elige los artículos que se adapten a tu estilo y preferencias. Agrega cada producto al carrito con un solo clic. </li>
    <li>Revisa tu carrito: Antes de finalizar tu pedido, verifica que todos los productos que deseas adquirir estén en el carrito. Puedes ajustar las cantidades o eliminar artículos si es necesario.</li>
    <li>Procede a realizar el pedido: Una vez que estés satisfecho/a con tu selección, simplemente presiona el botón "Realizar pedido". Aquí es donde comienza nuestra colaboración más cercana.</li>
    <li>Asesoramiento y acompañamiento: A partir de ese momento, estaré personalmente a tu disposición para brindarte
    asesoramiento y acompañarte durante todo el proceso de pago. Si tienes alguna pregunta o necesitas ayuda, no
    dudes en contactarme. Estoy para asegurarme de que tengas una experiencia de compra fluida y satisfactoria.</li>
    <li>Sección de pago: Te guiaré a través de la sección de pago, donde podrás elegir entre diferentes métodos de pago
    seguros y convenientes. Mi objetivo es que te sientas comodidad y confianza en cada paso del proceso</li>
    </ol>`,
    foot:`<strong>Realizar un pedido es más que una simple transacción. Es una experiencia personalizada en la que contarás con mi
    asesoramiento y atención dedicada en cada etapa del proceso.</strong>`,
  },
  {
    id: "section3",
    img: "../public/assets/img/IconoGift.png",
    title: "Envíos",
    description:`Realizamos envíos a todo el país para que siempre puedas tener un poquito de OYL junto a vos.Opciones:
    <ol>
    <li>Envíos por Correo Argentino: Realizamos envíos a todas las localidades del país a través de Correo Argentino. 
    Enviaremos tu pedido a la dirección que nos proporciones durante el proceso de compra. El tiempo de entrega
    puede variar según la ubicación, pero nos aseguraremos de proporcionarte un número de seguimiento para que
    puedas rastrear el estado de tu envío.</li>
    <li>Envíos por moto mensajería (consulta zonas y costo): En determinadas zonas, ofrecemos la opción de envío
    mediante moto mensajería para brindarte una entrega aún más rápida. Los costos y disponibilidad de este servicio
    varían según la ubicación. Durante el proceso de compra, podrás consultar si la opción de moto mensajería está
    disponible en tu zona y verificar el costo correspondiente.</li>
    <li> Retiro personal en puntos de encuentro o lugares de retiro: Si preferís tener tus productos de manera inmediata,
    podes optar por retirar personalmente en nuestros puntos de encuentro o lugares de retiro autorizados. Una vez que
    hayas realizado tu compra, coordinaremos contigo el día y horario más conveniente para que puedas pasar a retirar
    tus productos. Esta opción te brinda flexibilidad y ahorro en costos de envío.</li>
    </ol>`,
    foot: "<strong>Nuestro objetivo es brindarte opciones de entrega que se adapten a tus necesidades y preferencias.</strong>",
  },
  {
    id: "section4",
    img: "../public/assets/img/Icono.cambios.png",
    title: "Cambios",
    description:` Información importante sobre nuestra política de cambios:
    <ol>
    <li>Cambios hasta 3 días de la recepción: Aceptamos cambios en los productos dentro de los 3 días posteriores a la
    recepción de tu pedido. Es importante que nos informes sobre tu intención de cambio dentro de este plazo.
    Lamentablemente, no aceptamos cambios pasados los 3 días desde la recepción.</li>
    <li>Cambios por talle: Los cambios se limitan únicamente a la disponibilidad de tallas. Si necesitas cambiar un producto
    por un tamaño diferente, podes solicitarlo, siempre sujeto a la disponibilidad de stock. Sin embargo, es importante
    que tengas en cuenta que no aceptamos cambios por otros motivos que no sean relacionados con la talla.</li> 
    <li> Condiciones para el cambio: Para poder realizar un cambio, el producto debe estar en su estado original, sin usar y
    en condiciones óptimas. Deberás presentar el comprobante de compra y el producto completo, incluyendo
    etiquetas y empaques originales.</li>
    </ol>`,
    foot: "<strong>Si necesitas realizar un cambio, comunícate con nosotros para recibir instrucciones sobre cómo proceder.</strong>",
  },
];
export const gFetch2 = () =>
  new Promise((res, rej) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        res(options);
      });
    } else {
      rej("error en el fetch");
    }
  });
