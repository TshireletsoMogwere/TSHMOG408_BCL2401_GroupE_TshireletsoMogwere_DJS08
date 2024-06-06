import { useParams } from "react-router-dom"

function VanDetail() {
    const params = useParams()
    console.log(params)
    const [Van, setVan] = React.useState(null)

    React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
}, [params.id]
)

    return (
        <div className="van-detail-container">
        {Van ? (
            <div className="van-detail">
                <img src={Van.imageUrl} />
                <i className={`van-type ${Van.type} selected`}>{Van.type}</i>
                <h2>{Van.name}</h2>
                <p className="van-price"><span>${Van.price}</span>/day</p>
                <p>{Van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}

export default VanDetail