import { useEffect, useState } from 'react'
import Progress from './Progress.jsx'
import './Astros.css'

const DATA_URL = "http://api.open-notify.org/astros.json"

const Astro = ({name, craf}) => {
    return (
        <div className='astro--container'>
            <h2 className='astro--name'>{name}</h2>
            <p className='astro--station'>Space station: {craf}</p>
        </div>
    )
}

const Astros = () => {
    const [astros, setAstros] = useState([]);

    //useEffect: cuando un componente debe permanecer conectado a la red, a alguna API del navegador o a una biblioteca de terceros
    useEffect(() => {
        fetchAstros();
    }, [])

    const fetchAstros = () => {
        fetch(DATA_URL).then(res => res.json())
        .then(data => {

            setTimeout(() => {
                setAstros(data.people)
            }, 3000);

        })
        .catch(err => console.log(err))
    };

    return (
        <div className='main--container'>
            <h2>Astros</h2>
            {
                astros.length !== 0 ?

                astros.map((astro, index) => (
                    <Astro key={index} {...astro} />
                ))

                :

                <Progress/>
            }
        </div>
    )
};

export default Astros;