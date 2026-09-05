import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Developer Knowledge Hub
        </Heading>

        <p className={styles.heroSubtitle}>Learn. Document. Build Faster.</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/knowledge/software-development/javascript"
          >
            Explore Knowledge
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Developer Knowledge Hub"
      description="A personal knowledge base of programming tutorials, code snippets, concepts, and practical solutions — built to help developers learn, document, and build faster."
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
