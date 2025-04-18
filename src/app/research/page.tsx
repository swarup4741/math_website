import Link from "next/link";
import Latex from "../../Katex";

export default function Page() {
  return (
    <div className="px-1 md:px-6 lg:px-10">
      <p className="subpixel-antialiased mt-5 md:text-lg lg:text-lg mb-5">
        I am currently interested in detection of exotic phenomenon of surfaces
        inside 4-manifolds using different techniques from Khovanov homology and
        Heegard Floer homology.
        <br />
        <br />I am also looking into construction of spanning tree models for
        different link homology, graph homology theories, and their
        applications.
      </p>

      <div>
        <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-5 mt-8">
          Articles (Published/Preprint)
        </h1>
        <ol className="m-3 md:text-lg lg:text-lg list-decimal">
          <li className="mb-5">
            <h2 className="subpixel-antialiased font-semibold md:text-lg lg:text-lg">
              A spanning tree model for Khovanov homology, Rasmussen&apos;s
              s-invariant and exotic discs in the 4-ball
            </h2>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">
              with Aninda Banerjee and Apratim Chakraborty
            </p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base">
              <em>Preprint</em> (2025) --{" "}
              <Link
                href="https://arxiv.org/abs/2504.02625"
                className="text-blue-500"
                target="_blank"
              >
                (arxiv)
              </Link>
            </p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">
              The checkerboard coloring of knot diagrams offers a
              graph-theoretical approach to address topological questions.
              Champanerkar and Kofman defined a complex generated by the
              spanning trees of a graph obtained from the checkerboard coloring
              whose homology is the reduced Khovanov homology. Notably, the
              differential in their chain complex was not explicitly defined. We
              explicitly define the combinatorial form of the differential
              within the spanning tree complex. We additionally provide a
              description of Rasmussen&apos;s <Latex text={"$s-$invariant"} /> within
              the context of the spanning tree complex. Applying our techniques,
              we identify a new infinite family of knots where each of them
              bounds a set of exotic discs within the <Latex text={"$4-$"}/>ball.
            </p>
          </li>
          <li className="mb-5">
            <h2 className="subpixel-antialiased font-semibold md:text-lg lg:text-lg">
              A spanning tree model for chromatic homology
            </h2>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">
              with Aninda Banerjee, Apratim Chakraborty, and Pravakar Paul
            </p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base">
              <em>Preprint</em> (2025) --{" "}
              <Link
                href="https://arxiv.org/abs/2504.00834"
                className="text-blue-500"
                target="_blank"
              >
                (arxiv)
              </Link>
            </p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">
              After the discovery of Khovanov homology, which categorifies the
              Jones polynomial, an analogous categorification of the chromatic
              polynomial, known as chromatic homology, was introduced. Its
              graded Euler characteristic recovers the chromatic polynomial. In
              this paper, we present a spanning tree model for the chromatic
              complex, i.e., we describe a chain complex generated by certain
              spanning trees of the graph that is chain homotopy equivalent to
              the chromatic complex. We employ the spanning tree model over{" "}
              <Latex
                text={"$\\mathcal{A}_m = \\mathbb{Z}[X]/\\langle X^m \\rangle$"}
              />{" "}
              algebra to answer two open questions. First, we establish the
              conjecture posed by Sazdanovic and Scofield regarding the
              homological span of chromatic homology over <Latex text={"$\\mathcal{A}_m$"}/> algebra,
              demonstrating that for any graph <Latex text={'$G$'}/> with <Latex text={'$v$'}/> vertices and <Latex text={'$b$'}/> blocks,
              the homological span is <Latex text={'$v-b$'}/>. Additionally, we prove a conjecture
              of Helme-Guizon, Przytycki, and Rong concerning the existence of
              torsion of order dividing <Latex text={'$m$'}/> in chromatic homology over <Latex text={"$\\mathcal{A}_m$"}/> algebra.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
