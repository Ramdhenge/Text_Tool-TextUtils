import React, { useState } from 'react'
import { sentenceCase } from 'sentence-case'

export default function TextBox(props) {

    const [text, setText] = useState('')
    const [msg, setMsg] = useState('')
    const [msgst, setMsgst] = useState()


    const handleUpper = () => {
        let newText = text.toUpperCase()
        setMsg('Converted to Upper Case !')
        setMsgst('visible')
        setTimeout(() => {
            setMsgst('hidden')
        }, 1500)
        setText(newText)
    }

    const handleLower = () => {
        let newText = text.toLowerCase()
        setMsg('Converted to Lower Case !')
        setMsgst('visible')
        setTimeout(() => {
            setMsgst('hidden')
        }, 1500)
        setText(newText)
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        setMsg('Copied to Clipboard !')
        setMsgst('visible')
        setTimeout(() => {
            setMsgst('hidden')
        }, 1500)
    }

    const handleSentenceCase = () =>{

        let stcase = text.split('.')
        for(var i=0; i<stcase.length; i++){
            stcase[i] = sentenceCase(stcase[i])
        }
        setText(stcase.join('. '));
        setMsg('Converted to Sentence Case !')
        setMsgst('visible')
        setTimeout(() => {
            setMsgst('hidden')
        }, 1500) 
    } 

    const handleOnChange = (e) => {
        setText(e.target.value)
        if (e.target.value === " ") {
            setText('')
        }
    }

    const clearText = () => {
        setText('')
    }

    return (
        <div>
            <div>
                <div className="container" style={props.style}>
                    <div className="elements">
                        <div className="msg" style={{ visibility: `${msgst}` }}>{msg}</div>
                        <h1>Text Box</h1>
                        <div className="buttons">
                            <button disabled={text.length===0} id='btns' className='btns' style={props.fbtn} onClick={handleUpper}>Upper Case</button>
                            <button disabled={text.length===0} className='btns' style={props.fbtn} onClick={handleLower}>Lower Case</button>
                            <button disabled={text.length===0} className='btns' style={props.fbtn} onClick={handleSentenceCase}>Sentence Case</button>
                            <button disabled={text.length===0} className='btns' style={props.fbtn} onClick={handleCopyText}>Copy Text</button>
                        </div>
                        <textarea name="textbox" value={text} onChange={handleOnChange} placeholder='Text here' className='textbox' style={props.style} id="textbox" cols="70" rows="10"></textarea>
                        <button className='clr-btn' onClick={clearText}>Clear</button>
                        <div className="lenth">
                            <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Words and {text.length} Charactors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
