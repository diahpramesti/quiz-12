import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'


export default function Home() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
  })

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map(comments => (
              <tr key={comments.id}>
                <td>{comments.postId}</td>
                <td>{comments.id}</td>
                <td>{comments.name}</td>
                <td>{comments.email}</td>
                <td>{comments.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
