import React from "react"
import Layout from "../components/layout"

import styles from "./404.module.css"

export default () => (
  <Layout>
    <h1 className={styles.blended}>
      <span className={styles.teal}>4</span>
      <span className={styles.pink}>0</span>
      <span className={styles.yellow}>4</span>
      <span className={styles.pink}>:</span>
    </h1>
    <div className={styles.error}>
      <h2>NOT FOUND</h2>
      <p>
        Sorry, I don't have anything here for you! Click <a href="/">here</a> to
        return to the main site.
      </p>
    </div>
  </Layout>
)
