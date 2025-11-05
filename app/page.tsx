import Image from "next/image"
import Link from "next/link"
import Profile from './public/profile.jpg'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Swarup Kumar Das
      </h1>
      <div className="mb-4">
        <Image
         src={Profile}
         alt="Profile picture"
         height={300}
         width={200}
         priority
        />
      </div>
      <p className="mb-4">
            I am a Ph.D. student at the{" "}
            <Link
              className="text-blue-400"
              href="https://www.tcgcrest.org/researches/translational-research-in-mathematics-trim/"
              target="_blank"
            >
              TRIM (Translation Research in Mathematics)
            </Link>{" "}
            vertical of{" "}
            <Link
              className="text-blue-400"
              href="https://www.tcgcrest.org/institutes/iai/"
              target="_blank"
            >
              Institute for Advancing Intelligence, TCG CREST.
            </Link>
            </p>
            <p className="mb-4">
            I am currently pursuing my research in low-dimensional
            topology under the supervision of{" "}
            <Link
              href="https://www.tcgcrest.org/people/apratim-chakraborty/"
              target="_blank"
              className="text-blue-400"
            >
              Dr. Apratim Chakraborty
            </Link>
            .
          </p>

      <div className="my-4">
        <p>Here is my <Link className="text-blue-400" href="https://drive.google.com/file/d/11gIEuFuVakPBRA_rA9YkmPv8RcEY5IbQ/view?usp=sharing" target="_blank">CV</Link></p>
      </div>
    </section>
  )
}
