<template>
    <div class="sessions-page">
        <Navbar title="Sesiones" :isBackVisible="true" backRoute="" />

        <!-- Hero -->
        <section class="s-hero">
            <div class="s-hero-glow"></div>
            <div class="s-hero-content">
                <p class="text-eyebrow s-hero-eyebrow">✦ &nbsp; Sesiones individuales · Online &nbsp; ✦</p>
                <h1 class="s-hero-title special-title">Sesiones</h1>
                <div class="s-hero-divider">
                    <span class="s-divider-line"></span>
                    <span class="s-divider-sym">⊱ ✦ ⊰</span>
                    <span class="s-divider-line"></span>
                </div>
                <p class="s-hero-subtitle">
                    Un espacio de encuentro con tu mundo interior.<br />
                    Cada sesión es un acto de valentía hacia ti misma.
                </p>
                <!-- Accesos rápidos a secciones -->
                <div class="s-hero-nav">
                    <a href="#tarot" class="s-hero-nav-btn">☽ &nbsp; Tarot</a>
                    <a href="#terapia" class="s-hero-nav-btn">✦ &nbsp; Psicoterapia</a>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════
             SECCIÓN TAROT
             ══════════════════════════ -->
        <section id="tarot" class="s-section s-dark">
            <div class="container-fluid">
                <div class="row align-items-center g-0">
                    <!-- Columna símbolo / decoración -->
                    <div class="col-12 col-lg-5 s-symbol-col s-symbol-tarot">
                        <div class="s-symbol-wrap">
                            <div class="s-symbol-ring s-ring-outer"></div>
                            <div class="s-symbol-ring s-ring-mid"></div>
                            <div class="s-symbol-ring s-ring-inner"></div>
                            <span class="s-symbol-icon">☽</span>
                        </div>
                    </div>

                    <!-- Contenido -->
                    <div class="col-12 col-lg-7 s-content-col">
                        <div class="s-content-inner">
                            <p class="text-eyebrow s-service-eyebrow">✦ Servicio ✦</p>
                            <h2 class="s-service-title cinzel-heading text-gold">
                                Lectura de Tarot
                            </h2>
                            <div class="s-ornament-divider">
                                <span class="s-div-line"></span>
                                <span class="s-div-sym">⊱ ✦ ⊰</span>
                                <span class="s-div-line"></span>
                            </div>

                            <p class="s-service-desc">
                                El Tarot no predice el futuro — lo revela. A través de los arquetipos
                                jungianos presentes en cada carta, la lectura actúa como un espejo del
                                alma: ilumina lo que ya sabes, lo que evitas y lo que está esperando
                                ser integrado.
                            </p>
                            <p class="s-service-desc">
                                Cada sesión es un viaje simbólico guiado donde las imágenes
                                del tarot se convierten en herramientas de autoconocimiento profundo.
                            </p>

                            <!-- Lo que incluye -->
                            <div class="s-includes">
                                <p class="s-includes-title">La sesión incluye:</p>
                                <ul class="s-list">
                                    <li>
                                        <span class="s-list-icon">✦</span>
                                        <span>Espacio de escucha y exploración inicial (10 min)</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon">✦</span>
                                        <span>Tirada de cartas con interpretación simbólica-psicológica</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon">✦</span>
                                        <span>Integración de los mensajes con tu momento vital actual</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon">✦</span>
                                        <span>Cierre con reflexión y orientación práctica</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Detalles formato -->
                            <div class="s-format-grid">
                                <div class="s-format-item">
                                    <span class="s-format-icon">⏳</span>
                                    <span class="s-format-label">Duración</span>
                                    <span class="s-format-value">60 minutos</span>
                                </div>
                                <div class="s-format-item">
                                    <span class="s-format-icon">🌐</span>
                                    <span class="s-format-label">Modalidad</span>
                                    <span class="s-format-value">Online · Videollamada</span>
                                </div>
                                <div class="s-format-item">
                                    <span class="s-format-icon">💫</span>
                                    <span class="s-format-label">Valor</span>
                                    <!-- ⚠️ ACTUALIZAR PRECIO -->
                                    <span class="s-format-value s-price">$30.000 CLP</span>
                                </div>
                            </div>

                            <!-- CTA -->
                            <div class="s-cta-wrap">
                                <a :href="whatsappTarot" target="_blank" rel="noopener" class="s-cta-btn">
                                    Agendar sesión de Tarot ✦
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════
             SECCIÓN PSICOTERAPIA
             ══════════════════════════ -->
        <section id="terapia" class="s-section s-parchment">
            <div class="container-fluid">
                <div class="row align-items-center g-0 flex-row-reverse">
                    <!-- Columna símbolo -->
                    <div class="col-12 col-lg-5 s-symbol-col s-symbol-terapia">
                        <div class="s-symbol-wrap s-symbol-wrap-dark">
                            <div class="s-symbol-ring s-ring-outer s-ring-dark"></div>
                            <div class="s-symbol-ring s-ring-mid  s-ring-dark"></div>
                            <div class="s-symbol-ring s-ring-inner s-ring-dark"></div>
                            <span class="s-symbol-icon s-symbol-icon-dark">✦</span>
                        </div>
                    </div>

                    <!-- Contenido -->
                    <div class="col-12 col-lg-7 s-content-col">
                        <div class="s-content-inner s-content-parchment">
                            <p class="text-eyebrow s-service-eyebrow s-eyebrow-parchment">✦ Servicio ✦</p>
                            <h2 class="s-service-title cinzel-heading s-title-parchment">
                                Acompañamiento Psicológico
                            </h2>
                            <div class="s-ornament-divider s-div-parchment">
                                <span class="s-div-line s-line-dark"></span>
                                <span class="s-div-sym s-sym-dark">⊱ ✦ ⊰</span>
                                <span class="s-div-line s-line-dark"></span>
                            </div>

                            <p class="s-service-desc s-desc-parchment">
                                Un proceso terapéutico de acompañamiento desde una mirada humanista y
                                con influencias de la psicología profunda jungiana. El objetivo es
                                facilitarte un espacio seguro donde puedas escuchar tu mundo interior,
                                integrar tus sombras y reconectar con tu fuerza vital.
                            </p>
                            <p class="s-service-desc s-desc-parchment">
                                No se trata solo de resolver, sino de comprender. De aprender a
                                habitar tu propia vida con más consciencia, libertad y sentido.
                            </p>

                            <!-- Enfoque -->
                            <div class="s-includes s-includes-parchment">
                                <p class="s-includes-title s-includes-title-dark">El proceso incluye:</p>
                                <ul class="s-list s-list-dark">
                                    <li>
                                        <span class="s-list-icon s-icon-dark">✦</span>
                                        <span>Primera sesión de exploración y encuadre terapéutico</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon s-icon-dark">✦</span>
                                        <span>Trabajo con sueños, imaginería activa y simbolismo jungiano</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon s-icon-dark">✦</span>
                                        <span>Herramientas para integrar lo inconsciente en tu vida cotidiana</span>
                                    </li>
                                    <li>
                                        <span class="s-list-icon s-icon-dark">✦</span>
                                        <span>Acompañamiento continuo adaptado a tu proceso único</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Detalles formato -->
                            <div class="s-format-grid s-format-parchment">
                                <div class="s-format-item s-format-item-dark">
                                    <span class="s-format-icon">⏳</span>
                                    <span class="s-format-label s-label-dark">Duración</span>
                                    <span class="s-format-value s-value-dark">50 – 60 minutos</span>
                                </div>
                                <div class="s-format-item s-format-item-dark">
                                    <span class="s-format-icon">🌐</span>
                                    <span class="s-format-label s-label-dark">Modalidad</span>
                                    <span class="s-format-value s-value-dark">Online · Videollamada</span>
                                </div>
                                <div class="s-format-item s-format-item-dark">
                                    <span class="s-format-icon">💫</span>
                                    <span class="s-format-label s-label-dark">Valor</span>
                                    <!-- ⚠️ ACTUALIZAR PRECIO -->
                                    <span class="s-format-value s-value-dark s-price-dark">$40.000 CLP</span>
                                </div>
                            </div>

                            <!-- CTA -->
                            <div class="s-cta-wrap">
                                <a :href="whatsappTerapia" target="_blank" rel="noopener" class="s-cta-btn s-cta-btn-parchment">
                                    Iniciar mi proceso terapéutico ✦
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════
             CONTACTO FINAL
             ══════════════════════════ -->
        <section class="s-contact">
            <div class="container">
                <div class="s-contact-card">
                    <span class="s-card-corner s-card-tl">✦</span>
                    <span class="s-card-corner s-card-tr">✦</span>
                    <span class="s-card-corner s-card-bl">✦</span>
                    <span class="s-card-corner s-card-br">✦</span>

                    <p class="text-eyebrow s-contact-eyebrow">✦ &nbsp; ¿Tienes dudas? &nbsp; ✦</p>
                    <h3 class="s-contact-title cinzel-heading text-gold">Escríbeme directamente</h3>
                    <div class="s-contact-ornament">⊱ ✦ ⊰</div>
                    <p class="s-contact-body">
                        Si no sabes qué servicio es para ti, o simplemente quieres conversar
                        antes de dar el paso — escríbeme con total confianza.
                    </p>

                    <div class="s-contact-btns">
                        <!-- ⚠️ ACTUALIZAR NÚMERO DE WHATSAPP -->
                        <a :href="whatsappGeneral" target="_blank" rel="noopener" class="s-wa-btn">
                            <svg class="s-wa-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                        <!-- ⚠️ ACTUALIZAR CORREO -->
                        <a :href="mailtoLink" class="s-mail-btn">
                            ✉ &nbsp; Correo electrónico
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import Navbar          from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'

// ─────────────────────────────────────────────────────────────────
// ⚠️  ACTUALIZA estos datos con la información de contacto real:
// ─────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '56912345678'           // número sin + ni espacios
const CONTACT_EMAIL   = 'contacto@lametamorfosisdelalma.com'
// ─────────────────────────────────────────────────────────────────

function waLink(msg: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default {
    name: 'SessionsView',
    components: { Navbar, FooterComponent },
    computed: {
        whatsappTarot(): string {
            return waLink('Hola Valentina, me gustaría agendar una sesión de Lectura de Tarot. ¿Tienes disponibilidad?')
        },
        whatsappTerapia(): string {
            return waLink('Hola Valentina, me interesa iniciar un proceso de acompañamiento psicológico. ¿Podríamos conversar?')
        },
        whatsappGeneral(): string {
            return waLink('Hola Valentina, tengo una consulta sobre tus sesiones.')
        },
        mailtoLink(): string {
            return `mailto:${CONTACT_EMAIL}?subject=Consulta%20sobre%20sesiones`
        }
    }
}
</script>

<style scoped>
.sessions-page {
    min-height: 100vh;
    background: #120620;
}

/* ══════ HERO ══════ */
.s-hero {
    position: relative;
    min-height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 110px 20px 60px;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 50%, #3a0d1e 100%);
    overflow: hidden;
}

.s-hero-glow {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201, 168, 76, 0.08) 0%, transparent 65%),
        radial-gradient(ellipse 50% 60% at 80% 70%, rgba(196, 122, 138, 0.05) 0%, transparent 60%);
    pointer-events: none;
}

.s-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 680px;
}

.s-hero-eyebrow { margin-bottom: 18px; }

.s-hero-title {
    font-size: clamp(48px, 8vw, 90px);
    line-height: 1.05;
    color: #f2e2a8;
    text-shadow:
        0 0 50px rgba(201, 168, 76, 0.22),
        0 4px 18px rgba(18, 6, 32, 0.85);
    margin-bottom: 22px;
}

.s-hero-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin-bottom: 20px;
}

.s-divider-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, #c9a84c, transparent);
    display: block;
}

.s-divider-sym {
    color: #c9a84c;
    font-size: 14px;
    letter-spacing: 4px;
}

.s-hero-subtitle {
    font-family: var(--font-body);
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.1875rem); /* 16–19px */
    color: #d4b87a;
    line-height: 1.75;
    margin-bottom: 36px;
}

/* Accesos rápidos hero */
.s-hero-nav {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.s-hero-nav-btn {
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px — link de navegación */
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    color: #e8c96b;
    border: 1px solid rgba(201, 168, 76, 0.4);
    padding: 10px 24px;
    border-radius: 2px;
    transition: all 0.3s ease;
    background: rgba(201, 168, 76, 0.05);
}

.s-hero-nav-btn:hover {
    background: rgba(201, 168, 76, 0.14);
    border-color: #c9a84c;
    color: #f2e2a8;
    transform: translateY(-2px);
}

/* ══════ SECCIONES ══════ */
.s-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.s-dark {
    background: linear-gradient(160deg, #1e0b2e 0%, #3a0d1e 100%);
}

.s-parchment {
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 60%, #e2ce96 100%);
}

/* Columna símbolo */
.s-symbol-col {
    padding: 60px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
}

.s-symbol-tarot  { background: rgba(18, 6, 32, 0.4); }
.s-symbol-terapia { background: rgba(138, 111, 40, 0.1); }

.s-symbol-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.s-symbol-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(201, 168, 76, 0.2);
    animation: s-ring-pulse 6s ease-in-out infinite;
}

.s-ring-outer { width: 190px; height: 190px; animation-delay: 0s; }
.s-ring-mid   { width: 140px; height: 140px; animation-delay: 1s; }
.s-ring-inner { width: 90px;  height: 90px;  animation-delay: 2s; }

.s-ring-dark {
    border-color: rgba(92, 26, 46, 0.25);
}

@keyframes s-ring-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50%       { opacity: 0.7; transform: scale(1.04); }
}

.s-symbol-icon {
    font-size: 72px;
    color: #c9a84c;
    text-shadow: 0 0 30px rgba(201, 168, 76, 0.5);
    position: relative;
    z-index: 1;
    animation: s-icon-float 5s ease-in-out infinite;
}

.s-symbol-icon-dark {
    color: #5c1a2e;
    text-shadow: 0 0 20px rgba(92, 26, 46, 0.3);
}

@keyframes s-icon-float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
}

/* Columna contenido */
.s-content-col {
    padding: 60px 40px 60px 20px;
}

.s-content-inner {
    max-width: 620px;
}

.s-content-parchment { color: #2e1018; }

.s-service-eyebrow  { margin-bottom: 12px; }
.s-eyebrow-parchment { color: #5c1a2e !important; opacity: 0.7; }

.s-service-title {
    font-size: clamp(26px, 3.5vw, 40px);
    margin-bottom: 20px;
    color: var(--gold);
}

.s-title-parchment { color: #3a0d1e !important; }

/* Divisores */
.s-ornament-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
}

.s-div-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(201, 168, 76, 0.4), transparent);
    display: block;
}

.s-line-dark {
    background: linear-gradient(to right, transparent, rgba(92, 26, 46, 0.4), transparent) !important;
}

.s-div-sym {
    color: #c9a84c;
    font-size: 12px;
    letter-spacing: 4px;
    opacity: 0.7;
}

.s-sym-dark { color: #5c1a2e !important; }

/* Descripción */
.s-service-desc {
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.7vw, 1.125rem); /* 16–18px */
    color: #f2e2a8;
    line-height: 1.85;
    margin-bottom: 16px;
    opacity: 0.92;
}

.s-desc-parchment {
    color: #2e1018 !important;
    opacity: 0.88;
}

/* Lista de incluidos */
.s-includes { margin-bottom: 28px; }

.s-includes-title {
    font-family: var(--font-heading);
    font-size: 0.75rem;      /* 12px */
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 14px;
    opacity: 0.8;
}

.s-includes-title-dark { color: #5c1a2e !important; }

.s-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.s-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-family: var(--font-body);
    font-size: clamp(0.9375rem, 1.5vw, 1.0625rem); /* 15–17px */
    color: #f2e2a8;
    line-height: 1.65;
    opacity: 0.88;
}

.s-list-dark li { color: #2e1018 !important; opacity: 0.85; }

.s-list-icon {
    color: #c9a84c;
    font-size: 10px;
    margin-top: 4px;
    flex-shrink: 0;
}

.s-icon-dark { color: #5c1a2e !important; }

/* Grid de formato */
.s-format-grid {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 32px;
}

.s-format-item {
    flex: 1;
    min-width: 110px;
    border: 1px solid rgba(201, 168, 76, 0.25);
    border-radius: 2px;
    padding: 12px 14px;
    background: rgba(201, 168, 76, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
}

.s-format-item-dark {
    border-color: rgba(92, 26, 46, 0.25) !important;
    background: rgba(92, 26, 46, 0.06) !important;
}

.s-format-icon {
    font-size: 20px;
    line-height: 1;
    margin-bottom: 2px;
}

.s-format-label {
    font-family: var(--font-heading);
    font-size: 0.6875rem;    /* 11px — etiqueta uppercase muy corta */
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c9a84c;
    opacity: 0.7;
}

.s-label-dark { color: #5c1a2e !important; }

.s-format-value {
    font-family: var(--font-body);
    font-size: 0.875rem;     /* 14px */
    color: #f2e2a8;
    line-height: 1.45;
}

.s-value-dark { color: #2e1018 !important; }

.s-price {
    font-family: var(--font-heading);
    font-size: 1rem;         /* 16px */
    font-weight: 600;
    color: #e8c96b;
    letter-spacing: 0.04em;
}

.s-price-dark { color: #3a0d1e !important; }

/* CTA botón sesión */
.s-cta-wrap { display: flex; }

.s-cta-btn {
    font-family: var(--font-heading);
    font-size: 0.875rem;     /* 14px — botón principal CTA */
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 16px 36px;
    border: 1px solid #c9a84c;
    border-radius: 2px;
    color: #f2e2a8;
    background: linear-gradient(135deg, rgba(58, 13, 30, 0.9) 0%, rgba(92, 26, 46, 0.9) 100%);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease;
    box-shadow: 0 4px 20px rgba(90, 26, 46, 0.4);
    display: inline-block;
}

.s-cta-btn::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(201, 168, 76, 0.18);
    border-radius: 1px;
    pointer-events: none;
}

.s-cta-btn:hover {
    background: linear-gradient(135deg, rgba(92, 26, 46, 0.95) 0%, rgba(122, 42, 58, 0.95) 100%);
    color: #e8c96b;
    border-color: #e8c96b;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(90, 26, 46, 0.6);
}

.s-cta-btn-parchment {
    background: linear-gradient(135deg, #3a0d1e 0%, #5c1a2e 100%) !important;
    border-color: #5c1a2e !important;
}

.s-cta-btn-parchment:hover {
    background: linear-gradient(135deg, #5c1a2e 0%, #7a2a3a 100%) !important;
    border-color: #3a0d1e !important;
    color: #f2e2a8 !important;
}

/* ══════ CONTACTO ══════ */
.s-contact {
    background: linear-gradient(160deg, #1e0b2e 0%, #3a0d1e 100%);
    padding: 80px 20px;
}

.s-contact-card {
    position: relative;
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 55%, #e8d090 100%);
    border: 1px solid #8a6f28;
    border-radius: 3px;
    padding: 52px 40px 44px;
    text-align: center;
    max-width: 620px;
    margin: 0 auto;
    box-shadow:
        0 8px 48px rgba(20, 5, 10, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.s-card-corner {
    position: absolute;
    font-size: 10px;
    color: #8a6f28;
    opacity: 0.6;
}
.s-card-tl { top: 8px;  left: 8px; }
.s-card-tr { top: 8px;  right: 8px; }
.s-card-bl { bottom: 8px; left: 8px; }
.s-card-br { bottom: 8px; right: 8px; }

.s-contact-eyebrow { margin-bottom: 12px; color: #5c1a2e !important; opacity: 0.7; }

.s-contact-title {
    font-size: clamp(20px, 2.8vw, 30px);
    color: #3a0d1e;
    margin-bottom: 14px;
}

.s-contact-ornament {
    color: #8a6f28;
    font-size: 14px;
    letter-spacing: 6px;
    opacity: 0.6;
    margin-bottom: 18px;
}

.s-contact-body {
    font-family: var(--font-body);
    font-style: italic;
    font-size: clamp(0.9375rem, 1.5vw, 1rem); /* 15–16px */
    color: #2e1018;
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 32px;
    max-width: 460px;
    margin-left: auto;
    margin-right: auto;
}

.s-contact-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Botón WhatsApp */
.s-wa-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 13px 28px;
    border-radius: 2px;
    color: #fdf8ef;
    background: linear-gradient(135deg, #1a6c35 0%, #25a34f 100%);
    border: 1px solid #1a5e2e;
    transition: all 0.3s ease;
    box-shadow: 0 3px 12px rgba(26, 94, 46, 0.4);
}

.s-wa-btn:hover {
    background: linear-gradient(135deg, #25a34f 0%, #32c562 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 94, 46, 0.55);
}

.s-wa-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

/* Botón email */
.s-mail-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 13px 28px;
    border-radius: 2px;
    color: #3a0d1e;
    background: transparent;
    border: 1px solid #8a6f28;
    transition: all 0.3s ease;
}

.s-mail-btn:hover {
    background: rgba(138, 111, 40, 0.12);
    border-color: #5c1a2e;
    color: #3a0d1e;
    transform: translateY(-2px);
}

/* ══════ Responsive ══════ */
@media (max-width: 991px) {
    .s-content-col { padding: 40px 20px; }
    .s-content-inner { max-width: 100%; }
    .s-symbol-col { min-height: 30vh; padding: 40px 20px; }
    .s-symbol-wrap { width: 140px; height: 140px; }
    .s-ring-outer { width: 130px; height: 130px; }
    .s-ring-mid   { width: 95px;  height: 95px; }
    .s-ring-inner { width: 60px;  height: 60px; }
    .s-symbol-icon { font-size: 50px; }
}

@media (max-width: 575px) {
    .s-format-grid { flex-direction: column; }
    .s-cta-wrap { justify-content: center; }
    .s-cta-btn { text-align: center; }
    .s-contact-card { padding: 40px 24px 36px; }
}
</style>
