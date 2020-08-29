import React from 'react';
import Loader from '../../Loader';

async function getFilms() {
    const response = await fetch("/films");
    const films = await response.json();

    return films;
  }

  async function addFilm(filmToAdd) {
      const response = await fetch('/films', 
      {
        method: "POST", 
        body: JSON.stringify(filmToAdd),
        headers: {
            "content-type": "application/json",
        },
    });
        const addedFilm = await response.json();

        return addedFilm;
  }

  async function editFilm(filmId, fieldsToChange) {
    const response = await fetch(`/films/${filmId}`, 
    {
      method: "PATCH", 
      body: JSON.stringify(fieldsToChange),
      headers: {
          "content-type": "application/json",
      },
    });

   const updatedFilm = await response.json();

   return updatedFilm;    
  }

  async function deleteFilm(filmId) {
    await fetch(`/films/${filmId}`, {method: "DELETE"});
  }

  const FilmPageMode = {
      ADD: 'films_add',
      EDIT: 'films_edit',
      LIST: 'films_list'
  }

  class FilmsForm extends React.Component {
      state = {
        filmName: this.props.film?.filmName || "",
        producerName: this.props.film?.producerName || "",
        issueYear: this.props.film?.issueYear || "",
        rate: this.props.film?.rate || "",
        status: this.props.film?.status || ""
      }

      render() {
          return (
              <form onSubmit={(e) => {
                  e.preventDefault();
              }}
              >
                <label>Film Name:</label>
                <input 
                    type="text" 
                    value={this.state.filmName} 
                    onChange={(e) => this.setState({filmName: e.target.value})}>
                </input>
                <label>Year of Issue:</label>
                <input 
                    type="text" 
                    value={this.state.issueYear} 
                    onChange={(e) => this.setState({issueYear: e.target.value})}>
                </input>
                <label>Name of Producer:</label>
                <input 
                    type="text" 
                    value={this.state.producerName} 
                    onChange={(e) => this.setState({producerName: e.target.value})}>
                </input>
                <label>Film Rate:</label>
                <input 
                    type="text" 
                    value={this.state.rate} 
                    onChange={(e) => this.setState({rate: e.target.value})}>
                </input>
                <label>Seen or not seen:</label>
                <input 
                    type="text" 
                    value={this.state.status} 
                    onChange={(e) => this.setState({status: e.target.value})}>
                </input>
                  <button onClick={() => this.props.onSave(this.state)}>ADD</button>
                  <button onClick={() => this.props.onCancel()}>Cancel</button>
              </form>
          )
      }
  }

class FilmsPage extends React.Component {
    state = {
        isLoading: true,
        error: null,
        films: null,
        producerName: null,
        issueYear: null,
        rate: null,
        status: null,

        mode: FilmPageMode.LIST,
        selectedFilmId: null,
    };

    makeRequest = async (requestFunction) => {
        this.setState({isLoading: true});

        try{
            await requestFunction();
        } catch (error) {
            this.setState(() => ({error}))
        } finally {
            this.setState(() => ({isLoading: false}));
        }
    }

    componentDidMount() {
        this.makeRequest( async () => {
            const films = await getFilms()
            this.setState(() => ({films}))
        });
    }

    render() {
        if (this.state.isLoading) {
            return <Loader />;
        }

        if (this.state.error) {
            return 'Sorry, something go wrong :(';
        }

        if (this.state.mode === FilmPageMode.ADD) {
            return <FilmsForm 
                onSave={filmToAdd => {
                    this.setState({mode: FilmPageMode.LIST})
                    this.makeRequest(async () => {
                        const addedFilm = await addFilm(filmToAdd)
                        this.setState(({films}) => ({films: [...films, addedFilm]}))
                    })
                }}
                onCancel={() => this.setState({mode: FilmPageMode.LIST})}
            />
        } else if (this.state.mode === FilmPageMode.EDIT) {
            return (<FilmsForm 
                film={this.state.films.find(film => film.id === this.state.selectedFilmId)}
                onSave={filmFields => {
                    this.setState({mode: FilmPageMode.LIST})

                    this.makeRequest(async () => {
                        const updatedFilm = await editFilm(this.state.selectedFilmId, filmFields)
                        const filmIndex = this.state.films.findIndex(film => film.id === this.state.selectedFilmId)
                        this.setState(({films}) => ({films: [...films.slice(0, filmIndex), updatedFilm, ...films.slice(filmIndex + 1)],
                        selectedFilmId: null,
                        }))
                    })
                }}
                onCancel={() => this.setState({mode: FilmPageMode.LIST})}
            />
            )
        }

    return (
        <>
          <button onClick={() => this.setState({mode: FilmPageMode.ADD})}>Add FIlm</button>
            <table>
                <thead>
                    <tr>
                        <th>Film name</th>
                        <th>Year of issue</th>
                        <th>Producer</th>
                        <th>Rate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.films.map((film) => (
                        <tr key={film.id}>
                            <td>{film.filmName}</td>
                            <td style={{textAlign: "center"}}>{film.issueYear}</td>
                            <td>{film.producerName}</td>
                            <td style={{textAlign: "center"}}>{film.rate}</td>
                            <td>{film.status}</td>
                                <td>
                                    <button onClick={() => {
                                        this.makeRequest(async () => {
                                            await deleteFilm(film.id)
                                            this.setState(({films}) => 
                                            ({films: films.filter(a => a.id !== film.id)}))
                                        });
                                    }}
                                    >Delete
                                    </button>
                                </td> 
                            <td>
                                <button 
                                    onClick={() => 
                                        this.setState({
                                            mode: FilmPageMode.EDIT,
                                            selectedFilmId: film.id,
                                        })
                                    }>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        )
    }

}

export default FilmsPage