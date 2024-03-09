import React, { useContext, useState } from 'react'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'

const Checkout = () => {

    const { cart, totPrice, unitsProds, emptyCart } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [fail, setFail] = useState("")
    const [orderId, setOrderId] = useState("")


    const directorForm = (e) => {

        e.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConf) {

            setFail("Por favor completar los datos solicitados")

            return;
        }

        if (email !== emailConf) {

            setFail("El mail de confirmación no coincide")

            return;
        }

        const order = {

            items: cart.map((articulo) => ({

                id: articulo.articulo.id,
                nombre: articulo.articulo.nombre,
                cantidad: articulo.cantidad

            })),

            total: totPrice(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(

            order.items.map(async (artOrder) => {

                const artRef = doc(db, "articulos", artOrder.id);

                const artDoc = await getDoc(artRef)

                const stockActual = artDoc.data().stock

                await updateDoc(artRef, {
                    stock: stockActual - artOrder.cantidad

                })
            })
        )
            .then(() => {

                addDoc(collection(db, "orders"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        setFail("");
                        emptyCart();
                    })

                    .catch((fail) => {

                        console.log(fail)
                        setFail("Error al crear la orden")
                    })
            })

            .catch((fail) => {

                console.log(fail)
                setFail("No se pudo actualizar el stock")
            })
    }

    return (

        <div>

            <h1>Ingresar datos</h1>

            <form onSubmit={directorForm}>

                {cart.map((articulo) =>
                    <div key={articulo.articulo.id}>
                        <p>
                            {articulo.articulo.nombre} x {articulo.cantidad}
                        </p>

                        <hr />

                    </div>
                )}

                <div>
                    <div>
                        <label htmlFor="Nombre">Nombre </label>
                        <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido </label>
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Nombre">Teléfono </label>
                        <input name="Teléfono" type='text' onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Email">Email </label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="EmailConf">Email Confirmacion </label>
                        <input name="EmailConf" type='email' onChange={(e) => setEmailConf(e.target.value)} />
                    </div>

                    <button type='submit'>Finalizar compra</button>

                    {fail && <p style={{ color: "red" }}>{fail}</p>}

                    {orderId && (
                        <strong>
                            ¡Gracias por tu compra! Tu número de orden es: {orderId}
                        </strong>
                    )}

                </div>
            </form>
        </div>
    )
}

export default Checkout
