import { Helmet, HelmetProvider } from "react-helmet-async";
import ChangingText from "../../components/main/homePage/ChangingText";
import Cursor from "../../components/main/homePage/Cursor";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);

  const cursorStyle = {
    cursor: dragging ? "cursor-grabbing" : "cursor-grab",
  };
  return (
    <div className="container h-full flex flex-column">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com"} />
          <title>Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>
      <motion.div
        animate={{ x: [-100, 0] }}
        className="w-full tablet:w-6/12 gap-8 flex flex-col py-20 z-10 "
      >
        <div>
          <p className="text-p2">Hi, my name is</p>
          <h1 className="text-h1">Dimitrije Šovljanski</h1>

          <p className="text-p">
            I'm a <ChangingText />
            <Cursor />
          </p>
        </div>
        <div className="inline-block">
          <p className="text-p inline">See some cool facts about me! </p>
          <motion.button
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -10, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            className="button bg-black py-2 px-4 rounded-full text-p inline  hover:bg-white hover:text-black transition ease-in-out"
            onClick={() => navigate("/about-me")}
          >
            About me
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="absolute tablet:relative left-0 w-full tablet:w-6/12 overflow-hidden max-h-[80vh] z-0">
        <motion.svg
          height="100%"
          viewBox="0 0 1077 1023"
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          animate={{
            x: [0, 15, 30, 15, 0, -15, -30, -15],
            y: [0, 30, 0, -30],
            scale: [1, 1.05, 0.9],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={"relative overflow-hidden right-0 " + cursorStyle.cursor}
          pointerEvents="visibleFill"
        >
          <motion.path
            d="M564.085 24.3488C571.983 25.7848 583.83 29.7338 590.292 32.9648C611.114 44.0938 650.963 81.4298 667.836 105.842C687.581 133.844 692.607 153.589 692.607 204.926C692.607 234.005 691.53 241.544 684.709 252.673C680.401 260.212 676.093 273.136 674.657 281.752C671.785 303.651 664.605 303.292 666.041 281.034C666.759 274.213 654.194 254.468 649.168 254.468C641.629 254.827 637.321 262.366 633.731 281.752C629.423 304.728 621.166 316.575 603.575 324.473C586.343 332.012 570.547 333.448 551.879 329.499C534.647 325.909 534.288 325.55 519.21 295.753C510.953 279.239 501.978 264.879 499.106 263.802C491.926 260.93 480.797 277.803 477.925 295.035C473.976 318.011 465.719 329.14 447.769 335.961C429.46 342.782 420.485 343.141 411.869 336.32C401.817 328.063 390.329 322.678 383.149 322.678C378.841 322.678 374.174 318.011 370.584 310.113C365.199 298.984 364.481 286.06 365.558 214.978C366.635 136.357 366.994 132.408 374.533 122.715C379.2 117.33 388.534 102.97 395.714 91.1228C402.535 79.2758 411.869 66.7108 416.177 63.1208C439.512 43.7348 453.513 35.1188 470.386 30.4518C493.003 23.6308 543.981 20.3998 564.085 24.3488ZM386.38 200.618C375.251 237.595 375.969 239.031 406.843 232.928C422.639 229.697 433.768 229.697 452.795 232.928C489.054 239.031 508.44 238.313 525.313 229.697C541.468 221.081 586.343 218.927 608.96 225.748C624.397 230.056 647.373 230.415 649.886 226.107C650.963 224.312 646.655 216.414 640.193 208.516C629.782 195.233 626.91 193.797 606.088 191.643C592.446 189.848 577.368 190.566 567.316 193.079C557.982 195.592 549.725 196.669 549.007 195.592C547.93 194.874 540.75 196.31 532.852 199.182C513.825 206.003 463.206 205.644 443.82 198.823C435.563 195.951 423.357 188.771 416.536 182.668C409.715 176.565 402.176 172.975 398.945 174.052C396.073 175.129 390.329 186.976 386.38 200.618Z"
            fill="#0A0909"
            whileHover={{
              filter: ["drop-shadow(1px 3px 6px rgba(100,100,100,0.5))"],
            }}
            initial={{ filter: "drop-shadow(0 0 0 transparent)" }}
          />
          <motion.path
            d="M674.298 312.626C676.452 351.757 676.093 368.989 673.58 379.041C671.785 385.862 672.144 391.606 673.939 393.042C678.247 395.555 678.247 411.351 673.58 414.223C671.426 415.3 669.99 423.198 669.631 431.455C669.631 445.097 669.272 445.815 666.041 437.558C662.81 429.301 662.092 429.66 653.835 447.61C637.68 482.792 599.626 528.744 584.548 531.616C581.317 532.334 576.291 537.36 573.778 542.745C571.265 548.13 565.88 554.592 561.931 557.105C556.905 560.336 555.11 565.362 555.11 576.491C555.11 584.748 556.546 592.646 558.7 593.723C560.495 594.8 562.29 594.082 562.29 592.287C562.29 590.133 564.803 588.338 567.675 588.338C570.547 588.338 573.06 590.133 573.06 591.928C573.06 595.518 620.448 572.901 638.398 560.336C651.322 551.72 673.58 520.487 673.58 511.512C673.58 507.563 677.529 512.589 682.914 523C692.966 543.104 727.43 580.081 741.072 585.107C745.739 586.902 760.099 588.338 773.382 588.338C788.46 588.697 799.948 590.492 804.256 593.723C808.205 596.595 820.052 601.621 831.181 604.852C850.208 610.237 879.646 625.315 883.595 631.418C884.672 632.854 879.646 641.111 872.825 649.727L860.26 665.523V734.092V802.302L846.618 820.252C826.873 846.459 789.537 884.872 765.125 903.899C734.251 928.311 712.352 939.081 682.555 945.543C657.425 950.569 575.573 954.518 571.983 950.928C570.906 949.851 569.111 914.31 568.034 871.948C566.957 829.586 564.803 782.557 563.367 767.838C561.213 742.708 560.854 741.631 556.905 751.324L552.597 761.735L548.648 747.734L545.058 733.733L544.699 753.119C544.34 764.607 542.545 773.941 539.314 776.454C533.211 781.48 522.8 819.893 522.8 838.202C522.8 845.741 521.005 858.665 519.21 866.563C517.415 874.461 515.62 897.078 515.261 916.464L514.902 952.005L473.258 949.851C449.923 948.774 421.562 945.184 409.715 941.953C397.868 938.722 373.456 934.773 355.506 933.696C316.375 930.465 312.785 928.311 247.806 862.973C198.982 814.149 191.443 800.507 193.238 767.838L194.315 748.093L216.573 737.323C228.779 731.22 241.703 723.681 245.293 720.45C249.242 716.86 259.294 711.834 267.91 708.603C276.885 705.372 287.296 699.987 291.245 696.038C298.425 689.576 327.863 671.626 363.404 652.599C393.201 636.803 412.946 623.52 418.69 615.622C430.537 599.108 443.82 565.362 444.179 551.361C444.538 543.104 445.615 539.873 446.333 544.181C448.846 556.387 457.462 561.772 465.719 556.746C473.976 551.361 479.72 551.361 479.72 556.028C479.72 557.823 476.13 559.618 471.822 559.618C464.283 559.618 463.924 559.977 470.027 565.721C476.13 571.824 476.848 571.824 481.874 565.362C489.772 554.592 488.336 551.002 469.668 531.616C433.409 494.28 410.792 459.457 405.048 432.532C402.176 419.249 402.535 416.018 406.484 416.018C409.356 416.018 411.51 417.813 411.51 419.967C411.51 422.121 415.459 428.583 420.485 434.686C425.511 440.43 429.46 448.328 429.46 452.277C429.46 455.867 430.896 459.098 432.691 459.098C434.845 459.098 440.948 463.406 446.333 468.432C466.437 487.1 474.335 488.895 517.415 486.382C547.212 484.587 559.059 482.433 565.88 477.407C570.906 473.817 579.522 468.432 585.625 465.56C598.908 458.38 616.14 442.943 616.14 437.558C616.14 435.404 620.089 431.814 625.115 429.66C630.141 427.506 634.09 423.916 634.09 421.762C634.09 419.608 638.039 409.915 643.065 400.222C648.091 390.529 652.04 377.964 652.04 372.22C652.04 366.835 653.476 359.296 655.271 355.706C660.656 344.577 666.4 324.114 666.4 314.421C666.4 300.42 673.58 298.625 674.298 312.626Z"
            fill="#0A0909"
            whileHover={{
              filter: ["drop-shadow(1px 3px 6px rgba(100,100,100,0.5))"],
            }}
            initial={{ filter: "drop-shadow(0 0 0 transparent)" }}
          />
          <motion.path
            d="M531.057 346.731C534.288 351.757 528.903 357.86 519.569 358.937C507.722 360.732 505.209 369.348 516.697 369.348C523.159 369.348 526.749 372.22 529.98 380.118C534.647 391.247 535.365 391.606 553.315 392.324C560.136 392.683 564.444 394.837 565.162 398.427C565.88 403.094 560.136 404.53 527.467 406.684C506.286 407.761 481.515 410.992 472.54 413.864C463.565 416.377 454.231 417.813 451.718 417.095C444.538 414.582 446.692 402.376 455.308 397.709C472.899 388.734 485.464 366.117 476.13 360.373C473.976 359.296 472.54 354.988 472.54 350.68C472.54 344.577 473.976 343.859 480.438 346.013C490.49 349.244 495.157 348.885 514.184 346.013C522.441 344.577 529.98 344.936 531.057 346.731Z"
            fill="#0A0909"
            whileHover={{
              filter: ["drop-shadow(1px 3px 6px rgba(100,100,100,0.5))"],
            }}
            initial={{ filter: "drop-shadow(0 0 0 transparent)" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
