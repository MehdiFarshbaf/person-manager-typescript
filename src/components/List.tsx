import {IPeople} from "../types/stateTypes";
import {FC} from 'react'

interface IProps {
    peoples: IPeople[]
}

const List: FC<IProps> = ({peoples}) => {
    return (
        <div className="row">{peoples.map(people => (
            <div className="col-12 col-lg-6 mt-2">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <img className='img-fluid rounded img-thumbnail' width={100} height={100} src={people.img_url}
                             alt=""/>
                        <div className='me-3'>
                            <p><span>{people.fullName}</span><span className='badge bg-primary'>سال {people.age}</span>
                            </p>
                            <p className="text-muted">{people.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}
export default List