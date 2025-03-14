import mapa from "../images/sistemaGestion/mapa.webp";
import tabla from "../images/sistemaGestion/tabla.webp";
import modal from "../images/sistemaGestion/modal.webp";
import moviles from "../images/sistemaGestion/moviles.webp";

function SistemaGestionDoc() {
  return (
    <div className="container py-4">
      <h1>🚖 Sistema de Gestión para Empresa de Taxis</h1>
      <p>
        Este sistema está diseñado para permitir a una empresa de taxis gestionar de manera eficiente las operaciones diarias, 
        incluyendo la asignación de viajes a los conductores, el seguimiento de las rutas y la comunicación en tiempo real 
        entre los administradores y los choferes.
      </p>
      <p>
        Los administradores pueden supervisar el estado de los viajes, asignar viajes a choferes y obtener estadísticas en tiempo real. 
        Los choferes cuentan con una aplicación para recibir viajes y comunicarse directamente con la administración.
      </p>

      <hr />

      <h2>🌟 Características principales</h2>
      <ul>
        <li>🧑‍💼 <b>Panel de administración:</b> Los administradores pueden asignar viajes, ver el estado de los choferes y gestionar los viajes en curso.</li>
        <li>🔄 <b>Comunicación en tiempo real:</b> Implementada con <b>Socket.io</b>.</li>
        <li>📊 <b>Gestión de viajes:</b> Registro de viajes con detalles de choferes y estado.</li>
        <li>⏱️ <b>Actualización en tiempo real:</b> Modificaciones reflejadas instantáneamente en administradores y choferes.</li>
        <li>📲 <b>Aplicación para choferes:</b> Permite recibir viajes en tiempo real. <a href="/proyectos/app_chofer">Ver aplicación</a>.</li>
      </ul>

      <hr />

      <h2>🛠️ Tecnologías utilizadas</h2>
      <ul>
        <li>⚛️ <b>React:</b> Frontend del administrador.</li>
        <li>🎛️ <b>Redux Toolkit:</b> Gestión del estado.</li>
        <li>🚀 <b>Node.js y Express.js:</b> Backend y API.</li>
        <li>🔒 <b>JWT:</b> Autenticación segura.</li>
        <li>📡 <b>Socket.io:</b> Comunicación en tiempo real.</li>
        <li>🗄️ <b>MySQL:</b> Base de datos.</li>
      </ul>

      <hr />

      <h2>📌 Registro de viajes pendientes</h2>
      <p>Los administradores pueden gestionar los viajes en espera, ingresar importes y asignar móviles.</p>
      <img src={tabla} alt="Tabla de viajes pendientes" className="img-fluid rounded shadow" />

      <hr />

      <h2>🚩 Mapa con la ubicación de los choferes</h2>
      <p>
        Los administradores pueden modificar la ubicación de los móviles arrastrando el marcador en el mapa. 
        Los cambios se reflejan en tiempo real en la aplicación del chofer.
      </p>
      <img src={mapa} alt="Mapa del sistema de gestión" className="img-fluid rounded shadow" />

      <hr />

      <h2>🚗 Estado del móvil activo</h2>
      <p>Se puede seleccionar un móvil y asignarle un viaje o completar información relevante.</p>
      <img src={modal} alt="Modal del estado del móvil" className="img-fluid rounded shadow" />

      <hr />

      <h2>🚘 Sección móviles</h2>
      <p>Administradores pueden activar/desactivar móviles y generar reportes en PDF.</p>
      <img src={moviles} alt="Sección móviles" className="img-fluid rounded shadow" />

      <hr />

      <h2>🔹 Otras secciones</h2>
      <ul>
        <li>📜 <b>Liquidación de viajes:</b> Registro de pagos a choferes.</li>
        <li>📂 <b>Historial de liquidaciones:</b> Acceso a registros de pagos anteriores.</li>
        <li>📆 <b>Reservas semanales:</b> Administración de reservas anticipadas.</li>
        <li>👥 <b>Gestión de clientes y choferes.</b></li>
      </ul>

      <p>
        Aunque el sistema aún requiere optimizaciones, se ha diseñado con las mejores prácticas para garantizar 
        escalabilidad y facilidad de mantenimiento.
      </p>

      <hr />

      <div className="text-center mt-4">
        <a href="https://agencia-2024-cliente.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Ver Proyecto</button>
        </a>
      </div>
    </div>
  );
}

export default SistemaGestionDoc;
