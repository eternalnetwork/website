import Hero from '~/components/Hero'
import styles from '~/lib/styles'

export let metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <main className="">
      <Hero />
    </main>
  )
}
