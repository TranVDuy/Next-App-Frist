async function getPosts(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
    if(!res.ok) {
      throw new Error('Fail to fetch data');
    }
  
    return res.json();
  }

export default async function AboutDetail({
    params: {id}
} : {
    params: {id: string}
}) {

    const user = await getPosts(id);

    return (
        <div>
            <h1>{id}</h1>
            <p>{user?.name || ""}</p>
            <p>{user?.email || ""}</p>
        </div>
    );
};