import Footer from "./Footer"
import { people, whoWeAre }  from "../constants/index.ts";

export default function Team() {
  return (
    <section>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-sky-400 sm:text-4xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            {whoWeAre.description}
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <a href={person.url} target="_blank" rel="noopener noreferrer"> 
                    <img alt={person.alt} src={person.imageUrl} 
                    className={`size-16 rounded-full
                      ${person.smallImage ? 'w-70 h-40 md:mt-[-25px] md:ml-0 ml-[-15px]' : 'w-30 h-30'}`} />
                  </a>
                  <div className={`${person.smallImage ? 'md:ml-0 ml-[-40px]' : ''}`}>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <a href={person.url} target="_blank" rel="noopener noreferrer"><p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p></a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  )
}
