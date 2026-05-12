import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Forum Hybrid
        </h1>

        <Link
          href="/forum"
          className="bg-blue-600 px-5 py-3 rounded-xl"
        >
          Open Forum
        </Link>
      </div>
    </main>
  )
}
