import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-10 py-5">
      <h1 className="subpixel-antialiased text-3xl font-bold md:text-4xl lg:text-5xl mb-10 mt-10">Swarup Kumar Das</h1>
      <p className="text-lg">I am a Ph.D. student at the <Link className="text-blue-500" href="https://www.tcgcrest.org/researches/translational-research-in-mathematics-trim/" target="_blank">TRIM (Translation Research in Mathematics)</Link> vertical of <Link className="text-blue-500" href="https://www.tcgcrest.org/institutes/iai/" target="_blank">Institute for Advancing Intelligence, TCG CREST</Link>. I am currently pursuing my research in the area of low-dimensional topology under the supervision of <Link href="https://www.tcgcrest.org/people/apratim-chakraborty/" target="_blank" className="text-blue-500">Dr. Apratim Chakraborty</Link>. My research interest lies within the study of invariants like Khovanov homology, Heegard Floer homology and other invariants coming from these theories to study knots/links, 3-manifolds, 4-manifolds and interactions between them.</p>

      <Image className="mt-20 mb-10" src="/profile.jpg" alt="Profile picture" width="300" height="300"/>
      <div className="mt-20 mb-10">
      The icon of the rotating trefoil is due to - 
      <Link className="text-blue-500" href="https://commons.wikimedia.org/wiki/File:Trefoil_Knot.gif">Philip Rideout</Link>,
      <Link className="text-blue-500" href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0 </Link>, via Wikimedia Commons
      </div>
    </div>
  );
}
