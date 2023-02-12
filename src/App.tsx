import {useState} from 'react'
import {IPeople} from "./types/stateTypes";
import List from "./components/List";
import AddPeople from "./components/AddPeople";

const App = () => {

    //variables

    const [peoples, setPeoples] = useState<IPeople[]>(
        [
            {
                id: 0,
                fullName: "مهدی فرشباف",
                age: 10,
                bio: "طراح و توسعه دهنده وب",
                img_url: "https://toplearn.com/img/user/teachers/25033_1593aba2-5cb5-6add-a31f-39e35253dd2a_%DB%8C%D9%88%D9%86%D8%B3_%D9%82%D8%B1%D8%A8%D8%A7%D9%86%DB%8C.jpg"
            },
            {
                id: 1,
                fullName: "فرشته",
                age: 10,
                bio: "طراح و توسعه دهنده وب",
                img_url: "https://toplearn.com/img/user/teachers/9538_79d94933-3cd1-48c9-9f47-8ede19ce4e23_%D9%82%D8%A7%D8%A6%D9%85%20_%D8%AA%D9%82%DB%8C%20%D9%BE%D9%88%D8%B1.jpg"
            }
        ]
    )

    return (
        <div className='container'>
            <h4 className="alert alert-info">مدیریت اشخاص</h4>
            <List peoples={peoples}/>
            <AddPeople peoples={peoples} setPeoples={setPeoples}/>
        </div>
    )
}
export default App