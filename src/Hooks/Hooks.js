import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from 'axios'

export const useGetAndSaveData = (URI, save) => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(URI)
            .then(({ data }) => dispatch(save(data)))
            .catch(err => console.log(err))
    }, [URI]);
}