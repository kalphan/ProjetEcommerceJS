import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({


	apiKey: "AIzaSyDxRtcl6J000lWnAJKKOdru4IEQUwTrHJg",
	authDomain: "empanera-c0239.firebaseapp.com",
	projectId: "empanera-c0239",
	storageBucket: "empanera-c0239.appspot.com",
	messagingSenderId: "497643509351",
	appId: "1:497643509351:web:17c307b7c2ced71edca6c2",
	measurementId: "G-K3JWELW071"

	// apiKey: "AIzaSyDgIERwemhE52sGF2vL_n37rcDI3O2-IkI",
    // authDomain: "auth-react-cours.firebaseapp.com",
    // projectId: "auth-react-cours",
    // storageBucket: "auth-react-cours.appspot.com",
    // messagingSenderId: "257365078403",
    // appId: "1:257365078403:web:e7ebe10f3aedd3d6ecc6b6"

})

export const auth = app.auth();
export default app; 