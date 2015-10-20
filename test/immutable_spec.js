// jshint module: true

import {
  expect
}
from 'chai';
import {
  List, Map
}
from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addMovie(currentState, movie) {
      return currentState.update(
        'movies', movies => movies.push(movie)
      );
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('M1', 'M2')
      });
      let nextState = addMovie(state, 'm3');

      expect(nextState).to.equal(
        Map({
          movies: List.of('M1', 'M2', 'm3')
        })
      );
      expect(state).to.equal(
        Map({
          movies: List.of('M1', 'M2')
        })
      );
    });

  });

});