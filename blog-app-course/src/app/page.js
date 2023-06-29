import Posts from "./components/posts";

export default function Home() {


  return (
   <main>
    
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between"></div>
    <h1 className='text-3xl font-bold'>
      My posts
    </h1>

    <Posts />
  </div>
   </main>
  )
}
