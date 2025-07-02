import { Link } from 'react-router-dom'
import pfp from './assets/pfp.jpg'
import { useState } from 'react'

function Info(props){
  return(
    <div className='info flex items-center '>
        <div className='text-amber-300 bg-slate-900 p-1 rounded-xl mr-3'>{props.svg}</div>
        <div>
          <div className='text-zinc-400' >{props.ask}</div>
          <div className='text-white' >{props.ans}</div>
        </div>
    </div>
  )
}

function Intropart(){

  const [showmore, setShowmore] = useState(false)

    return(
        <div className=' bg-neutral-900 rounded-4xl p-1 m-1 md:w-1/5'>
         <div className="flex md:flex-col  justify-around items-center px-3 py-2">
            <div className="pfp bg-zinc-500 p-2 w-30 rounded-3xl">
              <img className="w-30 rounded-2xl" src={pfp}/>
              <img className="w-30 rounded-2xl" src={pfp}/>
            </div>
            <div className='details'>
              <div className='text-2xl text-white mb-2'>Harshit Gupta</div>
              <div className='text-sm text-white bg-zinc-500 rounded-2xl px-2 py-1 flex justify-center'>Web Developer</div>
              <div className='text-yellow-300 mt-2 ml-8 cursor-pointer active:scale-90 active:opacity-70 transition transform' onClick={()=>setShowmore(!showmore)}>
                {showmore ? 'see less' : 'see more'} 
              </div>
            </div>
          </div>
            <div className={`moreinfo overflow-hidden transition-all duration-500 ease-in 
                            ${showmore ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                          `}>
              <hr className='my-2'/>
             <Info ask='Email' ans='harshitonclouds@gmail.com' svg={<svg className='w-7 h-7 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>} />

              <Info ask='Phone' ans='X80061XXXX' svg={<svg className='w-7 h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>} />
              <Info ask='Birthday' ans='October, 200X' svg={<svg className='w-7 h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 3V6M17 3V6M7.10002 20C7.56329 17.7178 9.58104 16 12 16C14.419 16 16.4367 17.7178 16.9 20M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21ZM14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>} />
              <Info ask='Location' ans='Noida' svg={<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                                    className='w-7 h-7' viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                                    <path fill="currentColor" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
                                                    	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
                                                    	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" stroke='currentColor'/>
                                                    </svg>}/>
              <hr className='my-2'/>
            </div>
           
          </div>
        
    )
}

export default Intropart