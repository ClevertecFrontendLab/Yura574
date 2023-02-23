/* eslint-disable */
import {MainSection} from './main-section';
import {Navbar} from './navbar';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../store/store";
import {useEffect} from "react";
import {setCurrentCategory} from "../store/reducers/app-reducers";

export const Main = () => {
        const dispatch = useAppDispatch()

        const {category} = useParams()
    useEffect(()=>{
       category && dispatch(setCurrentCategory(category))
    }, [category])


        return (
            <main className="layout-main-page main_wrapper">


                <section className=" main_wrapper">
                    < Navbar sidebar={false}
                             showcase='navigation-showcase'
                             books='navigation-books'
                             terms='navigation-terms'
                             contract='navigation-contract'
                    />
                    <MainSection/>
                </section>
            </main>
        )
    }
;
