import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-1 md:10px md:py-5">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:align-middle">
      <div className="lg:mr-10">
      <h1 className="subpixel-antialiased text-3xl md:text-4xl lg:text-5xl mb-10 mt-5">Swarup Kumar Das</h1>
      <p className="subpixel-antialiased md:text-lg lg:text-lg mb-5">I am a Ph.D. student at the <Link className="text-blue-500" href="https://www.tcgcrest.org/researches/translational-research-in-mathematics-trim/" target="_blank">TRIM (Translation Research in Mathematics)</Link> vertical of <Link className="text-blue-500" href="https://www.tcgcrest.org/institutes/iai/" target="_blank">Institute for Advancing Intelligence, TCG CREST</Link>. I am currently pursuing my research in the area of low-dimensional topology under the supervision of <Link href="https://www.tcgcrest.org/people/apratim-chakraborty/" target="_blank" className="text-blue-500">Dr. Apratim Chakraborty</Link>.</p>
      <p className="subpixel-antialiased md:text-lg lg:text-lg mb-5">My research interest lies within the study of invariants like Khovanov homology, Heegard Floer homology and other invariants coming from these theories to study knots/links, 3-manifolds, 4-manifolds and interactions between them.</p>
      <p className="subpixel-antialiased md:text-lg lg:text-lg">I completed my Masters in Mathematics from <Link className="text-blue-500" href="https://maths.rkmvu.ac.in/" target="_blank">Ramakrishna Mission Vivekananda Educational Research Institute</Link> (2022) and did my Bacherlors in Mathematics from <Link className="text-blue-500" href="https://jadavpuruniversity.in/academics/mathematics/" target="_blank">Jadavpur University</Link> (2020)</p>
      </div>

      <Image className="mt-10 mb-10" src="/profile.jpg" alt="Profile picture" width="300" height="300"/>
      </div>
      <div className="mt-20 mb-10 text-xs md:text-sm">
      The icon of the rotating trefoil is due to - 
      <Link className="text-blue-500" href="https://commons.wikimedia.org/wiki/File:Trefoil_Knot.gif">Philip Rideout</Link>,
      <Link className="text-blue-500" href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0 </Link>, via Wikimedia Commons
      </div>
    </div>
  );
}
