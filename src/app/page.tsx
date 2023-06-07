"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <main className={styles.main}>
      <div className={`${styles.nav}`}>
        <ul style={{ color: "white" }}>
          <li>Home</li>
          <li>Service</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={`${styles.nav_mobile} ${openNav && styles.hidden}`}>
        <ul style={{ color: "white" }}>
          <li>Home</li>
          <li>Service</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className={styles["btn-open-nav"]}
        onClick={() => setOpenNav((b) => !b)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className={styles["content"]}>
        <div className={styles["content-container"]}>
          <div className={styles.logo}>
            <Image width={310} height={122} alt="logo" src="/logoNCC 1.png" />
          </div>
          <div className={styles["container_text"]}>
            <h3 style={{ marginBottom: "18px" }}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, eligendi ad commodi sed cum ipsam natus unde
              consequatur ipsum, ab numquam nisi id deserunt eveniet voluptas
              non possimus tempora corrupti. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Id pariatur sit est earum harum
              deleniti voluptatibus impedit ullam! Autem nihil distinctio
              explicabo repellendus, unde pariatur at officia soluta eos
              consectetur?
            </p>
          </div>
          <div className={styles.content_3}>
            {["/css-icon 1.png", "/html-icon 1.png", "/url-icon 1.png"].map(
              (el, index) => {
                return (
                  <div key={index}>
                    <h3 style={{ marginBottom: "18px" }}>
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <p>
                      <Image
                        width={128}
                        height={128}
                        src={el}
                        alt="css"
                        style={{ float: "left" }}
                      />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem eius consectetur molestias dolores quisquam debitis
                      dolorum laborum vel neque autem nam, ipsum perspiciatis
                      dolor iusto ad distinctio maiores adipisci iste. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Velit
                      eius architecto eum deserunt, culpa error tenetur quis
                      reprehenderit assumenda, sit, ea nemo. Adipisci beatae
                      consequuntur magnam quo architecto, illum ad! architecto,
                      illum ad!
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <p style={{ marginLeft: "129px" }}>Copyright © 2021</p>
        </div>
      </div>
    </main>
  );
}
