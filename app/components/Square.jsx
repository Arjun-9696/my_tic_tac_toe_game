const Square = (props) => {
    const style = `${props.className} w-[100px] h-[100px] flex items-center justify-center text-[64px] text-center text-[#1CDBF5] font-extrabold p-[10px]`;

    return (
        <span className={style} onClick={props.onClick}>
            {props.state}
        </span>
    );
};

export default Square;
