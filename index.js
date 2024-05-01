
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-6">Welcome to the Poem Generator!</h1>
      <div>
        <h2 className="text-xl my-4">Select an occasion:</h2>
        <ul>
          <li className="my-2"><Link href="/birthday"><a className="text-blue-500">Birthday</a></Link></li>
          <li className="my-2"><Link href="/graduation"><a className="text-blue-500">Graduation</a></Link></li>
          <li className="my-2"><Link href="/anniversary"><a className="text-blue-500">Anniversary</a></Link></li>
        </ul>
      </div>
    </div>
  )
}
