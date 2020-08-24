import React from 'react';

class AlbomList extends React.Component {
    state = {
        albums: null,
        user: null
    }

    async getAlbums() {
        const response = await fetch(
            'http://jsonplaceholder.typicode.com/albums', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
          });
          const albums = await response.json();
      
          this.setState({ albums: albums });
    }

    async getUsers() {
        const response = await fetch(
            'http://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
          });

          const users = await response.json();

          this.setState({ users: users });
    }

     componentDidMount() {
        this.getAlbums();
        this.getUsers();
      }

      compare(albumId) {
          const user = this.state.users.find((user) => user.id === albumId).name;
          return user;
      }

       

    render() {
        return (
            <>
            {this.state.albums && (
                <div>
                  {this.state.albums.map((album) => (
                    <div key={album.id}><h1>Title: {album.title}</h1><p>User: {this.state.users && this.compare(album.userId)}</p></div>))}
                </div>)
              }
              </>
        )
    }
    
}

export default AlbomList


