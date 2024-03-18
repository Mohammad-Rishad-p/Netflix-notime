import React from 'react'
import Movie from './Movie'

const MovieRow = () => {

    let movieData = [
      {
        heading: "movie1 rr",
        image :"https://images.template.net/wp-content/uploads/2018/11/Film-Poster-Template.jpg"
    },
    {
      heading: "movie2",
      image :"https://images.template.net/wp-content/uploads/2018/11/Film-Poster-Template.jpg"
  },
  {
    heading: "movie3",
    image :"https://images.template.net/wp-content/uploads/2018/11/Film-Poster-Template.jpg"
},
  ]

  return (
    <div>
        {/* title */}
        <div className='text-white text-3xl font-bold'>Category Name</div>

        {/* card */}
        <div className='flex gap-2 py-5'>
        {
          movieData.map((item) => (
            <Movie data={item} />
          ))
        }
        
        </div>
    </div>
  )
}

export default MovieRow