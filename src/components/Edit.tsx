import {FaUserEdit} from 'react-icons/fa'
import {Modal} from 'react-bootstrap'
import {Dispatch, FC, FormEvent, SetStateAction, useState} from 'react'
import {IPeople} from "../types/stateTypes";

interface IProps {
    people: IPeople;
    peoples: IPeople[];
    setPeoples: Dispatch<SetStateAction<IPeople[]>>
}

const Edit: FC<IProps> = ({people, setPeoples, peoples}) => {

    //variables
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const [fullName, setFullName] = useState<string>(people.fullName)
    const [age, setAge] = useState<number | string>(people.age)
    const [img_url, setImgUrl] = useState<string>(people.img_url)
    const [bio, setBio] = useState<string | undefined>(people.bio)

    //functions
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const persons = [...peoples]
        const personIndex = persons.findIndex(p => p.id === people.id)
        persons[personIndex] = {
            id: people.id,
            age: Number(age),
            img_url, bio, fullName
        }
        setPeoples(persons)
        setIsShowModal(false)
    }

    return (
        <>
            <FaUserEdit onClick={() => setIsShowModal(true)} size={30} className='text-primary m-1'/>
            <Modal show={isShowModal} onHide={() => setIsShowModal(false)} size="lg" centered>
                <Modal.Header>
                    <Modal.Title>{people.fullName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='mt-3'
                          onSubmit={e => handleSubmit(e)}
                          autoComplete="off">
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text"
                               className='form-control mb-2' name='fullName' placeholder='نام و نام خانوادگی'/>
                        <input value={age} onChange={e => setAge(e.target.value)} type="text"
                               className='form-control mb-2'
                               name='age' placeholder='سن'/>
                        <input value={img_url} onChange={e => setImgUrl(e.target.value)} type="text"
                               className='form-control mb-2' name='img-url' placeholder='آدرس تصویر پروفایل'/>
                        <textarea value={bio} onChange={e => setBio(e.target.value)} name="bio"
                                  className='form-control mb-2'
                                  rows={7} placeholder='بیوگرافی'/>
                        <button type="submit" className='btn btn-success'>ویرایش شخص</button>
                        <button type="button" className='btn btn-danger me-2' onClick={() => setIsShowModal(false)}>بستن
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Edit