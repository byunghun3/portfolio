import React from "react";

type Props = {}

export const BackToTop = (props: Props) => {
    const handleScroll = () => {
        window.scrollBy(0, -window.innerHeight);
        // window.scrollBy({
        //     top: 200,
        //     left: 0,
        //     behavior: "smooth"
        // });
    };
    return (
        <div><button onClick={handleScroll}>top</button></div>
    );
};