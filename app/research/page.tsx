import Paper from "app/components/paper";

export default function Research(){

    const paper_list = [
        {
            title: "A spanning tree model for chromatic homology",
            authors: "Aninda Banerjee, Apratim Chakraborty and Pravakar Paul",
            year: "2025 (submitted)",
            link: "https://arxiv.org/abs/2504.00834"  
        },
        {
        title: "A spanning tree model for Khovanov homology, Rasmussen's s-invariant and exotic discs in the 4-ball",
        authors: "Aninda Banerjee and Apratim Chakraborty",
        year: "2025",
        link: "https://arxiv.org/abs/2504.02625"
        }

]

    return(
        <section>
            <p className="mb-6">
                I am interested in different objects like knots/links, 3-manifolds, 4-manifolds and graphs. Moreover, I like to study these objects using invariants such as Khovanov homology, Heegard Floer homology and Chromatic homology. Currenly, I am interested in their spanning tree models and exploring questions which can be answered using these models.  
            </p>  
            <h1 className="mb-6 text-xl font-semibold tracking-tighter">Preprints</h1>
            <div className="mb-8 mx-2">
                <ol className="list-decimal">
                  {paper_list.map((paper,id) => <li className="mb-4" key={id}>
                    <Paper 
                    title={paper.title}
                    authors={paper.authors}
                    year={paper.year}
                    link={paper.link}/>
                  </li>)}
                </ol>
            </div>
        </section>
    )
}