import { Suspense } from "react";
import styles from "../../styles/home.module.css";
import styleA from "../../styles/about.module.css";
import Link from "next/link";

async function getPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if(!res.ok) {
    throw new Error('Fail to fetch data');
  }

  return res.json();
}

export default async function AboutPage() {

  const data = await getPost();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {(data || []).map((item: any) => (
          <Link href={'/about/' + item?.id} key={item?.userId}>
            <div className={styleA.single}><h3>{item.title || ""}</h3></div>
          </Link>
        ))}
      </Suspense>
    </div>
  )
};