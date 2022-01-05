import {
    useEffect,
    useState
} from "react"


export default function Clock() {

    //let interval;

    const [time, setTime] = useState(new Date())

    useEffect(startClock, [])

    function startClock() {

        let interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }

    return <div > {time.toLocaleTimeString()} </div>
}