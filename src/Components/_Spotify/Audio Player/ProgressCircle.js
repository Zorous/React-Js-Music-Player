import React from 'react'
import '../css/ProgressCircle.css'

const Disc = ({color,percentage,size,strokeWidth})=>{
    const radius = size/2 - 10;
    const dis = ((2*Math.PI * radius) - 20)
    const strokeperc = ((100 - Math.round(percentage)) * dis) /100;

    return(
        <circle
        r={radius}
        cx="50%"
        cy="50%"
        fill='transparent'
        stroke = {strokeperc !== dis?color:"" }
        strokeWidth={strokeWidth}
        strokeDasharray={dis}
        strokeDashoffset={percentage ? strokeperc : 0}
        strokeLinecap="round"
        >
        </circle>
    )
}
function ProgressCircle({
    percentage, isPlaying, image, size, color
}) {
    return (
        <div className='progress-circle'>
        <svg width={size} height={size}>
        <g>
        <Disc strokeWidth={"0.4rem"} color="#fff" size={size}/>
        <Disc strokeWidth={"0.6rem"} 
        color={color}
        percentage={percentage}
        size={size}
        />
        </g>
        <defs>
        <clipPath id='myCircle'>
        <circle cx='50%' cy='50%' r={size / 2 - 30} fill="#fff" />
        </clipPath>

        <clipPath id='myInnerCircle'>
        <circle cx='50%' cy='50%' r={size / 2 - 100} fill="#fff" />
        </clipPath>
        </defs>

        <image 
        className={isPlaying ? "active":""}
        x={30}
        y={30}
        width={2 * (size / 2 - 30)}
        height={2 * (size / 2 - 30)}
        href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
        clipPath="url(#myCircle)"
         />
        <image 
        className={isPlaying ? "active":""}
        x={100}
        y={100}
        width={2 * (size / 2 - 100)}
        height={2 * (size / 2 - 100)}
        href={image}
        clipPath="url(#myInnerCircle)"
         />

        </svg>
        </div>
    )
}

export default ProgressCircle