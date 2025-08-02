import Blog1 from './assets/freedom.webp'
import { useState } from 'react';

export default function Content(){

const [tab, setTab] = useState('About')

function Nav(props){
    return(
        <div className={`px-2 py-2 rounded-3xl text-xl text-amber-950 cursor-pointer active:scale-90 active:opacity-70 transition transform `} onClick={()=>{setTab(props.item) }}>
            {props.item}
        </div>
    )
}
function Skill(props){
    return(
        <div className="bg-neutral-900 p-10 w-70 my-5 rounded-2xl flex flex-col items-center md:m-3">
            <div className="text-yellow-300 text-2xl">{props.head}</div>
            <div className="text-white text-center text-xl" >{props.content}</div>
        </div>
    )
}
function Project(props){
    return(
        <div className="bg-neutral-900 p-10 w-70 my-5 rounded-2xl flex flex-col items-center md:m-3">
            <a className='flex flex-col items-center' href={props.link} rel='noopener noreferrer' target='_blank'>
                <div><img src={props.imgname} /></div>
                <div className="text-yellow-300 text-2xl my-2 cursor-pointer ">{props.head}</div>
                <div className="text-white text-center text-xl" >{props.content}</div>
            </a>
        </div>
    )
}
function Blog(props){
    return(
        <div className="bg-neutral-900 p-10 w-70 my-5 rounded-2xl flex flex-col items-center md:m-3">
            <a className='flex flex-col items-center' href={props.link} rel='noopener noreferrer' target='_blank'>
                <div><img src={props.imgname} /></div>
                <div className=''>
                    <div className='text-blue-400 mr-5  py-1  font-extrabold rounded-2xl'>{props.topic}</div>
                    <div className='text-blue-400 mr-5  py-1  font-extrabold rounded-2xl'>{props.date}</div>
                </div>
                <div className="text-yellow-300 text-2xl my-2 cursor-pointer ">{props.head}</div>
                <div className="text-white text-center text-xl" >{props.content}</div>
            </a>
        </div>
    )
}


    return(
        <div className="bg-neutral-900 rounded-2xl p-2 md:w-4/5">
            <div className="choose flex bg-yellow-300  rounded-2xl px-3 py-2 mb-4 justify-around items-center  ">
                <Nav item='About'/>
                <Nav item='Portfolio'/>
                <Nav item='Blogs'/>
                <Nav item='Contact'/>
            </div>

            <div className={`AboutSection bg-neutral-800 rounded-xl
                            overflow-hidden transition-all duration-500 transition-discrete
                            ${tab==="About" ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <h1 className="text-white px-5 py-2 text-4xl" >About Me</h1>
                <hr className="ml-10 w-20 text-yellow-300 mb-5" />
                <div className="text-white ml-5 mb-5 text-base">
                  Harshit is 18 year old web developer, who has 2 alter egos, one where he is an Enterepreneur who just likes to build things, scale them and make use of whatever is best of his knowledge, and other where he is a student who keeps on learning something everyday, he faces issues, overcomes them, gets stressed again, gets in drama social sitautions and everything which happens in a student's life. Harshit never gives up and knows that it is all part of the plot, harshit lives his life for the plot, he loves gto lore drop so if you ever talk to him for more than 2 minutes 37 seconds, be ready cause he might drop a lore. harshit's life is filled with stories, he has stories for everything and when i say everything I mean it. Harshit loves web dev because its gives creative freedom and control over something, he likes a lot of mroe things but unfortunately he can't pursue everything at once.</div>
                <div className="flex flex-col items-center">
                <h2 className="ml-5 text-white text-4xl self-start my-3">What Do I Do</h2>
                <div className='md:flex'>

                 <Skill head='Web Development' content='I create sites not just according to what you ask for but better.'/>
                 <Skill head='Philosophize' content='I can dissect anything enough to call it deep and romanticize it.' />
                 <Skill head='Talk' content='Part time therapist, rate depends on who you are.'/>
                </div>
                </div>
            </div>

                             <br />

            <div className={`PortfolioSection bg-neutral-800 rounded-xl
                            overflow-hidden transition-all duration-500 transition-discrete
                            ${tab==="Portfolio" ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}
                `}> 
                <h1 className="text-white px-5 py-2 text-4xl" >Portfolio</h1>
                <hr className="ml-10 w-20 text-yellow-300 mb-5" />
                <div className='flex flex-col items-center md:flex-row '>
                <Project imgname='project1.png' link='https://her-pov-harshitonclouds-projects.vercel.app/' head='Her Pov' content='A simulator to show her pov of your pathetic text' />
                <Project imgname='project2.png' link='https://secret-conversation.vercel.app/' head='Secret Conversation' content='Msg encryptor and decryptor with key' />
                <Project imgname='project3.png' link='https://anshuman-birthday.vercel.app/' head='Birthday' content='Me wishing my friend happy birthday using reactbits.dev' />
                <Project imgname='project4.png' link='https://campus-sphere-sigma.vercel.app/' head='CampusSphere' content='A Map focused informative and fun app' />
                </div>
            </div>

                    <br />

            <div className={`BlogsSection bg-neutral-800 rounded-xl
                            overflow-hidden transition-all duration-500 transition-discrete
                            ${tab==="Blogs" ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}
                `}> 
                <h1 className="text-white px-5 py-2 text-4xl" >Blog</h1>
                <hr className="ml-10 w-20 text-yellow-300 mb-5" />  
                <div className='flex flex-col items-center md:flex-row'>
                    <Blog imgname={Blog1} topic='Life is great and fuck it' date='29 June, 2025'  link='https://her-pov-harshitonclouds-projects.vercel.app/' head='Freedom' content='Are we really free, or just slaves to destiny' />
                    <Blog imgname={Blog1} topic='Life is great and fuck it' date='29 June, 2025'  link='https://her-pov-harshitonclouds-projects.vercel.app/' head='Freedom' content='Are we really free, or just slaves to destiny' />
                    <Blog imgname={Blog1} topic='Life is great and fuck it' date='29 June, 2025'  link='https://her-pov-harshitonclouds-projects.vercel.app/' head='Freedom' content='Are we really free, or just slaves to destiny' />
                </div>         
            </div>

                    <br />

            <div className={`ContactSection bg-neutral-800 rounded-xl
                            overflow-hidden transition-all duration-500 transition-discrete
                            ${tab==="Contact" ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}
                `}> 
                <h1 className="text-white px-5 py-2 text-4xl" >Contact Me</h1>
                <hr className="ml-10 w-20 text-yellow-300 mb-5" />  
                <div className='flex flex-col items-center md:flex-row md: justify-around'>
                    <iframe className='w-80 h-50 rounded-4xl mb-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885744.3431293546!2d77.33020886562498!3d29.86603759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xa9d19b15af050467!2sIndian%20Institute%20Of%20Technology%20Roorkee!5e0!3m2!1sen!2sin!4v1751138704121!5m2!1sen!2sin" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <form className='flex flex-col items-center' action="https://formspree.io/f/xdkzjkln" method='post' >
                        <input className='text-white bg-slate-700 px-3 py-2 rounded-2xl w-60' type="text" name='Name' placeholder='Your Name'/>
                        <input className='text-white bg-slate-700 px-3 py-2 rounded-2xl my-4 w-60' type="email" name='Email' placeholder='Your Email'/>
                        <textarea className='text-white bg-slate-700 px-3 py-2 rounded-2xl w-60 h-80 resize-none' name="Message" placeholder='Your Message'></textarea>
                        <input className='my-4 text-white bg-blue-500 w-40 rounded-2xl ' type="submit" />
                    </form>
                </div>
                         
            </div>
            
        </div>
    )
}