import About from '~/components/Home/About'
import Hero from '~/components/Home/Hero'
import Roadmap from '~/components/Home/Roadmap'
import Chains from '~/components/Home/Chains'

export let metadata = {
  title: "Home | Eternal"
}

export default function Home() {
  return (
    <main className="no-scrollbar overflow-y-auto">
      <Hero />
      {/* <About /> */}
      <Chains />
      {/* <Roadmap /> */}
    </main>
  )
}
