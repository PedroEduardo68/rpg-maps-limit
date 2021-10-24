import * as C from './styled'
import { CharacterSides } from '../../types/CharacterSides'

type Props ={
    x:number,
    y:number,
    side:CharacterSides,
}
const size =30;

const Character = ({x,y,side}:Props) => {
    const sides ={
        down: 0,
        left: -30,
        right: -60,
        up: -90,
    }

    return (
        <C.Container left={x*size} top={y*size} size={size} sidePos={sides[side]?? 0} >
        </C.Container>
    );
}

export default Character;
