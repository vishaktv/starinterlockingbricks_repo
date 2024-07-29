interface DualWeightTextProps {
    primaryText: string,
    secondaryText: string
}


const DualWeightText = (props: DualWeightTextProps) => {
    return (
        <div>
            <h1 className="font-nuehassMedium font-black text-6xl md:text-8xl tracking-[-0.05rem]">{props.primaryText}<span className="font-nuehassLight font-extralight">{props.secondaryText}</span></h1>
        </div>




    )
}

export default DualWeightText