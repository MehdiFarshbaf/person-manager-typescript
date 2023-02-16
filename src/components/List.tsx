import {IPeople} from "../types/stateTypes";
import {FC, Dispatch, SetStateAction} from 'react'
import {AiOutlineUserDelete} from 'react-icons/ai'
import Edit from "./Edit";

interface IProps {
    peoples: IPeople[];
    setPeoples: Dispatch<SetStateAction<IPeople[]>>
}

const List: FC<IProps> = ({peoples, setPeoples}) => {

    // functions
    const handleDeletePeople = (id: number): void => {
        const persons: IPeople[] = [...peoples]
        const filteredPeoples = persons.filter(p => p.id !== id)
        setPeoples(filteredPeoples)
    }
    return (
        <div className="row">{peoples.map(people => (
            <div key={people.id} className="col-12 col-lg-6 mt-2">
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
                    <div className='operation_btns'>
                        <Edit people={people} peoples={peoples} setPeoples={setPeoples}/>
                        <AiOutlineUserDelete size={30} className='text-danger m-1'
                                             onClick={() => handleDeletePeople(people.id)}/>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}
export default List