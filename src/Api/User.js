import axios from 'axios';

export async function getUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  export async function deleteUser(id) {
      const response = await axios.delete('https://jsonplaceholder.typicode.com/users'+id);
      return response;
    
  }


  