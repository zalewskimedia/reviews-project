import { useState } from "react"
import { FaQuoteRight } from "react-icons/fa"
import { TiChevronLeft, TiChevronRight } from "react-icons/ti"
import reviews from "../data"

function App() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = reviews[index]
    const checkNumber = number => {
        if (number >= reviews.length) {
            return 0
        }
        if (number < 0) {
            return reviews.length - 1
        }
        return number
    }
    const nextReview = () => {
        setIndex(oldIndex => {
            const newIndex = oldIndex + 1
            return checkNumber(newIndex)
        })
    }
    const prevReview = () => {
        setIndex(oldIndex => {
            const newIndex = oldIndex - 1
            return checkNumber(newIndex)
        })
    }
    const randomReview = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length)
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }
    return (
        <div className="container mx-auto px-8 py-16">
            <h1 className="text-3xl font-bold text-center mb-16">Reviews</h1>
            <article className="max-w-md mx-auto shadow-xl px-8 py-6 rounded-xl bg-white h-96">
                <div className="relative flex justify-center items-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 object-cover rounded-full relative z-10"
                    />
                    <span className="absolute top-0 left-1/3 bg-violet-600 p-2 rounded-full z-10">
                        <FaQuoteRight className=" text-white" />
                    </span>
                    <div className="absolute w-24 h-24 top-1/2 left-1/2 bg-violet-600 rounded-full -translate-x-[45%] -translate-y-1/2"></div>
                </div>
                <h2 className="text-2xl text-center font-bold mt-4 capitalize text-violet-700">
                    {name}
                </h2>
                <p className="text-center uppercase tracking-wider text-violet-400">
                    <small>{job}</small>
                </p>
                <p className="mt-4 italic">{text}</p>
            </article>
            <div className="text-center mt-8 flex justify-center gap-8">
                <button
                    className="text-3xl text-violet-500"
                    onClick={prevReview}>
                    <TiChevronLeft />
                </button>
                <button
                    className="text-3xl text-violet-500"
                    onClick={nextReview}>
                    <TiChevronRight />
                </button>
            </div>
            <div className="text-center mt-8">
                <button
                    className="text-white bg-violet-500 hover:bg-violet-600 duration-300 px-8 py-2 rounded-lg"
                    onClick={randomReview}>
                    Random Review
                </button>
            </div>
        </div>
    )
}

export default App
