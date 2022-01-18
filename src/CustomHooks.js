
import { useState, useEffect, useRef } from "react";

const useMounted = () => {
    const isMount = useRef(false)
    useEffect(() => {
        isMount.current = true
        return () => isMount.current = false
    }, [])
    return isMount
}

export const useFreshDate = () => {
    const [today, setToday] = useState(new Date())
    
    useEffect(() => {
        const renewDate = setInterval(() => setToday(new Date()), 60000)
        return () => clearInterval(renewDate)
    }, [])
    
    return today
}

export const useGetOptions = () => {
    const url = 'https://programmer-club.herokuapp.com/api/v1/Teacher/simple'
    const isMount = useMounted()
    const [options, setOptions] = useState([])
    const words = setWords(options)
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((obj) => obj.data)
        .then((result) => {if (!isMount.current) throw new Error("Unmounted"); return result})
        .then((result) => {
            setOptions((prev) => {
                result.forEach((teacher) => 
                    teacher.subjects.forEach((sub) => {
                        prev = [...prev, `${teacher.name} ${sub.name} ${sub.season}`]
                    })
                )
                return prev
            })
        })
        .catch(error => console.log(error))
    }, [isMount])

    function setWords () {
        let newWords = []
        const allSetWords = options.map((option) =>  option.split(" "))
        allSetWords.forEach((oneSetWords) => oneSetWords.forEach((word) => {
            if (!(newWords.find((existWord) => existWord === word)) && word !== "null") newWords = [...newWords, word]
        }))
        return newWords
    }

    return [options, words]
}
