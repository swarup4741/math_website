import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <section className="home-page">
      <div className="profile-copy">
        <header className="profile-header">
          <h1 className="page-title">Swarup Kumar Das</h1>
        </header>
        <div className="intro-copy">
          <p>
            I am a Ph.D. student at the{" "}
            <Link
              href="https://www.tcgcrest.org/researches/translational-research-in-mathematics-trim/"
              target="_blank"
            >
              TRIM (Translation Research in Mathematics)
            </Link>{" "}
            vertical of{" "}
            <Link
              href="https://www.tcgcrest.org/institutes/iai/"
              target="_blank"
            >
              Institute for Advancing Intelligence, TCG CREST.
            </Link>
          </p>
          <p>
            I am currently pursuing my research in low-dimensional
            topology under the supervision of{" "}
            <Link
              href="https://www.tcgcrest.org/people/apratim-chakraborty/"
              target="_blank"
            >
              Dr. Apratim Chakraborty
            </Link>
            .
          </p>
          <p className="cv-line">
            Here is my <Link href="https://drive.google.com/file/d/19Yv6ErDTNxy2VQkngVMHHphuyEMme0cG/view?usp=sharing" target="_blank">CV</Link>
          </p>
        </div>
      </div>
      <Image
        className="profile-portrait"
        src="/profile.jpg"
        alt="Profile picture"
        height={587}
        width={534}
        sizes="(max-width: 600px) calc(100vw - 48px), 210px"
        priority
        unoptimized
      />
    </section>
  )
}
