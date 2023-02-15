import emptyStar from '../../assets/svg/emptyStar.svg'
import star from '../../assets/svg/star.svg'

type RatingType = {
    rating: number
    classname?: string
}


export function Rating(props: RatingType) {
    return (
        <div className={props.classname}>
                <div  className='star-container'>
                   <Star rating={props.rating > 0}/>
                   <Star rating={props.rating > 1}/>
                   <Star rating={props.rating > 2}/>
                   <Star rating={props.rating > 3}/>
                   <Star rating={props.rating > 4}/>

                </div>
        </div>
    )
}

type StarType = {
    rating: boolean
}
function Star (props: StarType) {
    return (
        <img src={props.rating? star: emptyStar} alt=""/>
    )
}
