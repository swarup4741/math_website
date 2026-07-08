import Link from "next/link"
export default function Paper({title, authors, abstract, year, link, note}){
 return (
    <div>
        <h2 className="mb-1 font-semibold tracking-tighter underline">
            <Link href={link} className="text-blue-600 dark:text-blue-400" target="_blank">{title}</Link>
        </h2>
        <p className="mb-2">with {authors} ({year})</p>
        <p className="text-gray-700 dark:text-gray-300 mb-1">{abstract}</p>
        <p className="text-gray-700 dark:text-gray-300">{note}</p>
    </div>
 )
}