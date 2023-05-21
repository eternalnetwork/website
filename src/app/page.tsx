import About from '~/components/Home/About'
import Hero from '~/components/Home/Hero'
import Roadmap from '~/components/Home/Roadmap'
import styles from '~/lib/styles'

export let metadata = {
  title: "Home | Eternal"
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Roadmap />
    </main>
  )
}
