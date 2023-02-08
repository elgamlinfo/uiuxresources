/** @format */

import Image from "next/image";
import Link from "next/link";
import styles from "./InnerPageCard.module.scss";


import {
  DownloadIcon,
  HeartIcon,
  GreenHeartIcon,
  EyeIcon,
  LinkIcon,
  LovelyIcon,
} from "@/components/global/Svgs";

const InnerPageCard = ({ innerPage, handleLike, handleView }) => {
  
  return (
    <div className={styles["innerPageCard"]}>
      <header style={{ background: innerPage?.color }}>
        {innerPage?.star && (
          <span className={styles["Suggestions"]}>
            <LovelyIcon />
          </span>
        )}
        {innerPage?.link && (
          <a onClick={() => handleView(innerPage?.id)} href={innerPage?.link}   target="_blank" className={styles["link"]}>
            <LinkIcon />
          </a>
        )}
        <Image
          src={innerPage.image}
          alt="resource image"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          blurDataURL={innerPage.image}
          placeholder="blur"
          sizes="100vm"
        />
      </header>
      <main>
        <ul>
          {innerPage?.categories?.map((category, i) => (
            <li key={i}>
              <Link href={`${category.name}`}>#{category.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles["text"]}>
          <h4>{innerPage.title}</h4>
          <p>{innerPage.description}</p>
        </div>
        <div className={styles["tag_container"]}>
          {innerPage?.tag && (
            <p className={styles["tag"]}>#{innerPage?.tag?.title}</p>
          )}
        </div>
      </main>
      <footer>
        <ul>
          <li onClick={() => handleView(innerPage?.id)}>
            <EyeIcon />
            <p>{innerPage.viwers}</p>
          </li>
          <li onClick={() => handleLike(innerPage?.id)}>
            {innerPage.ip ? <GreenHeartIcon /> : <HeartIcon />}
            <p>{innerPage.likes}</p>
          </li>
          {
            <li className={innerPage.file ? "" : styles["disabled"]}>
              <a href={innerPage.file} target="_blank">
                <DownloadIcon />
                <p>Download</p>
              </a>
            </li>
          }
        </ul>
      </footer>
    </div>
  );
};

export default InnerPageCard;
