import { shallow } from 'enzyme'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { MOVIE_SEARCH_REQUESTED, MOVIE_SEARCH_SUCCESSFUL } from '../src/actions'
import MovieActions from '../src/actions/movieActions'
import sinon from 'sinon'
import MovieRepo from '../src/repositories/movieRepo'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('MovieActions', () => {
    beforeEach(() => {
        sinon.stub(MovieRepo, 'searchMovies').withArgs('test').returns(new Promise((resolve, reject) => {
            resolve({ data: [{ id: 1 }] })
        }))
    })
    afterEach(() => {
        MovieRepo.searchMovies.restore()
    })

    it('should search for a movie', () => {
        const expectedActions = [
            { type: MOVIE_SEARCH_REQUESTED },
            { type: MOVIE_SEARCH_SUCCESSFUL, payload: [{ id: 1 }] }
        ]
        const store = mockStore({movies: []})
        return store.dispatch(MovieActions.searchMovies('test'))
            .then(()=> {
                expect(store.getActions()).to.deep.equal(expectedActions)
            })
    })
})