import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section 
     id="about-us"
     className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We Provide you <span className="text-coral-red" 
          >Super</span> <span className="text-coral-red">Quality </span> 
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into the future of performance with Nike's latest collection, a fusion of style and cutting-edge technology. Elevate your active lifestyle with unparalleled comfort and innovative designs engineered to push boundaries. From sleek, fashion-forward looks to high-performance gear, these arrivals redefine what it means to excel in both fashion and fitness.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <div className="mt-11">
        <Button label="View details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522} />
      </div>

    </section>
  )
}

export default SuperQuality