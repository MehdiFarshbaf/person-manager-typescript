import {FC} from "react";

interface IPeople {
    id: number;
    fullname: string;
    age: number;
    img_url: string;
    bio?: string
}

interface IProps {
    peoples: IPeople[]
}

const List: FC<IProps> = ({peoples}) => {
    return (
        <div>list</div>
    )
}
export default List