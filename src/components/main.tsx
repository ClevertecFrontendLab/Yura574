/* eslint-disable */
import {MainSection} from './main-section';
import {Navbar} from './navbar';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../store/store";
import {useEffect} from "react";
import {setCurrentCategory} from "../store/reducers/app-reducers";
import {useWindowSize} from "../utils/utils";

export const Main = () => {
        const dispatch = useAppDispatch()

        const {category} = useParams()
    const size = useWindowSize()
    useEffect(()=>{
       category && dispatch(setCurrentCategory(category))
    }, [category])


        return (
            <main className="layout-main-page main_wrapper">


                <section className=" main_wrapper">
                    {size.width> 768 &&  < Navbar sidebar={false}
                             showcase='navigation-showcase'
                             books='navigation-books'
                             terms='navigation-terms'
                             contract='navigation-contract'
                             dataTestId='navigation'
                    />}
                    <MainSection/>
                </section>
            </main>
        )
    }
;
