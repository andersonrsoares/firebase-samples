import fetch from 'isomorphic-fetch'

export default function getFacts(){
    return fetch('https://testefirebase-6bded.firebaseio.com/bancos.json')
    .then(res => res.json());
}