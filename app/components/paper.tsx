import Link from "next/link"
export default function Paper({title, authors, year, link}){
 return (
    <div>
        <h2 className="mb-3 font-semibold tracking-tighter">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">with {authors}</p>
        <p>{year} -- <Link href={link} className="text-blue-400" target="_blank">arXiv</Link></p>
    </div>
 )
}