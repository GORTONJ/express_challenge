import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'

test('display movie information on website to browse movies', () => {
    let wrapper
    const movieData =
    [
       {
        movieId: 1,
        movieTitle: "Gaurdians of the Galaxy Vol. 2"
       } ,
       {
        movieId: 2,
        movieTitle: "Star Wars: Episode IV - A New Hope"   
       }
    ]
   
    global.fetch = jest.fn()  
    
    wrapper = shallow(<App />)
    
    wrapper.instance().getMovies(movieData)
        
    wrapper.update()
    expect(wrapper.state().movies[0].movieId).toEqual(1)
    expect(wrapper.state().movies[0].movieTitle).toEqual("Gaurdians of the Galaxy Vol. 2")

    expect(wrapper.state().movies[1].movieId).toEqual(2)
    expect(wrapper.state().movies[1].movieTitle).toEqual("Star Wars: Episode IV - A New Hope")
    }
)

test('display specific movie data when movie icon is clicked',() => {
    let wrapper = shallow(<App />)
    const movieInfo = [
        {
            "imdbRating": "8.6",
            "imdbVotes": "1,104,701",
            "runtime": "121 min",
            "language": "English",
            "rated": "PG",
            "production": "20th Century Fox",
            "released": "21 Sep 2004",
            "imdbid": "tt0076759",
            "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            "director": "George Lucas"
        }
    ]

    wrapper.update()
    
    getDetails(movieId)

    expect(wrapper.state().movies[1].movieTitle).toEqual("Star Wars: Episode IV - A New Hope")
    expect(wrapper.state().movies[1].movieRelease).toEqual("21 Sep 2004")
    expect(wrapper.state().movies[1].moviePlot).toEqual("Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.")
    

    expect(wrapper.state().movies[0].movieId).toEqual(1)


})
