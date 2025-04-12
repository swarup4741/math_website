import Link from "next/link";

export default function Activities() {
  return (
    <div className="px-1 md:px-6 lg:px-10">
      <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-5 mt-8">
        Conferences/Seminars
      </h1>
      <ul className="list-decimal m-3 md:text-lg lg:text-lg">
        <li className="mb-5">
          Invited talk -{" "}
          <strong>
            A spanning tree model for Khovanov homology using algebraic Morse
            theory and its applications
          </strong>
          .{" "}
          <Link
            className="text-blue-500"
            href="http://comet.lehman.cuny.edu/behrstock/seminar/"
            target="_blank"
          >
            CUNY Geometry and Topology Seminar 2025
          </Link>
        </li>
        <li className="mb-5">
          Contributory talk -{" "}
          <strong>Khovanov homology and exotic discs</strong>.{" "}
          <Link
            className="text-blue-500"
            href="https://rms2024.christuniversity.in/"
            target="_blank"
          >
            RMS 2024
          </Link>
        </li>
        <li className="mb-5">
          Lightning talk -{" "}
          <strong>
            Spanning tree, Khovanov homology and exotic discs in 4-ball.
          </strong>{" "}
          <Link
            className="text-blue-500"
            href="https://sites.google.com/view/tw2024"
            target="_blank"
          >
            Trisectors pre-workshop 2024: Connections with Knotted Surfaces
          </Link>
          .
        </li>
        <li className="mb-5">
          <Link
            className="text-blue-500"
            href="https://math.iiserkol.ac.in/attachments/general/poster-btc-2024.pdf"
            target="_blank"
          >
            Bengal Topology Circle Meeting 2024
          </Link>
        </li>
        <li className="mb-5">
          <Link
            href="https://sites.google.com/view/ldtopology"
            target="=_blank"
            className="text-blue-500"
          >
            Low-Dimensional Topology 2023
          </Link>{" "}
          at IISER Pune (in collaboration with Max Planck Society and TIFR
          Mumbai, with the support of NBHM)
        </li>
        <li className="mb-5">
          <Link
            href="https://www.ncngt.org/"
            target="=_blank"
            className="text-blue-500"
          >
            The Nearly Carbon Neutral Geometric Topology Conference 2023
          </Link>
        </li>
      </ul>
    </div>
  );
}
