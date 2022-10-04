import React from 'react'
import Complain from '../components/Complain'

import HeroSection from '../components/HeroSection'
import InputForm from '../components/InputForm'
import Output from '../components/Output'

function Home() {

 
  return (
<>


<Complain/>
    <div className="min-h-screen">
      <header className="pb-24 bg-stone-600">
<HeroSection/>


      </header>
      <main className="-mt-24 pb-8 pt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          

          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2 lg:gap-8 ">


            {/* Left column */}
            <div className="grid gap-4 h-96">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <InputForm />


                  </div>
                </div>
              </section>
            </div>
            {/* Right column */}
            <div className="grid  gap-4 h-96">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">

                    <Output />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
     
    
    </div>
    </>

  )
}

export default Home