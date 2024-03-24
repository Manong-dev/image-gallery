import Gallery from "./components/Gallery";
import GalleryProps from "./components/GalleryProps";

// Galllery
import img_1 from "./assets/summer-palace.jpg";
import img_2 from "./assets/shanghai-city.jpg";
import img_3 from "./assets/warriors.jpg";
import img_4 from "./assets/greatwall-china.jpg";

const IMAGES_GALLERY = [
  { url1: img_1, alt1: "Summer Palace" },
  { url2: img_2, alt2: "Shanghai" },
  { url3: img_3, alt3: "Terracotta warriors"},
  { url4: img_4, alt4: "Chinese Greatwall"}
];

const App = () => {
  const cardTitle1 = "Summer Palace"
  const CardSubtitle1 = "Summer Palace"
  const page1 = "/"

  const cardTitle2 = "Shanghai"
  const CardSubtitle2 = "Shanghai"
  const page2 = "/"

  const cardTitle3 = "Warriors"
  const CardSubtitle3 = "Warriors"
  const page3 = "/" 


  const cardTitle4 = "Greatwall"
  const CardSubtitle4 = "Greatwall"
  const page4 = "/"


  return (
    <div>
      <Gallery />
      <GalleryProps images={IMAGES_GALLERY} page1={page1} title1={cardTitle1} subtitle1={CardSubtitle1} page2={page2} title2={cardTitle2} subtitle2={CardSubtitle2} page3={page3} title3={cardTitle3} subtitle3={CardSubtitle3} page4={page4} title4={cardTitle4} subtitle4={CardSubtitle4} />
     
    </div>
  );
}

export default App;
