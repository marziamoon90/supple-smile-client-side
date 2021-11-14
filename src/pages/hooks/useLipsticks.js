import axios from 'axios';
import { useEffect, useState } from 'react';

const useLipsticks = () => {
    const [lipsticks, setLipsticks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getLipsticks = () => {
        axios.get("https://nameless-citadel-84200.herokuapp.com/lipsticks")
            .then(res => {
                const myLipsticks = res.data;
                setLipsticks(myLipsticks)
                // console.log(myLipsticks)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => getLipsticks(), [])
    return [lipsticks, isLoading]
};

export default useLipsticks;