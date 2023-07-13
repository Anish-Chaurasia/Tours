import React, { useState } from "react"


function App() {
    const myTour = [{ name: "Best of Paris In 7 Days Tour", price: "$1000", image: "./images/paris.jpg", read: <p>Lorem ips  bxzc zbx bzxj zxcjzx um dolor sit amet consectetur adipisicing elt iure rem minus. Ut fu, cum!</p> },
    { name: "Best of Mumbai In 7 Days Tour", price: "$1800", image: "./images/mumbai.jpg", read: <p>Loremi ratione, ducimus iusto unde. Dolor, dicta? Reprehenderit, quas?Lorem ipsum dolor sit ametcusandae. Ullam dolorem doloribus iure vero voluprspiciatis quod!</p> },
    { name: "Best of Dubai In 7 Days Tour", price: "$1700", image: "./images/dubai.jpg", read: <p>Lorem, ipsum dolor sit amet consectrum tempunt quidem et aperiam libero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, recusandae.</p> },
    { name: "Best of Italy In 7 Days Tour", price: "$1600", image: "./images/italy.jpg", read: <p>Lorem ipsum dolor sit amet consectetur adipil saepe consectetur. Quo distinctio quia explicabo minima, tempore inventore quam Consequatur, expedita?</p> }];

    const [tour, setTour] = useState(myTour);



    function removeItem(x) {
        const newtour = tour.filter((val, id) => id != x);
        setTour(newtour);

    }
    return (
        <div className="container">
            <p className="heading">Tours</p>
            {tour.map((item, index) => {

                return (

                    <div className="item" key={index}  >
                        <img src={item.image} alt="img" />
                        <p className="name">{item.name}</p>
                        <p className="price">{item.price}</p>
                        <div className="read">{item.read}
                        </div>


                        <button type="button" className="btn" onClick={() => removeItem(index)} >Not Interested</button>
                    </div>

                )
            })}

        </div>
    )


}
export default App;

