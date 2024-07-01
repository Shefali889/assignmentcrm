import React from 'react'
import NoteIcon from './icons/NoteIcon.png'
import NoteUserIcon from './icons/NoteUserIcon.png'
import NoteTimeIcon from './icons/NoteTime.png'
import './NoteCard.css'

const NoteCard = () => {
    return (
        <div className='note'>
            <div className='noter1'>
                <div className='notegroup'>
                    <img src={NoteIcon} />
                    <p className='notet1'>Note</p>
                </div>
                <p className='notet12'>To Do</p>
            </div>
            <p className='notet2'>
                Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.
            </p>
            <p className='notet4'>1 Association(s)</p>
            <div className='noter2'>
                <div className='notegroup'>
                    <img src={NoteUserIcon} />
                    <p className='notet3'>John Doe</p>
                </div>

                <div className='notegroup'>
                    <img src={NoteTimeIcon} />
                    <p className='notet3'>John Doe</p>
                </div>
            </div>
        </div>
    )
}

export default NoteCard