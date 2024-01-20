import React from "react";
import '../pages/C_FUNCIONA/como_funciona.css'

const Contenedor13 = () => {
    return (
        <section class="contenedor13">
        <div class="pregunta">
            <h1 class="Dudas">Dudas
            </h1>
            <strong class="Frecuentes">Frecuentes</strong>
        </div>
        <div>
            <details class="d1">
                <summary>01. ¿Para quién es Alura?</summary>
                <p>Alura es la escuela de tecnología en línea más grande de Brasil, que ofrece cursos en las áreas de programación, front-end, DevOps, móvil, ciencia de datos, UX y diseño, inteligencia artificial y gestión e innovación. Los cursos y capacitaciones de Alura son aptos para profesionales de todo etapas de su carrera, desde principiante hasta avanzado.</p>
            </details>
            <div class="puntero"></div>
        </div>
        <div>
        <details class="d2">
            <summary>02. ¿Cuáles son los métodos de pago?</summary>
            <p>Aceptamos tarjetas de crédito con cuotas de hasta 12 cuotas sin interés, compras al contado vía Pix o Boleto. Y si eres cliente de Nubank, también podrás pagar hasta en 24 cuotas o tener un límite extra en tu tarjeta de crédito usando NuPay.</p>
        </details>
        <div class="puntero"></div>
    </div>
    <div>
        <details class="d3">
            <summary>03. No me gusta, ¿puedo cancelar?</summary>
            <p>Sí, tenemos la opción de cancelación gratuita dentro de los 7 días posteriores a la compra.</p>
        </details>
        <div class="puntero"></div>
    </div>
    <div>
        <details class="d4">
            <summary>04. Aún tengo dudas, ¿qué hago?</summary>
            <p>Entendemos que la elección de desarrollarse involucra varios factores. Y puedes contar con algunos canales de Alura: El Centro de ayuda donde recopilamos respuestas a preguntas frecuentes y brindamos información detallada sobre diversos temas. Pero si prefieres hablar con alguien, puedes enviarnos un correo electrónico a contato@alura.com.br o llamarnos vía Whatsapp (11) 98451-0258</p>
        </details>
        <div class="puntero"></div>
    </div>
    </section>
    )
}

export default Contenedor13