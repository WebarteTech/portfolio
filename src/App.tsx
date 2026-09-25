import './App.css'
import chronoLogo from './assets/chronolab/chronolab-logo.png'
import chronoHero from './assets/chronolab/chronolab-hero.jpg'
import chronoFichada from './assets/chronolab/chronolab-fichada.jpg'
import chronoDashboard from './assets/chronolab/chronolab-dashboard.jpg'
import adminDashboard from './assets/chronolab/admin-dashboard.png'
import adminEmpleados from './assets/chronolab/admin-empleados.png'
import adminCalendario from './assets/chronolab/admin-calendario.png'
import logicoreDashboard from './assets/logicore/logicore-dashboard.png'
import logicoreCargas from './assets/logicore/logicore-cargas.png'
import logicorePreviajes from './assets/logicore/logicore-previajes.png'
import logicoreEditarPreviaje from './assets/logicore/logicore-editar-previaje.png'
import logicoreViajes from './assets/logicore/logicore-viajes.png'

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">W</span>
          <span>WebArte-Tech</span>
        </a>

        <nav className="author-nav">
  <span>Romina Massa · Desarrolladora de software</span>
</nav>
      </header>

      <main className="hero">
        <section className="hero-content">
          <p className="eyebrow">
            SOFTWARE <span>•</span> DESARROLLO <span>•</span> AUTOMATIZACIÓN
          </p>

          <h1>
            Soluciones digitales
            <span> para problemas reales.</span>
          </h1>

          <p className="hero-description">
            Desarrollo aplicaciones y sistemas a partir de necesidades reales
            de gestión, operación y análisis.
          </p>

          <div className="hero-actions">
  <a className="button button-primary" href="#proyectos">
    Ver proyectos
  </a>

  <a className="button button-secondary" href="#sobre-mi">
    Sobre mí
  </a>

  <a className="button button-secondary" href="#contacto">
    Contacto
  </a>
</div>
        </section>

        <section className="project-preview" aria-label="Proyectos destacados">
          <div className="preview-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="preview-label">PROYECTOS DESTACADOS</span>
          </div>

                    <a
            className="project-card project-card-link"
            href="#chronolab"
            aria-label="Ver proyecto ChronoLab"
          >
            <div className="project-icon">C</div>

            <div className="project-info">
              <div className="project-title-row">
                <h2>ChronoLab</h2>
                <span className="project-status">PROYECTO ACTIVO</span>
              </div>

              <p>Control inteligente de fichadas y análisis operativo.</p>

              <div className="tags">
                <span>Android</span>
                <span>React</span>
                <span>Firebase</span>
              </div>
            </div>
          </a>

          <a
            className="project-card project-card-link"
            href="#logicore"
            aria-label="Ver proyecto LogiCore"
          >
            <div className="project-icon">L</div>

            <div className="project-info">
              <div className="project-title-row">
                <h2>LogiCore</h2>
                <span className="project-status">PROYECTO ACTIVO</span>
              </div>

              <p>
                Gestión y planificación integral de operaciones de transporte.
              </p>

              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </a>

          <div className="preview-footer">
            <span>02 proyectos</span>
            <span className="online">
              <span className="status-dot"></span>
              WebArte-Tech
            </span>
          </div>
        </section>
      </main>

            <section className="chronolab-section" id="proyectos">
        <div className="chronolab-container" id="chronolab">

          <div className="project-heading">
            <div>
              <p className="section-number">01 / PROYECTO DESTACADO</p>

              <img
                className="chronolab-logo"
                src={chronoLogo}
                alt="ChronoLab"
              />
            </div>

            <div className="project-intro">
              <h2>
                Gestión inteligente
                <span> de asistencia.</span>
              </h2>

              <p>
                Una solución integral para registrar, validar y analizar
                jornadas laborales en operaciones distribuidas.
              </p>

              <div className="project-tech">
                <span>Android</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Firestore</span>
              </div>
            </div>
          </div>

          <div className="chronolab-showcase">
            <img
              src={chronoHero}
              alt="Presentación general de ChronoLab"
            />
          </div>

          <div className="feature-strip">
            <div>
              <strong>GPS</strong>
              <span>Validación de ubicación</span>
            </div>

            <div>
              <strong>OFFLINE</strong>
              <span>Registro sin conexión</span>
            </div>

            <div>
              <strong>AUDITORÍA</strong>
              <span>Control de incidencias</span>
            </div>

            <div>
              <strong>MULTIEMPRESA</strong>
              <span>Configuración independiente</span>
            </div>

            <div>
              <strong>ROLES</strong>
              <span>Accesos diferenciados</span>
            </div>
          </div>

          <div className="platform-intro">
            <p className="platform-label">ANDROID APP</p>

            <h3>
              Registro en campo,
              <span> incluso sin conexión.</span>
            </h3>

            <p>
              La aplicación móvil permite registrar entradas y salidas,
              validar la ubicación del dispositivo y mantener la operación
              aun cuando no existe conectividad.
            </p>
          </div>

          <div className="android-gallery">
            <div className="phone-shot phone-shot-primary">
              <img
                src={chronoFichada}
                alt="Registro de fichada en ChronoLab Android"
              />
            </div>

            <div className="android-description">
              <div className="mini-feature">
                <span>01</span>
                <div>
                  <strong>Fichadas geolocalizadas</strong>
                  <p>
                    Validación contra ubicaciones permitidas antes de registrar
                    la jornada.
                  </p>
                </div>
              </div>

              <div className="mini-feature">
                <span>02</span>
                <div>
                  <strong>Operación offline</strong>
                  <p>
                    Las fichadas pueden quedar almacenadas localmente y
                    sincronizarse al recuperar conexión.
                  </p>
                </div>
              </div>

              <div className="mini-feature">
                <span>03</span>
                <div>
                  <strong>Control operativo</strong>
                  <p>
                    Seguimiento de fichadas, incidencias de GPS y situaciones
                    que requieren revisión.
                  </p>
                </div>
              </div>
            </div>

            <div className="phone-shot phone-shot-secondary">
              <img
                src={chronoDashboard}
                alt="Dashboard de ChronoLab Android"
              />
            </div>
          </div>

          <div className="platform-intro admin-intro">
            <p className="platform-label">ADMIN WEB</p>

            <h3>
              De la fichada
              <span> al análisis operativo.</span>
            </h3>

            <p>
              El panel administrativo transforma los registros de campo en
              información útil para supervisión, administración y auditoría.
            </p>
          </div>

          <div className="admin-main-shot">
            <div className="browser-frame">
              <div className="browser-bar">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>ChronoLab · Centro de Control</p>
              </div>

              <img
                src={adminDashboard}
                alt="Centro de Control de ChronoLab Admin Web"
              />
            </div>
          </div>

          <div className="admin-secondary">
            <article>
              <div className="browser-frame small">
                <img
                  src={adminEmpleados}
                  alt="Gestión de empleados en ChronoLab"
                />
              </div>

              <p className="image-label">GESTIÓN DE PERSONAL</p>
              <h4>Configuración operativa por empleado</h4>
            </article>

            <article>
              <div className="browser-frame small">
                <img
                  src={adminCalendario}
                  alt="Calendario laboral de ChronoLab"
                />
              </div>

              <p className="image-label">CALENDARIO LABORAL</p>
              <h4>Jornadas, feriados y novedades</h4>
            </article>
          </div>

          <div className="chronolab-summary">
            <p>
              <span>Android + Web</span>
              Una arquitectura pensada para conectar la operación en campo
              con las herramientas de administración y análisis.
            </p>
          </div>

        </div>
      </section>

      <section className="logicore-section" id="logicore">
        <div className="logicore-container">

          <div className="logicore-heading">
            <div className="logicore-identity">
              <p className="logicore-number">02 / PROYECTO DESTACADO</p>

              <div className="logicore-mark">
                <span>L</span>
              </div>

              <p className="logicore-name">LogiCore</p>
            </div>

            <div className="logicore-intro">
              <h2>
                Gestión logística
                <span> de punta a punta.</span>
              </h2>

              <p>
                Sistema desarrollado para centralizar la planificación,
                asignación de recursos y seguimiento de operaciones de
                transporte.
              </p>

              <div className="logicore-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Prisma</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="logicore-main-shot">
            <div className="logicore-browser">
              <div className="logicore-browser-bar">
                <div className="logicore-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>LogiCore · Gestión de Transporte</p>
              </div>

              <img
                src={logicoreDashboard}
                alt="Dashboard principal de LogiCore"
              />
            </div>
          </div>

          <div className="logicore-capabilities">
            <div>
              <strong>IMPORTACIÓN</strong>
              <span>Datos operativos desde Excel</span>
            </div>

            <div>
              <strong>PREVIAJES</strong>
              <span>Planificación estructurada</span>
            </div>

            <div>
              <strong>ASIGNACIÓN</strong>
              <span>Unidades y personal</span>
            </div>

            <div>
              <strong>VIAJES</strong>
              <span>Seguimiento operativo</span>
            </div>

            <div>
              <strong>FACTURACIÓN</strong>
              <span>Cierre del circuito</span>
            </div>
          </div>

          <div className="logicore-flow">

            <article className="logicore-step">
              <div className="logicore-step-text">
                <p className="logicore-step-number">01 / CARGAS OPERATIVAS</p>

                <h3>
                  La operación
                  <span> entra al sistema.</span>
                </h3>

                <p>
                  La planificación diaria puede importarse desde archivos
                  operativos para transformar la información de origen en
                  cargas estructuradas listas para trabajar.
                </p>

                <div className="logicore-points">
                  <span>Importación desde Excel</span>
                  <span>Normalización de datos</span>
                  <span>Generación de previajes</span>
                </div>
              </div>

              <div className="logicore-shot">
                <img
                  src={logicoreCargas}
                  alt="Importación de cargas operativas en LogiCore"
                />
              </div>
            </article>

            <article className="logicore-step logicore-step-reverse">
              <div className="logicore-step-text">
                <p className="logicore-step-number">02 / PLANIFICACIÓN</p>

                <h3>
                  De la carga
                  <span> al previaje.</span>
                </h3>

                <p>
                  Cada operación concentra la información necesaria para
                  asignar servicio, unidad, personal, zona, hoja de ruta y
                  acompañantes antes de comenzar el viaje.
                </p>

                <div className="logicore-points">
                  <span>Asignación de unidades</span>
                  <span>Choferes y acompañantes</span>
                  <span>Validaciones operativas</span>
                </div>
              </div>

              <div className="logicore-planning-shots">
                <div className="logicore-shot">
                  <img
                    src={logicorePreviajes}
                    alt="Planificación de previajes en LogiCore"
                  />
                </div>

                <div className="logicore-shot logicore-edit-shot">
                  <img
                    src={logicoreEditarPreviaje}
                    alt="Edición de previaje en LogiCore"
                  />
                </div>
              </div>
            </article>

            <article className="logicore-step">
              <div className="logicore-step-text">
                <p className="logicore-step-number">03 / EJECUCIÓN</p>

                <h3>
                  Del previaje
                  <span> al viaje real.</span>
                </h3>

                <p>
                  Una vez confirmada la planificación, la operación continúa
                  dentro del circuito de viajes para su seguimiento, gestión
                  de vueltas y posterior facturación.
                </p>

                <div className="logicore-points">
                  <span>Estados operativos</span>
                  <span>Gestión de vueltas</span>
                  <span>Seguimiento y facturación</span>
                </div>
              </div>

              <div className="logicore-shot">
                <img
                  src={logicoreViajes}
                  alt="Viajes Nacionales en LogiCore"
                />
              </div>
            </article>

          </div>

          <div className="logicore-summary">
            <p>
              <span>Operación + Gestión</span>
              Una arquitectura construida alrededor del flujo real de
              transporte, desde la información de origen hasta la ejecución
              y seguimiento del viaje.
            </p>
          </div>

        </div>
      </section>

            <section className="about-section" id="sobre-mi">
        <div className="about-container">

          <div className="about-heading">
            <p className="about-number">03 / SOBRE MÍ</p>

            <h2>
              Entender el problema
              <span> antes de escribir el código.</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-main">
              <p className="about-lead">
                Soy Romina Massa y desarrollo soluciones digitales orientadas
                a resolver necesidades reales de gestión, operación y análisis.
              </p>

              <p>
                Mi enfoque parte de comprender cómo funciona un proceso,
                detectar dónde aparecen los problemas y transformar esa lógica
                en una herramienta clara, útil y sostenible.
              </p>

              <p>
                Trabajo combinando desarrollo de software, automatización y
                análisis de datos, desde la definición de una necesidad hasta
                la construcción y evolución de la solución.
              </p>
            </div>

            <div className="about-side">

              <div className="about-item">
                <span>01</span>
                <div>
                  <strong>Problema</strong>
                  <p>
                    Analizar la necesidad real antes de definir la solución.
                  </p>
                </div>
              </div>

              <div className="about-item">
                <span>02</span>
                <div>
                  <strong>Proceso</strong>
                  <p>
                    Convertir la operación en reglas, flujos y datos.
                  </p>
                </div>
              </div>

              <div className="about-item">
                <span>03</span>
                <div>
                  <strong>Solución</strong>
                  <p>
                    Construir herramientas pensadas para quienes realmente
                    van a utilizarlas.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="about-focus">
            <p>ÁREAS DE TRABAJO</p>

            <div>
              <span>Desarrollo Web</span>
              <span>Aplicaciones</span>
              <span>Automatización</span>
              <span>Excel</span>
              <span>Análisis de datos</span>
              <span>Sistemas de gestión</span>
            </div>
          </div>

        </div>
      </section>

            <section className="contact-section" id="contacto">
        <div className="contact-container">

          <p className="contact-number">04 / CONTACTO</p>

          <div className="contact-content">
            <div className="contact-heading">
              <h2>
                ¿Tenés un problema que
                <span> necesita una solución?</span>
              </h2>

              <p>
                Podemos conversar sobre tu proyecto, proceso o necesidad
                y evaluar cómo transformarlo en una solución digital.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="contact-card"
                href="https://wa.me/5491138512705"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">WHATSAPP</span>
                <strong>Hablemos por WhatsApp</strong>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                className="contact-card"
                href="mailto:webarte-tech@gmail.com"
              >
                <span className="contact-label">EMAIL</span>
                <strong>webarte-tech@gmail.com</strong>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <div className="contact-brand">
              <span className="contact-brand-mark">W</span>
              <div>
                <strong>WebArte-Tech - since 2013</strong>
                <span>Software · Desarrollo · Automatización</span>
              </div>
            </div>

            <p>Romina Massa · Desarrollo de software</p>
          </div>

        </div>
      </section>

      <div className="floating-actions">
  <a
    className="floating-button floating-top"
    href="#"
    aria-label="Volver al inicio"
    title="Volver al inicio"
  >
    ↑
  </a>

  <a
    className="floating-button floating-whatsapp"
    href="https://wa.me/5491138512705"
    target="_blank"
    rel="noreferrer"
    aria-label="Contactar por WhatsApp"
    title="WhatsApp"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.825 9.825 0 0 1 2.9 6.988c-.003 5.45-4.437 9.884-9.892 9.884"
      />
    </svg>
  </a>
</div>

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
    </div>
  )
}

export default App