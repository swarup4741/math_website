import Link from "next/link";

export default function Page() {
    return (
      <div className="px-1 md:px-6 lg:px-10">
       <p className="subpixel-antialiased mt-5 md:text-lg lg:text-lg mb-5">I am currently interested in detection of exotic phenomenon of surfaces inside 4-manifolds using different techniques coming from Khovanov homology and Heegard Floer homology.
        <br/>
        <br/>
        I am also looking into construction of spanning tree models for different link homology, graph homology theories, and their applications.
        </p>

        <div>
        <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-10 mt-10">Articles (Published/Preprint)</h1>
        <ol className="m-3 md:text-lg lg:text-lg list-decimal">
          <li className="mb-5">
            <h2 className="subpixel-antialiased font-semibold md:text-lg lg:text-lg">A spanning tree model for Khovanov homology, Rasmussen&apos;s s-invariant and exotic discs in the 4-ball</h2>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">with Aninda Banerjee and Apratim Chakraborty</p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base"><em>Preprint</em> (2025) -- <Link href="https://arxiv.org/abs/2504.02625" className="text-blue-500" target="_blank">(arxiv)</Link></p>
          </li>
          <li className="mb-5">
            <h2 className="subpixel-antialiased font-semibold md:text-lg lg:text-lg">A spanning tree model for chromatic homology</h2>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base mb-2">with Aninda Banerjee, Apratim Chakraborty, and Pravakar Paul</p>
            <p className="subpixel-antialiased mt-2 text-sm lg:text-base"><em>Preprint</em> (2025) -- <Link href="https://arxiv.org/abs/2504.00834" className="text-blue-500" target="_blank">(arxiv)</Link></p>
          </li>
        </ol>
        </div>
      </div>
    );
  }