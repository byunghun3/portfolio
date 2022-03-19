import React, { FC } from "react";

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const BackToTop: FC<Props> = ({ onClick }) => {
    const handleScroll = () => {
        window.scrollBy(0, -window.innerHeight);
        // window.scrollBy({
        //     top: 200,
        //     left: 0,
        //     behavior: "smooth"
        // });
    };
    return (
        <div><button onClick={onClick}>top</button></div>
    );
};