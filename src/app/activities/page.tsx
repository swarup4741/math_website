import Image from "next/image";
import Link from 'next/link'

export default function Activities() {
  return (
    <div className="px-10">
      <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-10 mt-10">Conferences/Seminars</h1>
      <ul className="list-decimal">
        <li className="mb-5">
          Contributory talk - <strong>Khovanov homology and exotic discs</strong>. <Link className="text-blue-500" href="https://rms2024.christuniversity.in/" target="_blank">RMS 2024</Link> (Upcoming)
        </li>
        <li className="mb-5">
          Lightning talk - <strong>Spanning tree, Khovanov homology and exotic discs in 4-ball.</strong> <Link className="text-blue-500" href="https://sites.google.com/view/tw2024" target="_blank">Trisectors pre-workshop 2024: Connections with Knotted Surfaces</Link>. 
        </li>
        <li className="mb-5">
         <Link className="text-blue-500" href="https://math.iiserkol.ac.in/attachments/general/poster-btc-2024.pdf" target="_blank">Bengal Topology Circle Meeting 2024</Link>
        </li>
        <li className="mb-5">
         <Link href="https://sites.google.com/view/ldtopology" target="=_blank" className="text-blue-500">Low-Dimensional Topology 2023</Link> at IISER Pune (in collaboration with Max Planck Society and TIFR Mumbai, with the support of NBHM)
        </li>
      </ul>
    </div>
  );
}