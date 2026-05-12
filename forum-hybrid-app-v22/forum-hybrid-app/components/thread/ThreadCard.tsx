type Props = {
  title: string
  content: string
}

export default function ThreadCard({
  title,
  content
}: Props) {
  return (
    <div className="border border-zinc-700 rounded-xl p-5 hover:bg-zinc-900 transition">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-zinc-400 mt-2">
        {content}
      </p>
    </div>
  )
}
