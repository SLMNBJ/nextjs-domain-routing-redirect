import { useRouter } from "next/router";

export default function Blog() {
    const { locale } = useRouter();
    return (
        <div>
            <h2>Current locale: {locale}</h2>
            <h1>
                Blog
            </h1>
        </div>
    );
  }
  