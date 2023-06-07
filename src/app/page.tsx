import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <ul style={{ color: "white" }}>
          <li>Home</li>
          <li>Service</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles["content"]}>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <Image width={310} height={122} alt="logo" src="/logoNCC 1.png" />
          </div>
          <div
            style={{
              width: "1510px",
              backgroundColor: "#ddd",
              padding: "38px",
              textAlign: "center",
              // border: "2px solid pink",
            }}
          >
            <h3 style={{ marginBottom: "18px" }}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p style={{ maxWidth: "972px", margin: "0 auto" }}>
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
                    <div></div>
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
        <div
          style={{
            height: "79px",
            borderTop: "1px solid #ddd",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginLeft: "129px" }}>Copyright © 2021</p>
        </div>
      </div>
    </main>
  );
}
