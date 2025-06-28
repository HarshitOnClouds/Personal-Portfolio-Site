
import Intropart from './Intropart'
import Content from './Content'

export default function App(){

  return(
      <div className="main bg-neutral-800 m-0 p-3 md:flex min-h-screen min-w-full">
         <Intropart/>
         <Content/>
      </div>
  )
}