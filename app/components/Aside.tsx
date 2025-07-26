import Link from "next/link";
import "../styles/aside/aside.css";

export default function Aside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">Notificações Push</Link>
          </li>
          <li>
            <Link href="/">Registrar Usuario</Link>
          </li>
          <li>
            <Link href="/">Administrar Usuarios</Link>
          </li>
          <li>
            <Link href="/">Configurações</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
