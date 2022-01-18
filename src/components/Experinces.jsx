import React from 'react'
/* google da axtar: fetch 
***how to fetch local json data in JS
async await in JS (asyncron function)*/

const Experinces = () => {
    return (
        <div className='experince'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experince</h1>
            </div>

            <div className='container experince-wrapper'>

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>


                 {/* Experinces1 */}

                 <div className='timeline-block timeline-block-left'>
                     <div className='marker'></div>
                     <div className='timline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* experinces2 */}

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* Experinces3 */}

                 <div className='timeline-block timeline-block-left'>
                     <div className='marker'></div>
                     <div className='timline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

                 {/* Experinces4 */}

                 <div className='timeline-block timeline-block-right'>
                     <div className='marker'></div>
                     <div className='timline-content'>
                         <h3>2012-2013</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium.</p>
                     </div>
                 </div>

            </div>
            
        </div>
    )
}

export default Experinces
