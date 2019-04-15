import React, { Component } from 'react';
import './App.css';




class App extends Component {

  state = {
    name: '',
    poster: '',
    comment: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
   }

   submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
    
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

     fetch(url, config) 
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Votre film a bien été ajouté avec l'ID ${res}!`);
        }
      })
      
      .catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout du film');
      });
   }

   
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <p>
            Poste ton film
          </p>

        </header>
        <div className="FormFilm">
          <h1>Vote pour ton film préféré!</h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Informations sur le film</legend>
              <div className="form-data">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="form-data">
                <label htmlFor="poster">Poster</label>
                <input
                  type="text"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div className="form-data">
                <label htmlFor="comment">Comment</label>
                <input
                  type="comment"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
                </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
              </fieldset>
            </form>
          </div>
        </div>
    );
  }
}

export default App;
