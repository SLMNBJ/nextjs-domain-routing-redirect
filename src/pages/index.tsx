import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  return (
    <div>
      <h2>Current locale: {locale}</h2>
      <br />
      <h3><Link href="http://localhost:3000/fr/will-be-removed/blog" locale={'fr'}>Next Link: go to FR blog</Link></h3>
      <h3><a href="http://localhost:3000/fr/will-be-removed/blog">Native tag: go to FR blog</a></h3>
    </div>
  );
}
