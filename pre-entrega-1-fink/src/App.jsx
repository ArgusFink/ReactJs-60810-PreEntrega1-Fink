import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ThemeProvider from './context/ThemeContext';



import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';




import Contador from './components/Count/ItemCount';


import Failed from './components/Failed';
import Cart from './components/Cart/Cart';




// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

 




// function App() {
//   const [count, setCount] = useState(0)

  
//   const [articles,setArticles] = useState([])
  
//   useEffect(()=>{

//     const db = getFirestore()

//     const q = query (

//       collection(db,"articulos"),
//       where("categoria", "==", "Paneles")

//     )

//     getDocs(q).then((snapshot)=>{

//       if(snapshot.size === 0) {

//         console.log("No hay resultados")

//       }

//       setArticles(snapshot.docs.map((doc)=> (

//         {id: doc.id,...doc.data()}

//       )))

//     })

//   },[])
  
//   console.log(articles)
  









  // const [article,setArticle] = useState(null)

  // useEffect(()=>{

  //   const db = getFirestore()

  //   const articleRef = doc(db,"articulos","TaPeuYqbmiEuUkNJEpSO")

  //   getDoc(articleRef).then((snapshot) => {

  //       if(snapshot.exists){

  //         setArticle({id: snapshot.id,...snapshot.data()})

  //       }

  //   })

  // },[])

  //console.log(article)







  // const [articles, setArticles] = useState([])

  // useEffect(() => {

  //   const db = getFirestore()

  //   const articlesCollection = collection(db, "articulos")

  //   getDocs(articlesCollection).then((snapshot) => {
  //     setArticles(snapshot.docs.map((doc)=>(
  //       {id:doc.id,...doc.data()})))
  //   })

  // }, [])

  // console.log(articles)












const App = () =>{

  return (
    <>

      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Sean bienvenidos a nuestro e-Commerce"} />} />

            <Route path='/categoria/:catCod' element={<ItemListContainer />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/checkout' element={<Checkout />} />

            <Route path='/detalle/:idArt' element={<ItemDetailContainer />} />

            <Route path='*' element={<Failed />} />

          </Routes>

        </CartProvider>

        <br /><br /><br />

      </BrowserRouter>





      {/* <ItemDetailContainer cod={3} /> */}

 

    </>
  )
}

export default App
