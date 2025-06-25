import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/programming team succes hype/team1.jpg";
import team2 from "../../assets/programming team succes hype/team2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Remote <motion.span animate={{
                color:['#4E6688','#725CAD','#254D70'],
                
              }}
              transition={{duration:2, repeat: Infinity}}
              >job</motion.span> for you!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <div className="flex-1">
            <motion.img
              animate={{
                y: [0, 50, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              src={team1}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-10 border-l-10 border-blue-500"
            />

            <motion.img
              animate={{
                x: [100, 150, 100],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              src={team2}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-10 border-l-10 border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
