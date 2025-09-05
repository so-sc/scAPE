import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "11/08/2024 14:30:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const HacknightCounter = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasStarted,setStarted] = useState(false);
  const [elapsedTime,setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;
    if(distance<=0){
        setStarted(true);
        updateElapsed();
    }
    else{
    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  }};

  const updateElapsed=()=>{
        const start = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = +now - +start;
    
        const days = Math.floor(distance / DAY);
        const hours = Math.floor((distance % DAY) / HOUR);
        const minutes = Math.floor((distance % HOUR) / MINUTE);
        const seconds = Math.floor((distance % MINUTE) / SECOND);
    
        setElapsedTime({
          days,
          hours,
          minutes,
          seconds,
        });
      };

  return (
    <div className="md:py-10 py-5 pb-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-5">
        {/* {hasStarted ? "Hackathon Live!" : "Hackathon starts in"} */}
        Hackathon has Ended
      </h2>
      {/* <div className="w-full max-w-5xl mx-auto flex items-center">
        {hasStarted?(
        <>
        <CountdownItem num={elapsedTime.days} text="days" />
        <CountdownItem num={elapsedTime.hours} text="hours" />
        <CountdownItem num={elapsedTime.minutes} text="minutes" />
        <CountdownItem num={elapsedTime.seconds} text="seconds" />
        </>
        ):
        (
        <>
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
        </>
        )
    }
      </div> */}
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-3xl md:text-4xl lg:text-5xl text-primary font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-white">
        {text}
      </span>
    </div>
  );
};

export default HacknightCounter;