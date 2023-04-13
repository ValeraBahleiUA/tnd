import Head from 'next/head'
import TextField from '@/components/textField'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import generator from '@/logic_lib/generator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [word, setWord] = useState("candy");
const [altword,setAltword] = useState("");
const [adj, setAdj] = useState("");
const [aadj, setAadj] = useState("");
const [text, setText] = useState(generator(word,altword,adj,aadj))
const [wasInFocus, setWasInFocus] = useState(0);
const [intervalId, setIntervalId] = useState(null);
const [menuHidden, setMenu] = useState(true);

const handleWordChange =(e)=>{
  setWord(e.target.value);
};
const handleFieldFocus = (e)=>{
  setWasInFocus(1);
  clearInterval(intervalId);
  setWord("");
  console.log("focused" + wasInFocus);
};

useEffect(()=>{
  const field = document.getElementById("wordField");
  field.style.width = word.length + 1 + 'ch';
  setText(generator(word,altword,adj,aadj))
},[word, altword, adj, aadj])

//run once at launch
useEffect(()=>{
  const demoWords = ["candy   ", "bicycle", "keyboard", "mountain", "pineapple", "introvert", "extrovert", "optimist", "pessimist", "rebel", "intellectual", "empath", "narcissist", "romantic", "realist", "idealist", "ambitious", "adventurer", "perfectionist", "minimalist", "traditionalist", "liberal", "conservative", "spiritual", "skeptic              "];
  const demoString = demoWords.join("               ");
  let index = 0;
  let stringToSet = "";
const id = setInterval(() => {
    if (!(index<demoString.length)) {
      index = 0;
    }else if(demoString.charAt(index) === " "){
      stringToSet = "";
      index++;
    }else{
      stringToSet = stringToSet + demoString.charAt(index);
      setWord(stringToSet);
      index++;
    }
}, 200);
setIntervalId(id);
return()=>clearInterval(id);
},[])


  return (
  <>
    <Head>
      <title>total nigger generator</title>
    </Head>
    <div className="text-center text-3xl mt-5 mb-10">
      Total
      <input id='wordField' value={word} autoFocus={false} onChange={handleWordChange} onFocus={handleFieldFocus} className="border font-mono border-fuchsia-50 w-100 text-center"/>
      Generator
    </div>
    <div className="max-w-xlg bg-teal-100">
   <TextField text={text}/>
    </div>
    <div className="text-center">
    <span onClick={()=>{console.log("setting to " + !menuHidden); setMenu(!menuHidden)}} className={`${menuHidden ? 'rotate-90' : '-rotate-90'} text-9xl text-gray inline-block max-w-full mx-auto text-center text-gray-500 transform transition duration-500 cursor-pointer`}>{'>'}</span>
    </div>
    <div className={`bg-amber-200 mt-8 flex flex-wrap justify-around py-3 overflow-hidden transition-all duration-500 ${menuHidden ? 'max-h-0 hidden' : 'max-h-full'}`}>
      <div className='' id='forms'>
        <div className="mt-2"><p>Alternative noun</p><input value={altword} onChange={(e)=>{setAltword(e.target.value)}} className="border " /></div>
        <div className="mt-2"><p>Adjective</p><input value={adj} onChange={(e)=>{setAdj(e.target.value)}} className="border " /></div>
        <div className="mt-2"><p>Alternative adjective</p><input value={aadj} onChange={(e)=>{setAadj(e.target.value)}} className="border " /></div>
      </div>
      <div id='options'>
        <Link href="/wip" className="block mt-2">work in progress</Link>
        <Link href="/wip" className="block mt-2">work in progress</Link>
        <Link href="/wip" className="block mt-2">work in progress</Link>
      </div>
    </div>
  </>
  )
}