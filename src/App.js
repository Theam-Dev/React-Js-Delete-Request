import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePost extends React.Component {
  
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  deleteRow(id, e){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        alert("row deleted !!")
  
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
  
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">React Axios Post Request</a>
          </div>
        </nav>
        <div className="container">
        <table className="table table-bordered">
            <thead>
              <tr>
                  <th>ID</th>
                  <th>UserId</th>
                  <th>Title</th>
                  <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {this.state.posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
  
        </table>
        </div>
      </div>
    );
  }
}
export default CreatePost;