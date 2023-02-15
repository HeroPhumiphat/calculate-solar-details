import React from 'react'
import '../App.css'

export default function Calculate() {
    const form = React.useRef()
    let [rail, setRail] = React.useState(0)
    let [endclamp, setEndclamp] = React.useState(0)
    let [midclamp, setMitclamp] = React.useState(0)
    let [lfeed, setLfeed] = React.useState(0)

    const calculate = (event) => {
        event.preventDefault()
        let solarAll= +form.current.total.value
        let rows = +form.current.rows.value
        let solarWidth = +form.current.width.value

        let endclamp = rows * 4
        let mod = solarAll % rows
        let midclamp = ((Math.floor(solarAll / rows) - 1) * 2 * rows) + (mod < 2 ? 0 : (mod - 1) * 2)
        let rail = Math.ceil(((solarWidth * solarAll) / 440) * 2)
        let lfeed = rail * 4
        
        setRail(rail)
        setEndclamp(endclamp)         
        setMitclamp(midclamp)
        setLfeed(lfeed)
    }
    
    return (
        <div className='xl w-full h-full flex justify-center' style={{
            border: '1px solid #c0c0c0',
            borderRadius: 20,
            boxShadow: '2px 2px 10px #c0c0c0'
        }}>
            <div className='w-10/12 my-32 rounded-xl flex flex-wrap justify-center'>
                <div className='flex flex-col w-full mb-14' style={{alignItems: 'center'}}>
                    <h1 className='text-2xl mb-5'>คำนวณอุปกรณ์ติดตั้ง โซลาร์เซลล์</h1>
                    <form className='w-48' ref={form} onSubmit={calculate}>
                        <label className="block w-full mb-5">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                จำนวนแผงโซลาร์เซลล์ทั้งหมด
                            </span>
                            <input type="number" name="total" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" style={{boxShadow: '2px 2px 5px #c0c0c0'}} placeholder="0" min='0' required/>
                        </label>
                        <label className="block w-full mb-5">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                จำนวนแถว
                            </span>
                            <input type="number" name="rows" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" style={{boxShadow: '2px 2px 5px #c0c0c0'}} placeholder="0" max='10' min='1' defaultValue='1' required/>
                        </label>
                        <label className="block w-full mb-5">
                            <span className=" block text-sm font-medium text-slate-700">
                                ความกว้างของแผงโซลาร์เซลล์
                            </span>
                            <input type="number" name="width" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" style={{boxShadow: '2px 2px 5px #c0c0c0'}} defaultValue='113' min='0' max='500' required />
                        </label>
                        <button className='w-48 h-12 bg-sky-500 rounded-lg text-white text-lg my-5 hover:bg-sky-400'>คำนวณ</button>
                    </form>
                </div>
                <div className='w-full flex flex-wrap justify-center'>
                    <div className='card-result'>
                        Endclamp: 
                        <h3 className='absolute bottom-5 right-5 text-4xl text-sky-600'>{endclamp} ตัว.</h3>
                    </div>
                    <div className='card-result'>
                        Midclamp: 
                        <h3 className='absolute bottom-5 right-5 text-4xl text-sky-600'>{midclamp} ตัว.</h3>
                    </div>
                    <div className='card-result'>
                        L-Feed: 
                        <h3 className='absolute bottom-5 right-5 text-4xl text-sky-600'>{lfeed} ตัว.</h3>
                    </div>
                    <div className='card-result'>
                        รางยึดแผง (default 440cm): 
                        <h3 className='absolute bottom-5 right-5 text-4xl text-sky-600'>{rail} เส้น.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}