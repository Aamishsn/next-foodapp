import classes from "./page.module.css";
import Link from "next/link";
import ImageSlideshow from "../components/SlideShow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
        <ImageSlideshow/>
        </div>

        <div>
          <div className={classes.hero}>
            <h1>next level food for next level Foodies</h1>
            <p>Taste and Share food from all around the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
    </>
  );
}
