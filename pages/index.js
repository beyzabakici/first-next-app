import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}
