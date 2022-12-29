import React, { useState } from 'react'
import { IconSearch } from '../elements/index'


export function SearchForm({searchTerm}:{searchTerm?: string | number | '';}){

    const [searchInput, setsearchInput] = useState(searchTerm)

    return(
      <form action="/search" className='w-1/2'>
        <div className='relative'>
          <input
            className='px-2 p-2 bg-white rounded-full w-full text-center'
            type="search"
            placeholder="SØG"
            value={searchInput}
            onChange={(e)=> setsearchInput(e.target.value)}
            name="q"
          />
          <button type='submit' className='absolute right-[15px] bottom-2'>
            <IconSearch  width={23} height={23}/>
          </button>
        </div>
      </form>
    )
  }

