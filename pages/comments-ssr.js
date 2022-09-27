export default function Comments(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>POST ID</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.comments?.map(comments => (
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
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json();

    return {
        props: {comments}
    }
}