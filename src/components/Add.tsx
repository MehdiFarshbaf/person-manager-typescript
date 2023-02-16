import {useState, FormEvent, FC, Dispatch, SetStateAction} from "react";
import {IPeople} from "../types/stateTypes";

interface IProps {
    peoples: IPeople[];
    setPeoples: Dispatch<SetStateAction<IPeople[]>>
}

const Add: FC<IProps> = ({peoples, setPeoples}) => {

    // variables
    const [fullName, setFullName] = useState<string>("")
    const [age, setAge] = useState<number | string>("")
    const [img_url, setImgUrl] = useState<string>("")
    const [bio, setBio] = useState<string>("")

    //functions
    const handleResetState = (): void => {
        setFullName("")
        setAge("")
        setImgUrl("")
        setBio("")
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!fullName) {
            return alert("نام و نام خانوادگی الزامی می باشد.")
        }
        if (!age) {
            return alert("سن الزامی می باشد.")
        }
        if (!img_url) {
            return alert("عکس الزامی می باشد.")
        }
        setPeoples([...peoples, {
            id: Math.floor(Math.random() * 100000),
            img_url,
            bio,
            fullName,
            age: Number(age)
        }])
        handleResetState()
    }

    return (
        <div className="col-md-6 col-lg-6 mx-auto">
            <form className='mt-3' onSubmit={e => handleSubmit(e)} autoComplete="off">
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text"
                       className='form-control mb-2' name='fullName' placeholder='نام و نام خانوادگی'/>
                <input value={age} onChange={e => setAge(e.target.value)} type="text" className='form-control mb-2'
                       name='age' placeholder='سن'/>
                <input value={img_url} onChange={e => setImgUrl(e.target.value)} type="text"
                       className='form-control mb-2' name='img-url' placeholder='آدرس تصویر پروفایل'/>
                <textarea value={bio} onChange={e => setBio(e.target.value)} name="bio" className='form-control mb-2'
                          rows={7} placeholder='بیوگرافی'/>
                <button type="submit" className='btn btn-success'>افزودن به لیست</button>
            </form>
        </div>
    )
}
export default Add