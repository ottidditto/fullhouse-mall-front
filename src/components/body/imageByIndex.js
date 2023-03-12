import image1 from '../../images/slide-1.jpg';
import image2 from '../../images/slide-2.jpg';
import image3 from '../../images/slide-3.jpg';
import image4 from '../../images/slide-4.jpg';

// export const images = [image1, image2, image3, image4]

export const images = [
    "https://source.unsplash.com/featured/?interior,livingroom", 
    "https://source.unsplash.com/featured/?interior,bedroom", 
    "https://source.unsplash.com/featured/?bathroom", 
    "https://source.unsplash.com/featured/?light",
    "https://source.unsplash.com/featured/?interior"]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
