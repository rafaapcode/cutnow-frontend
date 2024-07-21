import RequestCard from "./_components/RequestCard"

const page = () => {
  return (
    <section className="w-full mt-12">
      <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">Solicitações de Agendamento</h2>
      <div className="mt-5 pb-10 w-full h-[670px] bg-transparent grid grid-cols-1 xl:place-items-start xl:grid-cols-3 gap-x-12 md:gap-y-28 xl:gap-y-16 overflow-y-auto snap-y scroll-smooth">
        <RequestCard />
      </div>
    </section>
  )
}

export default page