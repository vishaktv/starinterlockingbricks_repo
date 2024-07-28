interface DualWeightTextProps {
    primaryText: string,
    secondaryText: string
}


const DualWeightText = (props: DualWeightTextProps) => {
    return (
        <div>
            <h1 className="font-nuehassMedium font-black text-5xl md:text-6xl">{props.primaryText}<span className="font-nuehassLight font-extralight">{props.secondaryText}</span></h1>
        </div>




    )
}

export default DualWeightText