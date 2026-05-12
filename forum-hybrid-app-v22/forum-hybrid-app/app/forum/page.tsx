import { prisma } from '@/lib/prisma'

export default async function ForumPage() {
  const threads = await prisma.thread.findMany({
    include: {
      author: true,
      category: true
    }
  })

  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">
        Latest Threads
      </h1>

      <div className="space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="border border-zinc-700 rounded-xl p-5"
          >
            <h2 className="text-2xl font-semibold">
              {thread.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {thread.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
