import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import spinner from '../components/Spinner';
const ShowBook = () => {
    const [book, setBooks] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:3500/books/${id}`)
        .then((Response) => {
            setBook(Response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    },[])
    return (
        <div>ShowBook</div>
    )
}

export default ShowBook