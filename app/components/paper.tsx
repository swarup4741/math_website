import Link from "next/link"
export default function Paper({title, authors, abstract, year, link, note}){
 return (
    <article className="paper">
        <h2 className="paper-title">
            <Link href={link} target="_blank">{title}</Link>
        </h2>
        <p className="paper-meta">with {authors} ({year})</p>
        <p className="paper-abstract">{abstract}</p>
        <p className="paper-note">{note}</p>
    </article>
 )
}