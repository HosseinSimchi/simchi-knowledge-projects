import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "Software Development",
    Svg: require("@site/static/img/design-systems-svgrepo-com.svg").default,
    description: (
      <>
        Documenting what we learn across software development, from frontend and
        backend to DevOps and CI/CD, along with programming concepts, tools,
        best practices, and practical solutions.
      </>
    ),
  },
  {
    title: "Artificial Intelligence",
    Svg: require("@site/static/img/chip-intelligence-processor-svgrepo-com.svg")
      .default,
    description: (
      <>
        Documenting what we learn and build across artificial intelligence and
        research, including Agentic AI, machine learning, computer vision,
        Kaggle projects, experiments, research projects, and practical AI
        applications.
      </>
    ),
  },
  {
    title: "Research",
    Svg: require("@site/static/img/computer-svgrepo-com.svg").default,
    description: (
      <>
        {" "}
        Exploring research-oriented problems in AI and software development,
        turning technical knowledge and experiments into practical solutions and
        documented insights.{" "}
      </>
    ),
  },
];
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {" "}
      <div className="text--center">
        {" "}
        <Svg className={styles.featureSvg} role="img" />{" "}
      </div>{" "}
      <div className="text--center padding-horiz--md">
        {" "}
        <Heading as="h3">{title}</Heading> <p>{description}</p>{" "}
      </div>{" "}
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {" "}
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
