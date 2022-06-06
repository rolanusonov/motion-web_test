import React, {useEffect} from 'react';
import Card from "./Card";
import {useSelector,useDispatch} from "react-redux";
import axios from " axios";
 const Category = () => {
    const  dispatch = useDispatch()
    const category = useSelector((state)=> state.category)
    useEffect(() => {

        axios("https://motion-test-platform.herokuapp.com/")
            .then(({data}) => {
                dispatch({type:UPLOAD_CATEGORY,payload:data})
            })

    },[dispatch])
    return (
        <div>
            {
                category.map(el=> (
                    <Card el={el} key={el.id} />
                ))
            }


        </div>
    );
};

export default Category;