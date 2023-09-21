import React from 'react';
import Star from './Star';

export default function Stars({starsCount}: {starsCount: number}) {
   if (starsCount > 5 || starsCount < 1 || !Number(starsCount)) {
    return;
   }

   const stars = new Array(starsCount).fill(undefined).map(() => <li key={Math.floor(Math.random() * 100)}><Star/></li>);

   console.log(stars)
   return (
    <ul className="card-body-stars u-clearfix">
        {stars}
    </ul>
   )

}

Stars.defaultProps = {
    starsCount: 0,
}