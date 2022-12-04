import React from 'react'


const Disc = ({color,percentage,size,strokeWidth})=>{
    const radius = size/2 - 10;
    const dis = ((2*Math.PI * radius) - 20)
    const strokeperc = (100 - Math.round(percentage) * dis) /100;

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
        </svg>
        </div>
    )
}

export default ProgressCircle