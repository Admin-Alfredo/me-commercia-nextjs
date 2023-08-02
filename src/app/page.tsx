import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>LOJA COMERCIA </h1>
      <p>Compra em casa e receba em alguns minutos</p>
      <Link href="/admin">Administrador</Link>
    </div>
  )
}
