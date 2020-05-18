import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'

test('display movie information on website', () => {
    const wrapper = shallow(<App />)
    const movieId = 1 
    const movieTitle = "Gaurdians of the Galaxy Vol. 2"    
    
    wrapper.instance().getMovies()
        
    wrapper.update()
    expect(wrapper.state().movieId).toEqual(1)
    expect(wrapper.state().movieTitle).toEqual("Gaurdians of the Galaxy Vol. 2")
    }
)
