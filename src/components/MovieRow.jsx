import React from 'react'
import Movie from './Movie'

const MovieRow = () => {

    let movie1 = {
        heading: "movie1 rr",
        image :"https://images.template.net/wp-content/uploads/2018/11/Film-Poster-Template.jpg"
    }

  return (
    <div>
        {/* title */}
        <div className='text-white text-3xl font-bold'>Category Name</div>

        {/* card */}
        <div className='flex gap-2 py-5'>
        <Movie data={movie1} />
        
        </div>
    </div>
  )
}

export default MovieRow