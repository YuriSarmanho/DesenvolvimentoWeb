import './App.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import Projects from "./Projects"


// register();
// import 'swiper/css/bundle' //this import contains all the css modules 
// import 'swiper/css/navigation' this is just a example

// import { EffectFade, EffectFlip, EffectCube, EffectCoverflow, EffectCards, EffectCreative } from 'swiper/modules'

function App() {
  // const data = [
  //   { id: 0, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png' },
  //   { id: 1, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png' },
  //   { id: 2, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png' },
  //   { id: 3, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png' },
  //   { id: 4, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png' },
  //   { id: 5, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png' },
  //   { id: 6, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png' },
  //   { id: 7, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png' }
  // ]

  return (

    <Projects/>

    // <div className="container">
    //   <h1 className="title">Slide com React JS</h1>
    //   <Swiper
    //     modules={ [EffectFade, EffectFlip,EffectCube,EffectCoverflow, EffectCards, EffectCreative] }
    //     effect={"fade"}
    //     slidesPerView={1}
    //     pagination={{ clickable: true }}
    //     navigation

    //     loop={true}
    //   >
    //     {data.map((data) => (
    //       <SwiperSlide key={data.id}>
    //         <img src={data.image} className='slide-item' />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>

  )
}

export default App
