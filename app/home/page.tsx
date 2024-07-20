import Card from "./_components/ScheduleCard/Card"

const Home = () => {
  return (
    <section className="mt-12">
      <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">Agendamentos do dia</h2>
      <div className="mt-5 pb-5 w-full h-[670px] bg-transparent grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-2 gap-x-28 md:gap-y-5 overflow-y-auto snap-y scroll-smooth">
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default Home