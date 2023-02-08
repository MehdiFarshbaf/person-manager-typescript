import {IPeople} from "../types/stateTypes";
import {FC} from 'react'

interface IProps {
    peoples: IPeople[]
}

const List: FC<IProps> = ({peoples}) => {
    return (
        <div>
            List
        </div>
    )
}
export default List