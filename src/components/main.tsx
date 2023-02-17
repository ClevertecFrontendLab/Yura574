/* eslint-disable */
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {ContractOffer} from './main-section/contract-offer';
import {Rules} from './main-section/rules';
import {MainSection} from './main-section';
import {Navbar} from './navbar';

export const Main = () =>

    //

     (
        <main className="layout-main-page main_wrapper">


            <section className=" main_wrapper">
                < Navbar sidebar={false}
                         showcase='navigation-showcase'
                         books='navigation-books'
                         terms='navigation-terms'
                         contract='navigation-contract'
                />

                < Routes>
                    < Route path="/" element={<Navigate to="books/all"/>}/>
                    <Route path="/books/all" element={<MainSection/>}/>
                    <Route path="/rules" element={<Rules/>}/>
                    <Route path="/contract-offer" element={<ContractOffer/>}/>
                </Routes>

            </section>
        </main>
    )
;
