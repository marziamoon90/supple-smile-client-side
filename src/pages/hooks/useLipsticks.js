import axios from 'axios';
import { useEffect, useState } from 'react';

const useLipsticks = () => {
    const [lipsticks, setLipsticks] = useState([])

    const getLipsticks = () => {
        axios.get("https://nameless-citadel-84200.herokuapp.com/lipsticks")
            .then(res => {
                const myLipsticks = res.data;
                setLipsticks(myLipsticks)
                // console.log(myLipsticks)
            })
    }
    useEffect(() => getLipsticks(), [])
    return [lipsticks, setLipsticks]
};

export default useLipsticks;