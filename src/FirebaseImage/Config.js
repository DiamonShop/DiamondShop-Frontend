import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC5TPj84uqPImSKiUeIlKLrLwPg3m_TbZc",
  authDomain: "diamondstore-image.firebaseapp.com",
  projectId: "diamondstore-image",
  storageBucket: "diamondstore-image.appspot.com",
  messagingSenderId: "1079091432357",
  appId: "1:1079091432357:web:f2bd03aec9535f09cab64c"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)