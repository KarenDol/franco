type Props = { text: string }

export default function ServiceDescription({ text }: Props) {
  return (
    <section className="bg-background px-4 py-8 lg:py-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg leading-relaxed text-foreground md:text-xl lg:text-2xl text-balance">
          {text}
        </p>
      </div>
    </section>
  )
}