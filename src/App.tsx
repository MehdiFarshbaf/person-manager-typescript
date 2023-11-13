import {useState} from "react";
import List from "./components/List/List";

interface IState {
    peoples: {
        id: number;
        fullname: string;
        age: number;
        img_url: string;
        bio?: string
    }[]
}

const App = () => {

    const [peoples, setPeoples] = useState<IState["peoples"]>([
        {
            id: 0,
            fullname: "مهدی فرشباف",
            age: 31,
            img_url: "https://toplearn.com/img/user/teachers/25927_691bfe64-c650-436c-ae70-050126856e1e_%D8%B9%D9%84%DB%8C_%D8%B1%D8%B6%D8%A7%DB%8C%DB%8C.png",
            bio: "طراح و توسعه دهنده ی وب"
        }
    ])

    return (
        <div className="container">
            <div className="alert alert-info">مدیریت اشخاص</div>
            <List peoples={peoples}/>
        </div>
    )
}
export default App