"use client"
import Blogframe from "@components/blogframe";

export default function Writings() {

  const list = [
    {title: 'Holomorphic triangles and invariants for smooth four-manifolds',
     description: 'In earlier articles, the authors introduced invariants for closed, oriented three-manifolds, defined using a variant of Lagrangian Floer homology in the symmetric products of Riemann surfaces. The aim of this article is to introduce invariants of oriented, smooth four-manifolds, built using these Floer homology groups.',
     date: '12/02/2025',
     link: 'holomorphic_triangles' 
    },
    {title: 'Khovanov homology, open books, and tight contact structures',
      description: 'We define the reduced Khovanov homology of an open book (S,h), and we identify a distinguished "contact element" in this group which may be used to establish the tightness or non-fillability of contact structures compatible with (S,h). Our construction generalizes the relationship between the reduced Khovanov homology of a link and the Heegaard Floer homology of its branched double cover. ',
      date: '12/02/2025',
      link: 'khovanov_openbook' 
     }
  ]



  return (
    <div className="px-1 md:px-6 lg:px-10">
       <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-10 mt-10">Writings</h1>
       {list.map((obj) => 
         <div className="mb-6 p-2 border-2 rounded-md">
         <h2 className="font-bold md:text-xl lg:text-2xl m-2">{obj.title}</h2>
         <p className="m-2">{obj.description} <strong className="text-blue-500 cursor-pointer">Read more...</strong></p>
         <p className="m-2 text-gray-400">{obj.date}</p>
         </div>)}
    </div>
  );
}