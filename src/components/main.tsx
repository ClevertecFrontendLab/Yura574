/* eslint-disable */
import {MainSection} from './main-section';
import {Navbar} from './navbar';

export const Main = () =>{


    return(
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
