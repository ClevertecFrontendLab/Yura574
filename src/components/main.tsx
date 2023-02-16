/* eslint-disable */
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "./navbar";
import {MainSection} from "./main-section";
import {Rules} from "./main-section/rules";
import {ContractOffer} from "./main-section/contract-offer";

export const Main = () => {

    //

    return (
        <main className="layout-main-page main_wrapper">


            <section className=" main_wrapper">
                < Navbar sidebar={false}
                         showcase='navigation-showcase'
                         books='navigation-books'
                         terms='navigation-terms'
                         contract='navigation-contract'
                />

                < Routes>
                    < Route path="/" element={<Navigate to={'books/all'}/>}/>
                    <Route path="/books/all" element={<MainSection/>}/>
                    <Route path="/rules" element={<Rules/>}/>
                    <Route path="/contract-offer" element={<ContractOffer/>}/>
                </Routes>

            </section>
        </main>
    );
};
