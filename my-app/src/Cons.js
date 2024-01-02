import React from 'react'
import { canal1, canal2, cimage, profile } from './assets'
import { cvic, honda, mehran, newcar } from './assets';
  /* nav bar start*/
     export const Myc= () => {
  return (
     <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* nav bar end*/}
  {/*content start*/}
  <div className='bg-light'>
  <div className="content col-lg-5 bg-light" style={{marginLeft:30, padding:10}}>
    <h1>Custom jumbotorn</h1>
    <p>Using a series of utility,uou can create a jumbotorn,just like the ine and previous version of Bootstrap.Check out of the example beloe flow how you can remix and restyle it your laking.
    </p>
    <button type="button" className='btn btn-primary'>Example button</button>
  </div>
  </div> 
   {/*content start*/}
  <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2021 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}
   {/*Facebook card start*/}
    export const MyBox = ({}) => {
      const Itsbox=[
        {
          Image:profile,
          Name:'Johsin',
          Detail:'i have something insighful to say, as useful',
          Views: 'Like.reply. 2Second ago'

          
        }

      ]
      return(
        <div style={{padding: 20,margin:50, boxShadow: '1px 2px 9px black' }}>
        {Itsbox.map((data,index) => {
          console.log(index) ;
    return(
       <div className='row'>
        <div className='col-lg-2'>
        <img src={data.Image} />

        </div>
        <div className='col-lg-9'>
            <h4>{data.Name}</h4> 
            <h5>{data.Detail}</h5>
            <h6>{data.Views}</h6>
           </div> 
           
    </div>
    )   
  })}
     </div>
      )

   
   }


    {/*Facebook card end*/}
    {/*photo card start*/}
    export const Photo=()=> {
      const Myphoto=[
        {
          Image:profile,
          Name: 'beloment shore area',
          detail: 'long beacg sea a',
          content: 'The blam tree are casting thier on shadow on a Cadalic,'
    
        },
        {
          Image:profile,
          Name: 'beloment shore area',
          detail: 'long beacg sea a',
          content: 'The blam tree are casting thier on shadow on a Cadalic,'
    
        },
        {
          Image:profile,
          Name: 'beloment shore area',
          detail: 'long beacg sea a',
          content: 'The blam tree are casting thier on shadow on a Cadalic,'
    
        },
      ]

      return(
        <div style={{padding: 20,margin:50, boxShadow: '1px 2px 9px black' }}>
       
        {Myphoto.map((data,index) => {
        console.log(index) ;

           return(
            <div className='row' style={{padding:20}}>
              <div className='col-lg-4'>
                <img src={data.Image}/>
              </div>
              <div className='col-lg-5'>
                <p>{data.Name}</p>
                <p>{data.detail}</p>
              </div>

              <div className='col-lg-3'>
                <p>{data.content}</p>
              </div>
            </div>          
        ) 

         })}
        </div>
      )
      }
      

    

        
    

   

      {/*photo card end*/}

 

       
       export const Cons=({})=> {
        const Mycar=[
          {
            
            Image:honda,
            Name:'Honda',
            Color: 'Blue',
            detail:'2023'
          },
          {
            
            Image:mehran,
            Name:'Cvic',
            Color: 'orange',
            detail:'2022'
          },
          {
            
            Image:newcar,
            Name:'Prado',
            Color: 'Black',
            detail:'2024'
          },
          {
            
            Image:cvic,
            Name:'cvic',
            Color: 'Yallow',
            detail:'2024'
          }
        ]
        
        return(
          <div style={{display:'flex',padding: 20,margin:50, boxShadow: '1px 2px 9px black' }}>
          <div style={{margin:10, boxShadow: '1px 2px 9px black'}}>
            </div>
          {Mycar.map((data,index) => {
          console.log(index) ;
      return(
          <div  style={{margin:10, boxShadow: '1px 2px 9px black'}}>
          <img src={data.Image} style={{width: 200, height:200}}/>
              <h3>{data.Name}</h3> 
              <p>{data.Color}</p>
              <p>{data.detail}</p>
          </div>
      )   
    })}
       </div>
        )
       }
{/*web page*/}
 export const Mypage=()=>{
 const pagedata=[
    { 
      Name:"amber",

  }
]

return(
  <div style={{padding: 20,margin:50, boxShadow: '1px 2px 9px black' }}>

   {pagedata.map((data,index)=>{
    console.log(data)
    return(
      <div className='row ' style={{padding:20}}>
        

      <div className='col-lg-4' style={{ boxShadow: '1px 2px 9px black'}}>

        <p>{data.Name}</p>
      </div>
      <div className='col-lg-4' style={{ boxShadow: '1px 2px 9px black'}}>
        <p>{data.Name}</p>
       <p>{data.detail}</p>
      </div>

      <div className='col-lg-4 ' style={{ boxShadow: '1px 2px 9px black'}}>
        <p>{data.Name}</p>
      </div>
      <div className='col-lg-4 ' style={{ boxShadow: '1px 2px 9px black'}}>
        <p>{data.Name}</p>
      </div>
    </div> 

    )
   })}
</div>
)
}

       
       


